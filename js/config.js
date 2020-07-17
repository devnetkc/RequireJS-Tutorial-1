// This is example config.js

// starting in Tutorial 4 we start editing this for real and setting it up as a RequireJS config file

requirejs.config({
    // baseUrl is the parent directory location of the js files to include
    // This is now an opional line below since this config file is in the js dir already
    //  baseUrl: 'js',
    // Let's keep it for now to make it stand out and is good practice to have in place anyways
    baseUrl: 'js',
    // add the path names for the files to add
    paths: {
        angular: 'lib/angular.min',
        extCore: 'lib/ext-core',
        jQuery: 'lib/jquery.min',
        jQueryMobile: 'https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min',
        // mootools standard we host the file
        //  mootools: 'lib/mootols.min',
        // mootools use a cdn
        //  mootools: ['https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.min'],
        // mootools use a cdn but have a local failsafe copy for backup if it fails to load
        /*
        mootools: [
            'https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.min',
            'lib/mootools.min'
        ],
        */
        // mootools use a cdn but have backup cdns before defaulting to local copy
        mootools: [
            'https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.min',
            'https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min',
            'lib/mootools.min'
        ],
        swfObj: 'lib/swfobject',
        methods: 'customScripts/methods' 
    }

    // forget adding swfobject.js it's freaking FLASH!
});