## react-start-kit
A Node project template with basic folder structure and files includes Grunt tasks &  package.json to start a React web app development.  [browserify](http://browserify.org) with [babel](https://babeljs.io) used to compile js components. 

## Folder structure
```
 +/  (project root)
    + /public (static/ built client-side  assets) 
    + /web (client-side js, css, assets)
       + /app (js files uses in this web app, such as React components, those entries set in grunt/browserify.js will be compiled into to public/js as browser js)
         -- app.js (webapp main entry, browserify will build this into bundle.app.js, new entries should be added into ./grunt/browserify.js)
       + /js (vender's js goes here will be copied to "public/js" untouched)
       + /css (css files, be copied to "public/css"  untouched)
       + /less (".less" files, those entries set in grunt/less.js  will be compiled to "public/css" end with ".css")
    + /build (output files for development debug)
    + /dist (final output package for deploying, includes server & webapp with minimized assets)
    + server.js (node server start script)
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
Please refer to package.js
