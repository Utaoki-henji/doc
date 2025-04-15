import { sidebar } from "vuepress-theme-hope";

export default sidebar({
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
      text: "常见问题",
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
