### Frontend Nanodegree Project
___

# Website Performance Optimization Project

For this project I needed to optimize a provided on-line portfolio website for speed and in particular optimize the **critical rendering path** using skills learned in course. Also the provided portfolio contained a pizza.html page that featured poorly performing animation that needed to be optimized so that it ran at **60 frames per second** with smooth animation jank free!

This is a project from Udacity's **Frontend Nanodegree** [program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).
___


## Overview

#### Part 1: optimize page speed insights score for index.html

The provided web-site's index.html file (currently very slow running) must be optimized so that it renders as fast as possible and achieves a **PageSpeed Insights** score of at least 90 for both desktop and mobile.

#### Part 2: optimize frames per second in pizza.html

Optimize the provided slow running views/pizza.html making changes to views/js/main.js to optimize the **pixels to screen pipeline** until you achieve **60 frames per second** or higher.
___


### Optimized Page

![PageSpeed Insights score](src/img/readme-images/optimized-page.jpg)
Visit optimized web-site: [Optimized](https://dar77.github.io/website-performance-optimization/)

### Original Page

![Original PageSpeed Insights score](src/img/readme-images/original-page.jpg)
Visit original web-site: [Before optimization]( https://dar77.github.io/frontend-nanodegree-mobile-portfolio/.)
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

To
___


## Solution - Part Two

To
___
