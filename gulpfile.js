// gulpfile.js
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('test', function() {
   return gulp.src('test/**/*.spec.js')
      .pipe(jasmine());
});

gulp.task('default', ['test']);
