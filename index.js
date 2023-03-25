// This is a workaround for: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

const dotProp = require('dot-prop');
const findUp = require('find-up');
const readPkgUp = require('read-pkg-up');
const semver = require('semver');

const base = require('./src/base');
const jsxA11y = require('./src/jsx-a11y');
const next = require('./src/next');
const node = require('./src/node');
const strapi = require('./src/strapi');
const prettier = require('./src/prettier');
const react = require('./src/react');
const reactHooks = require('./src/react-hooks');

const pkg = readPkgUp.sync() || {};

const checkIfHasPackage = dependency =>
  dotProp.get(pkg, `packageJson.dependencies.${dependency}`) ||
  dotProp.get(pkg, `packageJson.devDependencies.${dependency}`);

const usesBabelConfig = findUp.sync([
  '.babelrc',
  '.babelrc.json',
  'babel.config.json',
]);
const usesNext = checkIfHasPackage('next');
const usesReact = checkIfHasPackage('react');
const usesStrapiAboveV4 = checkIfHasPackage('@strapi/strapi');
const usesStrapi = checkIfHasPackage('strapi');
const reactVersion = usesReact ? semver.coerce(usesReact).version : undefined;

const config = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    'shared-node-browser': true,
  },
  extends: ['prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2021,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['node', 'prettier'],
  reportUnusedDisableDirectives: true,
  rules: {
    ...base,
    ...node,
    ...prettier,
  },
};

// NOTE: IMPORTANT: Currently hasWorkspaces is not working properly, see TODO:s below
const hasWorkspaces = dotProp.get(pkg, 'packageJson.workspaces');
if (hasWorkspaces) {
  dotProp.set(config, 'parserOptions.ecmaFeatures.jsx', true);
  dotProp.set(config, 'settings.react.version', 'detect');

  // TODO: Optimize - see if there's a way to comb through workspaces and
  // apply to individual `.eslintrc` configs.
  const rulesForWorkspaces = {
    ...config.rules,
  };

  // TODO: How to handle parsing on per-package basis.
  if (usesBabelConfig) {
    dotProp.set(
      config,
      'parserOptions.babelOptions.configFile',
      usesBabelConfig
    );
    dotProp.set(config, 'parserOptions.requireConfigFile', true);
  }

  config.plugins.push('react');
  config.rules = rulesForWorkspaces;
}

if (usesReact && !usesNext) {
  dotProp.set(config, 'parserOptions.ecmaFeatures.jsx', true);
  dotProp.set(config, 'settings.react.version', 'detect');
  config.plugins.push('react', 'airbnb');
  config.rules = {
    ...config.rules,
    ...react,
    ...reactHooks,
    ...jsxA11y,
  };

  if (semver.gte(reactVersion, '16.8.0')) {
    config.plugins.push('react-hooks');
    config.rules = {
      ...config.rules,
      ...reactHooks,
    };
  }

  // Disable if in future implementing React Native.
  config.plugins.push('jsx-a11y');
  config.rules = {
    ...config.rules,
    ...jsxA11y,
  };
}

if (usesNext) {
  dotProp.set(config, 'parserOptions.ecmaFeatures.jsx', true);
  dotProp.set(config, 'parserOptions.ecmaVersion', 12);
  dotProp.set(config, 'parserOptions.sourceType', 'module');
  dotProp.set(config, 'settings.react.version', 'detect');
  config.extends.push('next/core-web-vitals');
  config.rules = {
    ...config.rules,
    ...next,
  };
}

if (usesBabelConfig) {
  dotProp.set(config, 'parserOptions.babelOptions.configFile', usesBabelConfig);
  dotProp.set(config, 'parserOptions.requireConfigFile', true);
} else if (usesNext) {
  dotProp.set(config, 'parserOptions.babelOptions.presets', ['next/babel']);
} else if (usesReact) {
  dotProp.set(config, 'parserOptions.babelOptions.presets', [
    '@babel/preset-react',
  ]);
}

if (usesStrapiAboveV4 || usesStrapi) {
  config.rules = {
    ...config.rules,
    ...strapi,
  };
}

module.exports = config;
