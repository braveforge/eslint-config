import eslint from '@eslint/js';
import { type ConfigArray } from 'typescript-eslint';
import { importXConfigs } from './import-x.js';
import { packageJsonConfigs } from './package-json.js';
import { perfectionistConfigs } from './perfectionist.js';
import { stylisticConfigs } from './stylistic.js';
import { typescriptConfigs } from './typescript.js';
import { unicornConfigs } from './unicorn.js';
import { unusedImportsConfigs } from './unused-imports.js';

export const allConfigs: ConfigArray = [
  eslint.configs.recommended,
  ...typescriptConfigs,
  ...unicornConfigs,
  ...packageJsonConfigs,
  ...stylisticConfigs,
  ...perfectionistConfigs,
  ...unusedImportsConfigs,
  ...importXConfigs,
];
