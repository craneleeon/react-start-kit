## react-start-kit
A Node project template with basic folder structure and files includes Grunt tasks &  package.json to start a React web app development. 

## Folder structure
```
 +/  (project root)
   + /serv (server-side app folder)
       -- (all server side js stays here)
    + /public (static/ built client-side  assets) 
    + /dist (final output package for deploying, includes server & webapp with minimized assets)
    + /web (src client-side js/css)
       —-(all other assets like html & imgs stay here)
       + /js (web js)
         -- app.js (webapp main entry, since browserify will build this into bundle.app.js, new entries should be added into ./grunt/browserify.js)
    + /css (web css)
    + /build (output files for development debug)
    + /dist  (final output minified files for deploy )
```

## Build
You must have [npm](https://www.npmjs.org/) ind [grunt](https://www.npmjs.com/package/grunt) nstalled on your computer.
From the root project directory run these commands from the command line:
`npm install`

This will install all dependencies.

To build the project, first run this command:

`grunt build`

## Start dev
Watch task will check file modications in web dir and do the "Compile" get output files into *build* dir automatically. To start it run this command:

`grunt dev`

## Deploy
Command below will output all necessary files minified for your web app into dir *dist* 
`grunt dist`

## Modules uses
"browserify"
"envify"
"exorcist"
"grunt"
"grunt-browserify"
"grunt-contrib-clean"
"grunt-contrib-copy"
"grunt-contrib-less"
"grunt-contrib-uglify"
"grunt-contrib-watch"
"grunt-githooks"
"grunt-jsxhint"
"grunt-react"
"less"
"load-grunt-tasks"
"react-tools"
"reactify"
"uglify-js"

