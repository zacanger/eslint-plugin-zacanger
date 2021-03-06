const prettierFormat = require('./prettier')
const prettierTsFormat = require('./prettier-ts')

const { nodeRules } = require('./node')
const { a11yRules, reactRules } = require('./react')
const { baseRules } = require('./recommended')
const { jestRules } = require('./jest')
const { typescriptRules } = require('./typescript')

const prettierRules = {
  'prettier/prettier': [2, prettierFormat],
}
const prettierTsRules = {
  'prettier/prettier': [2, prettierTsFormat],
}

const defaultParserOptions = {
  ecmaVersion: 2021,
  sourceType: 'module',
}

const defaultPlugins = ['babel', 'unicorn', 'promise', 'import', 'fp']

const plugin = {
  configs: {
    recommended: {
      plugins: defaultPlugins,
      extends: ['plugin:import/warnings', 'plugin:fp/recommended'],
      rules: baseRules,
    },
    react: {
      parserOptions: Object.assign({}, defaultParserOptions, {
        ecmaFeatures: {
          jsx: true,
        },
      }),
      env: {
        browser: true,
      },
      plugins: ['react', 'jsx-a11y', 'react-hooks'],
      extends: ['plugin:import/warnings'],
      rules: Object.assign({}, reactRules, a11yRules),
    },
    node: {
      env: {
        node: true,
      },
      extends: ['plugin:import/warnings', 'plugin:node/recommended'],
      rules: nodeRules,
    },
    jest: {
      env: {
        jest: true,
      },
      plugins: ['jest'],
      extends: ['plugin:import/warnings'],
      rules: jestRules,
    },
    prettier: {
      plugins: ['prettier'],
      extends: ['plugin:import/warnings'],
      rules: prettierRules,
    },
    'prettier-ts': {
      plugins: ['prettier'],
      extends: ['plugin:import/warnings', 'prettier/@typescript-eslint'],
      rules: prettierTsRules,
    },
    typescript: {
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: typescriptRules,
      parser: '@typescript-eslint/parser',
      parserOptions: { project: './tsconfig.json' },
    },
  },
}

// eslint-disable-next-line fp/no-unused-expression, fp/no-nil
Object.keys(plugin.configs).forEach((k) => {
  const c = plugin.configs[k]
  c.parser = c.parser || 'babel-eslint'
  c.parserOptions = c.parserOptions || defaultParserOptions
  // eslint-disable-next-line fp/no-mutating-assign
  c.env = Object.assign(c.env || {}, { es6: true, commonjs: true })
})

module.exports = plugin
