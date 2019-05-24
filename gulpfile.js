const gulp = require('gulp')
const mocha = require('gulp-mocha')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('test', () => gulp
    .src('./test/*.spec.ts')
    .pipe(mocha({
        require: ['ts-node/register']
    }))
)

gulp.task('build', () => gulp
    .src('./src/**/*.ts')
    .pipe(tsProject())
    .js
    .pipe(gulp.dest('./dist'))
)

gulp.task('default', gulp.series('test', 'build'))