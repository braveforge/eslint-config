import stylistic, { type UnprefixedRuleOptions } from '@stylistic/eslint-plugin';
import type { Linter } from 'eslint';
import switchCase from 'eslint-plugin-switch-case';

type BlankLineRule = UnprefixedRuleOptions['padding-line-between-statements'][0];
type StatementType = BlankLineRule['next'];

const exportStatements: StatementType = ['export', 'cjs-export', 'exports'];

const statements: StatementType = [
  ...exportStatements,
  'enum',
  'type',
  'interface',
  'directive',
  'import',
  'debugger',
  'throw',
  'block-like',
  'multiline-var',
  'multiline-let',
  'multiline-const',
  'multiline-export',
  'multiline-expression',
];

const blankLineRules: BlankLineRule[] = [
  {
    blankLine: 'always',
    next: statements,
    prev: '*',
  },
  {
    blankLine: 'always',
    next: '*',
    prev: statements,
  },
  // Ignore spacing between `type`
  {
    blankLine: 'any',
    next: 'type',
    prev: 'type',
  },
  {
    // Ignore spacing between `case-block`
    // Using `eslint-plugin-switch-case`
    blankLine: 'any',
    next: ['case', 'default'],
    prev: 'case',
  },
  {
    // Ignore spacing between `imports`
    // Using `perfectionist/sort-imports`
    blankLine: 'any',
    next: 'import',
    prev: 'import',
  },
  {
    // Ignore spacing between `exports`
    blankLine: 'any',
    next: exportStatements,
    prev: exportStatements,
  },
  {
    // Always spacing between `multiline-exports`
    // The `multiline-expression` here matches commonjs's `exports` and `module.exports`
    blankLine: 'always',
    next: ['multiline-export', 'multiline-expression'],
    prev: exportStatements,
  },
];

export const stylisticSpacingBetweenConfigs: Linter.Config[] = [
  {
    plugins: {
      '@stylistic': stylistic,
      '@stylistic-enhanced': stylistic,
    },
    rules: {
      '@stylistic/padding-line-between-statements': ['error', ...blankLineRules],
      '@stylistic/lines-between-class-members': [
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

      // ---
      '@stylistic-enhanced/lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterOverload: true,
          exceptAfterSingleLine: true,
        },
      ],
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
