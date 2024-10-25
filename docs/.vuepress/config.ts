import { viteBundler } from "@vuepress/bundler-vite"
import { defaultTheme } from "@vuepress/theme-default"
import { defineUserConfig } from "vuepress"

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  lang: "zh-CN",
  title: "vue3-press",
  description: "vue3-press Component library with Vue3",
  base: "/", // 这是部署到github相关的配置
  markdown: {},
})
