const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate');

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-property-sort-order-smacss',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  ignoreFiles: ['src/@types/**', '**/stories/**/*.*'],
  rules: {
    'block-no-empty': null,
    'comment-empty-line-before': null,
    'declaration-colon-newline-after': null,
    'declaration-empty-line-before': null,
    'function-parentheses-newline-inside': null,
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
    'no-irregular-whitespace': null,
    'order/properties-order': [sortOrderSmacss()],
    'plugin/declaration-block-no-ignored-properties': true,
    'value-keyword-case': ['lower', { ignoreKeywords: ['/dummyValue/'] }],
    indentation: null,
  },
};
