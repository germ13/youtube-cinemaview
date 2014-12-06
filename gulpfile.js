var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('default', function(){
    gulp.src('./youtube-cinemaview.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});