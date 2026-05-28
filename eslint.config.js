import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist', 'src/components/tp.jsx', 'src/components/Feedbacks.jsx'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      // React-Three-Fiber uses non-standard JSX props (intensity, position, args, etc.)
      'react/no-unknown-property': 'off',
      // Project doesn't use prop-types library
      'react/prop-types': 'off',
      // Allow `'` and `"` inside JSX text (we use real apostrophes in copy)
      'react/no-unescaped-entities': 'off',
      'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true, varsIgnorePattern: '^(_|React$)' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
