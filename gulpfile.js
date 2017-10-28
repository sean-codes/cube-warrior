var gulp = require('gulp')
var sass = require('gulp-sass')
var prefix = require('gulp-autoprefixer')
var image = require('gulp-image')

gulp.task('watch', () => {
   gulp.watch('./src/**/*', ['build'])
})

gulp.task('build', ['images', 'scss'])

gulp.task('images', () => {
   return gulp.src('./src/images/**/*')
   .pipe(image())
   .pipe(gulp.dest('./build/images'))
})

gulp.task('scss', () => {
   return gulp.src('./src/scss/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(prefix({ browsers: ['last 2 versions'], cascade: false }))
   .pipe(gulp.dest('./build/scss'))
})
