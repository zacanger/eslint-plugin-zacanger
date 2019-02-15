const a11yRules = {
  'jsx-a11y/accessible-emoji': 2,
  'jsx-a11y/alt-text': 2,
  'jsx-a11y/anchor-has-content': 2,
  'jsx-a11y/anchor-is-valid': 2,
  'jsx-a11y/aria-activedescendant-has-tabindex': 2,
  'jsx-a11y/aria-props': 2,
  'jsx-a11y/aria-proptypes': 2,
  'jsx-a11y/aria-role': 2,
  'jsx-a11y/aria-unsupported-elements': 2,
  'jsx-a11y/click-events-have-key-events': 2,
  'jsx-a11y/heading-has-content': 2,
  'jsx-a11y/html-has-lang': 2,
  'jsx-a11y/iframe-has-title': 2,
  'jsx-a11y/img-redundant-alt': 2,
  'jsx-a11y/interactive-supports-focus': 2,
  'jsx-a11y/label-has-for': 2,
  'jsx-a11y/mouse-events-have-key-events': 2,
  'jsx-a11y/no-access-key': 2,
  'jsx-a11y/no-distracting-elements': 2,
  'jsx-a11y/no-onchange': 2,
  'jsx-a11y/no-redundant-roles': 2,
  'jsx-a11y/role-has-required-aria-props': 2,
  'jsx-a11y/role-supports-aria-props': 2,
  'jsx-a11y/scope': 2,
  'jsx-a11y/tabindex-no-positive': 2,
}

const reactRules = {
  'react-hooks/rules-of-hooks': 2,
  'react/jsx-boolean-value': 2,
  'react/jsx-curly-brace-presence': [2, 'never'],
  'react/jsx-no-bind': 0,
  'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
  'react/jsx-no-undef': 2,
  'react/jsx-pascal-case': [2, { allowAllCaps: true, ignore: [] }],
  'react/jsx-uses-react': 2,
  'react/jsx-uses-vars': 2,
  'react/no-access-state-in-setstate': 2,
  'react/no-deprecated': 2,
  'react/no-did-update-set-state': 2,
  'react/no-direct-mutation-state': 2,
  'react/no-is-mounted': 2,
  'react/no-unknown-property': 2,
  'react/prop-types': 2,
  'react/react-in-jsx-scope': 2,
  'react/require-render-return': 2,
  'react/self-closing-comp': 2,
}

module.exports = { a11yRules, reactRules }
