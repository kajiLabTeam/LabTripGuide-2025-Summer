# 🗻 飛騨高山研究室旅行 - 旅のしおり

このプロジェクトは、2025年夏の飛騨高山研究室旅行のための美しいWebサイトです。AstroとTailwind CSSを使用して作成されており、**Markdownファイルで簡単に編集**できます。

## 🚀 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが起動したら、ブラウザで `http://localhost:4321` にアクセスしてください。

## 📝 編集方法

### 🎯 簡単な編集方法

HTMLを直接編集する必要はありません！以下のMarkdownファイルを編集するだけで、Webサイトの内容を変更できます：

#### 1. 基本情報の編集
```bash
src/content/trip/info.md
```

このファイルで以下の情報を編集できます：
- 旅行のタイトル
- サブタイトル
- 日付
- 場所
- 参加者
- 交通手段
- 背景画像URL
- タグ

#### 2. スケジュールの編集
```bash
src/content/trip/schedule.md
```

このファイルで以下の情報を編集できます：
- 一日目のスケジュール
- 二日目のスケジュール
- 各時間の詳細
- リンク情報

#### 3. 観光スポットの編集
```bash
src/content/trip/spots.md
```

このファイルで以下の情報を編集できます：
- 観光スポットの名前
- 説明
- アイコン
- リンク
- カテゴリ

### 📁 プロジェクト構造

```
hidatakayama-web-book/
├── src/
│   ├── content/
│   │   ├── trip/
│   │   │   ├── info.md          # 基本情報
│   │   │   ├── schedule.md      # スケジュール
│   │   │   └── spots.md         # 観光スポット
│   │   └── config.ts            # コンテンツ設定
│   ├── layouts/
│   │   └── Layout.astro         # メインレイアウト
│   ├── pages/
│   │   └── index.astro          # メインページ
│   └── styles/
│       └── global.css           # Tailwind CSS
├── public/
│   └── favicon.svg              # ファビコン
└── docs/                        # 元のMarkdownファイル
    ├── スケジュール.md
    └── 観光地まとめ.md
```

## 🎨 機能

- 📅 詳細なスケジュール表（Markdownで編集可能）
- 🏛️ 観光スポット情報（Markdownで編集可能）
- ℹ️ 基本情報と注意事項（Markdownで編集可能）
- 📱 レスポンシブデザイン
- 🎯 スムーズなナビゲーション
- 🎨 美しいアニメーション効果

## 🛠️ 技術スタック

- **Astro** - 静的サイトジェネレーター
- **Tailwind CSS** - スタイリング
- **TypeScript** - 型安全性
- **Markdown** - コンテンツ管理

## 📝 編集例

### 基本情報の編集例

```markdown
---
title: "飛騨高山研究室旅行"
subtitle: "2025年夏の思い出作り"
date: "2025-08-04"
location: "岐阜県飛騨市・高山市"
participants: "研究室メンバー"
transportation: "車"
duration: "2日間"
heroImage: "https://example.com/image.jpg"
tags: ["自然", "グルメ", "文化", "友情"]
---
```

### スケジュールの編集例

```markdown
# 一日目

## 13:00 - スーパーカミオカンデ集合
- **参加者**: 全員
- **詳細**: 宇宙線を可視化する世界的施設
- **リンク**: https://example.com
```

### 観光スポットの編集例

```markdown
## 高山市街
- **アイコン**: 🏘️
- **説明**: 古い街並みと美味しいご飯が楽しめる場所
- **リンク**: https://example.com
- **カテゴリ**: 街並み
```

## 🚀 デプロイ

```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに生成されます。

## 📝 ライセンス

このプロジェクトは研究室旅行用に作成されています。
