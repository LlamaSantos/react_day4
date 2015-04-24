module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  externals: {
    'firebase' : 'Firebase',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?experimental&optional=runtime' }
    ]
  }
};
