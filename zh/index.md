---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Bedrock StdHub"
  text: "加载插件，优雅至上"
  tagline: 适用于无“魔改” BDS 服务端的插件加载器
  actions:
    - theme: brand
      text: 开始使用
      link: ./get-started
    - theme: alt
      text: 上手开发
      link: ./begin-coding

features:
  - title: 官方支持
    details: 由 bedrock-stdhub 加载的插件主要依赖由 Microsoft 提供支持的官方 API。
  - title: 快速升级
    details: bedrock-stdhub 对版本并不敏感，理论上可以支持所有的 BDS 版本。
  - title: 跨平台
    details: 得益于 Node.js 的良好兼容性，bedrock-stdhub 是跨平台的。
---

单词 'stdhub' 是 'stdlib' 和 'hub' 的组合。它一方面是加载插件的枢纽 (hub)，另一方面给插件提供了一些所谓的“标准库” (stdlib) 以使插件脱离脚本环境的“沙盒”。

## 我们为什么在这里？

你或许已经听说 MOJANG (更准确地说是 Microsoft) 计划在未来的 BDS 更新中去除 PDB 文件吧。没有 PDB 文件，社区将再也无法深入研究 BDS 二进制文件，这十分令人失望。

罔顾基岩版开发者社区的呼声，MOJANG 拒绝提供完整的 PDB 文件。这激发我们去寻找别的途径，在不改变 BDS 本身的情况下增强 BDS 的功能。而我们给出的解决方案便是 `bedrock-stdhub`。

## 相较前人的优点

传统的增强 BDS 的方式 (例如 [LeviLamina](https://github.com/LiteLDev/LeviLamina)，前身是 LiteLoaderBDS) 已经走上了末路。bedrock-stdhub 有可能在很长一段时间内成为唯一的增强 BDS 的渠道，同时也具有其它的一些优点。

- **官方支持**：bedrock-stdhub 只是提供了一些额外的 API 来让插件 “打破” Scripting 的沙盒环境。由 bedrock-stdhub 加载的插件仍然强烈依赖由 Microsoft 提供支持的官方 API。
- **快速升级**：以前，每当 Minecraft 基岩版的新版本发布，插件开发者和服主都需要等到框架适配新版本才能适配插件和升级服务器。而在这段时间里，那些 Minecraft 基岩版版本被自动升级的玩家就无法在服务器中游玩。然而 bedrock-stdhub 对版本并不敏感，理论上可以支持*所有*的 BDS 版本。因此，因升级而拖延的时间长短就只取决于插件的开发者。一般来讲，以后玩家不会等那么久才能玩到新版本的服务器了。
- **跨平台**：得益于 Node.js 的良好兼容性，bedrock-stdhub 是跨平台的。而传统的解决方案高度依赖平台相关的 PDB 文件来修补 BDS 二进制文件，常常仅限于一种平台。

## 联系 & 加入我们

QQ 群号 [162779544](https://qm.qq.com/cgi-bin/qm/qr?k=jNFTovEpc0WDFtbSbUMrbQ0NyUgDpnCu&jump_from=webapi&authKey=6oBQQeoeB6gA7+AljJK7AV1IUEjkk/HpkvxrBNgAQtpxPtw230h4GQrp56nTw81I)。复制或直接点击来联系我们！
