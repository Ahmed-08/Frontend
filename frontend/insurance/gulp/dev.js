const gulp        = require('gulp');
const htmlInclude = require('gulp-file-include');
const notify      = require('gulp-notify');
const plumber     = require('gulp-plumber');
const webpack     = require('webpack-stream');
const babel       = require('gulp-babel');
const fs          = require('fs');
const gulpClean   = require('gulp-clean');
const sassCopy    = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();



function htmldev(){
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
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream())
}

function sassdev(){

    return gulp.src('src/index.scss')
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Styles',
                message: 'Error <%= error.message %>',
                sound: false
            })
        }))
        .pipe(sassCopy())
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream())
}

function imagedev(){
    return gulp.src('src/img/**/*', {encoding: false})
    .pipe(gulp.dest('build/img/'))
    
}

function cleandev(done){
    
    if(fs.existsSync('./build/')){
        return gulp.src('./build/', {
            read: false
        }).pipe(gulpClean());
    }
    done();
}

function jsdev(){
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
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.stream())
}

function browsersyncdev(){
    browserSync.init({
        server: {
            baseDir: "build/"
        }
    });
}

function watchingdev(){
    gulp.watch('src/**/*.html', gulp.series(htmldev)); 
    gulp.watch('src/**/*.scss', gulp.series(sassdev));
    gulp.watch('src/img/**/*', gulp.series(imagedev));
    gulp.watch('src/**/*.js', gulp.series(jsdev));
}

exports.htmldev        = htmldev;
exports.sassdev        = sassdev;
exports.imagedev       = imagedev;
exports.jsdev          = jsdev;
exports.cleandev       = cleandev;
exports.watchingdev    = watchingdev;
exports.browsersyncdev = browsersyncdev;

