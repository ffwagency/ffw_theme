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
    'preprocess' => false,
  ));
  // Add our custom JS in footer, after all other JS.
  drupal_add_js(path_to_theme() . '/compiled/script.js', array(
    'scope' => 'footer',
    'weight' => 999,
    'preprocess' => false,
  ));
}

/**
 * Alter CSS files before they are output on the page.
 */
function ffw_css_alter(&$css) {
  // Remove Drupal core CSS.
  $exclude = array(
    'modules/aggregator/aggregator.css' => false,
    'modules/block/block.css' => false,
    'modules/book/book.css' => false,
    'modules/comment/comment.css' => false,
    'modules/dblog/dblog.css' => false,
    'modules/field/theme/field.css' => false,
    'modules/file/file.css' => false,
    'modules/filter/filter.css' => false,
    'modules/forum/forum.css' => false,
    'modules/help/help.css' => false,
    'modules/menu/menu.css' => false,
    'modules/node/node.css' => false,
    'modules/openid/openid.css' => false,
    'modules/poll/poll.css' => false,
    'modules/profile/profile.css' => false,
    'modules/search/search.css' => false,
    'modules/statistics/statistics.css' => false,
    'modules/syslog/syslog.css' => false,
    'modules/system/admin.css' => false,
    'modules/system/maintenance.css' => false,
    'modules/system/system.css' => false,
    'modules/system/system.admin.css' => false,
    'modules/system/system.maintenance.css' => false,
    'modules/system/system.messages.css' => false,
    'modules/system/system.menus.css' => false,
    'modules/system/system.theme.css' => false,
    'modules/taxonomy/taxonomy.css' => false,
    'modules/tracker/tracker.css' => false,
    'modules/update/update.css' => false,
    'modules/user/user.css' => false,
    'misc/vertical-tabs.css' => false,
    drupal_get_path('module', 'views') . '/css/views.css' => false,
  );
  $css = array_diff_key($css, $exclude);
}
