### Frontend Nanodegree Project
___

# Website Performance Optimization Project

For this project I needed to optimize a provided online portfolio website for speed and in particular optimize the **critical rendering path** using the skills I've learned in the course. Also the provided portfolio contained a pizza.html page that featured poorly performing animation that needed to be optimized so that it ran at **60 frames per second** with smooth animation 'jank' free!

This is a project from Udacity's **Frontend Nanodegree** [program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).
___


## Overview

#### Part 1: optimize page speed insights score for index.html

The provided websites index.html file (currently very slow running) must be optimized so that it renders as fast as possible and achieves a **PageSpeed Insights** score of at least 90 for both desktop and mobile.

#### Part 2: optimize frames per second in pizza.html

Optimize the provided slow running views/pizza.html making changes to views/js/main.js to optimize the **pixels to screen pipeline** until you achieve **60 frames per second** or higher.
___


### Optimized Page

Visit optimized website: [Optimized](https://dar77.github.io/website-performance-optimization/)

![PageSpeed Insights score](src/img/readme-images/optimized-page.jpg)


### Original Page

Visit original website: [Before optimization](https://dar77.github.io/performance-project-original-files/)

![Original PageSpeed Insights score](src/img/readme-images/original-page.jpg)
___


## Installation

To run the project please **fork** a copy to your **Git Hub** account and **clone** to your local machine with **Git**.

- Open **index.html** in the browser to view.

### To run Grunt tasks

I've used the **Grunt** task runner to minify / copy my code and process images etc. **Please Note** the processed files already exist in the **dist** directory, you only need to run **Grunt** for testing purposes. If you do not have **Node.js** and the **Grunt CLI** running on your system, follow these steps:

### Install Node.js and Grunt CLI

1. To use **Grunt** you will need to have **Node.js** running on your system. [down load node](https://nodejs.org/en/).
2. Change to the project's root directory:
```bash
   cd /example/path/to/project-directory
```
3. Install the projects dependencies (these are listed in the package.json file) by running:
```bash
   npm install
```
4. You then need to have the **Grunt command line interface (CLI)** installed globally. Run the following on Node.js command line:
```bash
   npm install -g grunt-cli
```
5. Continue with step **3** from instructions below:


### You have Node.js and the Grunt CLI

1. Change to the project's root directory (if you are not already in that location):
```bash
   cd /example/path/to/project-directory
```
2. Install the projects dependencies (these are listed in the package.json file) by running:
```bash
   npm install
```
3. Run grunt tasks with:
```bash
   grunt
```

#### Notes:

- Running **grunt** will **delete** the current content of **dist** directory
- Then it will process folders and files in **src** directory and send processed versions to **dist** directory.
- **Please Note** the **dist** directory already contains these processed files. You can run **Grunt** for testing purposes.
- **.html** files in project root are set up to reference contents of **dist** directory.

See these extra instructions for [getting started with Grunt](https://gruntjs.com/getting-started) (if needed).
___


## Solution - Part One

To reach the **PageSpeed Insights** target of **90** or above I optimized the **critical rendering path** by reducing the number of **render and parser blocking resources** the browser is handed. Also I reduced the size of those resources where possible.

- I moved the javascript files to the bottom of the page before the closing **body** tag.
- For external scripts I added an **async** attribute to the **script** tag.
- I inlined the **css** in the head of the document. Which goes against what I would normally do (separation of concerns). This seemed necessary to get the **render blocking resources** removed and achieve the speed needed.
- I moved the **print.css** into a script that defers its loading. In addition I'd added a media attribute of print.
- I removed the **Google Fonts** link and instead used the same font in a downloaded **@fontface** Open Sans type face. (saved on an http request)
- I added a **rel='preload'** link in the head that suggests moving the request for the fonts earlier in the page load. (without blocking behavior)
- Using **Grunt** all **css** and **javascript** was minified to reduce bytes.
- For images I settled on using **data uri's** to inline the images direct in the **index.html**. (reducing http requests)

This reduced **index.html** number of **critical resources** to just the **html**.

- For the other **.html** files I used external **css** files marked with media attributes for print and portrait. (reducing size of critical resources)
- For images I used a combination of **data uri** and **Grunt** processed **webp** files with regular **jpeg** files as a fall back.
___


## Solution - Part Two

To
___
