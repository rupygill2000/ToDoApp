var gulp = require('gulp'),
nodemon = require('gulp-nodemon'),
gulpMocha = require('gulp-mocha'),
env = require('gulp-env');




gulp.task('default',function(){
nodemon({
    script: 'index.js',
    ext: 'js',
    env: {
        port:8080
    },
ignore: ['./node_module/**']
})
.on('restart',function(){
console.log('Restarting');

});
});