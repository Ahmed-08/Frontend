const gulp          = require('gulp');
const fileInclude   = require('gulp-file-include');
const sass          = require('gulp-sass')(require('sass'));
const notify        = require('gulp-notify');
const plumber       = require('gulp-plumber');
const fs            = require('fs');
const clean         = require('gulp-clean');
const browserSync   = require('browser-sync').create();
const webpack       = require('webpack-stream');


function htmlDev(){
    return gulp.src('./src/index.html')
    .pipe(plumber({
        errorHandler: notify.onError({
            title: 'HTML',
            message: '<%= error.message %>',
            sound: false
        })
    }))
    .pipe(fileInclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.stream())
}

function sassDev(){
    return gulp.src('./src/index.scss')
    .pipe(plumber({
        errorHandler: notify.onError({
            title: 'Styles',
            message: '<%= error.message %>',
            sound: false
        })
    }))
    .pipe(sass())
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.stream());
}

function imgDev(){
    return gulp.src('./src/img/**/*', {encoding: false})
    .pipe(gulp.dest('./build/img'))
}

function fontsDev(){
    return gulp.src('./src/font/**/*')
    .pipe(gulp.dest('./build/font'))
}

function jsDev(){
    return gulp.src('./src/index.js')
    .pipe(plumber({
        errorHandler: notify.onError({
            title: 'JS',
            message: '<%= error.message %>',
            sound: false
        })
    }))
    .pipe(webpack(require('./../webpack.config.js')))
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.stream())
}

function cleanDev(done){
    if(fs.existsSync('./build/')){
        return gulp.src('./build/', {read: false})
        .pipe(clean());
    }
    done();
}

function serverDev(){
    browserSync.init({server: {
        baseDir: './build/'
    }})
}

function watch(){
    gulp.watch('./src/**/*.html', gulp.series(htmlDev))
    gulp.watch('./src/**/*.scss', gulp.series(sassDev))
    gulp.watch('./src/img/**/*', gulp.series(imgDev))
    gulp.watch('./src/**/*.js', gulp.series(jsDev));
}

exports.htmlDev     = htmlDev;
exports.sassDev     = sassDev;
exports.imgDev      = imgDev;
exports.cleanDev    = cleanDev;
exports.serverDev   = serverDev;
exports.watch       = watch;
exports.fontsDev    = fontsDev;
exports.jsDev       = jsDev;
