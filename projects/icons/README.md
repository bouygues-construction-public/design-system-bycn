# `@masoni/icons`

> Bouygues Construction Design System - Masoni icons library

## Install package

```sh
npm i -S @masoni/icons
```

## Usage

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
<span aria-hidden="true" class="vtmx-home-fill"> </span> Homepage
```

If your icon is alone:

```html
<span aria-label="Homepage" class="vtmx-home-fill"> </span>