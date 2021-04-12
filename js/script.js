// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        loop:true,
        adaptiveHeight:true,
        slideMargin:0,

        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

// JavaScript Document
$(document).ready(function() {
    $('#autoWidth2').lightSlider({
        loop: true,
        keyPress: false,
        item:4.0297,
        slideEndAnimation: true,
        pause: 9000,
        slideMove: 2,
        slideMargin: 10,
        speed: 1050, //ms'
        auto: true,

        onSliderLoad: function() {
            $('#autoWidth2').removeClass('cS-hidden');
        } 
    });  
  });