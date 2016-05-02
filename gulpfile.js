var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var nano        = require('gulp-cssnano');
var maps        = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');
var rename      = require("gulp-rename");


gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: ''
        }
    });
});


gulp.task('sass', function () {
  return gulp.src('scss/main.scss')
    .pipe(maps.init())
    .pipe(sass({
        includePaths: ['_sass'],
        onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(nano())
    .pipe(maps.write('./'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('css'));
});

/**
 * Compile files from js into both _site/js (for live injecting) and site (for future jekyll builds)
 */
gulp.task('js', function () {
    return gulp.src('js/**/*.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('js'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('scss/main.scss', ['sass']);
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('js/*.js', ['js']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
