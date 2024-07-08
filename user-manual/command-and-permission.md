# Command and Permission

Commands are a key interface for plugins to interact with players and server maintainers. When you install a plugin, it may come with a set of commands that you can use to interact with the plugin. However, not all commands are available to all players. This is where permissions come in.

## Use commands

To use a command, you need to type the command in the chat box. Commands registered by stdhub plugins, whick is called 'custom command', are prefixed with not `/` but something else to avoid conflict with the server's commands. The default prefix is `.`. For example, if you want to use a command called `hello`, you need to type `.hello` in the chat box or the terminal.

Plugins do not always have a rich documentation, and we took this into consideration when designing the command system. Developers must specify a `displayName` for every parameter when adding a pattern to a command. This `displayName` is used to generate the command's documentation. For example, if you do not know how to use the `test` command, you can type `.test` in the chat box or the terminal to get the following output:
```
No patterns matched. Possible patterns:
  - test push [up|down] [distance: integer] [msg: string]
  - test pull [up|down] [distance: integer] [break: boolean]
```

Patterns themselves act as documentation for the command. They tell you what parameters the command accepts and what type each parameter should be. In the above example, the `test` command has two patterns. The first pattern is `test push [up|down] [distance: integer] [msg: string]`. This pattern tells you that the `test` command can be used with the `push` subcommand, which accepts a direction (`up` or `down`), a distance (an integer), and a message (a string). The second pattern is `test pull [up|down] [distance: integer] [break: boolean]`. This pattern tells you that the `test` command can be used with the `pull` subcommand, which accepts a direction (`up` or `down`), a distance (an integer), and a boolean value (true or false) that tells the plugin whether to break the block or not.

## Permissions and Groups

Permissions are used to control who can use a command. When a plugin registers a command, it can specify a permission that players must have to use the command. If a player does not have the required permission, they will not be able to use the command. Permissions are usually granted to players through groups. A group is a collection of permissions that can be assigned to players. When a player is added to a group, they inherit all the permissions of that group. Groups are hierarchical, meaning that a group can have other groups as parents. When a player is added to a group, they inherit all the permissions of that group and its parent groups. The root permission group is called `default`. All players are automatically added to the `default` group when they join the server.

Server operators (`op`) can use all commands regardless of permissions. From terminal you can also call all commands. So if you want to let a set of players manage only one aspect of the server, you can create a group with the necessary permissions and add the players to that group.

## The built-in `perm` command

stdhub has a built-in command for controlling permissions called `perm`. The `perm` command allows server maintainers to add and remove permissions from players and groups. The `perm` command has the following patterns:
```
perm [create|delete] [group: string]
```
Creates or deletes a permission group (extends `default` by default).

```
perm create [group: string] [extendsFrom: string]
```
Creates a permission group that extends from another group.

```
perm [grant|revoke] [group: string] [permission: string]
```
Grants or revokes a permission to/from a group.

```
perm [add|remove] [player: string] [group: string]
```
Adds or removes a player from a group.

```
perm list groups
```
Lists all permission groups.

```
perm list group-of [player: string]
```
Lists the permission group of a player.

```
perm list perm-of [explicit|all] [group: string]
```
Lists the permissions of a group.
