const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true,
  },
  entry: './Src/app.js',
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    filename: 'scripts/app.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\jpg|jpeg|png|gif|svg$/,
        use:[{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/Assets/Images',
            outputPath: 'Assets/Images'
          }
        }]
      },
      {
        test: /\woff|ttf$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/Assets/Fonts',
              outputPath: 'Assets/Fonts'
            }
          }
        ]
      },
      {
        test: /\webm|mp4$/,
        use:[{
          loader: 'file-loader',
          options: {
            name: 'Assets/Videos/[name].[ext]'
          }
        }]
      },     
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './Src/index.html',
        filename: 'index.html'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './Src/aboutPlaces.html',
        filename: 'aboutPlaces.html'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './Src/booking.html',
        filename: 'booking.html'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './Src/bookingForms.html',
        filename: 'bookingForms.html'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './Src/bookingPlace.html',
        filename: 'bookingPlace.html'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './Src/contact.html',
        filename: 'contact.html'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './Src/placeDetail.html',
        filename: 'placeDetail.html'
      }
    ),
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './Src/aboutUs.html',
        filename: 'aboutUs.html'
      }
    ),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: '[id].css',
    })
  ]
}