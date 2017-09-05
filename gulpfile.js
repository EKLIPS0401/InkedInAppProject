var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var minifyJS = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

/* SASS TASKS */

gulp.task('sass', function() {
  return gulp.src(path.resolve(__dirname + '/public/styles/styles.scss'))
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(rename('styles.css'))
  .pipe(gulp.dest(path.resolve(__dirname + '/public/dist/css')));
});

gulp.task('sass:watch', function() {
  return gulp.watch('public/styles/**/*.scss', ['sass', 'buildCSS']);
});

gulp.task('concatCSS', function() {
  return gulp.src([
    path.resolve(__dirname + '/public/libs/materialize/dist/css/materialize.css'),
    path.resolve(__dirname + '/public/libs/css-ripple-effect/dist/ripple.css'),
    path.resolve(__dirname + '/public/dist/css/styles.css'),
  ])
  .pipe(concat('styles.bundle.css'))
  .pipe(gulp.dest(path.resolve(__dirname + '/public/dist/css')));
});

gulp.task('minifyCSS', function() {
  return gulp.src(path.resolve(__dirname + '/public/dist/css/styles.bundle.css'))
  .pipe(cssmin())
  .pipe(rename('styles.bundle.min.css'))
  .pipe(gulp.dest(path.resolve(__dirname + '/public/dist/css')));
});

gulp.task('buildCSS', ['concatCSS', 'minifyCSS'], function() {
  return;
});

/* JS TASKS */

gulp.task('concatJS', function() {
  return gulp.src([
    path.resolve(__dirname + '/public/libs/angular/angular.js'),
    path.resolve(__dirname + '/public/libs/angular-ui-router/release/angular-ui-router.js'),
    path.resolve(__dirname + '/public/libs/angular-resource/angular-resource.js'),
    path.resolve(__dirname + '/public/libs/jquery/dist/jquery.js'),
    path.resolve(__dirname + '/public/libs/materialize/dist/js/materialize.js'),
    path.resolve(__dirname + '/public/javascripts/build/**/*.js')
  ])
  .pipe(concat('app.bundle.js'))
  .pipe(gulp.dest(path.resolve(__dirname + '/public/dist/js')));
});

gulp.task('minifyJS', ['concatJS'], function() {
  return gulp.src(path.resolve(__dirname + '/public/dist/js/app.bundle.js'))
  .pipe(minifyJS({
    mangle: false
  }))
  .pipe(rename('app.bundle.min.js'))
  .pipe(gulp.dest(path.resolve(__dirname + '/public/dist/js')));
});

gulp.task('buildJS', ['concatJS', 'minifyJS'], function() {
  return;
});

gulp.task('js:watch', function() {
  return gulp.watch('public/javascripts/**/*.js', ['buildJS']);
});

/* IMAGE COMPRESSION TASKS */

gulp.task('imagemin', function() {
  return gulp.src(path.resolve(__dirname + '/public/assets/img/**/*'))
  .pipe(imagemin())
  .pipe(gulp.dest(path.resolve(__dirname + '/public/dist/img')));
});

/* DEFAULT GULP TASK */

gulp.task('default', ['sass', 'buildCSS', 'buildJS', 'imagemin'], function() {
  return;
});
