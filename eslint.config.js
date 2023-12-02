import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  { stylistic: false },
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended', 'prettier', 'unused-imports'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/migration-from-tailwind-2': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      'no-unused-vars': 'off',
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
      },
      {
        files: ['*.vue'],
        parser: 'vue-eslint-parser',
      },
    ],
  }),
)
