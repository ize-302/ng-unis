import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
import TerserPlugin from 'terser-webpack-plugin';

export default {
  mode: 'production', // Set to 'production' to enable minification
  entry: './src/index.js', // Your main entry point (adjust if needed)
  module: {
    rules: [
      {
        test: /\.js$/, // Target JavaScript files
        exclude: /node_modules/, // Exclude node_modules from transpiling
        use: {
          loader: 'babel-loader', // Use Babel loader for JavaScript files
          options: {
            presets: ['@babel/preset-env'] // Babel preset for modern JavaScript
          }
        }
      },
      {
        test: /\.json$/, // Target JSON files
        type: 'json' // This is the default type for JSON files
      }
    ]
  },
  experiments: {
    outputModule: true
  },
  output: {
    libraryTarget: 'module',
    filename: 'index.js', // Output file name
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  optimization: {
    minimize: true, // Enable minimization
    minimizer: [
      new TerserPlugin({ // Minify JavaScript using Terser
        terserOptions: {
          compress: {
            drop_console: true // Optional: remove console logs
          }
        }
      })
    ]
  },
  resolve: {
    extensions: ['.js', '.json'] // Resolve these extensions
  }
};
