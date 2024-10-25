# 项目介绍
- vue3-press 基于VuePress研发的前端vue3组件库

## 本地开发指南

#### 安装依赖
`npm install`

#### 运行项目
`npm run docs:dev`

#### 构建项目
`npm run docs:build`

## 常见问题

#### 拉取项目时如果出现如下报错：

- git clone https://github.com/josephxin/vue3-press.git
- fatal: unable to access 'https://github.com/josephxin/vue3-press.git/': Failed to connect to github.com port 443 after 75004 ms: Couldn't connect to server
- 通过以下命令解决

```sh
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
```
