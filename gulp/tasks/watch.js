var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync= require('browser-sync');

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    })
    watch('./app/assets/**/*.css', function () {
        gulp.start('cssInsert');
    });
    watch('./app/index.html', function () {
        browserSync.reload();
    })

});

gulp.task('cssInsert', ['style_control'], function () {
    gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
})
