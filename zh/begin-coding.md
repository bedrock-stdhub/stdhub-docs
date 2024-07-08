# 上手开发

## 写在前面

如果你尚未熟悉 TypeScript 和 Minecraft 脚本 API，考虑阅读由 Microsoft 编写的[这一文章](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptingintroduction?view=minecraft-bedrock-stable)。但是不要按其中的说明操作，因为我们提供了简化配置开发环境这一流程的工具。

::: warning
你需要注意，虽然你可以在你的插件中包含 npm 包，但这些包中只有**一部分**能够正常工作。理由在[这里](./dessert.md)。因此，如果你的插件并没有按你所期望的那样工作，请检查你在插件中使用的包是否都正常工作。
:::

## 初始化项目

首先，确认你已经安装了 [Node.js](https://nodejs.org/) 环境。我们推荐使用最新的长期支持 (Long-Term Support, LTS) 版本。

前往 [plugin-template 仓库](https://github.com/bedrock-stdhub-plugins/plugin-template)。点击绿色的 “**Use this template**” 按钮，创建你自己的仓库。用 Git 将生成的仓库（不是模板仓库！）克隆 (clone) 到本地，并且用任何你喜欢的 JavaScript 集成开发环境 (IDE) 打开（诸如 VSCode, IntelliJ IDEA, neovim）。

根据项目的 `README.md` 所讲，编辑 `plugin.yaml` 并且在其中指定你的插件的名称、描述和目标 Minecraft 版本。然后运行 `npm install`（或其他包管理器的类似命令。这里我强烈推荐 `yarn`，可通过命令 `npm install -g yarn` 全局安装），然后开始开发。

`README.md` 中提到了一些任务。活用这些任务以获得更好的开发体验！

也别忘了修改（或直接删除）原有的 `README.md`。你肯定不想看见你的插件代码仓库上面带着个大大的 'template' 字眼！

## StdHub API

模块 `stdhub-plugin-api` 提供了一套 API，可供插件访问文件系统和网络，注册自定义命令，等等。同时，也提供了额外的 API 来获取 XUID 之类的服务端级的信息。API 文档均写在代码注释中，可以通过 IDE 查看，也可以直接阅读源码。

另外，也有一个[演示仓库](https://github.com/bedrock-stdhub-plugins/demo)展示这些 API 的用法。
