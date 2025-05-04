import type { Linter } from 'eslint';
import packageJson from 'eslint-plugin-package-json';

export const packageJsonConfigs: Linter.Config[] = [
  packageJson.configs.recommended,
  {
    plugins: {
      // @ts-expect-error ignore
      'package-json': packageJson,
    },
    rules: {
      'package-json/no-redundant-files': ['error'],
      'package-json/restrict-dependency-ranges': [
        'error',
        [
          {
            forVersions: '<1',
            rangeType: 'pin',
          },
        ],
      ],
    },
  },
];
