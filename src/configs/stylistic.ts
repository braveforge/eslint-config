import stylistic, { type UnprefixedRuleOptions } from '@stylistic/eslint-plugin';
import type { Linter } from 'eslint';
import { stylisticSpacingBetweenConfigs } from './stylistic-spacing-between.js';

const rules: {[K in keyof UnprefixedRuleOptions]: undefined | UnprefixedRuleOptions[K] } = {
  'array-bracket-spacing': ['never'],
  'arrow-parens': ['always'],
  'block-spacing': ['always'],
  'brace-style': ['stroustrup'],
  'comma-dangle': ['always-multiline'],
  'comma-style': ['last'],
  'computed-property-spacing': ['never'],
  'dot-location': ['property'],
  'eol-last': ['always'],
  'func-call-spacing': undefined,
  'function-call-argument-newline': ['consistent'],
  'function-call-spacing': ['never'],
  'function-paren-newline': ['multiline-arguments'],
  'generator-star-spacing': ['after'],
  'implicit-arrow-linebreak': ['beside'],
  'indent-binary-ops': [2],
  'line-comment-position': undefined,
  'linebreak-style': ['unix'],
  'lines-between-class-members': undefined,
  'max-len': undefined,
  'multiline-comment-style': undefined,
  'multiline-ternary': ['always-multiline'],
  'new-parens': ['always'],
  'newline-per-chained-call': undefined,
  'no-confusing-arrow': [],
  'no-extra-semi': [],
  'no-floating-decimal': [],
  'no-mixed-operators': [],
  'no-mixed-spaces-and-tabs': [],
  'no-multi-spaces': [],
  'no-tabs': [],
  'no-whitespace-before-property': [],
  'nonblock-statement-body-position': ['beside'],
  'one-var-declaration-per-line': ['initializations'],
  'padded-blocks': ['never'],
  'padding-line-between-statements': undefined,
  'quote-props': ['as-needed'],
  'rest-spread-spacing': ['never'],
  'semi-style': ['last'],
  'space-before-blocks': ['always'],
  'space-before-function-paren': ['always'],
  'space-in-parens': ['never'],
  'template-curly-spacing': ['never'],
  'template-tag-spacing': ['never'],
  'type-generic-spacing': [],
  'type-named-tuple-spacing': [],
  'wrap-iife': ['inside'],
  'wrap-regex': undefined,
  'yield-star-spacing': ['after'],
  'array-bracket-newline': [
    {
      multiline: true,
    },
  ],
  'array-element-newline': [
    {
      consistent: true,
      multiline: true,
    },
  ],
  'arrow-spacing': [
    {
      after: true,
      before: true,
    },
  ],
  'comma-spacing': [
    {
      after: true,
      before: false,
    },
  ],
  'curly-newline': [
    {
      consistent: true,
      multiline: true,
    },
  ],
  indent: [
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: 'first',
    },
  ],
  'key-spacing': [
    {
      afterColon: true,
      beforeColon: false,
    },
  ],
  'keyword-spacing': [
    {
      after: true,
      before: true,
    },
  ],
  'lines-around-comment': [
    {
      afterHashbangComment: true,
      allowArrayStart: true,
      allowBlockStart: true,
      allowClassStart: true,
      allowEnumStart: true,
      allowInterfaceStart: true,
      allowModuleStart: true,
      allowObjectStart: true,
      allowTypeStart: true,
      beforeBlockComment: true,
    },
  ],
  'max-statements-per-line': [
    {
      max: 1,
      ignoredNodes: [
        'BreakStatement',
        'ContinueStatement',
        'ReturnStatement',
      ],
    },
  ],
  'member-delimiter-style': [
    {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    },
  ],
  'no-extra-parens': [
    'all',
    {
      allowParensAfterCommentPattern: '@type',
      conditionalAssign: false,
      enforceForArrowConditionals: false,
      enforceForFunctionPrototypeMethods: false,
      enforceForNewInMemberExpressions: false,
      enforceForSequenceExpressions: false,
      ignoreJSX: 'multi-line',
      nestedBinaryExpressions: false,
      nestedConditionalExpressions: false,
      returnAssign: false,
      ternaryOperandBinaryExpressions: false,
    },
  ],
  'no-multiple-empty-lines': [
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    },
  ],
  'no-trailing-spaces': [
    {
      ignoreComments: false,
      skipBlankLines: false,
    },
  ],
  'object-curly-newline': [
    {
      consistent: true,
      multiline: true,
    },
  ],
  'object-curly-spacing': [
    'always',
    {
      arraysInObjects: false,
      objectsInObjects: false,
    },
  ],
  'object-property-newline': [
    {
      allowAllPropertiesOnSameLine: true,
    },
  ],
  'operator-linebreak': [
    // 原则上所有运算符都不允许换行，避免破坏直观结构和意图
    'none',
    {
      overrides: {
        // 对于三元表达式的 `?:`，放在下一行开头（before），以突出并对齐结构
        ':': 'before',
        '?': 'before',

        // ---
        // 对于具有“组合”或“选择”语义的运算符（如 `&&`、`||`、`??`、`+`），放在前一行末尾（after），提示表达式未结束，有助于阅读
        '&&': 'after',
        '??': 'after',
        '||': 'after',

        // ---
        // 本来 `+` 作为算术运算符是不允许换行的，但是作为字符串拼接运算符时，合理的换行能显著提高可读性
        '+': 'after',
      },
    },
  ],
  quotes: [
    'single',
    {
      allowTemplateLiterals: 'avoidEscape',
      avoidEscape: true,
    },
  ],
  semi: [
    'always',
    {
      omitLastInOneLineBlock: true,
      omitLastInOneLineClassBody: true,
    },
  ],
  'semi-spacing': [
    {
      after: true,
      before: false,
    },
  ],
  'space-infix-ops': [
    {
      ignoreTypes: false,
      int32Hint: false,
    },
  ],
  'space-unary-ops': [
    {
      nonwords: false,
      words: true,
    },
  ],
  'spaced-comment': [
    'always',
    {
      block: {
        balanced: true,
      },
      line: {
        exceptions: ['-', '+', '-+'],
      },
    },
  ],
  'switch-colon-spacing': [
    {
      after: true,
      before: false,
    },
  ],
  'type-annotation-spacing': [
    {
      after: true,
      before: true,
      overrides: {
        colon: {
          before: false,
        },
      },
    },
  ],

  // --- jsx
  'jsx-child-element-spacing': undefined,
  'jsx-closing-bracket-location': ['tag-aligned'],
  'jsx-closing-tag-location': ['tag-aligned'],
  'jsx-equals-spacing': ['never'],
  'jsx-first-prop-new-line': ['multiline'],
  'jsx-function-call-newline': ['multiline'],
  'jsx-indent': undefined,
  'jsx-indent-props': undefined,
  'jsx-one-expression-per-line': undefined,
  'jsx-props-no-multi-spaces': [],
  'jsx-quotes': ['prefer-double'],
  'jsx-curly-brace-presence': [
    {
      children: 'never',
      propElementValues: 'always',
      props: 'never',
    },
  ],
  'jsx-curly-newline': [
    {
      multiline: 'require',
      singleline: 'consistent',
    },
  ],
  'jsx-curly-spacing': [
    {
      attributes: {
        when: 'never',
      },
      children: {
        when: 'never',
      },
      spacing: {
        objectLiterals: 'never',
      },
    },
  ],
  'jsx-max-props-per-line': [
    {
      maximum: 1,
      when: 'multiline',
    },
  ],
  'jsx-newline': [
    {
      allowMultilines: true,
      prevent: true,
    },
  ],
  'jsx-pascal-case': [
    {
      allowAllCaps: true,
      allowLeadingUnderscore: true,
      allowNamespace: true,
    },
  ],
  'jsx-self-closing-comp': [
    {
      component: true,
      html: true,
    },
  ],
  'jsx-sort-props': [
    {
      callbacksLast: true,
    // shorthandFirst: true,
    },
  ],

  'jsx-tag-spacing': [
    {
      beforeSelfClosing: 'always',
    },
  ],
  'jsx-wrap-multilines': [
    {
      arrow: 'parens-new-line',
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      propertyValue: 'parens-new-line',
      return: 'parens-new-line',
    },
  ],

};

const prefixedRules: Linter.RulesRecord = {};

for (const key in rules) {
  // @ts-expect-error ignore
  const options = rules[key];

  if (options) {
    prefixedRules[`@stylistic/${key}`] = ['error', ...options];
  }
}

export const stylisticConfigs: Linter.Config[] = [
  {
    rules: prefixedRules,
    plugins: {
      '@stylistic': stylistic,
    },
  },
  ...stylisticSpacingBetweenConfigs,
];
