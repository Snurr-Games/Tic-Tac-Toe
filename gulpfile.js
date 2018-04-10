const gulp = require('gulp')
const plumber = require('gulp-plumber')
const browserify = require('gulp-browserify')
 
gulp.task('build', function() {
  gulp.src('src/game.js')
  .pipe(plumber())
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('watch', () => {
  gulp.watch('src/**/*.*', {cwd: './'}, ['build'])
})

gulp.task('default', ['watch', 'build'])