/* =========================================================
   网站内容配置文件 —— 想改内容只改这个文件，不用动 index.html
   保存后刷新网页即可生效
   =========================================================

   【放照片】
   1. 把照片复制到 photos/ 文件夹（文件名建议用英文/数字，如 001.jpg）
   2. 下面把 photo: "..." 改成 "photos/001.jpg"

   【换音乐】
   把歌转成 mp3，重命名为 music.mp3，放进 music/ 文件夹

   【相册结构：场景 → 照片】
   一个场景 = 一段时间/一次事件（一次旅行、一个季节、一场生日……）
   每个场景写在 SCENES 里，包含日期、场景名和若干照片；
   每张照片只填两个字段：photo（文件）和 title（照片标题）。
   ========================================================= */

/* 说明：下面的 window.XXX = ... 这种写法是故意的，
   网页靠它读取内容，请保持这种写法不要改成 const。 */

/* ---------- 基本信息 ---------- */
window.CONFIG = {
  sinceDate: "2024-11-14",       // 在一起的日子
  sinceText: "2024.11.14",       // 显示用的写法
  annivDate: "2026-11-14",       // 两周年日期
  annivText: "两周年",
  kicker: "OUR SECOND YEAR",
  albumTitle: "这一年，我们一起走过",
  letterTitle: "写给正在努力的小云朵",
  sign: "—— 小康",
  stampText: "两周年<br>快乐",
  /* ---- 暗号门 ----
     passcodeHash 是暗号加密后的哈希值（看不出原暗号）。
     想换暗号：把新暗号告诉我，我帮你生成新的哈希值替换。 */
  passcodeHash: "96fc9e0ca2906b6c0f01a57f421c8ac8f0cd9f234ace79ce594f03901a8a2722",
  passcodeHint: "输入咱们的纪念日 💌(示例20240908)",
};

/* ---------- 场景（按时间顺序，想要几个就复制几段） ----------
   下面两个是示例，换成你们的照片后删掉即可。 */
