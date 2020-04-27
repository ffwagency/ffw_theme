> Theme generated with [Yeoman theme generator](https://github.com/svetlin-ffw/yo-drupal-theme-generator)

## Getting Started

### Browser Support
Autoprefixer & Babel is set to support:

* IE >= 10
* Last 3 versions of modern browsers.

These can be updated at any time within the `package.json`.

### Run the following commands from the theme directory
If you haven't yet, install nvm:
https://github.com/creationix/nvm

#### Use the right version of node with:
`nvm use`

_This command will look at your `.nvmrc` file and use the version node.js specified in it. This ensures all developers use the same version of node for consistency._

#### If that version of node isn't installed, install it with:
`nvm install`

#### Install npm dependencies with
`npm install`

_This command looks at `package.json` and installs all the npm dependencies specified in it.  Some of the dependencies include gulp, autoprefixer, gulp-sass and others._

#### Lint files
`npm run lint` is the global lint script which runs all scripts below.

`lint:scss:components`
`lint:scss:theme`
`lint:js:components`
`lint:js:theme`
`lint:scss`
`lint:js`

#### Build CSS, JS files from source and create sprite
`npm run build`

_This will run `build:css:components, build:css:theme, build:js:components, build:js:theme, build:sprite` scripts and will generate the corresponding files._

#### Compiles Sass
`npm run build:css`
_This will perform a one-time Sass compilation in `templates` and `components` folders._

Separate scripts for are available for components and theme components:
`build:css:components`
`build:css:theme`

#### Watch JS files
`npm run watch:js` - is the global lint script which runs all scripts below.

`watch:js:components`
`watch:js:theme`

_This is ideal when you are doing a lot of ES6 file changes and you want to make sure every time a change is saved it automatically gets compiled to JS_

#### Watch SCSS files
`npm run watch:scss`

_This is ideal when you are doing a lot of Sass changes and you want to make sure every time a change is saved it automatically gets compiled to CSS_

Separate scripts for are available for components and theme components:
`watch:scss:components`
`watch:scss:theme`

#### Cleans compiled files
`npm run clean:components`
`npm run clean:theme`
`npm run clean:styleguide`

_This will perform a one-time deletion of CSS and JS compiled files within the `templates`, `components` and `styleguide/styles` directories._