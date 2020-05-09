# ESLint and Prettier configs for Next.js apps

A set of awesome ESLint + Prettier configs.
Makes it easier to work with React, NextJS, Node apps.

This package is intended for use with VS Code, however, can be easily used with any text editors.

# Installation

## Local / Per Project

1. Install @ijsto/eslint-config:

```
npx install-peerdeps --dev @ijsto/eslint-config
```

2. Create an `.eslintrc` file in the root of your project's directory. Paste in the following:

```json
{
  "extends": "@ijsto"
}
```

3. You're done!

4. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

# VS Code setup

1. Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. In VS Code go to settings (`⌘Cmd + ,` or `Ctrl + ,`) → type in `settings.json` file → click on `Edit in settings.json` and paste in the following on the root of the object:

```js
{ 
  ...
  // Run formatter when you save code changes
  "editor.formatOnSave": true,
  // Disable default formatting (ESLint formatting will be used instead)
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  // Auto-fix issues with ESLint when you save code changes
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  // Prevent double-formatting and potential ESLint <> Prettier conflicts
  "prettier.disableLanguages": [
      "javascript",
      "javascriptreact"
  ],
}
```

## For a Global Installation

You can avoid the need to do the previous step for each project and install this globally.

1. Install @ijsto/eslint-config:

```
npx install-peerdeps --global @ijsto/eslint-config
```

2. Create a global `.eslintrc` file on your computer:

- MacOS location: `~/.eslintrc`
- Windows location: `C:\Users\you\.eslintrc`

Paste in the follow to newly created `.eslintrc`:

```json
{
  "extends": "@ijsto"
}
```

**For other editors, you can add the following to your `package.json` and run it manually:**

Similarly you may use add this to VS Code and run it to iterate over the whole project (note that this may take some seconds or few minutes depending on the size of your project).

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
},
```

To run fix only React/Next.js files add the following:

```json
"scripts": {
  "lint:fix": "eslint --fix --ext .js,.jsx ."
}
```

## That's all!

Enjoy the package and feel free to contribute! Pull request or suggestions are most welcome!

[iJS.to](https://ijs.to)
