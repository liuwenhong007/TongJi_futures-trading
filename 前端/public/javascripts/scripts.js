$(document).ready(function() {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"rgb(16, 167, 175)", cursorwidth: '6', cursorborderradius: '10px', background: '#424f63', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});


    $("#dv-handing-table").niceScroll({styler:"fb",cursorcolor:"rgb(16, 167, 175)", cursorwidth: '6', cursorborderradius: '0',autohidemode: 'false', background: '#F1F1F1', spacebarenabled:false, cursorborder: '0'});


    $("#dv-handing-table").getNiceScroll();
    if ($('body').hasClass('scrollbar1-collapsed')) {
        $("#dv-handing-table").getNiceScroll().hide();
    }

});



