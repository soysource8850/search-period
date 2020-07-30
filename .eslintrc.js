module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'airbnb-base'
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    'sourceType': 'module',
    'project': './tsconfig.json',
  },
  settings: {
    'import/extensions': [
      '.js',
      '.ts',
    ],
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.ts',
        ]
      }
    }
  },
  rules: {
    'import/extensions': [
      'error', 'always',
      {
        'js': 'never',
        'ts': 'never',
      }
    ],
  },
  globals: {
    browser: 'readonly',
    chrome: 'readonly',
    window: 'readonly',
    document: 'readonly',
    location: 'readonly',
    fetch: 'readonly',
    Request: 'readonly',
    Headers: 'readonly',
    FormData: 'readonly',
  }
}
