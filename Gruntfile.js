module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> Copyright (c) 2014 <%= pkg.author %> under a BSD3 License.*/\n'
      },
      dist: {
        files: {
          // just minified
          'dist/js/<%= pkg.name %>.min.js': [ 'src/js/<%= pkg.name %>.js' ]
        }
      }
    },
    connect: {
      server: {
        options: {
          open: "http://localhost:8000/example",
          keepalive: true
        }
      }
    },
    watch: {
      scripts: {
        files: 'src/js/*.js',
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('demo', ['uglify', 'connect']);
};