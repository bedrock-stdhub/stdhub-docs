# Begin Coding

## Before we dive in

If you are not familiar with TypeScript and Minecraft Scripting API, consider reading [this article](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptingintroduction?view=minecraft-bedrock-stable) written by Microsoft. But do not follow the instruction in that, since we provide a tool to simplify the process of setting up the environment.

::: warning
You should be aware that although you can include npm packages in your plugin, only **some** of the packages could function normally. The reason is explained [here](./dessert.md). So if your plugin does not work as you expect, check the packages you include in your plugin.
:::

## Initialize your project

First, be sure that you have installed [Node.js](https://nodejs.org/) environment. We recommend the latest Long-Term Support (LTS) version.

Go to [plugin-template repository](https://github.com/bedrock-stdhub-plugins/plugin-template). Click the green button '**Use this template**' and create your own repository. Clone the generated repository (not the template repository!) with Git, and open the cloned repository with any JavaScript IDE you prefer (e.g. VSCode, IntelliJ IDEA, neovim).

As is instructed in `README.md`, edit `plugin.yaml` and specify the name, description and target Minecraft version of your plugin. Then run `npm install` (or similar command of other package managers. Here I strongly recommend `yarn`, which can be installed globally by executing `npm install -g yarn`) and start coding.

There are some tasks mentioned in the `README.md`. Check them to obtain better coding experience!

Also remember to modify (or just delete) the original `README.md`. You don't want to see your plugin repository with a big 'template' mark!

## StdHub APIs

The package `stdhub-plugin-api` provides a set of APIs for plugin to access filesystem and network, to register custom commands, etc. ~~Also, it provides additional APIs to fetch server-level data like XUID~~ (in progress). Documentation of these APIs are written in code comments, so rely on your IDE or directly dive into [source code](https://www.npmjs.com/package/stdhub-plugin-api?activeTab=code) to see the document.

In addition, there is also a [demo repository](https://github.com/bedrock-stdhub-plugins/demo) that shows usages of these APIs.
