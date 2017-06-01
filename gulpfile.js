var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('sass', function(){
	return gulp.src('src/sass/*')
		.pipe(sass())
		.pipe(gulp.dest('src/css/'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: {
			baseDir: 'src/'
		}
	});
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);