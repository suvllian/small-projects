> 基于React构建的Web应用

```
npm install 

npm install packageName

npm run start
```

## 项目目录说明  
```
.
|-- node-end                         // 项目后端代码
|-- src                              // 源码目录
|   |-- action                       // 
|   |-- api                          // 前端数据请求接口
|       |-- index.js                 // 数据请求配置
|       |-- resource.js              // Api函数
|   |-- assets                       // 图片
|   |-- pages                        // 页面组件
|       |-- common                   // 公用组件
|       |-- home                     // 首页
|       |-- login                    // 登录
|       |-- upload                   // 上传
|   |-- reducers                      
|       |-- user.js                  // 用户信息相关数据
|       |-- index.js                
|   |-- configureStore.js            // Store配置
|   |-- index.js                     // 程序入口文件
|   |-- route.js                     // 路由配置
|   |-- types.js                     // redux配置
|-- index.html                       // 程序入口html文件
|-- README.md                        // 项目说明
|-- webpack.config.js                // webpack配置文件
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建
.
```