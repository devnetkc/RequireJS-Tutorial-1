/*
function submitForm() {
    // code here
}

function loadMorePosts() {
    // code here
}
*/
// the question being asked is how does RequireJS know about this files dependencies
// and the next step is to comment out all of that above, because it's not how we start the process... go figure.

// continue rest of lesson below
define(['jQuery'], function() {
    var methods = {};

    methods.changeHTML = function (arg) {
        $('body').html(arg);
    }

    methods.showAlert = function (arg) {
        alert(arg);
    }

    return methods;
});