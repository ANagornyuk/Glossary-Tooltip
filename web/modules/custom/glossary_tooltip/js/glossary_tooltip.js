(function ($, Drupal) {
  "use strict";

  Drupal.behaviors.glossaryTooltip = {
    attach: function (context, settings) {
      // Get text content of the node.
      const node_content_el = $('.node__content > .field--name-body > p', context);

      node_content_el.tooltip({
        items: "span.tooltip",
        content: function () {
          let element = $(this);
          let description = element.attr('data-description');
          let url= element.attr('data-link');
          let tooltip= '';

          if (description.length > 100) {
            tooltip = description.slice(0, 100) + '...';
            tooltip += `<a href="${url}">Read more</a>`;
          }
          else {
            tooltip = description;
          }

          return tooltip;
        }
      });
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

      let new_text = text;

      // Go through all glossaries, find it in text, replace to span for tooltip.
      for (let item of glossary_items) {
        let regex = new RegExp(`(\\b${item.name}\\b)`, 'gi');
        let replace_span = `<span class="tooltip" data-description="${item.description}" data-link="${item.url}" tabindex="0">${item.name}</span>`;
        new_text = new_text.replace(regex, replace_span);
      }

      // If content of node has changed, rewrite it.
      if (new_text !== text) {
        node_content_el.html(new_text);
      }

    }
  }

})(jQuery, Drupal);
