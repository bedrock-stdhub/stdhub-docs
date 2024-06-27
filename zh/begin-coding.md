# 上手开发

## 开始之前

如果你尚未熟悉 TypeScript 和 Minecraft 脚本 API，考虑阅读由 Microsoft 编写的[这一文章](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptingintroduction?view=minecraft-bedrock-stable)。但是不要按其中的说明操作，因为我们提供了简化配置开发环境这一流程的工具。

你应当明白，JavaScript 代码离了运行环境（或更准确一些，脚本引擎）就无法工作。所有的现代浏览器都内置了 JavaScript 引擎；你应该也听说过 [Node.js](https://nodejs.org/)，它允许你“在任何地方运行 JavaScript”。Node.js 背后的强大引擎则是 [V8](https://v8.dev/)。

然而，仅靠一个引擎是远远不够的。运行在引擎上的 JavaScript 代码无法脱离它的“沙盒”，也就是说，它没有对文件系统、网络之类的系统级特性的访问权限。你可能会说 Node.js 提供了 `node:fs` 和 `node:http` 之类的 API，但是实际上，这些 API 是由 C 或 C++ 写成的，通过某种方式对 JavaScript 代码开放，已经不属于 V8 引擎的一部分。在浏览器上调用这些 API 是不可能的；很不幸，在 Minecraft 的脚本环境中也不行。你可能还会认为可以在插件中引入 `axios` 之类的 npm 包来帮助你访问网络。然而，所有这些模块最终都依赖于 Node.js 或浏览器 API 来工作，它们在 Minecraft 脚本环境中没有帮助。

::: warning
因此，你需要注意，虽然你可以在你的插件中包含 npm 包，但这些包中只有**一部分**能够正常工作。因此，如果你的插件并没有按你所期望的那样工作，请检查你在插件中使用的包是否都正常工作。
:::

所幸，Minecraft 提供了包装在 `@minecraft/server-net` 模块中的有限 API，给插件以互联网访问。该模块目前是实验性的，这就是为什么用户需要在世界设置中启用测试版 API。这个模块只能发送简单的 HTTP 请求，但这对我们来说已经足够。bedrock-stdhub 启动了一个独立的 HTTP 服务器来监听来自插件的请求，并且根据插件需求来读写文件。简而言之，我们的项目使得运行在脚本环境中的行为包 (behavior pack) 能够打破“沙盒”。

## 初始化项目

首先，确认你已经安装了 [Node.js](https://nodejs.org/) 环境。我们推荐使用最新的长期支持 (Long-Term Support, LTS) 版本。

前往 [stdhub-plugin-template 仓库](https://github.com/bedrock-stdhub/stdhub-plugin-template)。点击绿色的 “**Use this template**” 按钮，创建你自己的仓库。用 Git 将生成的仓库（不是模板仓库！）克隆 (clone) 到本地，并且用任何你喜欢的 JavaScript 集成开发环境 (IDE) 打开（诸如 VSCode, IntelliJ IDEA, neovim）。

根据项目的 `README.md` 所讲，执行 `npx stdhub-api init` 并回答一些问题。

问题之一是你准备使用哪个版本的 `@minecraft/server`。在这里，这个模块的每个小版本都对应了一个 Minecraft 版本，例如 `@minecraft/server` 的版本 `1.11.0` 对应 Minecraft 基岩版的版本 `1.21.0`。完整的版本对应关系见[这个页面](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptversioning?view=minecraft-bedrock-stable)（很不幸，这个页面已经过时了。我们会尽力让 `stdhub-cli` 中的对应关系保持最新）。我们的工具将会生成随机的资源包/行为包 UUID 并生成 `manifest.json`，因此你不用再花时间写这些既无聊又脆弱的文件。

初始化完成后，运行 `npm install`（或其他包管理器的类似命令。这里我强烈推荐 `yarn`，可通过命令 `npm install -g yarn` 全局安装），然后开始开发。

## StdHub API

模块 `stdhub-plugin-api` 提供了一套可供插件访问文件系统和网络的 API，~~同时也提供了额外的 API 来获取 XUID 之类的服务端级的信息~~（仍在开发中）。API 文档均写在代码注释中，可以通过 IDE 查看，也可以直接阅读源码。

另外，也有一个[演示仓库](https://github.com/bedrock-stdhub/stdhub-plugin-demo)展示这些 API 的用法。

## 升级

有时，在你发布了你的插件之后，你可能会想要更新插件的版本号或者升级 `@minecraft/server` API 版本。为此，请执行 `npx stdhub-cli patch`。工具会自动修补 `package.json` 和 `manifest.json`。
