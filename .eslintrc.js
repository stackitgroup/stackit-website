module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'linebreak-style': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 7,
      multiline: {
        max: 1,
        allowFirstLine: true,
      }
    }]
  }
}
