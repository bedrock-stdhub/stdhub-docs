# Get Started

::: warning

`bedrock-stdhub` is still in active development. Please proceed with caution, and refer to [issues page](https://github.com/bedrock-stdhub/bedrock-stdhub/issues) for currently unfixed issues. We are not responsible for any loss caused by these issues.

:::

## Download the release

BDS currently supports Windows x64 and Linux x64 platforms. Download a suitable copy and put it at the same level as `bedrock_server` binary.

## Prepare the world

If you are going to work on a completely new world, please run BDS first to let it generate a world, and then run our application to let it patch `level.dat`.

Or if you already have a world, our application will just patch its `level.dat` as usual. But please **back it up** first, since enabling experimental features may cause unexpected issues.

## Install plugins

Download plugin files and put them in `plugins` folder (if the folder does not exist, create one first).

Plugins are single files with extension `.stdplugin`. A `stdplugin` file is in fact a `zip` file of the following structure:
```
|- foo.stdplugin
 |- script.js
 |- plugin.json
```
In which `script.js` contains all the logic of the plugin and `plugin.json` contains meta information of the plugin. What bedrock-stdhub does is to unpack these plugin files to the world folder and automatically generate behavior pack manifest.

After everything is ready, execute bedrock-stdhub.

## Plugin config and data

Many plugins have some options for users to configure. Generally, config files with default values will be created the first time a configurable plugin is loaded. Config files are in [YAML](https://yaml.org/) format and can be found in `plugins/[plugin-name]/`. The root config file name is `config.yaml`, and there may be some other sub config files.

Almost all plugins have some internal data to store. These data are serialized into JSON format and can be found in `plugins/[plugin-name]/data/`. You should not modify these files.

If you want to migrate a plugin to another server with its behavior keeping unchanged, remember to take the folder `plugins/[plugin-name]` along.
