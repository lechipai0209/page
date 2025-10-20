# Personal Portfolio Website

个人作品集网站 - PAI LE-CHI（白樂祺）

## 项目简介

这是一个基于 React + Vite 构建的个人作品集网站，展示了个人的工作经验、技术项目和教育背景。网站支持中英文双语切换，提供响应式设计，适配各种设备。

## 功能特点

- **双语支持**：完整的中英文内容切换
- **响应式设计**：适配桌面端和移动端
- **模块化内容**：清晰的区块划分（关于我、工作经验、个人专案、教育背景）
- **Markdown 渲染**：支持技术博客内容的 Markdown 格式显示
- **代码高亮**：使用 react-syntax-highlighter 展示代码片段

## 技术栈

- **框架**：React 19.1.1
- **构建工具**：Vite 7.1.7
- **依赖库**：
  - react-markdown：Markdown 内容渲染
  - react-syntax-highlighter：代码语法高亮
- **代码规范**：ESLint

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

## 项目结构

```
my-app/
├── src/
│   ├── components/          # React 组件
│   │   ├── Header.jsx       # 页头组件
│   │   ├── AboutMe.jsx      # 关于我
│   │   ├── WorkExperience.jsx   # 工作经验
│   │   ├── SideProjects.jsx     # 个人专案
│   │   ├── Education.jsx        # 教育背景
│   │   └── ProjectNav.jsx       # 项目导航
│   ├── contexts/            # React Context
│   │   └── LanguageContext.jsx  # 语言切换 Context
│   ├── data/                # 数据文件
│   │   └── content.js       # 网站内容数据（中英文）
│   ├── assets/              # 静态资源
│   ├── App.jsx              # 主应用组件
│   ├── main.jsx             # 应用入口
│   └── index.css            # 全局样式
├── public/                  # 公共资源（图片等）
├── index.html               # HTML 模板
├── vite.config.js           # Vite 配置
├── eslint.config.js         # ESLint 配置
└── package.json             # 项目配置
```

## 内容管理

网站的所有文字内容都存储在 `src/data/content.js` 文件中，包含：

- 页头信息（姓名、职位、联系方式）
- 个人简介
- 工作经验（包括项目详情、技术栈、成果）
- 个人专案（Chain-Split、Medium 技术博客、Wordspicker）
- 教育背景与研究经历

如需修改网站内容，直接编辑该文件即可。

## 开发说明

### 添加新的区块

1. 在 `src/components/` 创建新组件
2. 在 `src/data/content.js` 添加对应的数据
3. 在 `App.jsx` 中引入并使用新组件

### 语言切换

网站使用 React Context 管理语言状态，通过 `LanguageContext` 在全局共享当前语言设置。

### 样式管理

每个组件都有对应的 CSS 文件，全局样式定义在 `index.css` 中。

## 浏览器支持

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## 作者

**PAI LE-CHI（白樂祺）**
- GitHub: [链接]
- Email: [邮箱]
- Medium: https://medium.com/@king0209king0209

## 许可证

此项目仅供个人使用。
