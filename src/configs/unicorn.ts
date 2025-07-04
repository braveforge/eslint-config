import unicorn from 'eslint-plugin-unicorn';
import type { ConfigArray } from 'typescript-eslint';
import type { UnicornRules } from '../../rule-schemas/unicorn';

const rules: Partial<UnicornRules> = {
  'unicorn/catch-error-name': 'error',
  'unicorn/consistent-assert': 'error',
  'unicorn/consistent-date-clone': 'error',
  'unicorn/consistent-empty-array-spread': 'error',
  'unicorn/consistent-existence-index-check': 'error',
  'unicorn/custom-error-definition': 'error',
  'unicorn/empty-brace-spaces': 'error',
  'unicorn/error-message': 'error',
  'unicorn/escape-case': 'error',
  'unicorn/explicit-length-check': 'error',
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
    },
  ],
  'unicorn/new-for-builtins': 'error',
  'unicorn/no-abusive-eslint-disable': 'error',
  'unicorn/no-accessor-recursion': 'error',
  'unicorn/no-anonymous-default-export': 'error',
  'unicorn/no-array-callback-reference': 'error',
  'unicorn/no-array-for-each': 'error',
  'unicorn/no-array-method-this-argument': 'error',
  'unicorn/no-array-push-push': 'error',
  'unicorn/no-array-reduce': 'error',
  'unicorn/no-await-expression-member': 'error',
  'unicorn/no-await-in-promise-methods': 'error',
  'unicorn/no-console-spaces': 'error',
  'unicorn/no-document-cookie': 'error',
  'unicorn/no-empty-file': 'error',
  'unicorn/no-for-loop': 'error',
  'unicorn/no-hex-escape': 'error',
  'unicorn/no-instanceof-builtins': 'error',
  'unicorn/no-invalid-fetch-options': 'error',
  'unicorn/no-invalid-remove-event-listener': 'error',
  'unicorn/no-lonely-if': 'error',
  'unicorn/no-named-default': 'error',
  'unicorn/no-negated-condition': 'error',
  'unicorn/no-negation-in-equality-check': 'error',
  'unicorn/no-new-array': 'error',
  'unicorn/no-new-buffer': 'error',
  'unicorn/no-object-as-default-parameter': 'error',
  'unicorn/no-process-exit': 'error',
  'unicorn/no-single-promise-in-promise-methods': 'error',
  'unicorn/no-static-only-class': 'error',
  'unicorn/no-thenable': 'error',
  'unicorn/no-this-assignment': 'error',
  'unicorn/no-typeof-undefined': 'error',
  'unicorn/no-unnecessary-await': 'error',
  'unicorn/no-unreadable-array-destructuring': 'error',
  'unicorn/no-unreadable-iife': 'error',
  'unicorn/no-unused-properties': 'error',
  'unicorn/no-useless-fallback-in-spread': 'error',
  'unicorn/no-useless-length-check': 'error',
  'unicorn/no-useless-promise-resolve-reject': 'error',
  'unicorn/no-useless-spread': 'error',
  'unicorn/no-useless-switch-case': 'error',
  'unicorn/no-useless-undefined': 'error',
  'unicorn/no-zero-fractions': 'error',
  'unicorn/number-literal-case': 'error',
  'unicorn/prefer-add-event-listener': 'error',
  'unicorn/prefer-array-find': 'error',
  'unicorn/prefer-array-flat': 'error',
  'unicorn/prefer-array-flat-map': 'error',
  'unicorn/prefer-array-index-of': 'error',
  'unicorn/prefer-array-some': 'error',
  'unicorn/prefer-at': 'error', // string and array
  'unicorn/prefer-code-point': 'error',
  'unicorn/prefer-date-now': 'error',
  'unicorn/prefer-default-parameters': 'error',
  'unicorn/prefer-dom-node-append': 'error',
  'unicorn/prefer-dom-node-dataset': 'error',
  'unicorn/prefer-dom-node-remove': 'error',
  'unicorn/prefer-dom-node-text-content': 'error',
  'unicorn/prefer-event-target': 'error',
  'unicorn/prefer-export-from': 'error',
  'unicorn/prefer-includes': 'error',
  'unicorn/prefer-keyboard-event-key': 'error',
  'unicorn/prefer-logical-operator-over-ternary': 'error',
  'unicorn/prefer-math-min-max': 'error',
  'unicorn/prefer-math-trunc': 'error',
  'unicorn/prefer-modern-dom-apis': 'error',
  'unicorn/prefer-modern-math-apis': 'error',
  'unicorn/prefer-native-coercion-functions': 'error',
  'unicorn/prefer-negative-index': 'error',
  'unicorn/prefer-node-protocol': 'error',
  'unicorn/prefer-number-properties': 'error',
  'unicorn/prefer-prototype-methods': 'error',
  'unicorn/prefer-query-selector': 'error',
  'unicorn/prefer-regexp-test': 'error',
  'unicorn/prefer-string-raw': 'error',
  'unicorn/prefer-string-slice': 'error',
  'unicorn/prefer-string-starts-ends-with': 'error',
  'unicorn/prefer-string-trim-start-end': 'error',
  'unicorn/prefer-switch': 'error',
  'unicorn/prefer-ternary': 'error',
  'unicorn/require-array-join-separator': 'error',
  'unicorn/require-number-to-fixed-digits-argument': 'error',
  'unicorn/switch-case-braces': 'error',
  'unicorn/template-indent': [
    'error',
    {
      selectors: ['TemplateLiteral'],
    },
  ],
  'unicorn/text-encoding-identifier-case': 'error',
  'unicorn/throw-new-error': 'error',
};

export const unicornConfigs: ConfigArray = [
  {
    plugins: {
      unicorn,
    },
    rules,
  },
];
