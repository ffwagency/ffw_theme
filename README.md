* version: 0.1.2

# Purpose of 'ffw_theme' project

* Wide discussion, to result in a single FE standard (theme) to be used.

### Benefits

* Easier and more pleasant work in FE department.
* Easy switch between projects. Anyone should be able to work on any project.
* Better quality of the product and personal improvement.

### What could be done?

* Drupal, .NET, and Design (prototype) departments could use single FE 'theme'.
* Single tool for process automation (CSS, JavaScript, style guides etc.), e.g. Grunt.
* Standardized directory structure and more standards (upon discussion). GitLab.

### Who should work on this?

* Everybody could help in the process, but experience in the field is a must.
* We should keep the Design department informed and (probably) listen to them.

### When could this be ready to see in action?

* Depends on the time dedicated to work on this.
* Could be 1st of July 2015 (see previous one). Update: working version is now available

---

# Topics for discussion related to *ffw_theme*

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

# Current software requirements

* git
* node.js
* npm
* grunt 0.4.5
* compass 1.0.3
* sass 3.4.13

---

# Startup guide

* Clone this repo in the desired directory

```
$ git clone git@gitlab.workingpropeople.com:svetlin/prp_theme.git ffw
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

* Install Grunt related stuff

```
$ sudo npm install
```

* Start work

```
$ grunt watch
```

---

# Version history

* 0.1.2 - added "startup guide"
* 0.1.0 - initial structure and files
