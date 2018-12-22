/* global $*/

$(document).ready(function(){
    
    $("#hb_btn").click(function(){
        $("#hb_menu ul").slideToggle();
    });
});

$(window).load(function(){
    $(".p_item img").click(function(){
        var img_src = $(this).attr("src");
        var img_alt = $(this).attr("alt");
        
        $("#preview img").attr({
            src: img_src,
            alt: img_alt
        });

    });
});