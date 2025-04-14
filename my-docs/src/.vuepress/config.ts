import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "弘建通使用说明文档",
      description: "文档包含功能使用指引，常见问题说明等，与用户端使用相关说明。",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "弘建通使用说明文档",
    //   description: "文档包含功能使用指引，常见问题说明等，与用户端使用相关说明。",
    // },
  },

  theme,
  // :hopeTheme({
  //   darkmode:"auto",// 或 "toggle", "auto", "enable", "disable"
  // })

  // Enable it with pwa
  // shouldPrefetch: false,
});
