import unusedImports from 'eslint-plugin-unused-imports';
import type { Linter } from 'eslint';

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
