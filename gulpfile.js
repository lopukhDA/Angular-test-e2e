
var gulpProtractorAngular = require('gulp-angular-protractor');
var gulp = require('gulp');
var webdriver_standalone = require("gulp-protractor").webdriver_standalone;
var connect = require('gulp-connect');

gulp.task('Start_webdriver', webdriver_standalone);

gulp.task('StartProtractor', function(callback) {
    gulp.src(['test/spec/*.js'])
        .pipe(gulpProtractorAngular({
            configFile: 'test/config.js'
        })).on('error', function(e) {
            console.log(e);
        }).on('end', callback);
});

gulp.task('default',['Start_webdriver','StartProtractor']);
