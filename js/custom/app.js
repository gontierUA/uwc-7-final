;(function($, document, window, undefined) {
    "use strict";

	$(document).ready(function() {

        [{
            name: 'sortable',
            pull: false,
            put: true
        },
            {
                name: 'sortable',
                pull: true,
                put: false
            }, {
            name: 'sortable',
            pull: true,
            put: false
            }, {
                name: 'sortable',
                pull: true,
                put: false
            }, {
                name: 'sortable',
                pull: true,
                put: false
        }].forEach(function (groupOpts, i) {
                Sortable.create(document.getElementById('sortable-' + (i + 1)), {
                    sort: (i == 0),
                    group: groupOpts,
                    animation: 150
                });
            });

        $('.js-tab-trigger').on('click', function(e) {
            e.preventDefault();

            $('.js-tag-trigger.active').removeClass('active');

            $('.js-tab-trigger.active').removeClass('active');
            $(this).addClass('active');

            $('.tab-content.active .tags-content').removeClass('hidden visible');

            $('.tab-content.active').removeClass('active');
            $('.tab-content[data-tab-content="' + $(this).attr('href') + '"]').addClass('active');

            $('.tags-list.active').removeClass('active');
            $('.tags-list[data-show-tags="' + $(this).attr('href') + '"]').addClass('active');
        });

        $('.js-tag-trigger').on('click', function(e) {
            var $activeTab = $('.tab-content.active');
            e.preventDefault();

            $(this).toggleClass('active');

            if ($(this).closest('.tags-list').find('.active').length === 0) {
                $activeTab.find('.tags-content').removeClass('hidden visible');
            } else {
                $activeTab.find('.tags-content').removeClass('hidden visible');

                $(this).closest('.tags-list').find('.active').each(function() {
                    $activeTab.find('.tags-content[data-tag-content="' + $(this).attr('href') + '"]').addClass('visible');
                });

                $activeTab.find('.tags-content').not('.visible').addClass('hidden');
            }
        });
	});

    $('.js-content-turn').on('click', function(e) {
        e.preventDefault();
        $('#slideContent').slideToggle();
    });

    $('.js-mobile-menu-trigger').on('click', function(e) {
        e.preventDefault();
        $('.primary-menu').slideToggle();
    });

    $('.js-show-popup').on('click', function(e) {
        e.preventDefault();
        $('body').append('<a href="#" class="overlay"></a><img class="popup-image" src="' + $(this).attr('href') + '" />');
    });

    $(document).on('click', '.overlay', function(e) {
        e.preventDefault();
        $('.overlay, .popup-image').remove();
    });

	$(window).load(function(){
        $('.custom-scroll-cliparts').mCustomScrollbar();
	});
})(jQuery, document, window);