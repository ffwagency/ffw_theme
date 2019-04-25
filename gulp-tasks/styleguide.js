/*eslint strict: ["error", "global"]*/
'use strict';

//=======================================================
// Include kss
//=======================================================
var kss = require('kss');

//=======================================================
// Include Our Plugins
//=======================================================
var path = require('path');

// Export our tasks.
module.exports = {

  // Generate the style guide using the top level
  // directory name passed in as a parameter.
  generate: function(dirname) {

    return kss({
      source: [
        dirname + '/components',
        dirname + '/templates'
      ],
      destination: dirname + '/styleguide',
      builder: dirname + '/styleguide/builder',
      namespace: dirname + '/styleguide/',
      'extend-drupal8': true,
      // The css and js paths are URLs, like '/misc/jquery.js'.
      // The following paths are relative to the generated style guide.
      // The all.css file is for the style guide ONLY so you don't have to
      // keep adding the file here everytime you add a new component.
      // Drupal libraries should be leveraged for adding CSS per component.
      css: [
        path.relative(
          dirname + '/styleguide/',
          dirname + '/all/all.css'
        )
      ],
      js: [
      ],
      homepage: dirname + '/styleguide/styleguide.md',
      title: 'Style Guide'
    });
  }
};
