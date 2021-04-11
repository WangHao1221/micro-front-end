module.exports = {
    devServer: {
        port: 10000,
        headers: {
            'Access-Control-Allow-Origin': '*' //允许跨域
        }
    },
    configureWebpack: {
        output: {
            library: 'vueApp',
            libraryTarget: 'umd'
        }
    },
    chainWebpack: (config) => {
        config.module
            .rule('fonts')
            .use('url-loader')
            .loader('url-loader')
            .options({})
            .end()
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .options({})
            .end()
    }
}