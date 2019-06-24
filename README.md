# dujunhui

> vue自定义模板

## Build Setup

```文件目录结构
-- src
    -- api
       -- api.js                   # 请求文件 
    -- assets                      # 共用的样式、icon图片等
    -- common                      # 通用组件
    -- config                      # 环境变量配置
        -- env.js                  # 环境变量文件
        -- http.js                 # 封装axios文件
    -- directives                  # 自定义事件
    -- mixin                       # 公共方法
    -- router                      # 路由
        -- index.js                # 路由入口
        -- routes.js               # 路由配置信息
    -- sass                        # sass文件
    -- services                    # 业务逻辑层 
    -- store                       # vuex
        -- modules                 # vuex模块
        -- index.js                # vuex入口
    -- utils                       # js通用方法
    -- views                       # 页面维度
        -- pageA                   # 页面A
            -- pageA.vue           # 页面A单文件
            -- pageA-components    # 页面A下的一个组件
            -- children            # 子页面
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

[demo.html](http://du-vue.inweihai.com)
