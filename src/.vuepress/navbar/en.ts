import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/portfolio",
  "/docs/",
  {
    text: "常见问题",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "桌面端",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "手机端",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
