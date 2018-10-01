const a11yRules = {
  'jsx-a11y/accessible-emoji': 1,
  'jsx-a11y/alt-text': 1,
  'jsx-a11y/anchor-has-content': 1,
  'jsx-a11y/anchor-is-valid': 1,
  'jsx-a11y/aria-activedescendant-has-tabindex': 1,
  'jsx-a11y/aria-props': 1,
  'jsx-a11y/aria-proptypes': 1,
  'jsx-a11y/aria-role': 1,
  'jsx-a11y/aria-unsupported-elements': 1,
  'jsx-a11y/click-events-have-key-events': 1,
  'jsx-a11y/heading-has-content': 1,
  'jsx-a11y/html-has-lang': 1,
  'jsx-a11y/iframe-has-title': 1,
  'jsx-a11y/img-redundant-alt': 1,
  'jsx-a11y/interactive-supports-focus': 1,
  'jsx-a11y/label-has-for': 1,
  'jsx-a11y/mouse-events-have-key-events': 1,
  'jsx-a11y/no-access-key': 1,
  'jsx-a11y/no-distracting-elements': 1,
  'jsx-a11y/no-onchange': 1,
  'jsx-a11y/no-redundant-roles': 1,
  'jsx-a11y/role-has-required-aria-props': 1,
  'jsx-a11y/role-supports-aria-props': 1,
  'jsx-a11y/scope': 1,
  'jsx-a11y/tabindex-no-positive': 1,
}

const reactRules = {
  'react/jsx-boolean-value': 1,
  'react/jsx-curly-brace-presence': [0, 'never'],
  'react/jsx-no-bind': 0,
  'react/jsx-no-duplicate-props': [1, { ignoreCase: true }],
  'react/jsx-no-undef': 1,
  'react/jsx-pascal-case': [1, { allowAllCaps: true, ignore: [] }],
  'react/jsx-uses-react': 1,
  'react/jsx-uses-vars': 1,
  'react/no-access-state-in-setstate': 1,
  'react/no-deprecated': 1,
  'react/no-did-update-set-state': 1,
  'react/no-direct-mutation-state': 2,
  'react/no-is-mounted': 1,
  'react/no-unknown-property': 1,
  'react/prop-types': 1,
  'react/react-in-jsx-scope': 1,
  'react/require-render-return': 1,
  'react/self-closing-comp': 1,
}

module.exports = { a11yRules, reactRules }
