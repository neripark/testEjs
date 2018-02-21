var gulp = require('gulp');
var gulpWebserver = require('gulp-webserver');
var ejs = require('gulp-ejs');

gulp.task('ejs',function(){
  gulp.src('./src/*.ejs')
    .pipe(ejs())
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

gulp.task('default', ['webserver','ejs']);