/**
 * @file
 * Exposed Views filters behaviors.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Auto-hide summary textarea if empty and show hide and unhide links.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches auto-hide behavior on `text-summary` events.
   */
  Drupal.behaviors.customCKEditorConfig = {

    attach: function (context, settings) {
      if (typeof CKEDITOR !== "undefined") {
        CKEDITOR.dtd.$removeEmpty['i'] = 0;
        CKEDITOR.dtd.$removeEmpty['span'] = 0;
        console.log(CKEDITOR.dtd);
      }
    }

  };

})(jQuery, Drupal);
