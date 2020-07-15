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
    'methods'
], function(jQuery, methods) {
    //'use strict';
    $('#clickMe').click(function() {
        methods.changeHTML('#indexOutput', '<p>The BUTTON was clicked</p>');
    });
    
});