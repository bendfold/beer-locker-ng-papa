var gulp = require('./gulp')([
	'stylus',
	'watch'
]);

gulp.task('default', ['stylus', 'watch']);