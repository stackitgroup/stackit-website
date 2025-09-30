import { includeIgnoreFile } from '@eslint/compat'
import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import { fileURLToPath } from 'node:url'
import ts from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import svelteConfig from './svelte.config.js'

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url))

export default defineConfig([
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	stylistic.configs.customize({
		indent: 'tab',
		quotes: 'single',
		semi: false,
		jsx: false
	}),
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on
			// TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off',
			// Formatting rules to match previous Prettier config
			'@stylistic/max-len': ['warn', {
				code: 500,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreComments: true
			}],
			'@stylistic/comma-dangle': ['error', 'never'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/semi': ['error', 'never']
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		},
		rules: {
			// Svelte specific formatting rules
			'svelte/html-quotes': ['error', { prefer: 'double' }],
			'svelte/indent': ['error', { indent: 'tab' }],
			'svelte/max-attributes-per-line': ['error', { multiline: 1, singleline: 3 }],
			'svelte/first-attribute-linebreak': ['error', { multiline: 'below', singleline: 'beside' }],
			'svelte/html-closing-bracket-spacing': 'error',
			'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
			'svelte/no-navigation-without-resolve': [
				'error',
				{
					ignoreGoto: false,
					ignoreLinks: true,
					ignorePushState: false,
					ignoreReplaceState: false
				}
			]
		}
	}
])
