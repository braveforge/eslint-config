import eslint from '@eslint/js';
import { importXConfigs } from './import-x.js';
import { packageJsonConfigs } from './package-json.js';
import { perfectionistConfigs } from './perfectionist.js';
import { stylisticConfigs } from './stylistic.js';
import { typescriptConfigs } from './typescript.js';
import { unicornConfigs } from './unicorn.js';

import type { ConfigArray } from 'typescript-eslint';

export const allConfigs: ConfigArray = [
  eslint.configs.recommended,
  ...typescriptConfigs,
  ...unicornConfigs,
  ...importXConfigs,
  ...packageJsonConfigs,
  ...stylisticConfigs,
  ...perfectionistConfigs,
];
