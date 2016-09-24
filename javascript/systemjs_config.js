var locationBaseURL = 'http://you1.se/boiler/web/static/';
//var locationBaseURL = 'https://dl.dropboxusercontent.com/u/29864737/youone.github.io/web/static/';
var thirdPartyUrl = 'https://cdnjs.cloudflare.com/ajax/libs/';
// if (location.hostname.search('localhost')>=0) {
//     locationBaseURL = 'static/';
//     thirdPartyUrl = '3rdparty/'
// }
console.info('using server: ' + location.hostname);

//System.defaultJSExtensions = true
System.config({

    baseURL: locationBaseURL,

    map: {
        hilit:         thirdPartyUrl + 'highlight.js/8.9.1/highlight.min.js',
        jquery:        thirdPartyUrl + 'jquery/3.1.0/jquery.min.js',
        jqueryui:      thirdPartyUrl + 'jqueryui/1.12.0/jquery-ui.min.js',
        qunit:         thirdPartyUrl + 'qunit/2.0.1/qunit.min.js',
        mathjax:       thirdPartyUrl + 'mathjax/2.6.1/MathJax.js?config=default',
        showdown:      thirdPartyUrl + 'showdown/1.4.2/showdown.min.js',
        jstat:         thirdPartyUrl + 'jstat/1.5.3/jstat.min.js',
        numeric:       thirdPartyUrl + 'numeric/1.2.6/numeric.min.js',
        d3:            thirdPartyUrl + 'd3/4.2.0/d3.min.js',
        ol3:           thirdPartyUrl + 'ol3/3.17.1/ol.js',
        velocity:      thirdPartyUrl + 'velocity/1.2.3/velocity.min.js',
        p5:            thirdPartyUrl + 'p5.js/0.5.2/p5.min.js',
        systemjs:      thirdPartyUrl + 'systemjs/0.19.36/system.js',
        arc:           'https://raw.githubusercontent.com/springmeyer/arc.js/gh-pages/arc.js',
        traceur:       '3rdparty/traceur.js', //https://google.github.io/traceur-compiler/bin/traceur.js
        //gjsapi:        'https://www.google.com/jsapi',

        blogger:         'blog/blogger/blogger.js',
        blog:            'blog/blog.js',
        blogPostsDir:    'blog/posts/',
        bloggerBlogsDir: 'blog/blogger/',

        libsignal: 'jslib/libsignal.js',
        libtest:   'jslib/libtest.js',
        signal_widgets:    'widgets/signal.js',
        graph_widgets:    'widgets/graphs.js',
        test_widgets:    'widgets/test.js',

        //css links
        jqueryui_css: thirdPartyUrl + '/jqueryui/1.12.0/jquery-ui.min.css',
        qunit_css: thirdPartyUrl + '/qunit/2.0.1/qunit.min.css'

    },

    meta: {
        mathjax: {
            scriptLoad: true,
            format: "global",
            exports: "mathjax"
        }
    }

});
