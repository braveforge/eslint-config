import type { ESLintRules } from 'eslint/rules';
import tseslint, { type ConfigArray } from 'typescript-eslint';
import type { TypescriptRules } from '../../rule-schemas/typescript';
import { tsGlobs } from '../globs';

const conflictRules: Partial<ESLintRules> = {
  'class-methods-use-this': 'off',
  'default-param-last': 'off',
  'max-params': 'off',
  'no-array-constructor': 'off',
  'no-empty-function': 'off',
  'no-redeclare': 'off',
  'no-undef': 'off',
  'no-unused-expressions': 'off',
  'no-unused-vars': 'off',
  'no-useless-constructor': 'off',
};

const rules: Partial<TypescriptRules> = {
  'typescript/adjacent-overload-signatures': 'error',
  'typescript/array-type': [
    'error',
    {
      default: 'array-simple',
      readonly: 'array-simple',
    },
  ],
  'typescript/ban-ts-comment': 'error',
  'typescript/ban-tslint-comment': 'error',
  'typescript/class-literal-property-style': 'error',
  'typescript/class-methods-use-this': 'error',
  'typescript/consistent-generic-constructors': 'error',
  'typescript/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
    },
  ],
  'typescript/consistent-type-definitions': ['error', 'interface'],
  'typescript/consistent-type-imports': [
    'error',
    {
      fixStyle: 'inline-type-imports',
    },
  ],
  'typescript/default-param-last': 'error',
  'typescript/max-params': 'error',
  'typescript/method-signature-style': 'error',
  'typescript/no-array-constructor': 'error',
  'typescript/no-confusing-non-null-assertion': 'error',
  'typescript/no-duplicate-enum-values': 'error',
  'typescript/no-dynamic-delete': 'error',
  'typescript/no-empty-function': 'error',
  'typescript/no-explicit-any': 'error',
  'typescript/no-extra-non-null-assertion': 'error',
  'typescript/no-extraneous-class': 'error',
  'typescript/no-import-type-side-effects': 'error',
  'typescript/no-inferrable-types': 'error',
  'typescript/no-invalid-void-type': 'error',
  'typescript/no-misused-new': 'error',
  'typescript/no-namespace': [
    'error',
    {
      allowDeclarations: true,
      allowDefinitionFiles: true,
    },
  ],
  'typescript/no-non-null-asserted-nullish-coalescing': 'error',
  'typescript/no-non-null-asserted-optional-chain': 'error',
  'typescript/no-require-imports': 'error',
  'typescript/no-this-alias': 'error',
  'typescript/no-unnecessary-parameter-property-assignment': 'error',
  'typescript/no-unnecessary-type-constraint': 'error',
  'typescript/no-unsafe-declaration-merging': 'error',
  'typescript/no-unsafe-function-type': 'error',
  'typescript/no-unused-expressions': 'error',
  'typescript/no-unused-vars': 'error',
  'typescript/no-useless-constructor': 'error',
  'typescript/no-wrapper-object-types': 'error',
  'typescript/prefer-as-const': 'error',
  'typescript/prefer-for-of': 'error',
  'typescript/prefer-function-type': 'error',
  'typescript/prefer-literal-enum-member': 'error',
  'typescript/prefer-namespace-keyword': 'error',
  'typescript/triple-slash-reference': 'error',
  'typescript/unified-signatures': [
    'error',
    {
      ignoreDifferentlyNamedParameters: true,
      ignoreOverloadsWithDifferentJSDoc: true,
    },
  ],
};

export const typescriptConfigs: ConfigArray = [
  {
    files: tsGlobs,
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
    },
    plugins: {
      typescript: tseslint.plugin,
    },
    rules: {
      ...conflictRules,
      ...rules,
    },
  },
];
