module.exports = {
    configureWebpack: {
        output: {
            library: 'singleVue', //类库名字(这样就会将包含bootstrap,mount,unmount打包后的umd格式的类库挂载到window的singleVue属性上)
            libraryTarget: 'umd' //模式
        },
        devServer: {
            port: 10000
        },
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