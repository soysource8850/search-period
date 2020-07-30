/* eslint-disable import/no-extraneous-dependencies */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default async () => {
  const config = {
    devtool: 'cheap-module-source-map',
    entry: {
      background: './src/background.ts',
      popup: './src/popup.ts',
      content_scripts: './src/content_scripts.ts',
    },
    output: {
      path: `${__dirname}/dist`,
      filename: '[name].js',
    },
    module: {
      rules: [{
        test: /\.html$/i,
        loader: 'html-loader',
      }, {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      }, {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', // 3: Insert`style` tag into HTML
          'css-loader', // 2: Translates CSS into CommonJS
          'sass-loader', // 1: Compiles Sass to CSS
        ],
      },
      {
        test: /\.woff(2)?|ttf|eot|svg|png|jpe?g|gif$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              publicPath: '',
              outputPath: 'data/images',
            },
          },
        ],
      },
      ],
    },
    resolve: {
      extensions: [
        '.ts', '.js',
      ],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: '.',
            to: '',
            context: 'src/public',
          },
        ],
      }),
      new HtmlWebpackPlugin({
        filename: 'data/templates/popup.html',
        template: './src/public/data/templates/popup.html',
        chunks: ['popup'],
      }),
    ],
  };
  return config;
};
