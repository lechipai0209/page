# Personal Portfolio Website

個人作品集網站 - PAI LE-CHI（白樂祺）

## 專案簡介

基於 React + Vite 構建的個人作品集網站，展示工作經驗、技術專案和教育背景。支援中英文雙語切換與響應式設計。

## 主要功能

- 雙語支援（中文/英文）
- 響應式設計
- Markdown 內容渲染
- 程式碼語法高亮

## 技術棧

- React 19.1.1
- Vite 7.1.7
- react-markdown
- react-syntax-highlighter

## 快速開始

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建置生產版本
npm run build

# 預覽
npm run preview
```

## 專案結構

```
src/
├── components/          # React 元件
├── contexts/           # Context（語言切換）
├── data/              # 網站內容資料
└── assets/            # 靜態資源
```

## 內容管理

所有內容存儲在 `src/data/content.js`，包括：
- 個人簡介
- 工作經驗
- 個人專案
- 教育背景

## 作者

**PAI LE-CHI（白樂祺）**
- Medium: https://medium.com/@king0209king0209
