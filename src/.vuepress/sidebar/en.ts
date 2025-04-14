import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "使用文档",
      icon: "laptop-code",
      prefix: "docs/",
      link: "docs/",
      children: "structure",
    },
    {
      text: "使用问题",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "官网",
      icon: "person-chalkboard",
      link: "https://www.hulifeng.cn",
    },
  ],
});
