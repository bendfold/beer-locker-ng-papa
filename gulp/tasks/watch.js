var gulp 		= require('gulp');
var livereload 	= require('gulp-livereload');
var gutil 		= require('gulp-util');

var log = gutil.log,
    colors = gutil.colors;

module.exports = function(){
	log('');
	log(colors.white("-----------------------------------"));
	log("Build Status: " + colors.yellow("Watching for Changes"));
	log(colors.white("-----------------------------------"));
	log('');

	gulp.watch('src/js/**/*.js', ['scripts']);
	gulp.watch('src/stylus/**', ['stylus']);
	gulp.watch('src/assets/images/**/*.{jpg,png}', ['images']);
	livereload();
};