# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.1] - 2020-10-03

### Added

- label-has-associated-control now asserts for either nested approach or `htmlFor` attribute.

## [3.0.0] - 2020-08-31

### RELEASE

- Complete rewrite.
- Automatically detects if you use Next.js and adds applicable rules - will be extended, feel free to submit Feature request for specific rules.

## [2.1.6] - 2020-08-30

### Bugfix

- Disable comma-dangle in favor of trailingComma: "es5"

## [2.1.3] - 2020-07-14

### Bugfix

- Fixes Prettier/ESLint conflict caused by 2.1.1 (comma dangle vs. trailing comma)

## [2.1.2] - 2020-07-14

- typofix

## [2.1.1] - 2020-07-14

### Changed

- [comma dangle](https://eslint.org/docs/rules/comma-dangle) trailing comma now required in multi-line objects

## [2.1.0] - 2020-06-26

### Changed

- [arrow parentheses](https://prettier.io/docs/en/options.html#arrow-function-parentheses) are now omitted for single parameters

## [2.0.2] - 2020-05-02

### Updated

- 'react/state-in-constructor' to show warning instead of error

## [2.0.2] - 2020-05-02

### Updated

- readme.md
- .npmignore

## [2.0.1] - 2020-04-28

### Updated

- readme.md

## [2.0.0] - 2020-03-15

### Updated

- Readme

### MOVED

- Package moved from eslint-config-nextjs

## [1.0.3] - 2020-01-13

### Added

- react/jsx-no-comment-textnodes
- no-unused-expressions // Allows ternary
- import/prefer-default-export

## [1.0.2] - 2019-12-24

### Added

- Changelog file
- ignore no-array-index-key
- ignore require-default-props
- ignore no-unescaped-entities
