var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create();

gulp.task('sass', function(){
	return gulp.src('src/sass/*')
		.pipe(sass())
		.pipe(gulp.dest('src/css/'))
		.pipe(browserSync.strem());
});

gulp.task('browser-sync', function(){
	browserSync.init({
		server: 'src'
	});
	browserSync.reload(['src/sass/main.scss']);
});

gulp.task('default', ['browser-sync', 'sass']);