---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Bedrock StdHub"
  text: "Load plugins elegantly"
  tagline: A completely external 'hub' to load plugins with *unmodified* Bedrock Dedicated Server
  actions:
    - theme: brand
      text: Get Started
      link: ./get-started
    - theme: alt
      text: Begin Coding
      link: ./begin-coding

features:
  - title: Official support
    details: Plugins of bedrock-stdhub mainly relies on official APIs, which is supported by Microsoft.
  - title: Fast update
    details: bedrock-stdhub is not version-sensitive and theoretically supports all versions of BDS.
  - title: Cross-platform
    details: bedrock-stdhub is cross-platform because of the compatibility of Node.js.
---

The word 'stdhub' is a combination of 'stdlib' and 'hub'. This application acts as a 'hub' to load plugins in form of behavior packs and provides plugins with a set of so-called 'standard libraries' for Server-side behavior packs to break out of the 'sandbox' of Scripting environment.

## Why are we here?

You probably have heard that MOJANG (or Microsoft, more accurately) plans to remove PDB files in future BDS releases. It is such a disappointing move that the community is never able to dive into BDS binaries anymore.

Despite the calls of the Bedrock community, MOJANG refuses to provide full PDB files. This motivated us to find other ways to enhance BDS without modifying it. And our solution is `bedrock-stdhub`.

## Advantages over traditional solutions

Sadly, traditional ways to enhance BDS (e.g. [LeviLamina](https://github.com/LiteLDev/LeviLamina) a.k.a. LiteLoaderBDS) has reached their end. While bedrock-stdhub may become the only solution for a long time in the future, it still boasts some other advantages.

- **Official support**: bedrock-stdhub just provides some additional APIs for plugins to 'break out of' the Scripting sandbox. Plugins loaded by bedrock-stdhub still strongly relies on official APIs, which is supported by Microsoft.
- **Fast update**: Previously, when a new version of _Minecraft: Bedrock Edition_ is released, plugin developers and server maintainers had to wait until framework maintainers adapt their framework to the new release, and during this period, those whose Minecraft copies were automatically updated were not able to play on the server. However, bedrock-stdhub is not version-sensitive and theoretically supports _all_ versions of BDS, so the delay only depends on plugin developers. Generally, players will wait for a shorter time until they are able to play on the server.
- **Cross-platform**: bedrock-stdhub is cross-platform because of the compatibility of Node.js, while traditionally solutions, which rely on platform-dependent PDB files to patch BDS binaries, is often only available on one platform.

## Ecosystem

Honestly, **ZERO** till now.

We know that what makes a good plugin framework are not only its powerful features, but also its vibrant ecosystem. You are welcome to join us through the link below, or just write your own plugin. We are currently working on our own plugin bundler and a new package registry site.

## Contact & join us

The QQ group number is [162779544](https://qm.qq.com/cgi-bin/qm/qr?k=jNFTovEpc0WDFtbSbUMrbQ0NyUgDpnCu&jump_from=webapi&authKey=6oBQQeoeB6gA7+AljJK7AV1IUEjkk/HpkvxrBNgAQtpxPtw230h4GQrp56nTw81I). Copy or click to contact us.
