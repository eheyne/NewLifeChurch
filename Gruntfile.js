module.exports = function(grunt) {
  grunt.initConfig({
    package: grunt.file.readJSON('package.json'),
    less: {
      options: { paths: 'bower_components/' },
      app: {
        dest: 'dist/styles.css',
        src: 'less/app.less'
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, cwd: '.', src: 'index.html', dest: 'dist'},
          { expand: true, cwd: 'static/', src: 'images/*', dest: 'dist/assets'}
        ]
      }
    },
    handlebars: {
      all: {
        files: {
          "dist/scripts/templates.js": ["templates/**/*.hbs"]
        }
      }
    },
    browserify: {
      dist: {
        src: ['scripts/application.js'],
        dest: 'dist/scripts/new-life.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['less', 'copy', 'handlebars', 'browserify']);
};
