module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          utils: "./utils",
          src: "./src",
          navigation: "./navigation",
          hooks: "./hooks",
          components: "./components",
          assets: "./assets",
          constants: "./constants",
          configs: "./configs",
          styles: "./styles",
          i18n: "./i18n",
          lib: "./lib",
        },
      },
    ],
    ["react-native-reanimated/plugin"],
  ],
};
