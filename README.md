# Headless 前端交接

使用 Astro、React 和 Mock Data 製作的前端交接模板。

## 預覽

開啟 [線上預覽](https://kuchou.github.io/headless-template/)，即可查看文章列表、內頁和切頁效果。

需要離線預覽時，開啟 [preview.html](./preview.html)，點 **Download raw file**，再用瀏覽器開啟下載的檔案。

## 本機開發

使用 Node.js 22.12 以上版本。在專案資料夾安裝套件並啟動開發伺服器，再開啟終端機顯示的網址。

```sh
npm install
npm run dev
```

需要檢查或建置時，可在另一個終端機執行這些指令。

| 指令 | 用途 |
| --- | --- |
| `npm run check` | 檢查 Astro 和 TypeScript。 |
| `npm run build` | 建置靜態網站，輸出到 `dist/`。 |
| `npm run preview` | 建置完成後，在本機預覽 `dist/`。 |

## 檔案結構與元件

| 位置 | 用途 |
| --- | --- |
| `src/pages/` | 首頁 `/` 和文章內頁 `/articles/<slug>/`。 |
| `src/layouts/SiteLayout.astro` | 共用版型，切頁時只淡入淡出中間內容。 |
| `src/components/` | <ul><li><code>Navbar.tsx</code>：導覽列</li><li><code>Footer.tsx</code>：頁尾</li><li><code>ArticleIndex.tsx</code>：文章列表</li><li><code>ArticleCard.tsx</code>：單張文章卡片</li><li><code>ArticleDetail.tsx</code>：文章內頁</li></ul> |
| `src/data/articles.ts` | 文章型別、Mock Data 和取資料的函式。 |
| `src/styles/site.css`、`public/fonts/` | 共用樣式與字型。 |

## 串接 CMS API

在 [articles.ts](./src/data/articles.ts) 的 `listArticles()` 接入 CMS API，將回傳資料轉成 `Article`，包含 `slug`、`title`、`excerpt`、`publishedAt` 和 `content`。首頁和內頁共用這個函式，文章更新後重新建置即可。
