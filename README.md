# ReactApp

## Set up global babel plugins
```
npm install -g babel
npm install -g babel-cli
```


## Generate package.json file
```
npm init
```

## Add dependencies and plugins
```
npm install webpack --save
npm install webpack-dev-server --save
```

## Install React & ReactDOM and add them to package.json
```
npm install react --save
npm install react-dom --save
```

## Install babel plugins
```
npm install babel-core
npm install babel-loader
npm install babel-preset-react
npm install babel-preset-es2015
```

## Create files
```
touch index.html
touch App.jsx
touch main.js
touch webpack.config.js
```

## Set compiler, server & loaders

###webpack.config.js:
```javascript
var config = {
  entry: './main.js',
  output: {
    path:'./',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
module.exports = config;
```

- set webpack entry point to be main.js.
- set development server to 8080 port.
- set babel loaders to search for js files and use es2015 and react presets.

###package.json:
  Replace
  ```
  "test": "echo \"Error: no test specified\" && exit 1"
  ```
  with
  ```
  "start": "webpack-dev-server --hot"
  ```

- *ignore testing for now*
- *'--­­hot' command will add live reload without refreshing the page*

## Running the Server
```
npm start
```
- *open browser & navigate to http://localhost:8080/*
