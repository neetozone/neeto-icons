const path = require("path");
const fs = require("fs");

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName} } from './${basename}'`;
  });

  const distPath = path.join(__dirname, "dist");
  const folderNames = fs
    .readdirSync(distPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const importStatements = folderNames.map(
    (folderName) =>
      `import * as ${folderName.replace(
        /^./,
        folderName[0].toUpperCase()
      )} from './${folderName}'`
  );

  const exportStatement = `export { ${folderNames
    .map((folderName) => folderName.replace(/^./, folderName[0].toUpperCase()))
    .join(", ")} }`;

  const indexContent = [...importStatements, exportStatement].join("\n");
  fs.writeFileSync(path.join(distPath, "index.ts"), indexContent);

  return exportEntries.join("\n");
}

module.exports = defaultIndexTemplate;
