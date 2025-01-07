const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Adjust this if your entry point is different
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Add other loaders if needed
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map', // Optional: Generates source maps for easier debugging
};
