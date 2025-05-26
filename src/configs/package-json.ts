import packageJson from 'eslint-plugin-package-json';
import type { ConfigArray } from 'typescript-eslint';
import type { PackageJsonRules } from '../../rule-schemas/package-json';

const { recommended } = packageJson.configs;

const rules: Partial<PackageJsonRules> = {
  ...recommended.rules,
  'package-json/no-redundant-files': 'error',
  'package-json/require-author': 'error',
  'package-json/restrict-dependency-ranges': [
    'error',
    [
      {
        forVersions: '<1',
        rangeType: 'pin',
      },
    ],
  ],
};

export const packageJsonConfigs: ConfigArray = [
  {
    ...recommended,
    rules,
  },
];
