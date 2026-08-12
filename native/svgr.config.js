const template = require("./template");

module.exports = {
  typescript: true,
  template,
  svgProps: {
    width: "{size}",
    height: "{size}",
  },
  replaceAttrValues: generateReplaceAttrValues(),
  svgoConfig: {
    plugins: [
      {
        name: "removeViewBox",
        active: false,
      },
      {
        name: "removeDimensions",
        active: true,
      },
      {
        name: "prefixIds",
        params: {
          delim: "_",
          prefixIds: true,
          prefixClassNames: true,
        },
      },
      {
        name: "removeXMLNS",
        active: true,
      },
      {
        name: "removeAttrs",
        params: {
          attrs: ["data-figma-.*", "filter"],
        },
      },
    ],
  },
};

function generateReplaceAttrValues() {
  const colorValues = [
    "#344054",
    "#68737D",
    "#49545C",
    "#323232",
    "#2F3941",
    "#276EF1",
    "#BB121A",
    "#107154",
    "#4B2876",
    "#87929D",
    "#F3CD82",
    "#00BA88",
    "#F56A58",
    "#121212",
    "#0C111D",
    "#1D2939",
    "#2D36D4",
    "#101828",
    "#1A1A1A",
    "#191919",
    "#3E4040",
    "currentColor",
  ];

  return colorValues.reduce((result, value) => {
    result[value] = "{color}";
    return result;
  }, {});
}
