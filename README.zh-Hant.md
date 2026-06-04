[简体中文](./README.md) | [English](./README.en.md) | [繁體中文](#) | [日本語](./README.ja.md) | [Русский](./README.ru.md)

# Gerber Viewer

一個用於嘉立创EDA的 Gerber 檔案檢視器擴充功能，支援 RS-274X 與 Excellon 格式，提供多層疊加顯示功能。此擴充功能可以直接從目前的 PCB 取得 Gerber 檔案並在內建檢視器中預覽，方便在設計完成後快速檢查製造資料。

> 提示：本查看器僅供參考，不保證完全顯示正確，建議使用嘉立创DFM進行Gerber查看，可以透過「頂部選單 - 設計 - 檢查DFM」進行一鍵推送Gerber給嘉立创DFM。

## 功能

- **檢視 PCB Gerber...** — 從目前 PCB 取得 Gerber 檔案並自動在檢視器中開啟
- **開啟 Gerber 檢視器...** — 開啟空的檢視器視窗，可手動載入檔案

| 功能介面 | Gerber檢視 |
| --- | --- |
| ![alt text](images/image1.png) | ![alt text](images/image2.png) |

## 快速開始

```bash
git clone https://github.com/easyeda/eext-gerber-viewer.git
cd eext-gerber-viewer
npm install
npm run build
```

將產生的 `.eext` 檔案安裝到嘉立创EDA中即可使用。

## 授權條款

本專案採用 [Apache-2.0](https://github.com/easyeda/eext-gerber-viewer/blob/main/LICENSE) 授權條款發布。EasyEDA 為嘉立创的註冊商標。
