import tseslint, { type ConfigArray } from 'typescript-eslint';

export const typescriptConfigs: ConfigArray = [
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': ['warn'],
      '@typescript-eslint/no-namespace': [
        'error',
        {
          allowDeclarations: true,
          allowDefinitionFiles: true,
        },
      ],
      '@typescript-eslint/no-require-imports': ['warn'],
    },
  },
];
