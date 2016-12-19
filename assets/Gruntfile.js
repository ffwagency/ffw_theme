// Define JavaScript files and their order for aggregation
var js_files = [
  'js/custom.js',
];

// Grunt
module.exports = function(grunt) {

  grunt.initConfig({

    // jshint
    jshint: {
      files: [
        'Gruntfile.js',
        'js/**/*.js',
      ],
      options: {
        globals: {
          jQuery: true,
        },
        ignores: ['js/script.js']
      },
    },

    // compass
    compass: {
      dev: {
        options: {
          cssDir: 'css',
          sassDir: 'sass',
          config: 'config.rb',
        },
      },
    },

    // uglify
    uglify: {
      options: {
        wrap: true,
      },
      my_target: {
        files : {
          'js/script.js': js_files,
        },
      },
    },
    csscomb: {
        options: {
            // Task-specific options go here.
            config: '.csscomb.json'
        },
        dynamic_mappings: {
          expand: true,
          cwd: 'sass/',
          src: ['*.scss', 'base/*', 'forms/*', 'misc/*'], // TODO: Search how to exclude susy
          dest: 'sass/',
          ext: '.scss'
        }

    },

    // csscount
    csscount: {
      dev: {
        src: [
          'css/*.css',
        ],
        options: {
          maxSelectors: 4000,
          maxSelectorDepth: 5,
          beForgiving: true
        },
      },
    },

    // watch
    watch: {
      set1: {
        files: 'sass/**/*.scss',
        tasks: ['compass'],
      },
      set2: {
        files: ['<%= csscount.dev.src %>'],
        tasks: ['csscount'],
      },
      set3: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'uglify'],
      },
      set4: {
        files: ['sass/**/*.scss'],
        tasks: ['csscomb'],
      }
    },

    // notify
    notify_hooks: {
      options: {
        title: "Grunt",
        enabled: true,
        success: true,
        duration: 3,
      }
    },

    // kss
    kss: {
      options: {
        css: '../css/styles.css',
        destination: '../ffw-styleguide',
        homepage: 'ffw-styleguide.md',
        builder: '../ffw-styleguide/ffw-template',
        title: 'Style guide',
      },
      dist: {
        files: {
          'ffw-styleguide': ['sass/']
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-css-count');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-kss');

  grunt.registerTask('default', ['compass', 'csscomb', 'csscount', 'jshint', 'uglify']);

  grunt.task.run('notify_hooks');

};
