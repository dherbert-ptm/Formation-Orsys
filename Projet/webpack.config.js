const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    devtool:false,
    entry:'./src/index.js',
    output: {
        filename:'bundle.js',
    },
    module: {
        rules : [
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    {
                    loader : 'css-loader',
                    options:{
                        modules:true,
                    },
                }],

            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
