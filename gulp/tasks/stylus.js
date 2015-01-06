var stylus 		= require('gulp-stylus');
var nib 		= require('nib');
var gulp 		= require('gulp');
var livereload 	= require('gulp-livereload');
var notify 		= require('gulp-notify');

module.exports = function() {
	return gulp.src('./src/stylus/main.styl')
		.pipe(stylus({
			compress: true, 
			linenos: true,
			use: [ nib() ]
		}))
		.on('error', notify.onError({
			message: "<%= error.message %>",
			title: "Stylus Error"
		}))
		.pipe( gulp.dest('./public/css/') )
		.pipe(livereload());
};