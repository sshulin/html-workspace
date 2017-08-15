const gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber');

gulp.task('styles', function(){
	gulp.src('src/sass/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('build/css'));
});

gulp.task('assets', function(){
	gulp.src('src/assets/**/*.*')
		.pipe(gulp.dest('build'));
})

gulp.task('pages', function(){
	gulp.src(['src/pages/*.html'])
		.pipe(gulp.dest('build'));
});

gulp.task('build', ['styles', 'assets', 'pages']);

gulp.task('watch', function(){
	gulp.watch('src/sass/**/*.scss', ['styles']);
	gulp.watch('src/pages/*.html', ['pages']);
})

gulp.task('default', ['build']);