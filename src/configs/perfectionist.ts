import perfectionist from 'eslint-plugin-perfectionist';

import type { Linter } from 'eslint';

const partitionByComment = {
  line: String.raw`^---(\s|$)`,
};

const sortObjectTypesOptions = {
  groups: [
    'required-property',
    'required-method',
    'optional-property',
    'optional-method',
    'required-index-signature',
    'optional-index-signature',
    'unknown',
  ],
  partitionByComment,
};

const sortCompoundTypesOptions = {
  groups: [
    'nullish',
    'literal',
    'keyword',
    'named',
    'import',
    'operator',
    'tuple',
    'object',
    'function',
    'intersection',
    'union',
    'conditional',
    'unknown',
  ],
};

export const perfectionistConfigs: Linter.Config[] = [
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-array-includes': ['error'],
      'perfectionist/sort-classes': [
        'error',
        {
          partitionByComment,
        },
      ],
      'perfectionist/sort-decorators': ['error'],
      'perfectionist/sort-enums': ['error'],
      'perfectionist/sort-exports': [
        'error',
        {
          groupKind: 'values-first',
          partitionByComment,
        },
      ],
      'perfectionist/sort-heritage-clauses': ['error'],
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'side-effect-style',
            'style',
            { newlinesBetween: 'always' },
            'side-effect',
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            { newlinesBetween: 'always' },
            'builtin-type',
            'external-type',
            'internal-type',
            'parent-type',
            'sibling-type',
            'index-type',
            { newlinesBetween: 'always' },
            'unknown', // `import foo = bar`
            // 'object',
          ],
          internalPattern: ['^#', '^[~@]+/'],
          newlinesBetween: 'ignore',
          partitionByComment,
        },
      ],
      'perfectionist/sort-interfaces': ['error', sortObjectTypesOptions],
      'perfectionist/sort-intersection-types': ['error', sortCompoundTypesOptions],
      // 'perfectionist/sort-jsx-props': ['error'], // Using `@stylistic/jsx-sort-props`
      'perfectionist/sort-maps': ['error'],
      'perfectionist/sort-modules': [
        'error',
        {
          groups: [
            'declare-enum',
            'enum',
            'export-enum',
            'declare-interface',
            'interface',
            'export-interface',
            'declare-type',
            'type',
            'export-type',
            'declare-class',
            'class',
            'export-class',
            'export-default-class',
            'declare-function',
            'function',
            'export-function',
            'export-default-function',
            'unknown',
          ],
        },
      ],
      'perfectionist/sort-named-exports': [
        'error',
        {
          groupKind: 'values-first',
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          groupKind: 'values-first',
        },
      ],
      'perfectionist/sort-object-types': ['error', sortObjectTypesOptions],
      'perfectionist/sort-objects': [
        'error',
        {
          groups: [
            'property',
            'method',
          ],
          partitionByComment,
        },
      ],
      'perfectionist/sort-sets': ['error'],
      'perfectionist/sort-switch-case': ['error'],
      'perfectionist/sort-union-types': ['error', sortCompoundTypesOptions],
      // 'perfectionist/sort-variable-declarations': ['error'],
    },
    settings: {
      perfectionist: {
        order: 'asc',
        type: 'natural',
      },
    },
  },
];
