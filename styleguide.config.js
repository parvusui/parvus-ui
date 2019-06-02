const path = require("path");

module.exports = {
  title: "parvus-ui",
  components: "src/**/[A-Z]*.js",
  theme: {
    baseBackground: "#fdfdfc",
    linkHover: "#90a7bf",
    header: "linear-gradient(180deg, #00868b 0%, #5f9ea0 35%)",
    sidebar: "linear-gradient(180deg, #5f9ea0 0%, #F0FFFF 35%)",
    border: "#e0d2de",
    font: ["Helvetica", "sans-serif"]
  },
  styles: {
    Playground: {
      preview: {
        paddingLeft: 0,
        paddingRight: 0,
        borderWidth: [[0, 0, 1, 0]],
        borderRadius: 0
      }
    },
    Markdown: {
      pre: {
        border: 0,
        background: "none"
      },
      code: {
        fontSize: 14
      }
    }
  },
  // Override Styleguidist components
  styleguideComponents: {
    StyleGuideRenderer: path.join(
      __dirname,
      "styleguide/components/StyleGuide"
    ),
    SectionsRenderer: path.join(
      __dirname,
      "styleguide/components/SectionsRenderer"
    )
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader?modules"
        },
        {
          test: /\.svg$/,
          loader: "url-loader"
        }
      ]
    }
  }
};
