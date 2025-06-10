import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "我梦的文档",
  description: "我梦的文档",
  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    [
      "link",
      { rel: "icon", href: "/images/favicon.svg", type: "image/svg+xml" },
    ],
  ],
  themeConfig: {
    logo: "/images/favicon.svg",
    outline: { label: "页面导航", level: "deep" },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "动画",
        items: [
          { text: "名侦探柯南", link: "/anime/detective-conan" },
          { text: "魔术快斗", link: "/anime/magic-kaito" },
          { text: "加速世界", link: "/anime/accel-world" },
        ],
      },
      {
        text: "电视剧",
        items: [{ text: "名侦探柯南", link: "/tv/detective-conan" }],
      },
      {
        text: "教程",
        items: [
          { text: "Caddy", link: "/tutorial/caddy" },
          { text: "Linux", link: "/tutorial/linux" },
          { text: "Rclone", link: "/tutorial/rclone" },
        ],
      },
      {
        text: "其他",
        items: [{ text: "摘抄", link: "/other/excerpts" }],
      },
    ],
    sidebar: [
      {
        text: "动画",
        items: [
          { text: "索引", link: "/anime/" },
          { text: "名侦探柯南", link: "/anime/detective-conan" },
          { text: "魔术快斗", link: "/anime/magic-kaito" },
          { text: "加速世界", link: "/anime/accel-world" },
        ],
        collapsed: true,
      },
      {
        text: "电视剧",
        items: [
          { text: "索引", link: "/tv/" },
          { text: "名侦探柯南", link: "/tv/detective-conan" },
        ],
        collapsed: true,
      },
      {
        text: "教程",
        items: [
          { text: "索引", link: "/tutorial/" },
          { text: "Caddy", link: "/tutorial/caddy" },
          { text: "Linux", link: "/tutorial/linux" },
          { text: "Rclone", link: "/tutorial/rclone" },
        ],
        collapsed: true,
      },
      {
        text: "其他",
        items: [
          { text: "索引", link: "/other/" },
          { text: "摘抄", link: "/other/excerpts" },
        ],
        collapsed: true,
      },
    ],
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      },
    },
    docFooter: { prev: "上一页", next: "下一页" },
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    skipToContentLabel: "跳转到内容",
    externalLinkIcon: true,
    notFound: {
      title: "页面未找到",
      quote:
        "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
      linkLabel: "前往首页",
      linkText: "带我回首页",
    },
  },
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
});
