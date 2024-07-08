# 命令与权限

命令是插件与玩家和服务器维护者进行交互的关键接口。当你安装一个插件时，它可能带有一组命令用于与插件进行交互。然而，并非所有命令都对所有玩家可用。这就是权限的作用所在。

## 使用命令

要使用命令，您需要在聊天框中输入命令。由 stdhub 插件注册的命令，也称为“自定义命令”，其前缀不是 `/`，而是其他字符，以避免与服务器的命令冲突。默认前缀是 `.`。例如，如果您想使用一个名为 `hello` 的命令，您需要在聊天框或终端中输入 `.hello`。

插件并不总是有丰富的文档，而我们在设计命令系统时考虑到了这一点。插件的开发者在设计命令时必须为每个参数指定一个 `displayName`。这个 `displayName` 用于生成命令的文档。例如，如果你不知道如何使用 `test` 命令，您可以在聊天框或终端中输入 `.test`，将得到以下输出：
```
No patterns matched. Possible patterns:
  - test push [up|down] [distance: integer] [msg: string]
  - test pull [up|down] [distance: integer] [break: boolean]
```

Pattern 本身就是命令的文档。它们告诉您命令接受哪些参数以及每个参数的类型。在上面的示例中，`test` 命令有两个 pattern。第一个 pattern 是 `test push [up|down] [distance: integer] [msg: string]`。这个 pattern 告诉你 `test` 命令可以与 `push` 子命令一起使用，该子命令接受一个方向（`up` 或 `down`），一个距离（整数）和一条消息（字符串）。第二个 pattern 是 `test pull [up|down] [distance: integer] [break: boolean]`。这个 pattern 告诉你 `test` 命令可以与 `pull` 子命令一起使用，该子命令接受一个方向（`up` 或 `down`），一个距离（整数）和一个布尔值（true 或 false），告诉插件是否要打破方块。

## 权限和组

权限用于控制谁可以使用命令。当插件注册一个命令时，它可以指定玩家必须具有的权限来使用该命令。如果玩家没有所需的权限，他们将无法使用该命令。权限通常通过组授予给玩家。组是一组可以分配给玩家的权限。当将玩家添加到组中时，他们继承该组的所有权限。组是继承性的，这意味着一个组可以有其他组作为父组。当将玩家添加到组中时，他们继承该组及其父组的所有权限。根权限组称为 `default`。所有玩家都处于 `default` 组中。

服务器管理员 (`op`) 可以使用所有命令，而不受权限的限制。从终端中也可以调用所有命令。因此，如果想让一组玩家管理服务器的某个方面，可以创建一个具有必要权限的组，并将玩家添加到该组中。

## 内置的 `perm` 命令

stdhub 有一个用于控制权限的内置命令，称为 `perm`。`perm` 命令允许服务器维护者向玩家和组添加和删除权限。`perm` 命令有以下 pattern：
```
perm [create|delete] [group: string]
```
创建或删除权限组（默认情况下扩展 `default`）。

```
perm create [group: string] [extendsFrom: string]
```
创建一个从另一个组扩展的权限组。

```
perm [grant|revoke] [group: string] [permission: string]
```
向组授予或撤销权限。

```
perm [add|remove] [player: string] [group: string]
```
将玩家添加到组或从组中移除玩家。

```
perm list groups
```
列出所有权限组。

```
perm list group-of [player: string]
```
列出玩家所在的权限组。

```
perm list perm-of [explicit|all] [group: string]
```
列出组的权限。
