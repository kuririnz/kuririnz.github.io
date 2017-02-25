var gulp = require('gulp')
var jade = require('gulp-jade')
var sass = require('gulp-sass')
var bs = require('browser-sync').create()

gulp.task('default', ['sass', 'jade', 'server'], function () {
	gulp.watch('./scss/**/*.scss', ['sass']);
	gulp.watch('./jade/**/*.jade', ['jade']);
})

gulp.task('jade', function() {
	return gulp.src('./jade/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('./'))
		.pipe(bs.stream({once: true}));
})

gulp.task('sass', function() {
	return gulp.src('./scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css/'))
		.pipe(bs.stream({once: true}));
})

gulp.task('server', function() {
	bs.init({
    logLevel: "debug",
    server: "./",
    open: true,
    port: 3000,
    online: false,
    ui: false,
    scrollProportionally: false
  });
})