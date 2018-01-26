var path = require('path'),
	webpack = require('webpack');

var commonLoaders = [
	{test:/\.js$/,loader:'babel',exclude:'/node_modules/'},
	{test:/\.jsx$/,loader:'babel',exclude:'/node_modules/'},
	// { 
    //     test: /\.css$/, 
    //     loader: "style!css",
    //     include: __dirname,
	//   },
	{test: /\.css$/, loader: 'style!css?module&localIndentName=[hash:base64:5]&-url'},
	 {test:/\.scss$/,loader:'style!css!autoprefixer!sass'},
	
];

var path = path.resolve(__dirname,'views/build');

module.exports = {
	entry:[
		'./views/js/components/entry.js'
	],

	output:{
		path:path,
		filename:'build.js'
	},
	module:{
		loaders:commonLoaders
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	resolve:{
		extensions:['','.js','.scss']
	},
	babel:{
		presets:['es2015','react']
	}
};