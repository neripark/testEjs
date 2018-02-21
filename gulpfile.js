var gulp = require('gulp');
var gulpWebserver = require('gulp-webserver');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');

gulp.task('ejs',function(){
  gulp.src('./src/*.ejs')
    .pipe(ejs())
    .pipe(rename({extname: '.html'}))
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
});

gulp

gulp.task('default', ['webserver','ejs','watch']);