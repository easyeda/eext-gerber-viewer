[简体中文](./README.md) | [English](./README.en.md) | [繁體中文](./README.zh-Hant.md) | [日本語](#) | [Русский](./README.ru.md)

# Gerber Viewer

EasyEDA 用の Gerber ファイルビューア拡張機能です。RS-274X および Excellon 形式に対応し、多層オーバーレイ表示をサポートしています。現在の PCB から直接 Gerber ファイルを取得し、内蔵ビューアでプレビューできるため、設計完了後に製造データを簡単に確認できます。

> **注意:** 本ビューアは参考用であり、表示が完全に正確であることを保証するものではありません。正確な Gerber 表示には JLCPCB DFM のご利用をお勧めします。トップメニュー **デザイン → DFM チェック** からワンクリックで Gerber を JLCPCB DFM に送信できます。

## 機能

- **PCB Gerber を表示...** — 現在の PCB から Gerber を取得し、自動的にビューアで開きます
- **Gerber ビューアを開く...** — 空のビューアウィンドウを開き、手動でファイルを読み込めます

## はじめに

```bash
git clone https://github.com/easyeda/eext-gerber-viewer.git
cd eext-gerber-viewer
npm install
npm run build
```

生成された `.eext` ファイルを EasyEDA にインストールしてご使用ください。

## ライセンス

本プロジェクトは [Apache-2.0](https://github.com/easyeda/eext-gerber-viewer/blob/main/LICENSE) ライセンスの下で公開されています。EasyEDA は嘉立创の登録商標です。
