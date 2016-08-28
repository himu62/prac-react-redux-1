var webpack = require('webpack');
var path = require('path');

var plugins = [];
if(process.env.NODE_ENV === 'production') {
	plugins = [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	];
}

module.exports = [
	{
		entry: path.join(__dirname, 'script/index.tsx'),
		output: {
			filename: 'bundle.js'
		},
		resolve: {
			extensions: ['', '.tsx', '.ts', '.js']
		},
		module: {
			loaders: [
				{
					test: /\.tsx?$/,
					loader: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		plugins: plugins
	}
];
