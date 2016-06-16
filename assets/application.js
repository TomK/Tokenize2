$(function(){
    // Scrollspy
    var $window = $(window);
    var $body = $(document.body);

    $body.scrollspy({
        target: '.bs-docs-sidebar'
    });
    $window.on('load', function(){
        $body.scrollspy('refresh')
    });

    // Sidenav affixing
    setTimeout(function(){
        var $sideBar = $('.bs-docs-sidebar');

        $sideBar.affix({
            offset: {
                top: function(){
                    var offsetTop = $sideBar.offset().top;
                    var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10);
                    var navOuterHeight = $('.bs-docs-nav').height();

                    return (this.top = offsetTop - navOuterHeight - sideBarMargin);
                },
                bottom: function(){
                    return (this.bottom = $('.bs-docs-footer').outerHeight(true));
                }
            }
        })
    }, 100);

    $('.tokenize-sortable-demo').on('tokenize:tokens:reorder tokenize:tokens:add', function(){
        $('#tokenize-sortable-demo-console').html($(this).data('tokenize2').toArray().join(', '));
    });
    $('.tokenize-sortable-demo').trigger('tokenize:tokens:reorder');
});