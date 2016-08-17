# FFW FE Theme
* version: 0.1.6

## Current software requirements

* git
* node.js
* npm
* grunt 0.4.5
* sass 3.4.13
* compass 1.0.3

## Startup guide

* Check software requirements (listed above)
* Clone this repo in the desired directory

```
$ git clone git@github.com:ffwagency/ffw_theme.git ffw
```

* Enter the directory

```
$ cd ffw
```

* Checkout the desired branch e.g. drupal7

```
$ git checkout drupal7
```

* IMPORTANT: remove the local repo by removing the .git directory. You do NOT want to commit to this repo.

```
$ rm -rf .git
```

* Install Grunt related stuff as a super user. You might need to change "sudo" according to your OS.

```
$ sudo npm install
```

* Start work

```
$ grunt watch
```

## Style guide

* As a style guide [kss-node](https://github.com/kss-node/kss-node) is used. After installing the node and grunt modules from the above instructions, the style guide is generated with the following command:

```
$ grunt kss
```

* For more info check [kss-node](https://github.com/kss-node/kss-node);

* The style guide is located at /path/to/theme/ffw-styleguide/index.html;

* How to use and create style guide components check the sass files in the theme.

## Tips

* Compare (diff) a single line in git (suitable for compressed CSS)

```
$ git diff --word-diff
```

* If you plan to use SVGs in the project, you should consider using [SVGO](https://github.com/svg/svgo), which is also available as a [Grunt task](https://github.com/sindresorhus/grunt-svgmin). Another solution for images is [Grunticon](https://github.com/filamentgroup/grunticon).

## Version history

* 0.1.6 - added default print styles
* 0.1.5 - added "ellipsis" class and extend (for single line)
* 0.1.4 - added default styles for inputs and buttons
* 0.1.3 - added "clearfix" class and extend
* 0.1.2 - added "startup guide"
* 0.1.0 - initial structure and files

---
---
---


## Purpose of 'ffw_theme' project

* Wide discussion, to result in a single FE standard (theme) to be used.

#### Benefits

* Easier and more pleasant work in FE department.
* Easy switch between projects. Anyone should be able to work on any project.
* Better quality of the product and personal improvement.

#### What could be done?

* Drupal, .NET, and Design (prototype) departments could use single FE 'theme'.
* Single tool for process automation (CSS, JavaScript, style guides etc.), e.g. Grunt.
* Standardized directory structure and more standards (upon discussion). GitLab.

#### Who should work on this?

* Everybody could help in the process, but experience in the field is a must.
* We should keep the Design department informed and (probably) listen to them.

#### When could this be ready to see in action?

* Depends on the time dedicated to work on this.
* Could be 1st of July 2015 (see previous one). Update: working version is now available

## Topics for discussion related to *ffw_theme*

* SASS - we decided to use [Compass](http://compass-style.org/), need training
* Grid system - we decided to use [Susy](http://susy.oddbird.net/), need training
* Automation - we decided to use automation - [Grunt](http://gruntjs.com/), need training
* Drupal, PHP
* CSS reset - NO! CSS normalize, default styling for some elements
* JavaScript and libraries
* Images, icon fonts, fonts
* FE performance optimization
* Documentation and compliance with the standard
* Directory structure
* ...missed something? Please add here!

---
---
---


## Drupal 8 - Debugging, aggregation, cache
* Place custom themes in `[root-dir]/themes/custom`
* Copy and rename the `sites/example.settings.local.php` file to `sites/default/settings.local.php`.

```
cp sites/example.settings.local.php sites/default/settings.local.php
```

* To enable the settings.local.php file - open `settings.php` file in `sites/default` and uncomment these lines:

```
if (file_exists(__DIR__ . '/settings.local.php')) {
   include __DIR__ . '/settings.local.php';
 }
```

* Enable the null cache service by uncommenting this line in `settings.local.php` file:

```
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';
```

* By default - `the settings.local.php` file has CSS and JS Aggregation disabled and if you want to make any changes to this, open the file and change the following to TRUE in these lines:

```
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;
```

* Disabling the render cache and Disabling Dynamic Page Cache. Open `settings.local.php` and uncomment these lines:

```
$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';
```

* Disabling Twig cache - open `development.services.yml` in the `sites` folder and add the following lines:
```
parameters:
    twig.config:
      debug: true
      auto_reload: true
      cache: false
```

* After all these changes - the Drupal cache needs to be rebuilt, otherwise the website will encounter unexpected errors
```
drush cr
```
or visit the following URL on the working website
```
http://website/core/rebuild.php
```

#### Debugging available in core
* The first variant to debug on Drupal 8 is to use {{ dump() }}.
* A better option for debugging is to use {{ kint() }} for a nicer output, e.g.:
```
{{ kint(content) }}
{{ kint(content.field_image }}
```

#### Sharing variables between preprocess functions
* Set the shared variable:
```php
  <?php
  function template_preprocess() {
    $some_variable = &drupal_static('shared_variable');
    if(!isset($some_variable)) {
      $some_variable = 'string or something';
    }
  }
  ?>
```
* Get the shared variable
```php
  <?php function template_preprocess() {
    $vars['define_variable_for_template'] = &drupal_static('shared_variable');
  }
  ?>
```

* Useful tool for development - [Drupal Console](https://www.drupal.org/project/console). Also check [Twig Documentation for Template Designers](http://twig.sensiolabs.org/doc/templates.html) and [Twig Template naming conventions](https://www.drupal.org/node/2354645)
