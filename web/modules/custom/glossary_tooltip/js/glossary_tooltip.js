(function ($, Drupal) {
  "use strict";

  Drupal.behaviors.glossaryTooltip = {
    attach: function (context, settings) {
      // Get text content of the node.
      const node_content_el = $('.node__content > .field--name-body > p', context);
      let text = node_content_el.text();

      // If no content, nothing to do here.
      if (!text) {
        return;
      }

      let glossary_items = settings.glossaryItems;

      // If no glossary items, nothing to do here.
      if (glossary_items.length === 0) {
        return;
      }

      // Go through all glossaries, find it in text, replace to span for tooltip.
      for (let item of glossary_items) {
        item.name;

      }




    }
  }

})(jQuery, Drupal);
