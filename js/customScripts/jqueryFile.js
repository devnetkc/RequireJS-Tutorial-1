// commenting out as it is changing in Tutorial 6
/*
define(
    [
        'jQuery', 'angular'
    ], function(jQuery) {
    //'use strict';
    $('body').html('Hello, from the other side!');

    // example angluar thing that would work -- i don't know any angular
    //  angular.model();
});
*/

// New define call to use jQuery functions in custom maner using RequireJS
define([
    'jQuery',
    'jQueryMobile',
    'methods'
], function(jQuery, methods) {
    //'use strict';
    var clickMe = $('#clickMe'), indexOut = '#indexOutput', valueOut = '<p>the BUTTON was ', closeP = '</p>';
    
    clickMe.click(function() {
        methods.changeHTML(indexOut, valueOut + 'CLICKED' + closeP);
    });

    clickMe.on("tap",function(){
        methods.changeHTML(indexOut, valueOut + 'TAPPED' + closeP);
      });
    
});