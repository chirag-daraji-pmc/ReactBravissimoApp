var path = require("path");

var config = {
   entry: './src/main.js',
	
   output: {
       
      path: path.resolve(__dirname, "public"),
      publicPath: 'http://localhost:8088/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8088
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
console.log(path.resolve(__dirname, "public"))
module.exports = config;