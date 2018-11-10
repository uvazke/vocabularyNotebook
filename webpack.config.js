module.exports = {
	mode: "development",
	entry: './src/',
	output: {
		path: __dirname+"/dist",
		filename: 'bundle.js'
	},
	module: {
    rules: [
      {
        resource: {
          test: /\.jsx?$/,
          exclude: /node_modules/
        },
        use: ["babel-loader"]
      }
    ]
  }
}
