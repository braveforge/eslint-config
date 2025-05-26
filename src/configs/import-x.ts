import importX from 'eslint-plugin-import-x';
import type { ESLintRules } from 'eslint/rules';
import type { ConfigArray } from 'typescript-eslint';
import type { ImportXRules } from '../../rule-schemas/import-x';

const conflictRules: Partial<ESLintRules> = {
  'no-duplicate-imports': 'off',
};

const rules: Partial<ImportXRules> = {
  'import-x/export': 'error',
  'import-x/first': 'error',
  'import-x/no-duplicates': 'error',
  'import-x/no-empty-named-blocks': 'error',
  'import-x/no-mutable-exports': 'error',
};

export const importXConfigs: ConfigArray = [
  {
    plugins: {
      'import-x': importX,
    },
    rules: {
      ...conflictRules,
      ...rules,
    },
  },
];
