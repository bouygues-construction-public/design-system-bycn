# Components

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Code scaffolding

Run `ng generate component component-name --project components` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project components`.

> Note: Don't forget to add `--project components` or else it will be added to the default project in your `angular.json` file.

## Install package

After installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), you can install `@masoni/components` with this command:

```sh
npm i -S @masoni/components
```

## Usage

When we're starting to use `@masoni/components`, we have to install components package and its style through **npm**.

```sh
npm i --save @masoni/components @masoni/css @masoni/icons
```

Once you have installed, insert `@masoni/css` and `@masoni/icons` in Your Angular App by Updating the **angular.json**. For more detail, you could check out [the usage of @masoni/css](https://github.com/bouygues-construction/design-system-bycn/blob/merge/projects/css/README.md) and [the usage of @masoni/icons](https://github.com/bouygues-construction/design-system-bycn/blob/merge/projects/icons/README.md)

All components will be prefixed with `mas-`, to see all the available components, check out [here](https://bouygues-construction.github.io/design-system-bycn/main/showcases-components/?path=/docs/overview-introduction--documentation) for more information.

## Build

Run `ng build components` to build the project. The build artifacts will be stored in the `projects/components/dist/` directory.

## Publishing

After building your library with `ng build components`, go to the dist folder `cd projects/components` and run `npm publish`.

## Running unit tests

Run `ng test components` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
