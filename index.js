requirejs.config({
    baseUrl: './',
    paths: {
        blocks: 'app/resources/views/blocks',
        pages: 'app/resources/views/pages',
        jquery: 'lib/jquery'
    }
});

requirejs([
    'pages/main'
]);
