const path = require('path')
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, './src/styles/params.scss')
            ]
        }
    },
    devServer: {
        port: process.env.VUE_APP_PORT,
        proxy: {
            [process.env.VUE_APP_PUBLIC_URL]: {
                target: 'http://localhost:7001',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_PUBLIC_URL]: '/'
                }
            }
        }
    }
}
