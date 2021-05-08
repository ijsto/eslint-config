const dotProp = require('dot-prop');
const readPkgUp = require('read-pkg-up');

const pkg = readPkgUp.sync() || {};

const checkIfHasPackage = dependency =>
  dotProp.get(pkg, `package.dependencies.${dependency}`) ||
  dotProp.get(pkg, `package.devDependencies.${dependency}`);

module.exports = { checkIfHasPackage, pkg };
