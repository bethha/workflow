var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
autoprefixer = require('autoprefixer'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
mixins = require('postcss-mixins');

gulp.task('style_control', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, nested, cssvars, autoprefixer]))
        .on('error', function(errorMessage){
            console.log(errorMessage.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});