# `@masoni/icons`

> Bouygues Construction Design System - Masoni icons library

## Install package

```sh
npm i -S @masoni/icons
```

## Usage

Once you have installed this package, you just have to import CSS styles!

Insert `@masoni/icons` in Your Angular App by Updating the angular.json

```json
"styles": [
    "node_modules/@masoni/icons/dist/css/filled/index.css",
    "node_modules/@masoni/icons/dist/css/outlined/index.css"
    "src/styles.css",
],
```

With a bundler that supports CSS imports in JS files:

```javascript
import '@masoni/icons/dist/css/filled/index.css';
import '@masoni/icons/dist/css/outlined/index.css';
```

Otherwise include it in your HTML file:

```html
<link rel="stylesheet" href="./node_modules/@masoni/icons/dist/css/filled/index.css" />
<link rel="stylesheet" href="./node_modules/@masoni/icons/dist/css/outlined/index.css" />
```

For all Masoni icons available, you could visit [here](https://bouygues-construction.github.io/design-system-bycn/main/showcase-icons). Click on the icon you want to copy the icon class.

### External image

Once you have installed this package, you can use `@masoni/icons` by reference via `<img>` element.

```html
<img src="/node_module/@masoni/icons/dist/svg/.svg" alt="" width="32" height="32" />
```

### Icon classes

Icon fonts with classes for every icon are also included. Include the icon web fonts in your page via CSS (`./node_modules/@vtmn/icons/dist/vitamix/css/mas-icons.css`), then reference the class names as needed (e.g. `mas-align-center-vertical-simple` for the `home-fill` icon) in your HTML.

Use `font-size` and `color` to change the icon appearance.

If your icon is followed by a text:

```html
<span aria-hidden="true" class="mas-home-filled"> </span> Homepage
```

If your icon is alone:

```html
<span aria-label="Homepage" class="mas-home-filled"> </span>
```