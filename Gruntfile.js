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

    responsive_images: { // process image file size and quality
      batch1: {
        options: {
          sizes: [{
              name: "extra-small",
              width: 70,
              quality: 55
            },{
              name: "medium",
              width: 500,
              quality: 55
            },{
              name: "large",
              width: 600,
              quality: 55
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,JPG,png,PNG}'],
          cwd: 'src/img',
          dest: 'dist/img'
        }]
      },
      batch2: {
        options: {
          sizes: [{
              name: "large",
              width: 720,
              quality: 29
          }]
        },
        files: [{
          expand: true,
          src: ['pizzeria.jpg'],
          cwd: 'src/views/images',
          dest: 'dist/views/images'
        }]
      },
    },

    cwebp: { // webp image conversion
      dynamic: {
        options: {
          q: 55
        },
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.{gif,jpg,JPG,png,PNG}'],
          dest: 'dist/img'
        }]
      }
    },


    /* Clear out whole dist directory if it exists */
    clean: {
      dev: {
        src: ['dist/*'],
      },
    },

    // Copy all of the files and folders listed to dist /*
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/views/', src: '*.html', dest: 'dist/views/'},
          {expand: true, cwd: 'src/', src: 'fonts/*', dest: 'dist/'},
          {expand: true, cwd: 'src/views/images/', src: 'pizza-small.png', dest: 'dist/views/images/'},
          {expand: true, cwd: 'src/views/images/', src: 'pizza-extra-small.png', dest: 'dist/views/images/'}
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-cwebp');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // 'clean' must run first to clear out 'dist' (distribution) directory before placing in new files
  grunt.registerTask('default', ['clean', 'uglify:my_target1', 'uglify:my_target2', 'cssmin:target1', 'cssmin:target2', 'copy', 'responsive_images:batch1', 'responsive_images:batch2', 'cwebp']);
};


// Instructions =========================================================================================================

//1. New Project? run in project directory:
//npm install

//2. Run through 'package.json' set up on command line

//3. Install modules below via node command line.

// below: images
//npm install grunt-responsive-images --save-dev  run with: grunt responsive_images
//npm install --save-dev grunt-cwebp

// below: clean, copy, make directory
//npm install grunt-contrib-clean --save-dev
//npm install grunt-contrib-copy --save-dev

//below: uglify
//npm install grunt-contrib-uglify --save-dev

//below: cssmin
//npm install grunt-contrib-cssmin --save-dev

//4. Make sure 'Gruntfile.js' is added to project root.
