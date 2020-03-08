module.exports = {
    lintOnSave: true,
    devServer: {
        port:8080,
        disableHostCheck: true,
        proxy: {
        // proxy all requests starting with /api to jsonplaceholder
        '/api': {
          target: 'http://127.0.0.1:8889', //代理接口
          changeOrigin: false,
          pathRewrite: {
            '^/api': '/api' //代理的路径
          }
        },
        '/public':{
          target: 'http://127.0.0.1:8889', //代理接口
          changeOrigin: false,
          pathRewrite: {
            '^/public': '/public' //代理的路径
          }
        }
      }
    }
  }