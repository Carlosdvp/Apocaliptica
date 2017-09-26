'use strict';

const gulp = require('gulp'),
			minifyCSS = require('gulp-clean-css'),
			rename = require('gulp-rename'),
			uglify = require('gulp-uglify'),
			pump = require('pump'),
			newer = require('gulp-newer');


//CSS minifying task
gulp.task('css', function() {
	gulp.src('css/custom-styles.css')
	.pipe(newer('css/*.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('dist/css'));
})

//Next, our JS minifying task
gulp.task('js', function() {
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
});

// Default task
gulp.task('default', function() {
	gulp.start('css', 'js');
});

//Now the Watch task
gulp.task('watch', function() {
	gulp.start('default');
	gulp.watch('css/custom-styles.css', function(event) {
		console.log(`File ${event.path} was ${event.type}, running tasks. . .`);
		gulp.start('css');
	});
	gulp.watch('js/apocaliptica.js', function(event) {
		console.log(`File ${event.path} was ${event.type}, running tasks. . .`);
		gulp.start('js');
	})
})