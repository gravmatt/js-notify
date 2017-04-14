/*!
Copyright (c) 2016 Rene Tanczos <gravmatt@gmail.com> - The MIT License (MIT)
*/
var gulp = require('gulp');
const rename = require('gulp-rename');
const path = require('path');
const uglify = require('gulp-uglify');


gulp.task('js', () => {
    return gulp.src([
        'notify.js'
    ])
    .pipe(uglify({
        preserveComments: 'license',
        mangle: true
    }))
    .pipe(rename(function(path) {
        path.basename += '.min'
        return path;
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('js:watch', function() {
    gulp.watch(['notify.js'], gulp.task('js'))
    .on('change', function(event) {
        console.log('File ' + path.basename(event) + ' was changed! Running tasks...');
    });
});

gulp.task('default', gulp.parallel('js'));
