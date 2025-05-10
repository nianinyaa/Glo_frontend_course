const path = require("path"); // из node

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js", // путь к точке входа - можно относительный
  output: {
    filename: "js/main.js", // путь к точке выхода - только абсолютный!
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    hot: true,
    static: {
      directory: "./dist",
      watch: true,
    },
  },
};
// метод resolve объединяет 2 пути
