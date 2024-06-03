/**
 * @file
 * Exposed Views filters behaviors.
 */

(function ($) {

  'use strict';

  /**
   * Auto-hide summary textarea if empty and show hide and unhide links.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches auto-hide behavior on `text-summary` events.
   */
  Drupal.behaviors.updateViewsExposedFilterStyles = {
    attach: function (context, settings) {
      $(context).find('.view .form-item label').once('checkboxes-1').each(function () {
        var $inputField = $(this).find('input');
        if($inputField.prop('checked') == true) {
          $(this).addClass('checkbox-checked');
        }

      });

      $(context).find('#main-content').once('view-manual-context').each(function () {
        // submit the ajax form imediately if
        var urlPath = window.location.pathname.split('/')

        if(urlPath.length >= 2 && urlPath[2] != '' && $.isNumeric(urlPath[2]) ) {
          //$('#edit-tid-'+urlPath[2]).mousedown();
          //.prop('checked', true);
          //$("form#views-exposed-form-photos-page-1").submit();
          //console.log(settings.ajax);
        }
      });




    }
  };

})(jQuery);
