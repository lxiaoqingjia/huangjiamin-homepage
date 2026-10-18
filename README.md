# 黄嘉敏个人主页

这是一个使用 HTML、CSS 和少量 JavaScript 制作的单页个人主页，面向老师、同学和招聘者，重点展示黄嘉敏当前的图像生成研究方向、实验与论文写作。实习和本科项目作为支撑经历呈现。

## 本地运行

在当前文件夹打开终端后运行：

```bash
python -m http.server 8765
```

然后访问 `http://127.0.0.1:8765/`。

也可以直接双击 `index.html` 预览页面。使用本地服务器更适合检查导航链接和脚本行为。

## 文件说明

- `index.html`：页面内容和结构
- `styles.css`：橙灰视觉主题、卡片、布局和响应式样式
- `script.js`：移动端菜单、导航高亮和页脚年份
- `assets/`：项目视觉素材，以及用于教育经历展示的学校 PNG 标识
- 实验报告草稿单独保存，避免将学号等报告信息公开到 GitHub Pages

## 发布到 GitHub Pages

1. 在 GitHub 创建一个公开仓库，例如 `personal-homepage`。
2. 将本文件夹中的 `index.html`、`styles.css`、`script.js`、`favicon.svg` 和 `assets/` 一并上传到仓库根目录。实验报告单独提交，不要上传到公开网页仓库。
3. 在仓库的 `Settings → Pages` 中选择 `Deploy from a branch`。
4. 选择 `main` 分支和 `/ (root)` 文件夹后保存。
5. 等待部署完成，访问：

```text
https://你的用户名.github.io/personal-homepage/
```

发布前请再次确认网页中没有学号、手机号、旧邮箱和不能公开的实习数据。
