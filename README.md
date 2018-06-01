# Divi Blog Ghost Theme Template

The official theme for the [Divi Project Blog](https://blog.diviproject.org).

## Features

- Gulp integration
- Blazing fast LibSass
- Bourbon and Neat
- The amazing power of Autoprefixer
- JSHint with Stylish

## Pre-requisites

- Ghost installation (local recommended for development)
- Gulp
- Npm
- NodeJS

## Developing

Clone the repository into your local Ghost theme directory. 

```
cd diviblog-theme
npm i
gulp
```
This will install all dependencies and start gulp, which will watch and test new changes made to CSS or JS files.

To zip 
```
gulp deploy
```
This will create a zip file that can be uploaded to the Ghost admin.

## Gulp Tasks

Running `gulp` will initiate the default compile task which will compile all
stylesheets using Sass and Autoprefixer, use JSHint to analyze the javascript,
and watch for changes on both.

Running `gulp deploy` will recompile the theme's stylesheets, create a zip file
of the theme (excluding the `node_modules` directory), and then use
[gscan](https://github.com/TryGhost/gscan) to validate if the theme is compliant
with ghost.

> [Gscan] Checks Ghost themes for errors, deprecations, best practices and looks
> to see which features are supported. Aims to generate a compatibility report
> and feature listing for themes.
