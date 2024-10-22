const gulp = require('gulp');

const dev = require('./gulp/dev.js');

const docs = require('./gulp/docs.js');

gulp.task('docs', gulp.series(
    gulp.parallel(docs.htmldocs, docs.imagedocs, docs.sassdocs, docs.jsdocs),
    gulp.parallel(docs.serverdocs)
))

exports.default = gulp.series(dev.cleandev, gulp.parallel(dev.htmldev, dev.imagedev, dev.sassdev, dev.jsdev), gulp.parallel(dev.serverdev, dev.watchingdev));
