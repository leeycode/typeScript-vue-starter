## TypeScript-vue-Starter

## Start

```shell
npm install
npm run dev
npm run build
```

## keywords
```
Webpack 4.0+
Typescript 3.7+
Eslint 6.0+
Vue 2.0+
Babel 7.0+

```

## 项目结构

```
├── /@types/                     # 全局类型声明
├── /build/                      # webpack配置文件
├── /src/                        # 源码目录
│ ├── /assets/                   # 静态资源目录
│ ├── /components/               # 公共组件目录
│ ├── /constants/                # 项目constants目录
│ │ ├── _const.less              # less常量
│ ├── /pages/                    # UI组件目录
│ ├── /services/                 # 请求服务目录
│ ├── /router/                   # 路由目录
│ ├── /store/                    # 存放store文件目录
│ ├── /style/                    # 全局样式
│ ├── /utils/                    # utils目录
│ │ ├── request.ts               # 基于fetch封装的API请求工具
│ │ ├── global.ts                # 公共方法库
│ └── index.tsx                  # 项目入口
|——tsconfig.json                 # ts配置
|——...
```
