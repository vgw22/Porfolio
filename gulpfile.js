const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');

function compileScripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

function compileStyles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'))
}

function minifyHtml() {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
}

exports.default = gulp.parallel(compileStyles, compileScripts, minifyHtml);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compileStyles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(compileScripts))
    gulp.watch('./src/*.html'), gulp.parallel(minifyHtml)
}