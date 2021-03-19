const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		compress: true,
		port: 8080,
		historyApiFallback: true
	},
	resolve: {
		alias: {
			Config: path.resolve(__dirname, 'configs/config.local'),
		}
	}
});