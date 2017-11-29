# Welcome to FFW styleguide

## Style guide info

The purpose of this tool is to document style sheets and create living style guide, which could be used by developers, designers and clients.

##### How to read the style guide

The style guide is devided in sections (there is navigation on the left hand side).

Each section contains several elements.

For each element there is title, description, example and html code. In the __example__ box is how the element actually looks.

Below the example box there is the html code for that block.

##### Below are instructions on how to develop and expand the style guide.

* KSS-node is used as a style guide i.e. document style sheets;

* The generated style guide is located in fww-styleguide folder in the root folder of ffw theme;

* To generate(add new elements to the style guide) run in the command line, from the theme root folder:
```grunt kss```

* Visit sitename/path/to/ffw-styleguide/index.html;

* `ffw-styleguide/ffw-template` is a custom builder, which is used to customize the style guide. Currently only logo and favicon are added. Feel free to extend.

* For more info on the kss style guide see [kss-node](https://github.com/kss-node/kss-node);
