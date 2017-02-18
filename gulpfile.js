var gulp = require('gulp')
var jade = require('gulp-jade')
var sass = require('gulp-sass')

gulp.task('deafult', ['sass', 'jade'], function () {
	gulp.watch('./scss/**/*.scss', ['sass']);
	gulp.watch('./jade/**/*.jade', ['jade']);
})

gulp.task('jade', function() {
	return gulp.src('./jade/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('./'));

})

gulp.task('sass', function() {
	return gulp.src('./scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css/'));
})