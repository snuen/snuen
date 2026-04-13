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
date: YYYY-MM-DD
published: true
sources:
  - book_title: ""
    author: ""
    # amazon_url: ""   # 書籍の場合
    # url: ""          # Web記事の場合
    # cover: ""        # 書影URLがあれば
---
```

`title` はエントリ自体の見出し。ソース情報は `sources` 配列にまとめる。複数の書籍・記事を扱う場合は配列に要素を追加する。

あとは自由に書く。感想でも、引用でも、断片的なメモでも。

---

## Claude Code スキル

Claude Code を使っている場合、読書記録の執筆を補助するスキルが利用できる。

### reading-record-composer — 自分で書きたいとき

構成の提案と問いかけをしてくれるスキル。文章は自分で書く。

- **書く前**: 本のタイトルや感想のメモを渡すと、どんな構成で書くかを提案してくれる
- **書いている途中**: 詰まったところを伝えると、先に進むための問いを返してくれる
- **書いた後**: 下書きを渡すと、足りない視点や改善できる箇所を教えてくれる

### reading-record-draft-creator — 下書きから始めたいとき

手元にあるメモや気になった部分をそのまま渡すと、MDXファイルを作成してPRを出してくれるスキル。自分で磨く前の「叩き台」を作るのに使う。
