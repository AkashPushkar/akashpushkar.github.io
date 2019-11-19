var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');


gulp.task('nunjucks', function(){
	// Get .html and .njk files
	return gulp.src('src/pages/**/*.+(html|njk)')

	// passing data
	.pipe(data(function(){
		return require("./data/data.json")
	}))

	// render template with nunjucks
	.pipe(nunjucksRender({
		path: ['src/templates', 'src/templates/partials']
	}))

	// destination of output files
	.pipe(gulp.dest('html'))
});