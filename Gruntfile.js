/*!
 * Anthony's Gruntfile
 * http://www.58bits.com
 * @author Anthony Bouch
 * @courtesy http://culttt.com/2013/11/18/setting-sass-grunt/
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Set project object
     */
    project: {
      app: 'app',
      css: [
        '<%= project.app %>/scss/style.scss'
      ],
      js: [
        '<%= project.app %>/scripts/*.js'
      ]
    },

    /**
     * Project banner
     */
    tag: {
      banner: '/*!\n' +
              ' * <%= pkg.name %>\n' +
              ' * <%= pkg.title %>\n' +
              ' * <%= pkg.url %>\n' +
              ' * @author <%= pkg.author %>\n' +
              ' * @version <%= pkg.version %>\n' +
              ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
              ' */\n'
    },

    /**
     * Sass
     */
    sass: {
      dev: {
        options: {
          style: 'expanded',
          banner: '<%= tag.banner %>',
          debugInfo: true,
          lineNumbers: true,
          compass: false
        },
        files: {
          'public/css/style.css': '<%= project.css %>'
        }
      },
      dist: {
        options: {
          style: 'compressed',
          compass: false,
          banner: '<%= tag.banner %>',
          debugInfo: false
        },
        files: {
          'public/css/style.css': '<%= project.css %>'
        }
      }
    },
    
    /**
     * Copy task
     */
    copy: {
      main: {
        files: [{
            expand: true,
            cwd: 'bower_components/jquery/dist',
            src: 'jquery.js',
            dest: 'public/scripts/vendor/jquery/',
            filter: 'isFile'
        }, {
            expand: true,
            cwd: 'bower_components/stickUp/',
            src: 'stickUp.min.js',
            dest: 'public/scripts/vendor/stickUp/',
            filter: 'isFile'
        }, {
            expand: true,
            cwd: 'bower_components/normalize-css/',
            src: 'normalize.css',
            dest: 'public/css/',
            filter: 'isFile'
        }, {
            expand: true,
            cwd: 'app/scripts/',
            src: '**',
            dest: 'public/scripts/',
            filter: 'isFile'
        }]
      }
    },

    /**
     * SSH and deploy settings
     */
    sshconfig: {
      clou01: {
        host: 'cloud01.akhua.com',
        port: 6122,
        username: 'tony',
        agent: process.env.SSH_AUTH_SOCK
      }
    },
 
    sshexec: {
      deploy: {
        command: [
          'cd /home/tony/public_html/sassmonster.com',
          'git pull origin master'
        ].join(' && '),
        options: {
          config: 'clou01'
        }
      }
    },

    /**
     * Start a connect web server.
     */
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        keepalive: false,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: 'public'
        }
      }
    },

    /**
     * Watch
     */
    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['public/index.html'],
      },
      sass: {
        files: '<%= project.app %>/scss/**/*.{scss,sass}',
        tasks: ['sass:dev']
      }
    }
  });

   /**
   * Load dependencies.
   */
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ssh');

  /**
   * Default task
   * Run `grunt` on the command line
   */
  grunt.registerTask('default', ['sass:dev', 'copy', 'connect', 'watch']);
  grunt.registerTask('deploy', ['sass:dist', 'copy', 'sshexec:deploy']);
};