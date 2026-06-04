[简体中文](./README.md) | [English](#) | [繁體中文](./README.zh-Hant.md) | [日本語](./README.ja.md) | [Русский](./README.ru.md)

# Gerber Viewer

A Gerber file viewer extension for EasyEDA, supporting RS-274X and Excellon files with multi-layer overlay. The extension can retrieve Gerber files directly from the current PCB and preview them in a built-in viewer, making it easy to verify manufacturing data after design.

> **Note:** This viewer is for reference only and may not display everything correctly. For accurate Gerber viewing, we recommend using JLCPCB DFM, which can be accessed via the top menu: **Design → Check DFM** to push your Gerber files to JLCPCB DFM with a single click.

## Features

- **View PCB Gerber...** — Retrieves Gerber from the current PCB and opens it in the viewer automatically
- **Open Gerber Viewer...** — Opens an empty viewer window for manually loading files

## Getting Started

```bash
git clone https://github.com/easyeda/eext-gerber-viewer.git
cd eext-gerber-viewer
npm install
npm run build
```

Install the generated `.eext` file in EasyEDA to start using the extension.

## License

This project is licensed under [Apache-2.0](https://github.com/easyeda/eext-gerber-viewer/blob/main/LICENSE). EasyEDA is a registered trademark of JLCPCB.
