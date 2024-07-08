# 开始使用

::: warning 警告

`bedrock-stdhub` 仍然处于活跃开发阶段。请小心谨慎地继续，并参考 [issues 页](https://github.com/bedrock-stdhub/bedrock-stdhub/issues) 知晓尚未修复的问题。我们对因这些 issue 而造成的损失不负任何责任。

:::

## 下载 bedrock-stdhub

BDS 目前支持 Windows 64 位和 Linux 64 位平台。下载对应平台的 bedrock-stdhub，并将其与 `bedrock_server` 二进制文件放在同一目录下。

## 准备存档

如果你想在一个全新的存档上开服，那么请先运行一次 BDS 以使之生成一个世界，然后再运行我们的应用以使之修补 `level.dat`。

或者，如果你已经有一个存档，我们的应用也会照常修补其中的 `level.dat`。但是，请先将其**备份**，因为启用实验性游戏内容可能造成意料之外的问题。

## 安装插件

下载插件文件，并将其放在 `plugins` 文件夹下（如果 `plugins` 文件夹不存在，请先创建一个）。

插件是一个个扩展名为 `.stdplugin` 的文件。`stdplugin` 文件实质上是一个具有如下结构的 `zip` 文件：
```
|- foo.stdplugin
 |- script.js
 |- plugin.json
```
其中 `script.js` 包含了插件运行的所有逻辑，而 `plugin.json` 包含了插件的元信息（基本信息）。bedrock-stdhub 要做的是把 `plugins` 下的插件文件解压到存档目录下并且自动生成相关的行为包 manifest。

万事俱备，只欠启动。

## 插件配置与数据

许多插件都有一些可供用户配置的选项。一般情况下，一个可配置的插件在第一次启动时会生成具有默认值的配置文件。配置文件是 [YAML](https://yaml.org/) 格式的，位于 `plugins/[插件名称]` 目录下。主配置文件名是 `config.yaml`；同一目录下还可能存在其他配置文件。

几乎所有插件都需要储存一些内部数据。这些数据会被序列化为 JSON 格式，位于 `plugins/[插件名称]/data` 目录下。你不应该修改这些文件。

如果你想要将一个插件迁移到另一个服务端，并且希望保持插件行为不变，别忘了把 `plugins/[插件名称]` 文件夹里的东西也一块搬过去。
