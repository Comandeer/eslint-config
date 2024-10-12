import { eslintConfig } from './src/index.js';
import { formattingConfig } from './src/formatting.js';

export default [
	...eslintConfig(),
	...formattingConfig()
];
