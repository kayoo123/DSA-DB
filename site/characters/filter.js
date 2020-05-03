/**
 * Filter.js is a jQuery plugin that enables simple element filtering based on terms.
 * The functionality is similar to isotope, but without layouts and very bare bones.
 *
 * @name filter.js
 * @version 1.0.0
 * @requires jQuery v1.9.2+
 * @author Tom Maitland
 * @license Apache v2 License
 *
 * For docs, visit:
 * https://github.com/tommaitland/filter.js
 *
 * Copyright (c) 2013, Tom Maitland
 *
 * Modified by Feyda for filtering options - 2014
 */

(function ($) {

    "use strict";
 
    $.fn.filter = function (options) {
 
        var defaults = {
            nav: '[data-filter]', //
			navcolor:'[data-filter-color]'
        }

        var $this = this,
            settings = $.extend(defaults, options),
            $target = $(settings.target),
            selected = [],
            selectedcolor = [];

        return this.each( function() {
            
            var $element = $(this);

            $(settings.nav).each( function() {

                $(this).click( function(event) {

                    // add selected class
                    $(this).toggleClass('selected');

                    // manipulate selected terms array
                    if ($.inArray($(this).data('filter'), selected) < 0) {
                        selected.push($(this).data('filter'));
                    } else {
                        var index = $.inArray($(this).data('filter'), selected);
                        selected.splice(index, 1);
                    }
                    
                    // show/hide elements
                    $element.find('[data-filter-tags]').each( function() {

                        var terms = $(this).data('filter-tags').split(','),
                            show = null;

						if (selectedcolor.length > 0) {
							for (var icolor=0;icolor<selectedcolor.length;icolor++) {
								for (var i=0;i<selected.length;i++) {
									show = ($.inArray(selected[i], terms) >= 0 && $.inArray(selectedcolor[icolor], terms) >= 0);
									if (show) break;
								}
								if (show) break;
							}
						} else {
							for (var i=0;i<selected.length;i++) {
								show = ($.inArray(selected[i], terms) >= 0);
								if (show) break;
							}
						}
						
                        if (show || selected.length == 0) {
                            $(this).fadeIn();
                        } else {
                            $(this).fadeOut();
                        }
                    });

                    event.preventDefault();

                });

            });
			
            $(settings.navcolor).each( function() {

                $(this).click( function(event) {

                    // add selectedcolor class
                    $(this).toggleClass('selected');

                    // manipulate selectedcolor terms array
                    if ($.inArray($(this).data('filter-color'), selectedcolor) < 0) {
                        selectedcolor.push($(this).data('filter-color'));
                    } else {
                        var index = $.inArray($(this).data('filter-color'), selectedcolor);
                        selectedcolor.splice(index, 1);
                    }
                    
                    // show/hide elements
                    $element.find('[data-filter-tags]').each( function() {

                        var terms = $(this).data('filter-tags').split(','),
                            show = null;

						if (selected.length > 0) {
							for (var icolor=0;icolor<selectedcolor.length;icolor++) {
								for (var i=0;i<selected.length;i++) {
									show = ($.inArray(selected[i], terms) >= 0 && $.inArray(selectedcolor[icolor], terms) >= 0);
									if (show) break;
								}
								if (show) break;
							}
						} else {
							for (var i=0;i<selectedcolor.length;i++) {
								show = ($.inArray(selectedcolor[i], terms) >= 0);
								if (show) break;
							}
						}

                        if (show || selectedcolor.length == 0) {
                            $(this).fadeIn();
                        } else {
                            $(this).fadeOut();
                        }
                    });

                    event.preventDefault();

                });

            });
        });
 
    };
	
 
 
}(jQuery));
