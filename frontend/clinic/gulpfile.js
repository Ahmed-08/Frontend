const gulp = require('gulp');

const dev = require('./gulp/dev');

const docs = require('./gulp/docs.js');

gulp.task('docs', gulp.series(
    gulp.parallel(docs.htmlDocs, docs.imgDocs, docs.sassDocs, docs.jsDocs),
    gulp.parallel(docs.serverDocs)
));

exports.default = gulp.series(dev.cleanDev, gulp.parallel(dev.htmlDev, dev.imgDev, dev.sassDev, dev.fontsDev, dev.jsDev), gulp.parallel(dev.serverDev, dev.watch)); 