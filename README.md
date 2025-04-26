# @braveforge/eslint-config

ESLint config for Brave Forge

## Installation

```shell
npm i @braveforge/eslint-config -D
```

## Rules

- [all](src/configs/all.ts)
- [typescript](src/configs/typescript.ts)
- [unicorn](src/configs/unicorn.ts)
- [import-x](src/configs/import-x.ts)
- [package-json](src/configs/package-json.ts)
- [stylistic](src/configs/stylistic.ts)
- [perfectionist](src/configs/perfectionist.ts)

## Perfectionist `partitionByComment`

```ts
// ---
// --- description...
```

Applicable to:

- [sort-imports](https://perfectionist.dev/rules/sort-imports#partitionbycomment)
- [sort-exports](https://perfectionist.dev/rules/sort-exports#partitionbycomment)
- [sort-interfaces](https://perfectionist.dev/rules/sort-interfaces#partitionbycomment)
- [sort-object-types](https://perfectionist.dev/rules/sort-object-types#partitionbycomment)
- [sort-objects](https://perfectionist.dev/rules/sort-objects#partitionbycomment)
- [sort-classes](https://perfectionist.dev/rules/sort-classes#partitionbycomment)

```ts
const user = {
  // ---
  firstName: 'John',
  lastName: 'Doe',
  
  // ---
  age: 30,
  birthDate: '1990-01-01',
  
  // ---
  email: 'john.doe@example.com',
  phone: '555-555-5555'
};
```