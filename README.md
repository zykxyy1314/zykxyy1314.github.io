# 给小云朵的两周年

奶油手账风的二周年纪念网站：拆信封 → 倒计时 → 场景相册 → 一封信。

## 本地看效果

直接双击 `index.html` 用 Chrome/Edge 打开即可（无需启动任何服务）。

## 怎么改内容（不用碰代码）

所有内容都在 `memories.js` 里，用记事本或 VS Code 打开，照着注释改：

| 想改什么 | 怎么改 |
|---|---|
| 照片 | 复制到 `photos/` 文件夹，改 `memories.js` 里每条的 `photo` 字段 |
| 相册场景 | `SCENES` 列表：一段 = 一个场景（日期 + 场景名 + 照片们），照片只填 `photo` 和 `title` |
| 飘过的小情话 | 改 `WISHES` 列表（换成你们俩的梗最好） |
| 最后一封信 | 改 `LETTER`（`\n` 表示换行） |
| 落款 | 改 `CONFIG.sign` |
| 背景音乐 | 找一首歌转成 mp3，重命名为 `music.mp3` 放进 `music/` 文件夹 |

## 部署（到时候找我，我一步步带你在阿里云 OSS 上操作）

把 `index.html`、`memories.js`、`photos/`、`music/` 整个上传到阿里云 OSS 的 Bucket，开启静态网站托管，她就能用一个网址随时随地打开了。

## 文件结构

```
website/
├── index.html      网站本体（不用动）
├── memories.js     所有内容（改这个）
├── photos/         放照片
└── music/          放 music.mp3
```
