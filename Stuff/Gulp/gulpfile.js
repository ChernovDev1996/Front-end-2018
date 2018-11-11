var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    imgcompressor = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer');

sass.compiler = require("node-sass");


// function errorHandler(error) {
//     console.error.bind(error);
//     this.emit('end');
// }

// scripts task ugilifies
gulp.task('scripts', function() {

    gulp.src("./script.js")
    .pipe(uglify())
    .pipe(gulp.dest("./"))

});


// style task ugilifies
gulp.task('styles', function() {

    gulp.src("./style.css")
    .pipe(uglify())
    .pipe(gulp.dest("./"))
});



gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});



gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./script.js', ['scripts']);
    gulp.watch('./style.css', ['styles']);
});



gulp.task('sass-watch', function() {
    livereload.listen();
    gulp.watch('./sass/**/*.scss', ['sass']);
});


gulp.task('imgcompressor', function() {
    gulp.src('./img/*')
        .pipe(imgcompressor())
        .pipe(gulp.dest('./img'))
    });


gulp.task('autoprefixer', function() {
    gulp.src('./css/style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css/style.css'));
});


gulp.task("default", ['scripts', 'styles', 'watch', 'sass'])