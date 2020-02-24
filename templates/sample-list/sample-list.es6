"use strict";
/**
 * @file
 * Use this to describe what your behavior does.
 */

(function (document, Drupal, $) {
  Drupal.behaviors.sampleList = {
    attach: function attach(context) {
      $('.sample-list', context).addClass('testing');
    }
  };
})(document, Drupal, jQuery);