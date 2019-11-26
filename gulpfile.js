'use strict';

let gulp = require('gulp');
let watch=require('gulp-watch');
let cleanCSS = require('gulp-clean-css');  
let concat  = require('gulp-concat'); 
 


gulp.task('minify-css', () => {
    return gulp.src([
                 'app/css/css.css'
        ]) 
  	
   .pipe(cleanCSS())
   .pipe(concat('min.css'))
   .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
	gulp.watch('app/css/**/*.css', ['css']); 
});





