const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
            },
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-typescript"],
                        presets: ['@babel/preset-env'],
                    }
                }
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        library: 'watermark',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'lib'),
        clean: true,
    },
}
