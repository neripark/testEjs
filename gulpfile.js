const gulp = require('gulp');
const gulpWebserver = require('gulp-webserver');
const ejs = require('gulp-ejs');


gulp.task('ejs',function(){
  gulp.src('');
});


gulp.task('webserver', function(){
  gulp.src('./dist')
    pipe(gulpWebserver({
      host: localhost,
      port: 7777,
      livereload: true
    }));
});