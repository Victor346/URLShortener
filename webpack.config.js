const path = require('path');

module.exports = {
    entry: {
        main:  path.resolve(__dirname, './resources/app.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};