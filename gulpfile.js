var gulp              = require('gulp'),
    plumber           = require('gulp-plumber'),
    jshint            = require('gulp-jshint'),
    jshintReporter    = require('jshint-stylish'),
    concat            = require('gulp-concat'),
    uglify            = require('gulp-uglify'),
    less              = require('gulp-less'),
    watch             = require('gulp-watch'),
    gutil             = require('gulp-util'),
    expect            = require('gulp-expect-file'),
    uncss             = require('gulp-uncss'),
    csso              = require('gulp-csso'),
    sourcemaps        = require('gulp-sourcemaps'),
    imagemin          = require('gulp-imagemin'),
    pngquant          = require('imagemin-pngquant'),
    jpegtran          = require('imagemin-jpegtran');



// clean + autoprefix
var LessPluginCleanCSS = require("less-plugin-clean-css"),
    cleancss = new LessPluginCleanCSS({advanced: true});

var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

//watch all~
gulp.task('default', function() {

  var watchJs    = ['devAssets/js/main.js'],
      watchLess  = ['devAssets/less/**/*.less'];

  gulp.watch(watchJs, ['build-js']);
  gulp.watch(watchLess, ['build-less']);

});

//watch LESS~
gulp.task('watch-less', function() {
  var watchLess  = ['devAssets/less/**/*.less'];
  gulp.watch(watchLess, ['build-less']);

});


// LESS
gulp.task('build-less', function () {

  var lessFile       =  'devAssets/less/portafolio.less',
      destCssFolder  =  'dist/css/',
      htmlFiles      =  'index.html';

  return gulp.src(lessFile)
        // .pipe(sourcemaps.init())
         .pipe(plumber())
         .pipe(expect(lessFile))
         .pipe(less({ plugins: [autoprefix, cleancss] }))
         /*.pipe(uncss({
            html: [htmlFiles],
            ignore: [
                ".fade",
                ".fade.in",
                ".navbar-collapse",
                ".navbar-nav",
                ".navbar-header",
                ".navbar-left",
                ".navbar-right",
                ".navbar-nav.navbar-left:first-child",
                ".navbar-nav.navbar-right:last-child",
                ".navbar-text:last-child",
                ".navbar-collapse.in",
                ".in",
                ".collapse",
                ".collapse.in",
                ".collapsing",
                ".alert-danger",
                /\.open/
            ]
          }))*/
         .pipe(csso())
        // .pipe(sourcemaps.write())
         .pipe(gulp.dest(destCssFolder))
         .on('error', gutil.log);
  
});


// JS
gulp.task('build-js', function () {
  var   a    = 'devAssets/js/vendor/jquery.min.js',
        b    = 'devAssets/js/vendor/bootstrap.min.js',
        c    = 'devAssets/js/vendor/jquery.flexslider.js',
        d    = 'devAssets/js/vendor/jquery.easing.js',
        f    = 'devAssets/js/vendor/jquery.appear.js',
        g    = 'devAssets/js/vendor/jquery.inview.js',
        h    = 'devAssets/js/main.js',
        i    = 'devAssets/js/vendor/animations.js',
        j    = 'devAssets/js/vendor/particle.js',

        jsfiles = [a,b,c,d,f,g,h,i,j];

  return gulp.src(jsfiles)
           .pipe(plumber())
           .pipe(expect(jsfiles))
           .pipe(concat('nico.min.js'))
           .pipe(uglify())
           .pipe(jshint())
           .pipe(gulp.dest('dist/js/'))
           .on('error', gutil.log);
});


gulp.task('build-img', function () {
    return gulp.src('dist/img/trabajos/*.jpg')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            //use: [pngquant(), jpegtran({progressive: true})]
            use: [jpegtran({progressive: true})]
        }))
        .pipe(gulp.dest('dist/img/trabajos/op/'));
});





