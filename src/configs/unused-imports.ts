import unusedImports from 'eslint-plugin-unused-imports';
import type { ConfigArray } from 'typescript-eslint';

export const unusedImportsConfigs: ConfigArray = [
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': ['error'],
    },
  },
];
