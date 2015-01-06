var gulp = require('./gulp')([
	'stylus',
	'watch',
	'uiRouterMove'
]);

gulp.task('default', ['stylus', 'watch', 'uiRouterMove']);