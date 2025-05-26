import type { Linter } from 'eslint';
import { defineConfig } from './src';

const sort: Linter.RuleEntry = [
  'error',
  {
    type: 'natural',
  },
];

export default defineConfig({
  extends: [
    {
      rules: {
        'perfectionist/sort-interfaces': sort,
        'perfectionist/sort-object-types': sort,
        'perfectionist/sort-objects': sort,
      },
    },
    {
      ignores: ['./rule-schemas'],
    },
  ],
  globals: ['node'],
});
