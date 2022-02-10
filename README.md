#### web 版个人简历项目

技术栈：vite、vue3、jsx、svg 雪碧图、scss、axios 等。

涉及到详细技术点：vite 的摸索使用、jsx of vue3、vue3 新 API、Composition API、自适应与响应式布局、组件通信、通用组件封装、插件封装、svg 使用、状态监听、数据抽离、css 媒体查询、scss 应用、一键换肤功能、代码格式化等。

#### 项目结构

```
|— dist                              // 打包后文件
|— public                            // 存放json静态数据
|— src                               // 开发源代码
|   |— api                           // 抽离出的各接口地址url
|   |— assets                        // 存放静态资源
|   |— components                    // 开发通用组件
|   |   |— Content                   // 文本组件
|   |   |— Header-title              // 段落组件
|   |   |— Line                      // 竖线组件
|   |   |— Tab-title                 // 小标题组件
|   |   |— Title                     // 大标题组件
|   |— content                       // 页面主体内容
|   |   |— mobile                    // 移动端页面
|   |   |   |— components            // 移动端组件
|   |   |   |— index.jsx             // 移动端主页面
|   |   |— pc                        // pc端页面
|   |   |   |— components            // pc端组件
|   |   |   |— index.jsx             // pc端主页面
|   |   |— public                    // pc端何移动端共用组件
|   |— core                          // 项目核心封装库
|   |   |— auth                      // 缓存相关封装
|   |   |— request                   // axios封装
|   |— plugin                        // 插件
|   |   |— icons                     // svg封装
|   |— style                         // css相关
|   |   |— mobile.scss                 // 通用css
|   |   |— index.scss                // 入口css
|   |   |— mixins.scss               // mixins
|   |   |— variable.scss             // css 变量
|   |   |   |— *.scss                // 各个组件css
|   |— views                         // 页面
|   |   |— cartList                  // 购物车相关(未完成)
|   |   |— docker                    // navbar底部组件
|   |   |— home                      // 主页组件
|   |   |— login                     // 登录页面
|   |   |— orderConfirm              // 订单确认组件
|   |   |— orderList                 // 订单列表页面
|   |   |— register                  // 注册组件
|   |   |— shop                      // 店铺组件
|— App.vue                           // 根组件
|— main.js                           // 入口js
|— vue.config.js                     // vuecli配置
|— *略
```

#### 2020-02-07 改版优化

- [x] jsx
- [x] 数据逻辑抽离
- [x] 响应式+自适应 rem
- [x] 夜间模式
- [x] 优化代码组件逻辑
- [x] 优化移动端滚动条

#### 未解决问题

- [ ] 加入新 svg 图标时无法实时热更新
