const { src, dest } = require('gulp');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');

function build() {
    return src(['./*.css', './components/**/*.css'])
    .pipe(sourcemaps.init())
    .pipe(postcss( [ autoprefixer() ]) )
    .pipe(sourcemaps.write('./styles/maps'))
    .pipe(dest('.'));
}

build.description = "building project";

exports.default = build;
