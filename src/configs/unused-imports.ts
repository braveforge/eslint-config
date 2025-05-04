import type { Linter } from 'eslint';
import unusedImports from 'eslint-plugin-unused-imports';

export const unusedImportsConfigs: Linter.Config[] = [
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': ['error'],
    },
  },
];
