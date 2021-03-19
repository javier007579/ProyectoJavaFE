const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				],
			},
			{
				test: /\.(scss)$/,
				use: [{
					loader: 'style-loader', // inject CSS to page
				}, {
					loader: 'css-loader', // translates CSS into CommonJS modules
				}, {
					loader: 'postcss-loader', // Run post css actions
					options: {
						plugins: function () { // post css plugins, can be exported to postcss.config.js
							return [
								require('precss'),
								require('autoprefixer')
							];
						}
					}
				}, {
					loader: 'sass-loader' // compiles Sass to CSS
				}]
			},
			{
				test: /\.(png|svg|jpg|gif|ttf|eot)$/,
				use: [
					'file-loader'
				]
			},
			// images and fonts
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/gi,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1000,
						mimetype: 'application/font-woff2'
					}
				}
			},
			{
				test: /\.woff?(\?v=[0-9]\.[0-9]\.[0-9])?$/gi,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1000,
						mimetype: 'application/font-woff'
					}
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			configs: path.resolve(__dirname, 'configs/'),
			src: path.resolve(__dirname, 'src/'),
			App: path.resolve(__dirname)
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new HtmlWebPackPlugin(
			{
				template: "src/index.html",
				filename: "index.html",
				favicon: "assets/favicon.ico"
			}
		)
	]
};