# snuen

本や文章を読んで、感じたことや気づいたことを残しておく場所。

仕事に役立ちそうなものも、ただ好きで読んだものも、どちらも同じように記録する。ジャンルは問わない。読んで、書いて、少しずつ積み重ねていく、それだけ。

ObsidianでMarkdownに書き、AstroでWebに公開する。小さくてわかりやすい構成を、これからも大切にしていきたい。

---

## セットアップ

### 必要なもの

- [Obsidian](https://obsidian.md) — 読書記録を書くエディタ
- [mise](https://mise.jdx.dev) — Bunのバージョン管理
- [Bun](https://bun.sh) — パッケージ管理とビルドに使用
- Cloudflareアカウント — デプロイ先

### 手順

**1. リポジトリをクローンする**

```bash
git clone <repository-url>
cd snuen
```

**2. Bunをmiseでインストールする**

Bunのバージョンはプロジェクトルートの `.mise.toml` で管理している。

```bash
mise install
```

**3. 依存パッケージをインストールする**

```bash
bun install
```

**4. ObsidianでこのフォルダをVaultとして開く**

`content/entries/` に読書記録のMarkdownファイルを作って書いていく。

**5. ローカルで確認する**

```bash
bun run dev
```

**6. デプロイする（Cloudflare Pages）**

```bash
bun run build
```

---

## 記録のフォーマット

フロントマターはシンプルに。

```yaml
---
title: ''
author: ''
date: YYYY-MM-DD
status: reading # reading / finished / paused
published: true
---
```

あとは自由に書く。感想でも、引用でも、断片的なメモでも。
