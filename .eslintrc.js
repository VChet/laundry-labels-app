// https://eslint.org/docs/user-guide/configuring
// https://eslint.vuejs.org/
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/prettier',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/block-tag-newline': 'error',
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/html-comment-content-spacing': [process.env.NODE_ENV === 'production' ? 'error' : 'warn', 'always'],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue'],
        shouldMatchCase: true,
      },
    ],
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVueBuiltInComponents: true,
        disallowVue3BuiltInComponents: true,
      },
    ],
    'vue/no-unused-properties': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      {
        groups: ['props', 'setup'],
      },
    ],
    'vue/padding-line-between-blocks': [process.env.NODE_ENV === 'production' ? 'error' : 'warn', 'always'],
    'vue/require-name-property': ['error'],
    'vue/v-on-function-call': [
      'error',
      'never',
      {
        ignoreIncludesComment: false,
      },
    ],
    'vue/arrow-spacing': ['error'],
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
}