window.SCENES = [
  {
    date: "2025.11",
    title: "今年的故事从颐和路开始",
    photos: [
      { photo: "photos/01.jpg", title: "村口张大爷" }, // ← 换成 "photos/xxx.jpg"
      { photo: "photos/02.jpg", title: "鸿运当头！" },
      { photo: "photos/03.jpg", title: "注意看，镜子里的这个女人叫小美" },
      { photo: "photos/04.jpg", title: "侵犯大树中" },
      { photo: "photos/05.jpg", title: "许的救赎" },
      { photo: "photos/06.jpg", title: "电报员小许" },
      { photo: "photos/07.jpg", title: "一鸣代言人" },
    ],
  },
  {
    date: "2025.11",
    title: "和小云朵去游乐场",
    photos: [
      { photo: "photos/08.jpg", title: "到欢乐谷啦" }, // ← 换成 "photos/xxx.jpg"
      { photo: "photos/09.jpg", title: "竟然还有水族馆！" },
      { photo: "photos/10.jpg", title: "和小许坐摩天轮" },
      { photo: "photos/11.jpg", title: "一只自恋的许" },
      { photo: "photos/12.jpg", title: "征服最恐怖过山车！" },
      { photo: "photos/13.jpg", title: "小许送我的周年礼物嘻嘻" },
    ],
  },
  {
    date: "2025.11",
    title: "看电影啦",
    photos: [
      { photo: "photos/14.jpg", title: "到达！" }, // ← 换成 "photos/xxx.jpg"
      { photo: "photos/15.jpg", title: "开始啦" },
      { photo: "photos/16.jpg", title: "看完了" },
      { photo: "photos/17.jpg", title: "铜锅涮肉，猛猛炫" },
    ],
  },
  {
    date: "2025.12",
    title: "秋游栖霞山",
    photos: [
      { photo: "photos/19.jpg", title: "栖霞山" }, // ← 换成 "photos/xxx.jpg"
      { photo: "photos/20.jpg", title: "扁平的小康和小许" },
      { photo: "photos/21.jpg", title: "虔诚的许" },
      { photo: "photos/22.jpg", title: "依旧合照" },
      { photo: "photos/23.jpg", title: "886" },
    ],
  },
  {
    date: "2026.01",
    title: "和小许第二次跨年",
    photos: [
      { photo: "photos/25.jpg", title: "爱你小许年年见" },
      { photo: "photos/26.jpg", title: "可爱的小许同学" },
      { photo: "photos/27.jpg", title: "喜庆的许" },
      { photo: "photos/28.jpg", title: "合照*1" },
      { photo: "photos/24.jpg", title: "合照*2" }, // ← 换成 "photos/xxx.jpg"
    ],
  },
  {
    date: "2026.01",
    title: "2026年的第一场雪",
    photos: [
      { photo: "photos/29.jpg", title: "三哥来了" }, // ← 换成 "photos/xxx.jpg"
      { photo: "photos/30.jpg", title: "雪下的御风园" },
      { photo: "photos/31.jpg", title: "小康♥小许" },
    ],
  },
  {
    date: "2026.02",
    title: "放寒假啦",
    photos: [
      { photo: "photos/32.jpg", title: "裹得严严实实的小许" }, // ← 换成 "photos/xxx.jpg"
      { photo: "photos/33.jpg", title: "小许前往九寨沟珍贵影像" },
      { photo: "photos/34.jpg", title: "情人节快乐宝贝！" },
    ],
  },
  {
    date: "2026.03",
    title: "回学校咯",
    photos: [
      { photo: "photos/35.jpg", title: "豆橛子" }, // ← 换成 "photos/xxx.jpg"
      { photo: "photos/36.jpg", title: "樱花树下你和我" },
      { photo: "photos/37.jpg", title: "运动风小许" },
    ],
  },
  {
    date: "2026.04",
    title: "二游玄武湖",
    photos: [
      { photo: "photos/38.jpg", title: "采花大盗小许" }, // ← 换成 "photos/xxx.jpg"
      { photo: "photos/39.jpg", title: "坏坏的小许" },
      { photo: "photos/40.jpg", title: "合照*1" },
      { photo: "photos/41.jpg", title: "合照*2" },
      { photo: "photos/42.jpg", title: "合照*3" },
    ],
  },
  {
    date: "2026.05",
    title: "看电影啦",
    photos: [
      { photo: "photos/43.jpg", title: "小许送的蛋白粉" }, // ← 换成 "photos/xxx.jpg"
      { photo: "photos/44.jpg", title: "520" },
      { photo: "photos/45.jpg", title: "去拼豆" },
      { photo: "photos/46.jpg", title: "大功告成！" },
    ],
  },
  {
    date: "2026.06",
    title: "小许小康游西湖",
    photos: [
      { photo: "photos/51.jpg", title: "情侣装" }, // ← 换成 "photos/xxx.jpg"
      { photo: "photos/52.jpg", title: "西湖" },
      { photo: "photos/53.jpg", title: "西湖醋鱼" },
    ],
  },
  {
    date: "2026.08",
    title: "常常见！",
    photos: [
      { photo: "photos/54.jpg", title: "幸福的康" }, // ← 换成 "photos/xxx.jpg"
      { photo: "photos/55.jpg", title: "两个人已经吃的不知天地为何物了" },
      { photo: "photos/56.jpg", title: "地锅鸡！" },
    ],
  },
];

/* ---------- 飘过的云朵/爱心带出的小情话 ----------
   换成你们俩的梗，效果最好 */
window.WISHES = [
  "今天也想你",
  "你是最棒的",
  "上岸上岸！",
  "云朵最爱小康",
  "累了就歇一会儿",
  "我在呢",
  "两周年快乐",
];

/* ---------- 最后一封信（\n 是换行） ---------- */
window.LETTER =
`小云朵：

两周年快乐。

备考辛苦了。

希望你所愿皆成，事事顺心。

我爱你。`;
