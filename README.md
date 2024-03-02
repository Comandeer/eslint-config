# @comandeer/eslint-config

![Build Status](https://github.com/Comandeer/eslint-config/workflows/CI/badge.svg) [![npm (scoped)](https://img.shields.io/npm/v/@comandeer/eslint-config.svg)](https://npmjs.com/package/@comandeer/eslint-config)

Super opinionated [ESLint](https://eslint.org/) configuration.

## Installation

```bash
npm install @comandeer/eslint-config --save-dev
```

## Usage

Put it inside your `eslint.config.js` file:

```javascript
import eslintConfig from '@comandeer/eslint-config';

export default eslintConfig();
```

Optionally, you could also include formatting rules:

```javascript
import eslintConfig from '@comandeer/eslint-config';
import formattingConfig from '@comandeer/eslint-config/formatting';

export default [
	...eslintConfig(),
	...formattingConfig()
];
```

### Options

Both exports accepts the same set of options as an `options` object:

```javascript
eslintConfig( {
    tsProject: [ './packages/*/tsconfig.json' ]
} );
```

#### Available options

| Name        | Value type      | Default value           | Description                                                  |
| ----------- | --------------- | ----------------------- | ------------------------------------------------------------ |
| `tsProject` | `Array<string>` | `[ './tsconfig.json' ]` | Paths to all TS config files in the project that should be used for linting. |

## License

See [LICENSE](./LICENSE) file for details.
