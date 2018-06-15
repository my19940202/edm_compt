let plugins = [];
var webpack = require('webpack');
if (process.argv.indexOf('-p') > -1) {
    // 编译成生产版本
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));
}
module.exports = {
    entry: {
        index: __dirname + "/src/index",
    },
    output: {
        filename: '[name].js',
        path: __dirname + "/dist"
    },

    // webpack dev server
    devServer: {
        host: '0.0.0.0',
        port: 8899,
        inline: true,
        progress: true,
        stats: {
            colors: true
        }
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js", ".jsx", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.jsx?$/, loader: "babel-loader" },
            { 
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    plugins: plugins
};