const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
		mode: 'production',
		devtool: 'source-map',
		output: {
				path: __dirname + '/build-prod',
				publicPath: '/',
				filename: 'bundle.[hash].js'
		},
		resolve: {
				alias: {
						Config: path.resolve(__dirname, 'configs/config.prod'),
				}
		}
});