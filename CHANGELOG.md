# @comandeer/eslint-config Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

---

## [0.13.1] – 2024-03-10
### Fixed
* [#88]: incorrect glob patterns in monorepos.

## [0.13.0] – 2024-03-02
### Added
* [#85]: **BREAKING CHANGE**: configuration options.

## [0.12.0] – 2024-03-01
### Added
* [#81]: basic support for monorepo.

### Removed
* [#83]: **BREAKING CHANGE**: support for Node 16.

### Changed
* [#80]: **BREAKING CHANGE**: move formatting rules to `@stylistic`.
* [#82]: **BREAKING CHANGE**: updated dependencies:

	| Dependency                               | Old version | New version |
	| ---------------------------------------- | ----------- | ----------- |
	| `@babel/core`                            | `^7.22.9`   | `^7.24.0`   |
	| `@babel/eslint-parser`                   | `^7.22.9`   | `^7.23.10`  |
	| `@babel/eslint-plugin`                   | `^7.22.5`   | `7.23.5`    |
	| `@babel/plugin-syntax-import-attributes` | `^7.22.5`   | `^7.23.3`   |
	| `@babel/preset-env`                      | `^7.22.9`   | `^7.24.0`   |
	| ⭐ `@stylistic/eslint-plugin`             | N/A         | `^1.6.3`    |
	| ⚠️ `@typescript-eslint/eslint-plugin`     | `^6.1.0`    | `^7.1.0`    |
	| ⚠️ `@typescript-eslint/parser`            | `^6.1.0`    | `^7.1.0`    |
	| ⚠️ `globals`                              | `^13.20.0`  | `^14.0.0`   |

	New dependencies are marked with the "⭐" emoji.

	Dependencies with major version change are marked with the "⚠️" emoji.

### Fixed
* [#79]: the `no-undef` rule in TS code is incorrectly switched on.

## [0.11.1] – 2023-07-22
### Fixed
* [#76]: incorrect publishing workflow resulting in an incorrect package being published.

## [0.11.0] – 2023-07-22
### Added
* [#67]: new rules for linting TS files.
* [#74]: support for import attributes/assertions syntax.

### Changed
* [#59]: **BREAKING CHANGE**: move to the new config system.
* [#73]: **BREAKING CHANGE**: move the codebase to ESM.
* [#70]: **BREAKING CHANGE**: use TS parser only for TS files.
* [#72]: **BREAKING CHANGE**: separate formatting rules as a `./formatting` subpath export.
* [#74]: **BREAKING CHANGE**: use `@babel/eslint-parser` for JS files.
* [#71]: **BREAKING CHANGE**: updated dependencies:

	| Dependency                                 | Old version | New version |
	| ------------------------------------------ | ----------- | ----------- |
	| ⭐ `@babel/core`                            | N/A         | `^7.22.9`   |
	| ⭐ `@babel/eslint-parser`                   | N/A         | `^7.22.9`   |
	| ⭐ `@babel/eslint-plugin`                   | N/A         | `^7.22.5`   |
	| ⭐ `@babel/plugin-syntax-import-attributes` | N/A         | `^7.22.5`   |
	| ⭐ `@babel/preset-env`                      | N/A         | `^7.22.9`   |
	| ⚠️ `@typescript-eslint/eslint-plugin`       | `^5.38.0`   | `^6.1.0`    |
	| ⚠️ `@typescript-eslint/parser`              | `^5.38.0`   | `^6.1.0`    |
	| ⭐ `globals`                                | N/A         | `^13.20.0`  |

	New dependencies are marked with the "⭐" emoji.

	Dependencies with major version change are marked with the "⚠️" emoji.

### Fixed
* [#69]: incorrect `tsconfig.json` file used to lint the project.

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
[#59]: https://github.com/Comandeer/eslint-config/issues/59
[#60]: https://github.com/Comandeer/eslint-config/issues/60
[#64]: https://github.com/Comandeer/eslint-config/issues/64
[#67]: https://github.com/Comandeer/eslint-config/issues/67
[#69]: https://github.com/Comandeer/eslint-config/issues/69
[#70]: https://github.com/Comandeer/eslint-config/issues/70
[#71]: https://github.com/Comandeer/eslint-config/issues/71
[#73]: https://github.com/Comandeer/eslint-config/issues/73
[#74]: https://github.com/Comandeer/eslint-config/issues/74
[#76]: https://github.com/Comandeer/eslint-config/issues/76
[#79]: https://github.com/Comandeer/eslint-config/issues/79
[#80]: https://github.com/Comandeer/eslint-config/issues/80
[#81]: https://github.com/Comandeer/eslint-config/issues/81
[#82]: https://github.com/Comandeer/eslint-config/issues/82
[#83]: https://github.com/Comandeer/eslint-config/issues/83
[#85]: https://github.com/Comandeer/eslint-config/issues/85
[#88]: https://github.com/Comandeer/eslint-config/issues/88

[0.13.1]: https://github.com/Comandeer/eslint-config/compare/v0.13.0...v0.13.1
[0.13.0]: https://github.com/Comandeer/eslint-config/compare/v0.12.0...v0.13.0
[0.12.0]: https://github.com/Comandeer/eslint-config/compare/v0.11.1...v0.12.0
[0.11.1]: https://github.com/Comandeer/eslint-config/compare/v0.11.0...v0.11.1
[0.11.0]: https://github.com/Comandeer/eslint-config/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/Comandeer/eslint-config/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/Comandeer/eslint-config/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/Comandeer/eslint-config/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/Comandeer/eslint-config/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/Comandeer/eslint-config/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/Comandeer/eslint-config/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/Comandeer/eslint-config/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/Comandeer/eslint-config/compare/v0.2.2...v0.3.0
[0.2.2]: https://github.com/Comandeer/eslint-config/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/Comandeer/eslint-config/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/Comandeer/eslint-config/compare/v0.1.0...v0.2.0
