'use strict'

const gulp          = require('gulp');
const fileInclude   = require('gulp-file-include');
const sass          = require('gulp-sass')(require('sass'));
const notify        = require('gulp-notify');
const plumber       = require('gulp-plumber');
const fs            = require('fs');
const browserSync   = require('browser-sync').create();
const webpack       = require('webpack-stream');
const babel         = require('gulp-babel');
const htmlClean     = require('gulp-htmlclean');
const imagemin      = require('gulp-imagemin');



function htmlDocs(){
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
    .pipe(htmlClean())
    .pipe(gulp.dest('./docs/'))
    .pipe(browserSync.stream())
};

function sassDocs(){
    return gulp.src('./src/index.scss')
    .pipe(plumber({
        errorHandler: notify.onError({
            title: 'Styles',
            message: '<%= error.message %>',
            sound: false
        })
    }))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./docs/'))
    .pipe(browserSync.stream());
};

function imgDocs(){
    return gulp.src('./src/img/**/*', {encoding: false})
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('./docs/img'))
};

function fontsDocs(){
    return gulp.src('./src/font/**/*')
    .pipe(gulp.dest('./docs/font'))
};

function jsDocs(){
    return gulp.src('./src/index.js')
    .pipe(plumber({
        errorHandler: notify.onError({
            title: 'JS',
            message: '<%= error.message %>',
            sound: false
        })
    }))
    .pipe(webpack(require('../webpack.config.js')))
    .pipe(babel())
    .pipe(gulp.dest('./docs/'))
    .pipe(browserSync.stream())
};

function serverDocs(){
    browserSync.init({server: {
        baseDir: './docs/'
    }})
};

exports.htmlDocs     = htmlDocs;
exports.sassDocs     = sassDocs;
exports.imgDocs      = imgDocs;
exports.serverDocs   = serverDocs;
exports.fontsDocs    = fontsDocs;
exports.jsDocs       = jsDocs;
