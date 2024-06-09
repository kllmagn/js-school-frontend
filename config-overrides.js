const { override, fixBabelImports, adjustStyleLoaders, addLessLoader, addWebpackModuleRule } = require('customize-cra');
const path = require('path');

module.exports = override(
    /*
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    */
    // add less-loader
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@background-color-main': 'white',
                '@background-color-primary': '#515151',
                '@background-color-secondary': '#f5f5f5',
                '@button-color-primary': '#5AD77D',
                '@button-color-secondary': '#515151',
                '@button-color-warning': 'orange',
                '@button-color-danger': 'crimson',
                '@button-height-small': '40px',
                '@button-height-medium': '55px',
                '@button-height-large': '70px',
                '@font-color-primary': 'black',
                '@font-color-secondary': 'white',
                '@link-color': '#e6a07c',
                '@font-size-large': '36px',
                '@font-size-medium': '32px',
                '@font-size-small': '24px',
                '@font-size-mini': '18px',
                '@font-size-micro': '16px',
            }
        }
    }),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
        const postcssOptions = {...postcss.options };
        postcss.options = { postcssOptions };
    }),
);
