import importX from 'eslint-plugin-import-x';

import type { ConfigArray } from 'typescript-eslint';

export const importXConfigs: ConfigArray = [
  {
    plugins: {
      'import-x': importX,
    },
    rules: {
      'import-x/export': ['error'],
      'import-x/first': ['error'],
      'import-x/no-duplicates': ['error'],
      'import-x/no-empty-named-blocks': ['error'],
      'import-x/no-mutable-exports': ['error'],
    },
  },
];
