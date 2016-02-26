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
        ]
    },
    dest: {
        html: './',
        css: 'compiled/css/'
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

gulp.task('default', [
    'css',
    'html'
]);

gulp.task('watch', ['default'], function() {
    gulp.watch(PATHS.src.css, ['css']);
    gulp.watch(PATHS.src.html, ['html']);
});
