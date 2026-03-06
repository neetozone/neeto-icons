module.exports = function (api) {
  api.cache(true);

  const presets = [
    ["@babel/preset-env", { modules: false }],
    "@babel/preset-react",
  ];

  const overrides = [];

  if (process.env.BABEL_MODE === "commonjs") {
    overrides.push({
      presets: [["@babel/preset-env", { modules: "commonjs" }]],
      plugins: ["add-module-exports"],
    });
  }

  return {
    sourceMaps: true,
    presets,
    overrides,
  };
};
