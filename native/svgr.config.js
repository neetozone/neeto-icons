module.exports = {
  svgProps: {
    width: "{props.size}",
    height: "{props.size}",
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
    ],
  },
};

function generateReplaceAttrValues() {
  const colorValues = [
    "#68737D",
    "#49545C",
    "#323232",
    "#00BA88",
    "#F56A58",
    "#BB121A",
    "#4B2876",
    "#2F3941",
    "#276EF1",
    "#107154",
    "#fff",
    "#87929D",
    "#F3CD82",
  ];

  return colorValues.reduce((result, value) => {
    result[value] = "{props.color}";
    return result;
  }, {});
}
