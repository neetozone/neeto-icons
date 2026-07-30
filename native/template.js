const template = (variables, { tpl }) => {
  const imports = variables.imports.filter(
    (node) => !(node.importKind === "type" && node.source?.value === "react-native-svg")
  );

  return tpl`
${imports};

import type { IconProps } from "../../types";

const ${variables.componentName} = ({ size = 24, color = "#344054", ...props }: IconProps) => (
  ${variables.jsx}
);

export default ${variables.componentName};
`;
};

module.exports = template;
