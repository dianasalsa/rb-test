
(function () {
    /* global require */
    /* global process */
    'use strict';

    var gulp = require('gulp'),
    runSequence = require('run-sequence');
    var consolidate = require('gulp-consolidate');

    require('require-dir')('./gulp');
    //
    
    gulp.task('default-sass', ['build-scss'], function (cb) {
    });
    //release
    gulp.task('default', function (cb) {
        runSequence('clean',
            'styles-ng',
            'build-plp',
            'build-c1c2',
            'build-pdp',
            'build-overview',
            'build-static-pages',
            'build-mail-pages',
            'build-ng',
            'images',
            'fonts',
            'products-fix-font-css',
            'del-products-css-map' ,
            'minify-app-lib-css',
            'uglify-app-lib-js',
            'ngdocs'
            );
    });
    gulp.task('default-plp',  function (cb) {
        runSequence('clean',
            'products-styles',
            'styles-ng',
            'build-plp',
            'images',
            'fonts',
            'products-fix-font-css',
            'del-products-css-map' ,
            'minify-app-lib-css',
            'uglify-app-lib-js',
            'ngdocs'
            );
    });
    gulp.task('default-c1c2', function (cb) {
        runSequence('clean',
            'products-styles',
            'styles-ng',
            'build-c1c2',
            'images',
            'fonts',
            'products-fix-font-css',
            'del-products-css-map' ,
            'minify-app-lib-css',
            'uglify-app-lib-js',
            'ngdocs'
            );
    });
    gulp.task('default-ng', function (cb) {
        if (!cb.buildDirectives) {
            cb.buildDirectives = {};
        }
        cb.buildDirectives.validatePartials = false;
        runSequence('clean',
            'styles-ng',
            'build-ng',
            'images',
            'fonts',
            'products-fix-font-css',
            'del-products-css-map' ,
            cb
            );
    });
    gulp.task('default-pdp', function (cb) {
        runSequence('clean',
            'products-styles',
            'styles-ng',
            'build-pdp',
            'images',
            'fonts',
            'products-fix-font-css',
            'del-products-css-map' ,
            'minify-app-lib-css',
            'uglify-app-lib-js',
            'ngdocs'
            );
    });
    //debug
    gulp.task('default-debug', function (cb) {
        runSequence('clean',
            'styles-ng',
            'build-plp',
            'build-c1c2',
            'build-pdp',
            'build-static-pages',
            'build-mail-pages',
            'build-ng',
            'images',
            'fonts',
            'build-overview',
            'products-fix-font-css',
            'del-products-css-map' ,
            'ngdocs'
            );
    });

})();
