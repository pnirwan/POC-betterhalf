function url_spy($) {
    route = document.location.href; // route has the current url path
    route = route.slice(route.lastIndexOf('#') + 1, route.length);
    $('.navigation').find('li.dropdown.active').removeClass('active'); // Remove active class from previous active tab
    $('.navigation li > a').each(function() { // Selects all the anchors under (immediate child)li elements(descendent of .navigation class)
        var a = this.href; // a has the current anchor
        if (a.search(route) > 0) {
            $(this).parents('li.dropdown').addClass('active'); // Adds active class to the anchor's tab
        }
    });
};