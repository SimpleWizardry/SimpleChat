const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#743090',
                            '@layout-body-background': '#fd4198',
                            '@layout-header-background': '#fd4198',
                            '@layout-header-height': '100px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};