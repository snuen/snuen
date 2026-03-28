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

**6. ビルドする**

```bash
bun run build
```

---

## デプロイ

デプロイ先は Vercel を使う。
デフォルトブランチへの push で自動デプロイされる。
必要であれば、Vercel CLI から手動で本番デプロイすることもできる。

### 初回ログイン

```bash
bunx vercel login
```

### 本番デプロイ

プロジェクトルートで次を実行する。

```bash
bunx vercel --prod
```

`--prod` を付けることで、本番環境にデプロイされる。
必要に応じてローカルで `bun run build` して確認してから実行すると安心。

---

## 記録のフォーマット

フロントマターはシンプルに。

```yaml
---
title: ""
book_title: ""
author: ""
date: YYYY-MM-DD
published: true
---
```

`title` はエントリ自体の見出し、`book_title` は読んだ本や文章のタイトル。

必要に応じてオプションフィールドも使える: `tags`, `cover`, `amazon_url`, `isbn`, `started_at`, `finished_at`

あとは自由に書く。感想でも、引用でも、断片的なメモでも。
