requirejs.config({
    baseUrl: './',
    paths: {
        ga: 'http://www.google-analytics.com/analytics',
        blocks: 'app/resources/views/blocks',
        pages: 'app/resources/views/pages',
        jquery: 'lib/jquery'
    }
});

requirejs([
    'blocks/analytics/analytics',
    'pages/main'
]);
