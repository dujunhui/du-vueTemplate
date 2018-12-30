# dujunhui

> A Vue.js project

## Build Setup

```文件目录结构
-- src
    -- api.js                      # 请求文件 
    -- assets                      # 私有资源
    -- common                      # 通用组件
    -- components                  # 业务组件
    -- directives                  # 自定义事件
    -- config                      # 环境变量配置
        -- env.js                  # 环境变量文件
        -- http.js                 # 封装axios文件
    -- pages                       # 页面维度
        -- pageA                   # 页面A
            -- pageA.vue           # 页面A单文件
            -- pageA-components    # 页面A下的一个组件
            -- children            # 子页面
    -- router                      # 路由
        -- index.js                # 路由入口
        -- routes.js               # 路由配置信息
    -- store                       # vuex
        -- modules                 # vuex模块
        -- index.js                # vuex入口
    -- utils                       # js通用方法
    -- App.vue                     # 顶层单文件
    -- main.js                     # 入口
```

```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
