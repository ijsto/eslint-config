const dotProp = require('dot-prop');
const readPkgUp = require('read-pkg-up');
const semver = require('semver');

const base = require('./src/base');
const jsxA11y = require('./src/jsx-a11y');
const next = require('./src/next');
const prettier = require('./src/prettier');
const react = require('./src/react');
const reactHooks = require('./src/react-hooks');

const pkg = readPkgUp.sync() || {};

const getUsage = dependency =>
  dotProp.get(pkg, `package.dependencies.${dependency}`) ||
  dotProp.get(pkg, `package.devDependencies.${dependency}`);

const reactUsage = getUsage('react');
const reactVersion = reactUsage ? semver.coerce(reactUsage).version : undefined;

const config = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
  },
  plugins: ['prettier'],
  rules: {
    ...base,
    ...prettier,
  },
};

if (reactVersion) {
  dotProp.set(config, 'parserOptions.ecmaFeatures.jsx', true);
  dotProp.set(config, 'settings.react.version', 'detect');
  config.plugins.push('react');
  config.rules = {
    ...config.rules,
    ...react,
  };

  if (semver.gte(reactVersion, '16.8.0')) {
    config.plugins.push('react-hooks');
    config.rules = {
      ...config.rules,
      ...reactHooks,
    };
  }

  config.plugins.push('jsx-a11y');
  config.rules = {
    ...config.rules,
    ...jsxA11y,
  };

  if (getUsage('next')) {
    config.rules = {
      ...config.rules,
      ...next,
    };
  }
}

module.exports = config;
