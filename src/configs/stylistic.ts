import stylistic, { type UnprefixedRuleOptions } from '@stylistic/eslint-plugin';
import { stylisticSpacingBetweenConfigs } from './stylistic-spacing-between.js';

import type { Linter } from 'eslint';

const rules: {[K in keyof UnprefixedRuleOptions]: undefined | UnprefixedRuleOptions[K] } = {
  'array-bracket-newline': [
    {
      multiline: true,
    },
  ],
  'array-bracket-spacing': ['never'],
  'array-element-newline': [
    {
      consistent: true,
      multiline: true,
    },
  ],
  'arrow-parens': ['always'],
  'arrow-spacing': [
    {
      after: true,
      before: true,
    },
  ],
  'block-spacing': ['always'],
  'brace-style': ['stroustrup'],
  'comma-dangle': ['always-multiline'],
  'comma-spacing': [
    {
      after: true,
      before: false,
    },
  ],
  'comma-style': ['last'],
  'computed-property-spacing': ['never'],
  'curly-newline': [
    {
      consistent: true,
      multiline: true,
    },
  ],
  'dot-location': ['property'],
  'eol-last': ['always'],
  'func-call-spacing': undefined,
  'function-call-argument-newline': ['consistent'],
  'function-call-spacing': ['never'],
  'function-paren-newline': ['multiline'],
  'generator-star-spacing': ['after'],
  'implicit-arrow-linebreak': ['beside'],
  indent: [
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: 'first',
    },
  ],
  'indent-binary-ops': [2],
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
  'line-comment-position': undefined,
  'linebreak-style': ['unix'],
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
  'lines-between-class-members': undefined,
  'max-len': undefined,
  'max-statements-per-line': [
    {
      ignoredNodes: [
        'BreakStatement',
        'ContinueStatement',
        'ReturnStatement',
      ],
      max: 1,
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
  'multiline-comment-style': undefined,
  'multiline-ternary': ['always-multiline'],
  'new-parens': ['always'],
  'newline-per-chained-call': undefined,
  'no-confusing-arrow': [],
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
  'no-extra-semi': [],
  'no-floating-decimal': [],
  'no-mixed-operators': [],
  'no-mixed-spaces-and-tabs': [],
  'no-multi-spaces': [],
  'no-multiple-empty-lines': [
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    },
  ],
  'no-tabs': [],
  'no-trailing-spaces': [
    {
      ignoreComments: false,
      skipBlankLines: false,
    },
  ],
  'no-whitespace-before-property': [],
  'nonblock-statement-body-position': ['beside'],
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
  'one-var-declaration-per-line': ['initializations'],
  'operator-linebreak': ['before'],
  'padded-blocks': ['never'],
  'padding-line-between-statements': undefined,
  'quote-props': ['as-needed'],
  quotes: [
    'single',
    {
      allowTemplateLiterals: 'avoidEscape',
      avoidEscape: true,
    },
  ],
  'rest-spread-spacing': ['never'],
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
  'semi-style': ['last'],
  'space-before-blocks': ['always'],
  'space-before-function-paren': ['always'],
  'space-in-parens': ['never'],
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
  'template-curly-spacing': ['always'],
  'template-tag-spacing': ['never'],
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
  'type-generic-spacing': [],
  'type-named-tuple-spacing': [],
  'wrap-iife': ['inside'],
  'wrap-regex': undefined,
  'yield-star-spacing': ['after'],

  // --- jsx
  'jsx-child-element-spacing': undefined,
  'jsx-closing-bracket-location': ['tag-aligned'],
  'jsx-closing-tag-location': ['tag-aligned'],
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
        when: 'always',
      },
      spacing: {
        objectLiterals: 'never',
      },
    },
  ],
  'jsx-equals-spacing': ['never'],
  'jsx-first-prop-new-line': ['multiline'],
  'jsx-function-call-newline': ['multiline'],
  'jsx-indent': undefined,
  'jsx-indent-props': undefined,
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
  'jsx-one-expression-per-line': undefined,
  'jsx-pascal-case': [
    {
      allowAllCaps: true,
      allowLeadingUnderscore: true,
      allowNamespace: true,
    },
  ],
  'jsx-props-no-multi-spaces': [],
  'jsx-quotes': ['prefer-double'],
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
    prefixedRules[`@stylistic/${ key }`] = ['error', ...options];
  }
}

export const stylisticConfigs: Linter.Config[] = [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: prefixedRules,
  },
  ...stylisticSpacingBetweenConfigs,
];
