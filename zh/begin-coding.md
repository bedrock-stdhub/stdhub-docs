# 上手开发

## 写在前面

如果你尚未熟悉 TypeScript 和 Minecraft 脚本 API，考虑阅读由 Microsoft 编写的[这一文章](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptingintroduction?view=minecraft-bedrock-stable)。但是不要按其中的说明操作，因为我们提供了简化配置开发环境这一流程的工具。

::: warning
你需要注意，虽然你可以在你的插件中包含 npm 包，但这些包中只有**一部分**能够正常工作。理由在[这里](./dessert.md)。因此，如果你的插件并没有按你所期望的那样工作，请检查你在插件中使用的包是否都正常工作。
:::

## 初始化项目

首先，确认你已经安装了 [Node.js](https://nodejs.org/) 环境。我们推荐使用最新的长期支持 (Long-Term Support, LTS) 版本。

前往 [stdhub-plugin-template 仓库](https://github.com/bedrock-stdhub/stdhub-plugin-template)。点击绿色的 “**Use this template**” 按钮，创建你自己的仓库。用 Git 将生成的仓库（不是模板仓库！）克隆 (clone) 到本地，并且用任何你喜欢的 JavaScript 集成开发环境 (IDE) 打开（诸如 VSCode, IntelliJ IDEA, neovim）。

根据项目的 `README.md` 所讲，执行 `npx stdhub-api init` 并回答一些问题。随后工具将会生成随机的资源包/行为包 UUID 并生成 `manifest.json`，因此你不用再花时间写这些既无聊又脆弱的文件。

初始化完成后，运行 `npm install`（或其他包管理器的类似命令。这里我强烈推荐 `yarn`，可通过命令 `npm install -g yarn` 全局安装），然后开始开发。

::: danger
**永远不要**自行更改这些文件！你应该让工具来修改。
:::

## StdHub API

模块 `stdhub-plugin-api` 提供了一套可供插件访问文件系统和网络的 API，~~同时也提供了额外的 API 来获取 XUID 之类的服务端级的信息~~（仍在开发中）。API 文档均写在代码注释中，可以通过 IDE 查看，也可以直接阅读源码。

另外，也有一个[演示仓库](https://github.com/bedrock-stdhub/stdhub-plugin-demo)展示这些 API 的用法。

## 升级

有时，在你发布了你的插件之后，你可能会想要更新插件的版本号或者升级 `@minecraft/server` API 版本。为此，请执行 `npx stdhub-cli patch`。工具会自动修补 `package.json` 和 `manifest.json`。
