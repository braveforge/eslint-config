import stylistic, { type UnprefixedRuleOptions } from '@stylistic/eslint-plugin';
import switchCase from 'eslint-plugin-switch-case';
import type { ConfigArray } from 'typescript-eslint';

type BlankLineRule = UnprefixedRuleOptions['padding-line-between-statements'][0];
type StatementType = BlankLineRule['next'];

// 相同的语句在单行的情况下不允许空行
// 但是要在不同语句之间强制空行的语句
const groupStatements = [
  'cjs-export',
  'const',
  'export',
  'exports',
  'import',
  'let',
  'type',
  'var',
] satisfies StatementType;

// 永远强制空行的语句
const alwaysStatements = [
  'block-like', // if, switch, for, do, while, with, try, function, class, block...
  'debugger',
  'directive',
  'enum',
  'interface',
  'multiline-const',
  'multiline-export',
  'multiline-expression',
  'multiline-let',
  'multiline-var',
  'return',
  'throw',
] satisfies StatementType;

const blankLineRules: BlankLineRule[] = [
  // 强制不同语句组之间空行
  {
    blankLine: 'always',
    next: groupStatements,
    prev: '*',
  },
  {
    blankLine: 'always',
    next: '*',
    prev: groupStatements,
  },

  // 相同单行语句之间不允许空行（多行语句会被覆盖强制空行）
  // 忽略 `import`：使用 `perfectionist/sort-import` 规则验证
  // 忽略 `export`：相邻的 export 可能是不同的语句（const/type/interface/class/function），允许手动换行
  // 忽略 `type`：因为目前还没有规则区分 type 类型声明的单行和多行，允许手动空行
  ...groupStatements.map(
    (statement): BlankLineRule => ({
      blankLine: ['export', 'import', 'type'].includes(statement) ? 'any' : 'never',
      next: statement,
      prev: statement,
    }),
  ),

  // 强制空行（覆盖：在一组语句中的多行语句强制前后空行）
  {
    blankLine: 'always',
    next: alwaysStatements,
    prev: '*',
  },
  {
    blankLine: 'always',
    next: '*',
    prev: alwaysStatements,
  },

  // 忽略 case 块之间的空行 (覆盖 `block-like`)
  // 使用 `eslint-plugin-switch-case` 规则验证
  {
    blankLine: 'any',
    next: ['case', 'default'],
    prev: 'case',
  },
];

export const stylisticSpacingBetweenConfigs: ConfigArray = [
  {
    plugins: {
      stylistic,
      'stylistic-enhanced': stylistic,
    },
    rules: {
      // 叠加: Class 多行属性成员之间强制空行
      'stylistic-enhanced/lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterOverload: true,
          exceptAfterSingleLine: true,
        },
      ],
      // Class 方法成员之间强制空行
      'stylistic/lines-between-class-members': [
        'error',
        {
          enforce: [
            {
              blankLine: 'always',
              next: 'method',
              prev: '*',
            },
            {
              blankLine: 'always',
              next: '*',
              prev: 'method',
            },
          ],
        },
      ],
      'stylistic/padding-line-between-statements': ['error', ...blankLineRules],
    },
  },
  {
    plugins: {
      'switch-case': switchCase,
    },
    rules: {
      'switch-case/newline-between-switch-case': [
        'error',
        'always',
        {
          fallthrough: 'never',
        },
      ],
    },
  },
];
