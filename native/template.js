const template = (variables, { tpl }) => tpl`
${variables.imports};

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const ${variables.componentName} = ({ size = 24, color = "#344054", ...props }: IconProps) => (
  ${variables.jsx}
);

export default ${variables.componentName};
`;

module.exports = template;
