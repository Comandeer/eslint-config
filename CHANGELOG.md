# @comandeer/eslint-config Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

---

## [0.10.0] – 2023-02-06
### Changed
* [#64]: **BREAKING CHANGE**: replaced Mocha-oriented rules with ava-oriented ones in test files.

## [0.9.0] – 2022-09-23
### Added
* [#57]: basic support for linting TypeScript code.
* [#60]: support for Node 18.

### Changed
* [#58]: update dependencies.

### Removed
* [#60] **BREAKING CHANGE**: support for Node < 16.12.0.

## [0.8.0] – 2022-03-24
### Added
* [#54]: support for Node 16.
* [#53]: support for [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) global variable.

## [0.7.0] – 2022-03-21
### Added
* [#51]: support for ES2022 syntax.

## [0.6.0] – 2022-03-20
### Removed
* [#49] **BREAKING CHANGE**: [`valid-jsdoc`](https://eslint.org/docs/rules/valid-jsdoc) rule.

## [0.5.0] – 2021-11-19
### Changed
* [#45] **BREAKING CHANGE**: ignore `tests/__fixtures__` instead of `tests/fixtures/`.
* [#46] **BREAKING CHANGE**: update dependencies:
	* the minimal required version of ESLint was changed to `8.0.0`,
	* the version of `eslint=plugin-mocha` was changed to `^9.0.0`.

### Fixed
* [#47] The `engine` field in `package.json` points to version 8 instead of 12.

## [0.4.0] – 2021-05-20
### Added
* [#39] Rules for Mocha
	* [handle-done-callback](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/handle-done-callback.md)
	* [max-top-level-suites](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/max-top-level-suites.md)
	* [no-async-describe](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-async-describe.md)
	* [no-exclusive-tests](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exclusive-tests.md)
	* [no-exports](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exports.md)
	* [no-global-tests](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-global-tests.md)
	* [no-identical-title](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-identical-title.md)
	* [no-nested-tests](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-nested-tests.md)
	* [no-pending-tests](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-pending-tests.md)
	* [no-return-and-callback](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-return-and-callback.md)
	* [no-sibling-hooks](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-sibling-hooks.md)
	* [no-skipped-tests](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-skipped-tests.md)
	* [no-top-level-hooks](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-top-level-hooks.md)

### Changed
* [#38] Set ESLint env to ES2021.

### Fixed
* [#37] `require-await` and `require-yield` rules can change the behavior of the code.

## [0.3.0] – 2021-02-20
### Added
* [#32] Support for separate testing environment.

## [0.2.2] – 2019-09-07
### Fixed
* [#23] Missing restrictions on `console` usage.

## [0.2.1] – 2019-06-30
### Fixed
* [#21] Allow space after `async` keyword in arrow functions.

## [0.2.0] – 2019-06-29
### Added
* [#1] Official support for Node 10.
* [#13] Official support for Node 12.
* [#12] Official support for Windows and macOS.
* [#17] Functions can be used before their definitions.

### Changed
* [#10] **BREAKING CHANGE**: update ESLint to `^6.0.1`.
* [#18] Update supported ES version to ES2019.

### Removed
* [#13] **BREAKING CHANGE**: support for Node 6.
* [#16] **BREAKING CHANGE**: dependency on `eslint:recommended`.

## 0.1.0 – 2018-04-14
### Added
* First public version.

[#1]: https://github.com/Comandeer/eslint-config/issues/1
[#10]: https://github.com/Comandeer/eslint-config/pull/10
[#12]: https://github.com/Comandeer/eslint-config/issues/12
[#13]: https://github.com/Comandeer/eslint-config/issues/13
[#16]: https://github.com/Comandeer/eslint-config/issues/16
[#17]: https://github.com/Comandeer/eslint-config/issues/17
[#18]: https://github.com/Comandeer/eslint-config/issues/18
[#21]: https://github.com/Comandeer/eslint-config/issues/21
[#23]: https://github.com/Comandeer/eslint-config/issues/23
[#32]: https://github.com/Comandeer/eslint-config/issues/32
[#37]: https://github.com/Comandeer/eslint-config/issues/37
[#38]: https://github.com/Comandeer/eslint-config/issues/38
[#39]: https://github.com/Comandeer/eslint-config/issues/39
[#45]: https://github.com/Comandeer/eslint-config/issues/45
[#46]: https://github.com/Comandeer/eslint-config/issues/46
[#47]: https://github.com/Comandeer/eslint-config/issues/47
[#49]: https://github.com/Comandeer/eslint-config/issues/49
[#51]: https://github.com/Comandeer/eslint-config/issues/51
[#53]: https://github.com/Comandeer/eslint-config/issues/53
[#54]: https://github.com/Comandeer/eslint-config/issues/54
[#57]: https://github.com/Comandeer/eslint-config/issues/57
[#58]: https://github.com/Comandeer/eslint-config/issues/58
[#60]: https://github.com/Comandeer/eslint-config/issues/60
[#64]: https://github.com/Comandeer/eslint-config/issues/64

[0.10.0]: https://github.com/Comandeer/rollup-plugin-babel-minify/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/Comandeer/rollup-plugin-babel-minify/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/Comandeer/rollup-plugin-babel-minify/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/Comandeer/rollup-plugin-babel-minify/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/Comandeer/rollup-plugin-babel-minify/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/Comandeer/rollup-plugin-babel-minify/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/Comandeer/rollup-plugin-babel-minify/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/Comandeer/rollup-plugin-babel-minify/compare/v0.2.2...v0.3.0
[0.2.2]: https://github.com/Comandeer/rollup-plugin-babel-minify/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/Comandeer/rollup-plugin-babel-minify/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/Comandeer/rollup-plugin-babel-minify/compare/v0.1.0...v0.2.0
