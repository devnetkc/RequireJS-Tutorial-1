// This is example config.js

// starting in Tutorial 4 we start editing this for real and setting it up as a RequireJS config file

requirejs.config({
    // baseUrl is the parent directory location of the js files to include
    baseUrl: 'js',
    // add the path names for the files to add
    paths: {
        angular: 'angular.min',
        extCore: 'ext-core',
        jquery: 'jquery.min',
        // mootools standard we host the file
        //  mootools: 'mootols.min',
        // mootools use a cdn
        //  mootools: ['https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.min'],
        // mootools use a cdn but have a local failsafe copy for backup if it fails to load
        /*
        mootools: [
            'https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.min',
            'mootools.min'
        ],
        */
        // mootools use a cdn but have backup cdns before defaulting to local copy
        mootools: [
            'https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.min',
            'https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js',
            'mootools.min'
        ],
        swfObj: 'swfobject' 
    }

    // forget adding swfobject.js it's freaking FLASH!
});