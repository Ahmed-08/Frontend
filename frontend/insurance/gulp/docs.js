const gulp          = require('gulp');
const htmlInclude   = require('gulp-file-include');
const htmlClean     = require('gulp-htmlclean');
const notify        = require('gulp-notify');
const plumber       = require('gulp-plumber');
const webpack       = require('webpack-stream');
const babel         = require('gulp-babel');
const fs            = require('fs');
const sassCopy      = require('gulp-sass')(require('sass'));
//const autoprefixer  = require('gulp-autoprefixer');
const browserSync   = require('browser-sync').create();
const imagemin = require('gulp-imagemin');



function htmldocs(){
    return gulp.src('src/index.html')
    
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'HTML',
                message: '<%= error.message %>',
                sound: false
            })
        }))
        .pipe(htmlInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlClean())
        .pipe(gulp.dest('docs/'))
        .pipe(browserSync.stream())
}

function sassdocs(){

    return gulp.src('src/index.scss')
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Styles',
                message: 'Error <%= error.message %>',
                sound: false
            })
        }))

        .pipe(sassCopy({outputStyle: 'compressed'}))
        /*
        .pipe(autoprefixer({
			cascade: false
		}))*/
        .pipe(gulp.dest('docs/'))
        .pipe(browserSync.stream())
}

function imagedocs(){
    return gulp.src('src/img/**/*', {encoding: false})
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('docs/img/'))
    
}

function jsdocs(){
    return gulp.src('./src/index.js')
    .pipe(plumber({
        errorHandler: notify.onError({
            title: 'JS',
            message: '<%= error.message %>',
            sound: false
        })
    }))
    .pipe(babel())
    .pipe(webpack(require('./../webpack.config.js')))
    .pipe(gulp.dest('docs/'))
    .pipe(browserSync.stream())
}

function browsersyncdocs(){
    browserSync.init({
        server: {
            baseDir: "docs/"
        }
    });
}

exports.htmldocs        = htmldocs;
exports.sassdocs        = sassdocs;
exports.imagedocs       = imagedocs;
exports.jsdocs          = jsdocs;
exports.browsersyncdocs = browsersyncdocs;

