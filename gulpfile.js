const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const paths = {
    styles: {
        src: './src/styles/*.scss',
        dest: 'dist/styles/'
    }
};

function compileStyles(cb) {
    gulp.src(paths.styles.src)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest));
    cb();
}

function watchFiles() {
    gulp.watch(paths.styles.src, compileStyles);
}

exports.compileStyles = compileStyles;
exports.watch = gulp.series(
    gulp.parallel(compileStyles),
    watchFiles
)

// const gulp = require('gulp');
// const htmlmin = require('gulp-htmlmin');
// const sass = require('gulp-sass')(require('sass'));

// const paths = {
//     html: {
//         src: './src/*.html',
//         dest: 'dist/'
//     },
//     styles: {
//         src: './src/styles/*.scss',
//         dest: 'dist/styles/'
//     }
// };

// function minifyHtml(cb) {
//     gulp.src(paths.html.src)
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest(paths.html.dest));
//     cb();
// }

// function compileSass(cb) {
//     gulp.src(paths.styles.src)
//         .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//         .pipe(gulp.dest(paths.styles.dest));
//     cb();
// }

// function watchFiles() {
//     gulp.watch(paths.html.src, minifyHtml);
//     gulp.watch(paths.styles.src, compileSass);
// }

// exports.minifyHtml = minifyHtml;
// exports.compileSass = compileSass;
// exports.watch = gulp.series(
//     gulp.parallel(minifyHtml, compileSass),
//     watchFiles
// )
