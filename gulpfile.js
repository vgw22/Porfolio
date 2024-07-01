const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

function compileStyles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'))
}

exports.default = gulp.parallel(compileStyles, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compileStyles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}