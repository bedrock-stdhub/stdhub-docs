# Begin Coding

## Before we dive in

If you are not familiar with TypeScript and Minecraft Scripting API, consider reading [this article](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptingintroduction?view=minecraft-bedrock-stable) written by Microsoft. But do not follow the instruction in that, since we provide a tool to simplify the process of setting up the environment.

::: warning
You should be aware that although you can include npm packages in your plugin, only **some** of the packages could function normally. The reason is explained [here](./dessert.md). So if your plugin does not work as you expect, check the packages you include in your plugin.
:::

## Initialize your project

First, be sure that you have installed [Node.js](https://nodejs.org/) environment. We recommend the latest Long-Term Support (LTS) version.

Go to [stdhub-plugin-template repository](https://github.com/bedrock-stdhub/stdhub-plugin-template). Click the green button '**Use this template**' and create your own repository. Clone the generated repository (not the template repository!) with Git, and open the cloned repository with any JavaScript IDE you prefer (e.g. VSCode, IntelliJ IDEA, neovim).

As is instructed in `README.md`, execute `npx stdhub-api init` and answer some questions. Then the tool will generate random package UUIDs and generate `manifest.json` for you, so you are not going to spend time on writing these boring, fragile files.

After initializing, run `npm install` (or similar command of other package managers. Here I strongly recommend `yarn`, which can be installed globally by executing `npm install -g yarn`) and start coding.

## StdHub APIs

The package `stdhub-plugin-api` provides a set of APIs for plugin to access filesystem and network. ~~Also, it provides additional APIs to fetch server-level data like XUID~~ (in progress). Documentation of these APIs are written in code comments, so rely on your IDE or directly dive into [source code](https://www.npmjs.com/package/stdhub-plugin-api?activeTab=code) to see the document.

In addition, there is also a [demo repository](https://github.com/bedrock-stdhub/stdhub-plugin-demo) that shows usages of these APIs.

## Upgrade

Sometimes, after you published your plugin, you may want to update the version of your plugin or upgrade the `@minecraft/server` API version your plugin depends on. Execute `npx stdhub-cli patch` to do this. The tool will automatically patch `package.json` and `manifest.json`.
