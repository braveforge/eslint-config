import type { Linter } from 'eslint';
import perfectionist from 'eslint-plugin-perfectionist';
import { partitionByComment } from './perfectionist-partition-comment';

const sortObjectTypesOptions = {
  partitionByComment,
  groups: [
    'required-property',
    'required-multiline-property',
    'required-method',
    'required-multiline-method',
    'optional-property',
    'optional-multiline-property',
    'optional-method',
    'optional-multiline-method',
    'required-index-signature',
    'optional-index-signature',
    'unknown',
  ],
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
      'perfectionist/sort-decorators': ['error'],
      'perfectionist/sort-enums': ['error'],
      'perfectionist/sort-heritage-clauses': ['error'],
      'perfectionist/sort-interfaces': ['error', sortObjectTypesOptions],
      'perfectionist/sort-intersection-types': ['error', sortCompoundTypesOptions],
      // 'perfectionist/sort-jsx-props': ['error'], // Using `@stylistic/jsx-sort-props`
      'perfectionist/sort-maps': ['error'],
      'perfectionist/sort-object-types': ['error', sortObjectTypesOptions],
      'perfectionist/sort-sets': ['error'],
      'perfectionist/sort-switch-case': ['error'],
      'perfectionist/sort-union-types': ['error', sortCompoundTypesOptions],
      'perfectionist/sort-classes': [
        'error',
        {
          partitionByComment,
        },
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          groupKind: 'values-first',
          partitionByComment,
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          internalPattern: ['^#', '^[~@]+/'],
          newlinesBetween: 'ignore',
          partitionByComment,
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
            'unknown', // `import foo = bar`
          ],
        },
      ],
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
      'perfectionist/sort-objects': [
        'error',
        {
          partitionByComment,
          groups: [
            'property',
            'multiline-property',
            'method',
            'multiline-method',
          ],
        },
      ],
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
