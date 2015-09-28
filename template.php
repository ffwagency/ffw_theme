<?php
/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728096
 */

/**
 * Override or insert variables into the html template.
 */
function ffw_preprocess_html(&$vars) {
  // Add our custom CSS after all other CSS.
  drupal_add_css(path_to_theme() . '/compiled/styles.css', array(
    'weight' => 999,
    'preprocess' => FALSE
  ));
  // Add our custom JS in footer, after all other JS.
  drupal_add_js(path_to_theme() . '/compiled/script.js', array(
    'scope' => 'footer',
    'weight' => 999,
    'preprocess' => FALSE
  ));
}
