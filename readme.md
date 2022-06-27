<p align="center">
<img width="500px" src="https://raw.githubusercontent.com/ijsto/eslint-config/master/img/jumbo-v2.png"/>
</p>

# **ESLint and Prettier setup for VS Code**

- A set of awesome ESLint + Prettier configs.
- Makes it easier to work with React, Next.js, Node apps.
- This package is intended for use with VS Code, however, can be easily used with any text editors.

> This package will automatically detect if you're using React, Next.js, Node (and other in near future), and apply appropriate linting rules. 👌🏼

# **Installation**

> ### **You may need to restart VSCode once installed.**

First installation will take you only a couple of minute, every subsequent should not take more than a minute.

You can install the package 2.a) in repo of the project which will apply the linting only to the project and not other files on your computer or 2.b) on your computer which will apply the linting to all files with the included file extensions on your computer.

Below are the steps to install (click on the step to open the instructions).

<details><summary><span>1 · VS Code Setup</span></summary>
<p>

1. Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Add below snippet to your User settings:
   > First try (`⌘Cmd + ,` or `Ctrl + ,`) → type in `settings.json` file → click on `Edit in settings.json`. If that doesn't work the file is located in `$/Code/User/settings.json`

```js
{
  // ...
  // Run formatter when you save code changes
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // Disable default formatting (ESLint formatting will be used instead)
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
}
```

</p>
</details>
<hr />
<details><summary><span>2.a · RECOMMENDED: Per Project Setup (Local setup)</span></summary>
<p>

## Install

1. Install @ijsto/eslint-config:
   > this command will auto-detect if you are using yarn by default and prompt you to confirm before proceeding.

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

4. ESLint will now run and format your code each time you save your file.

</p>
</details>

<hr />

<details><summary><span>2.b · Computer-wide (Global setup)</span></summary>
<p>

If you would like to install the config computer-wide (globally) and not on each project, follow the below steps.

## Install

1. Install @ijsto/eslint-config:
   > this command will auto-detect if you are using yarn by default and prompt you to confirm before proceeding.

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

</p>
</details>

<hr/>

## **How to Uninstall**

<hr />

If something doesn't work or you should try manually deleting your `node_modules` folder. This usually helps resolving any issues with this config not working.

If you would like to uninstall this `eslint-config`, run the below commands:

### **Local uninstall (per project)**

```
yarn remove eslint @ijsto/eslint-config
```

or global (computer-wise)

```
npm remove eslint @ijsto/eslint-config
```

### **Global uninstall**

```
yarn global remove eslint @ijsto/eslint-config
```

or

```
npm remove --global eslint @ijsto/eslint-config
```

## That's all.

Did this package help you? Give it a ★ and share with your friends! 🙂

PRs, feature requests or suggestions are most welcome!

[iJS.to](https://ijs.to)

# Troubleshooting

If you followed the steps, yet still cannot get ESLint to work, you can try deleting `/node_modules` and running `yarn` or `npm i` depending on which one you use.

## **Contributing 💪🏼**

Thank you for considering to contribute to this project.

We are working on improving the contributing guidelines, for now, here is current TODO list:

- [ ] Handle workspaces (see TODO:s in `index.js` file)
- [ ] Create `CONTRIBUTING.md` file with guidelines
