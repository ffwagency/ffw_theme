/**
 * @file
 * Use this to describe what your behavior does.
 */
((document, Drupal, $) => {
  Drupal.behaviors.sampleList = {
    attach(context) {
      $('.sample-list', context).addClass('testing');
    },
  };
})(document, Drupal, jQuery);
