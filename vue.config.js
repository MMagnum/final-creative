// vue.config.js
module.exports = {
    // options...
    devServer: {
        useLocalIp: false,
        public: '13.59.190.179:8080',
        disableHostCheck: true,
        proxy: {
            '^/api': {
                target: 'http://13.59.190.179:3000',
            },
        },
    }
}