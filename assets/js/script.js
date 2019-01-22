/**
 * @file
 * FFW FE theme custom JS.
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.feThemeExample = {
    attach: function (context, settings) {
      console.log('Hello work!');
    }
  };

}(jQuery, Drupal));
