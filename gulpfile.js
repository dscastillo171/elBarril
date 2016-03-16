var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var jeet = require('jeet');

//initial config for stylus build
gulp.task('build-css', function () {
  gulp.src('./css/source/*.styl')
  .pipe(stylus({
    use:[jeet()]
  })) 
  .pipe(concat('build.css'))
  .pipe(gulp.dest('./css'))
});

gulp.task('watch-stylus',function(){
  gulp.start('build-css');
  gulp.watch('./css/source/*.styl',['build-css']);
});
//end initial config for stylus build