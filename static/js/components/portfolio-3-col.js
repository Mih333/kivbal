// Portfolio
var Portfolio = function() {
  'use strict';

  // Handle Portfolio
  var handlePortfolio = function() {
    $('#js__grid-portfolio-gallery').cubeportfolio({
      filters: '#js__filters-portfolio-gallery',
      layoutMode: 'grid',
      mediaQueries: [{
        width: 1500,
        cols: 12
      }, {
        width: 1100,
        cols: 12
      }, {
        width: 800,
        cols: 6
      }, {
        width: 480,
        cols: 4
      }, {
        width: 320,
        cols: 3
      }],
      defaultFilter: '*',
      gapHorizontal: 2,
      gapVertical: 2,
      gridAdjustment: 'responsive',
      caption: ' ',

      // lightbox
      lightboxDelegate: '.cbp-lightbox',
      lightboxGallery: true,
      lightboxTitleSrc: 'data-title',
    });
  }

  return {
    init: function() {
      handlePortfolio(); // initial setup for Portfolio
    }
  }
}();

$(document).ready(function() {
  Portfolio.init();
});