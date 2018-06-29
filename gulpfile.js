var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
autoprefixer = require('autoprefixer'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars')
watch = require('gulp-watch');


gulp.task('default', function(){
	console.log("you just ran the default task");
});

gulp.task('style_control', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, nested, cssvars, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
	watch('./app/assets/**/*.css', function(){
		gulp.start('style_control');
	});
});

