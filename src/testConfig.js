import ava from 'eslint-plugin-ava';
import * as globPatterns from './globPatterns.js';

export const testConfig = {
	files: [
		`**/tests/${ globPatterns.allFiles }`
	],

	plugins: {
		ava
	},

	rules: {
		'ava/assertion-arguments': 'error',
		'ava/hooks-order': 'error',
		'ava/max-asserts': 'off',
		'ava/no-async-fn-without-await': 'error',
		'ava/no-duplicate-modifiers': 'error',
		'ava/no-identical-title': 'error',
		'ava/no-ignored-test-files': 'off',
		'ava/no-import-test-files': 'error',
		'ava/no-incorrect-deep-equal': 'error',
		'ava/no-inline-assertions': 'error',
		'ava/no-nested-tests': 'error',
		'ava/no-only-test': 'error',
		'ava/no-skip-assert': 'error',
		'ava/no-skip-test': 'error',
		'ava/no-todo-implementation': 'error',
		'ava/no-todo-test': 'error',
		'ava/no-unknown-modifiers': 'error',
		'ava/prefer-async-await': 'error',
		'ava/prefer-power-assert': 'off',
		'ava/prefer-t-regex': 'error',
		'ava/test-title': 'error',
		'ava/test-title-format': 'off',
		'ava/use-t': 'error',
		'ava/use-t-throws-async-well': 'error',
		'ava/use-t-well': 'error',
		'ava/use-test': 'error',
		'ava/use-true-false': 'error'
	}
};
