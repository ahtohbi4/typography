var gulp = require('gulp');
var rename = require('gulp-rename');
// @see: https://github.com/jonschlinkert/gulp-htmlmin
var htmlmin = require('gulp-htmlmin');

var PATHS = {
    src: {
        html: 'app/resources/views/pages/**.html',
        css: [
            'vendors/normalize.css/*.css',
            'app/resources/views/blocks/**/*.css',
            'app/resources/views/pages/**.css'
        ],
        js: [
            'app/resources/views/blocks/**/*.js',
            'app/resources/views/pages/**.js'
        ]
    },
    dest: {
        html: './',
        css: 'compiled/css/',
        js: 'compiled/js/'
    }
};

gulp.task('html', function () {
    gulp.src(PATHS.src.html)
        .pipe(rename('index.html'))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(PATHS.dest.html));
});

// @see: https://github.com/contra/gulp-concat
var concat = require('gulp-concat');

gulp.task('css', function () {
    gulp.src(PATHS.src.css)
        .pipe(concat('style.css'))
        .pipe(gulp.dest(PATHS.dest.css));
});

gulp.task('js', function () {
    gulp.src(PATHS.src.js)
        .pipe(concat('script.js'))
        .pipe(gulp.dest(PATHS.dest.js));
});

gulp.task('default', [
    'css',
    'js',
    'html'
]);

gulp.task('watch', ['default'], function() {
    gulp.watch(PATHS.src.js, ['js']);
    gulp.watch(PATHS.src.css, ['css']);
    gulp.watch(PATHS.src.html, ['html']);
});
