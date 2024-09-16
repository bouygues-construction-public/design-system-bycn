# `@masoni/css`

> Bouygues Design System - Masoni global CSS styles library

## Install package

After installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), you can install `@masoni/css` with this command:

```sh
npm i -S @masoni/css
```

## Install fonts

[Raleway](https://fonts.google.com/specimen/Raleway) &
[Inter Tight](https://fonts.google.com/specimen/Inter+Tight) fonts as described in [Textstyles](https://zeroheight.com/9b39bb2a0/p/32c8aa-textstyles/b/1922ad).

## Usage

Once you have installed this package, you just have to import CSS styles!

With a bundler that supports CSS imports in JS files:

```javascript
import '@masoni/css/dist/index.css';
```

Otherwise include it in your HTML file:

```html
<link rel="stylesheet" href="./node_modules/@masoni/css/dist/index.css" />
```

## Development

To know all the use cases and their associated code, [check out the showcase guidelines here](#).

For example:

```html
<p style="color: var(--mas-primitive-color_red500)">Hello World!</p>
```

You can see the different CSS Custom Properties [here](https://github.com/bouygues-construction-public/design-system-bycn/tree/develop/projects/css/src/design_tokens).

CSS Variables naming as following rules:

- prefix with `--mas`.
- have foundation name.

For example:\
`--mas-`_*foundation-name*_\__variable_

## I have a issue, what should I do?

Please file the issue [here](https://github.com/bouygues-construction-public/design-system-bycn/issues/new).

## Contributing

See [the contribuiting docs](https://github.com/bouygues-construction-public/design-system-bycn/blob/develop/CONTRIBUTING.md)

## License

© [BYCN](https://github.com/bouygues-construction)
