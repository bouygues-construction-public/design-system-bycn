# The Overview

BYCN Design System helps to build Bouygues Construction products faster, more efficiently and more sustainably. Taking into account the user, the context, the needs and the best practices is and must be at the heart of design at Bouygues Construction

# Project structure

```
design-system-bycn/
    angular.json
    package.json
    ...
    projects
        components/
            src/
                lib/
        css/
            config/
            presets/
            src/
                components/
                design_tokens/
                utilities/
        showcases/
            css/
            icons/
            components/
```

# Local development

## NPM commands

```sh
# Clone the `design-system-bycn`
git clone https://github.com/bouygues-construction/design-system-bycn
cd design-system-bycn

# Install dependencies
npm i

# build packages
## The CSS
npm run build:css
## The Showcases
npm run build-storybook
## The components
npm run build

# start storybook
## the components
npm run start:components-storybook
## the css
npm run start:css-storybook
## the icons
npm run start:icons-storybook

# Deploying to Chromatic
npm run chromatic
# Deploying to NPM
npm pulish --access public
```

For your information, here are the showcases' URLs:

| Showcase   | URL                                     |
| ---------- | --------------------------------------- |
| CSS        | [localhost:6006](http://localhost:6006) |
| Components | [localhost:6008](http://localhost:6007) |
| Icons      | [localhost:6007](http://localhost:6008) |

## Starting new component

Here are the checklist when starting to develop new components:

⬜️ Initial new css style for component in **/projects/css/src/components**\
⬜️ Initial new component in **/projects/components/src** and import component' style\
⬜️ Write component' showcase\
⬜️ When finised, merge the component's branch into **develop** and publish to chromatic for Designers to review 

# Code contributing

The development of Design System will follow this workflow:

1. Create a branch with the name match with the ticket (**DTB-100/my-feature**)
2. Create code, `Commit` it and `Push the code`.
3. Create a Github `Pull Request` to the **develop** branch (which contain on developed component)

_Note: Tickets on Jira will be automatically move to the next state by Github actions._

# Design Resources

You could find more detail about the Design on [Figma](https://www.figma.com/files/project/88423584/BYCN-DESIGN-SYSTEM)

About the Design Documentation, visit [Zero Height](https://zeroheight.com/9b39bb2a0/p/17ca27-get-started)
