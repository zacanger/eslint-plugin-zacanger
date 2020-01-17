# eslint-plugin-zacanger

zacanger's ESLint plugin and configurations.

[![npm version](https://img.shields.io/npm/v/eslint-plugin-zacanger.svg)](https://npm.im/eslint-plugin-zacanger) [![CircleCI](https://circleci.com/gh/zacanger/eslint-plugin-zacanger.svg?style=svg)](https://circleci.com/gh/zacanger/eslint-plugin-zacanger) [![Maintainability](https://api.codeclimate.com/v1/badges/33e6dcb7e992c8d799e6/maintainability)](https://codeclimate.com/github/zacanger/eslint-plugin-zacanger/maintainability)

--------

## Installation

`npm i -D eslint eslint-plugin-zacanger`

## Usage

.eslintrc.json:
```json
{
  "root": true,
  "extends": [
    "plugin:zacanger/recommended",
    "plugin:zacanger/react",
    "plugin:zacanger/node",
    "plugin:zacanger/typescript",
    "plugin:zacanger/prettier-ts",
    "plugin:zacanger/prettier",
    "plugin:zacanger/jest"
  ],
  "plugins": [
    "zacanger"
  ]
}
```

You can extend any or all of the exported configurations.
If you are using the typescript plugin, some of the rules require this to be
added to the .eslintrc file
```json
"parser": "@typescript-eslint/parser",
"parserOptions": {
  "project": "./tsconfig.json"
},
```

You can also use or extend the Prettier config:

.prettierrc.js:
```javascript
module.exports = require('eslint-plugin-zacanger/prettier')
// OR for TS files
module.exports = require('eslint-plugin-zacanger/prettier-ts')
```

[License](./LICENSE.md)
