var gulp = require('gulp');
var gulpWebserver = require('gulp-webserver');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

gulp.task('ejs',function(){
  gulp.src('./src/*.ejs')
    .pipe(plumber())
    .pipe(ejs())
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass',function(){
  gulp.src('./src/**/*.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compact'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('webserver', function(){
  gulp.src('./dist')
    .pipe(gulpWebserver({
      host: 'localhost',
      port: '7777',
      livereload: true
    }));
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.ejs', ['ejs']);
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', ['webserver','ejs','sass','watch']);