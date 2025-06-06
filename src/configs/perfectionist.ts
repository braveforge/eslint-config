import perfectionist from 'eslint-plugin-perfectionist';
import type { ConfigArray } from 'typescript-eslint';
import type { PerfectionistRules } from '../../rule-schemas/perfectionist';

const unsorted = {
  type: 'unsorted',
};

const valuesFirst = {
  groupKind: 'values-first',
};

const sortObjectTypesOptions = {
  ...unsorted,
  groups: [
    'required-property',
    'required-method',
    'optional-property',
    'optional-method',
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

const rules: Partial<PerfectionistRules> = {
  'perfectionist/sort-array-includes': 'error',
  'perfectionist/sort-classes': [
    'error',
    unsorted,
  ],
  'perfectionist/sort-decorators': 'error',
  'perfectionist/sort-enums': 'error',
  'perfectionist/sort-exports': [
    'error',
    valuesFirst,
  ],
  'perfectionist/sort-heritage-clauses': 'error',
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
        'unknown', // `import foo = bar`
      ],
      internalPattern: ['^#', '^[~@]+/'],
      newlinesBetween: 'never',
    },
  ],
  'perfectionist/sort-interfaces': ['error', sortObjectTypesOptions],
  'perfectionist/sort-intersection-types': ['error', sortCompoundTypesOptions],
  // 'perfectionist/sort-jsx-props': 'off', // Using `@stylistic/jsx-sort-props`
  'perfectionist/sort-maps': 'error',
  'perfectionist/sort-modules': [
    'error',
    {
      ...unsorted,
      groups: [
        'declare-enum',
        'enum',
        'export-enum',
        'declare-interface',
        'interface',
        'export-interface',
        'export-default-interface',
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
    valuesFirst,
  ],
  'perfectionist/sort-named-imports': [
    'error',
    valuesFirst,
  ],
  'perfectionist/sort-object-types': ['error', sortObjectTypesOptions],
  'perfectionist/sort-objects': [
    'error',
    {
      ...unsorted,
      groups: [
        'property',
        'method',
      ],
    },
  ],
  'perfectionist/sort-sets': 'error',
  'perfectionist/sort-switch-case': 'error',
  'perfectionist/sort-union-types': ['error', sortCompoundTypesOptions],
  'perfectionist/sort-variable-declarations': [
    'error',
    {
      groups: [
        'initialized',
        'uninitialized',
      ],
    },
  ],
};

export const perfectionistConfigs: ConfigArray = [
  {
    plugins: {
      perfectionist,
    },
    rules,
    settings: {
      perfectionist: {
        order: 'asc',
        type: 'natural',
      },
    },
  },
];
