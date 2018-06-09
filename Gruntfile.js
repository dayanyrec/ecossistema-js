module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      build: {
        src: 'index.js',
        dest: 'index.min.js'
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['node_modules/jquery/dist/jquery.min.js', 'index.min.js'],
        dest: 'built.js',
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'concat']);

};
