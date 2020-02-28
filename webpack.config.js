const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => ({
    entry: { app: "./src/main.ts" },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        host: "localhost",
        open: true,
        port: 4300,
        hot: true,
        historyApiFallback: false
    }
});
