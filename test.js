const assert = require('assert')
const { CLIEngine } = require('eslint')

const c = new CLIEngine({ useEslintrc: true })

// eslint-disable-next-line fp/no-unused-expression
assert.ok(c.executeOnText('const foo = 2\n'), 'not ok')
