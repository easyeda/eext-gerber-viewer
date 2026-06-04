[简体中文](#) | [English](./README.en.md) | [繁體中文](./README.zh-Hant.md) | [日本語](./README.ja.md) | [Русский](./README.ru.md)

# Gerber Viewer

一个用于嘉立创EDA的 Gerber 文件查看器扩展，支持 RS-274X 和 Excellon 格式，提供多层叠加显示功能。该扩展可以直接从当前 PCB 获取 Gerber 文件并在内置查看器中预览，方便在设计完成后快速检查制造数据。

> 提示：本查看器仅供参考，不保证完全显示正确，建议使用嘉立创DFM进行Gerber查看，可以通过"顶部菜单 - 设计 - 检查DFM"进行一键推送Gerber给嘉立创DFM。

## 功能

- **查看 PCB Gerber...** — 从当前 PCB 获取 Gerber 文件并自动在查看器中打开
- **打开 Gerber 查看器...** — 打开空的查看器窗口，可手动加载文件

## 快速开始

```bash
git clone https://github.com/easyeda/eext-gerber-viewer.git
cd eext-gerber-viewer
npm install
npm run build
```

将生成的 `.eext` 文件安装到嘉立创EDA中即可使用。

## 许可证

本项目基于 [Apache-2.0](https://github.com/easyeda/eext-gerber-viewer/blob/main/LICENSE) 许可证发布。EasyEDA 是嘉立创EDA的注册商标，归嘉立创所有。
