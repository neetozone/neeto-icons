# neetoIcons

The neetoIcons and neetoIconsRN library are a collection of SVG React component icons that drives
the experience in the neeto products built at BigBinary.

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [How it works](#how-it-works)
- [Instructions for publishing](#instructions-for-publishing)

## Installation

Web:

```
yarn add @bigbinary/neeto-icons
```

React Native:

```
yarn add @bigbinary/neeto-icons-rn
```

### Instructions for development

Check the [Frontend package development guide](https://neeto-engineering.neetokb.com/p/a-d34cb4b0) for step-by-step instructions to develop the frontend package.

#### Adding a new icon to the library

1. **Add the SVG file -**
   Place the SVG file for the new icon in the appropriate folder under the `source` directory. For example:
   - `icons/` for normal icons
   - `logos/` for product logos
   - `typefaceLogos/` for product typeface logos
   - `appIcons/` for app icons
   - `misc/` for miscellaneous icons
   - `elements/` for elements

2. **Name the file appropriately -**
   Use PascalCase for the file name (e.g., `NewIcon.svg`).

3. **Verify the icon -**
   Run the `yarn start` command to verify the React component for the new icon:

### Usage

Web:

```javascript
import { Clock } from "@bigbinary/neeto-icons";
```

React Native:

```javascript
import { Clock } from "@bigbinary/neeto-icons-rn";
```

Anywhere in your React file

```jsx
<Clock color="#1e1e20" size={24} />
```

### Product logos

```javascript
import { Neeto } from "@bigbinary/neeto-icons/logos";
```

### App icons

```javascript
import { NeetoSite } from "@bigbinary/neeto-icons/app-icons";
```

### Props

| Name      | Type           | Default      | Description                                                   |
| :-------- | :------------- | :----------- | :------------------------------------------------------------ |
| color     | string         | currentColor | CSS color value for the icon.                                 |
| size      | string, number | 24           | Value supplied to height and width attributes of SVG element. |
| className | string         |              | Classes supplied to the SVG element.                          |


### Misc icons

```javascript
import { Windows } from "@bigbinary/neeto-icons/misc";
<Windows  size={36} />
```

```javascript
import { Razorpay } from "@bigbinary/neeto-icons/misc";
<Razorpay  width={100}  height={32} />
<Razorpay  width={100}  />
```


### Props

| Name      | Type           | Default      | Description                                                   |
| :-------- | :------------- | :----------- | :------------------------------------------------------------ |
| size      | string, number | 24           | Value supplied to height and width attributes of SVG element. |
| height    | string, number | -            | Value supplied to height attribute of SVG element.            |
| width     | string, number | -            | Value supplied to width attribute of SVG element.             |
| className | string         |              | Classes supplied to the SVG element.                          |


### Typeface logos

```javascript
import { Neeto } from "@bigbinary/neeto-icons/typeface-logos";
```

Anywhere in your React file

```jsx
<Neeto height={24} width={48} />
```

| Name      | Type           | Default | Description                                        |
| :-------- | :------------- | :------ | :------------------------------------------------- |
| height    | string, number | 20      | Value supplied to height attribute of SVG element. |
| width     | string, number | 100%    | Value supplied to width attribute of SVG element.  |
| className | string         |         | Classes supplied to the SVG element.               |



### Elements

```javascript
import { Keyboard } from "@bigbinary/neeto-icons/elements";
```

Anywhere in your React file

```jsx
<Keyboard height={80} width={41} />
```

| Name      | Type           | Default | Description                                        |
| :-------- | :------------- | :------ | :------------------------------------------------- |
| height    | string, number | 26      | Value supplied to height attribute of SVG element. |
| width     | string, number | 80      | Value supplied to width attribute of SVG element.  |
| className | string         |         | Classes supplied to the SVG element.               |



## How it works

- We use a custom rollup plugin (which can be found in `build/index.mjs`) to
  take all the `.svg` files from the `source` folder and convert them to React
  components that render the respective SVG icon.
- The plugin accepts a configuration object as an argument which can contain the
  following keys:

  | Name                    | Type       | Description                                                                                                              |
  | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------ |
  | options                 | `object`   | Options passed to the transform function from react-svgr. (See [full opions list](https://react-svgr.com/docs/options/)) |
  | additionTransformations | `function` | Additional string transformation that can be applied to the generated React code.                                        |
  | source                  | `string`   | Path to the folder where the SVG files are located                                                                       |
  | destination             | `string`   | Path to the folder to place the generated react code                                                                     |

- For each icon, a React icon file will be generated in `generate/icons` folder.
- From there babel through rollup takes the wheel and generates the bundles.

## Instructions for Publishing

Consult the [building and releasing packages](https://neeto-engineering.neetokb.com/articles/building-and-releasing-packages) guide for details on how to publish.
