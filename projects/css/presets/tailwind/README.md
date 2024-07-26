# `@masoni/css-tailwind-preset`

> Bouygues Design System - Masoni CSS Tailwind preset

## Install package

After installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), you can install `@mas/css-tailwind-preset` with this command:

```sh
npm i -S @mas/css-tailwind-preset
```

## Install fonts

[Raleway](https://fonts.google.com/specimen/Raleway) &
[Inter](https://fonts.google.com/specimen/Inter) fonts as described in [Textstyles](https://zeroheight.com/9b39bb2a0/p/32c8aa-textstyles/b/1922ad).

## TailwindCSS v3

```js
module.exports = {
  presets: [require('@mas/css-tailwind-preset')],
  theme: {
    colors: {
      current: 'currentColor',
    },
  },
};
```

Then import files inside your CSS entry point:

```css
@import 'tailwindcss/base'; /* import base CSS classes from Tailwind CSS (optional) */
@import '@mas/css-design-tokens/dist/index.css'; /* import Masoni design tokens CSS classes (required) */
@import '@mas/css-utilities/dist/index.css'; /* import Masoni utilities CSS classes (required) */
@import 'tailwindcss/components'; /* import components CSS classes from Tailwind CSS (optional) */
@import 'tailwindcss/utilities'; /* import utilities CSS classes from Tailwind CSS (optional) */
@import 'tailwindcss/screens'; /* import screens CSS classes from Tailwind CSS (optional) */
@import '@mas/css/dist/components.css'; /* import Masoni components CSS classes (required) */
```

_You will need a plugin to understand `@import` statements. If you use PostCSS, you can use [postcss-import](https://www.npmjs.com/package/postcss-import)._

For more details about Tailwind presets, [see Tailwind CSS documentation about presets here](https://tailwindcss.com/docs/presets).

Important: our Tailwind CSS preset has a prefix in order to avoid conflicts with existing Tailwind CSS project. So, to use our library, you will have to prefix all CSS utility classes with `mas-`.

To know all the use cases and their associated code, [check out the showcase here](https://bouygues-construction.github.io/design-system-bycn/main/showcases-css).

For example:

```html
<div class="mas-flex mas-bg-brand-digital-light-3 mas-rounded-lg mas-p-6 mas-mb-5">
  <p class="mas-text-xl mas-text-center mas-font-semibold mas-text-black">
    Hello
    <span class="mas-text-brand-digital mas-text-2xl">World!</span>
    <span role="img" aria-label="Welcome menu"> 🎉 </span>
  </p>
</div>
```

For more details about CSS utility classes from this package, [see Tailwind CSS documentation here](https://tailwindcss.com/docs).

## I have a issue, what should I do?

Please file the issue [here](https://github.com/bouygues-construction/design-system-bycn/issues/new).

## Contributing

See [the contribuiting docs](https://github.com/bouygues-construction/design-system-bycn/blob/dangkhoa/project-initialize/CONTRIBUTING.md)

## License

© [BYCN](https://github.com/bouygues-construction)
