//optimization project Gruntfile.js

module.exports = function(grunt) {

    grunt.initConfig({

    uglify: { // minify js
        options: {
          mangle: false
        },
        my_target1: {
          files: {
            'dist/js/perfmatters-min.js': ['src/js/perfmatters.js'] // output path first, then source input path
          }
        },
        my_target2: {
          files: {
            'dist/views/js/main-min.js': ['src/views/js/main.js']
          }
        }
    },

    cssmin: { // minify css
      target1: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: '*.css', // all css files
          dest: 'dist/css',
          ext: '-min.css' // add '.min' extension
        }]
      },
      target2: {
        files: [{
          expand: true,
          cwd: 'src/views/css',
          src: '*.css',
          dest: 'dist/views/css',
          ext: '-min.css'
        }]
      }
    },

    responsive_images: { // reduce image file sizes
      batch1: {
        options: {
          sizes: [{
              name: "small",
              width: 400,
              quality: 50 // image quality
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,JPG,png,PNG}'],
          cwd: 'src/img/',
          dest: 'dist/img/'
        }]
      },
      batch2: {
        options: {
          sizes: [{
              name: "small",
              width: 400,
              quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,JPG,png,PNG}'],
          cwd: 'src/views/images/',
          dest: 'dist/views/images/'
        }]
      },
    },

    /* Clear out whole dist directory if it exists */
    clean: {
      dev: {
        src: ['dist/*'],
      },
    },

    // Copy all of the '.html' files to dist /*
    copy: {
      main: {
        files: [
          {expand: true, src: '*.html', dest: 'dist/'},

          {expand: true, cwd: 'src/views/', src: '*.html', dest: 'dist/views/'}
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // 'clean' must run first to clear out 'dist' (distribution) directory before placing in new files
  grunt.registerTask('default', ['clean', 'uglify:my_target1', 'uglify:my_target2', 'cssmin:target1', 'cssmin:target2', 'copy', 'responsive_images:batch1', 'responsive_images:batch2']);
};


// Instructions =========================================================================================================

//1. New Project? run in project directory:
//npm install

//2. Run through 'package.json' set up on command line

//3. Install modules below via node command line.

// below: images
//npm install grunt-responsive-images --save-dev  run with: grunt responsive_images

// below: clean, copy, make directory
//npm install grunt-contrib-clean --save-dev
//npm install grunt-contrib-copy --save-dev

//below: uglify
//npm install grunt-contrib-uglify --save-dev

//below: cssmin
//npm install grunt-contrib-cssmin --save-dev

//4. Make sure 'Gruntfile.js' is added to project root.
