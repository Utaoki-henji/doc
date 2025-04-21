import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  "/docs/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "question/",
    children: [
      {
        text: "手机端",
        icon: "lightbulb",
        prefix: "mobile/",
        children: [ { text: "安卓端常见问题", icon: "lightbulb", link: "android" },{ text: "ios端常见问题", icon: "lightbulb", link: "ios" }],
      },
      {
        text: "桌面端",
        icon: "lightbulb",
        prefix: "pc/",
        children: [ { text: "win7常见问题", icon: "lightbulb", link: "win7" },{ text: "win10常见问题", icon: "lightbulb", link: "pc" }],
      },
    ],
  }
]);
