import globals from 'globals';
import type { ConfigArray } from 'typescript-eslint';
import { importXConfigs } from './configs/import-x';
import { jsConfigs } from './configs/js';
import { packageJsonConfigs } from './configs/package-json';
import { perfectionistConfigs } from './configs/perfectionist';
import { stylisticConfigs } from './configs/stylistic';
import { typescriptConfigs } from './configs/typescript';
import { unicornConfigs } from './configs/unicorn';
import { unusedImportsConfigs } from './configs/unused-imports';
import { allGlobs } from './globs';

interface Flags {
  importX?: boolean;
  packageJson?: boolean;
  perfectionist?: boolean;
  stylistic?: boolean;
  typescript?: boolean;
  unicorn?: boolean;
  unusedImports?: boolean;
}

interface Options {
  extends?: ConfigArray;
  flags?: Flags;

  /**
   * Global identifiers
   * @default ['browser', 'node']
   */
  globals?: GlobalNames;
}

type GlobalNames = Array<keyof typeof globals>;

const defaultGlobals: GlobalNames = ['browser', 'node'];

const defaultFlags: Flags = {
  importX: true,
  packageJson: true,
  perfectionist: true,
  stylistic: true,
  typescript: true,
  unicorn: true,
  unusedImports: true,
};

const flagsMap: Record<keyof Flags, ConfigArray> = {
  importX: importXConfigs,
  packageJson: packageJsonConfigs,
  perfectionist: perfectionistConfigs,
  stylistic: stylisticConfigs,
  typescript: typescriptConfigs,
  unicorn: unicornConfigs,
  unusedImports: unusedImportsConfigs,
};

function createBase (options?: Options): ConfigArray {
  const _globals = {};

  for (const name of options?.globals || defaultGlobals) {
    Object.assign(_globals, globals[name]);
  }

  return [
    {
      files: allGlobs,
      languageOptions: {
        globals: _globals,
        sourceType: 'module',
      },
    },
    ...jsConfigs,
  ];
}

export function defineConfig (options?: Options): ConfigArray {
  const configs: ConfigArray[] = [createBase(options)];

  const flags: Flags = {
    ...defaultFlags,
    ...options?.flags,
  };

  for (const [key, value] of Object.entries(flagsMap)) {
    if (flags[key as keyof Flags]) {
      configs.push(value);
    }
  }

  configs.push(options?.extends || []);

  return configs.flat();
}
