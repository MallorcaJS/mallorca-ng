![MallorcaJS logo](https://raw.githubusercontent.com/mallorcajs/mallorca-ng/master/art/mallorcajs-logo.png)

[![build status](https://img.shields.io/travis/MallorcaJS/mallorca-ng.svg?style=flat-square)](https://travis-ci.org/MallorcaJS/mallorca-ng)
[![npm](https://img.shields.io/npm/v/mallorca-ng.svg?style=flat-square)](https://www.npmjs.com/package/mallorca-ng)
[![commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![license](https://img.shields.io/github/license/mallorcajs/mallorca-ng.svg?style=flat-square)](https://github.com/mallorcajs/mallorca-ng/blob/master/LICENSE)

## What is MallorcaNG?

An Angular library with common recipes (components, directives, pipes, services, etc) for your apps. Compatible with AoT and compilation &amp; Tree shaking.

[Sample app](http://mallorcajs.github.io/mallorca-ng-sample) built with Angular Material, AoT compilation & webpack, and its [source code](https://github.com/mallorcajs/mallorca-ng-sample).

[Docs](http://mallorcajs.github.io/mallorca-ng).

## Installing
You can add `mallorca-ng` to your project using `npm`:
```Shell
npm install mallorca-ng --save 
```
To install the pre-release package:
```Shell
npm install --save mallorca-ng@next
```

## Loading
#### Using SystemJS configuration
```JavaScript
System.config({
    map: {
        'mallorca-ng': 'node_modules/mallorca-ng/bundles/mallorca-ng.umd.js'
    }
});
```
#### Angular CLI
No need to set up anything, just import it in your code.

#### Rollup or webpack
No need to set up anything, just import it in your code.

#### Plain JavaScript
If you build apps in Angular using ES5, you can include the `umd` bundle in your `index.html`:
```Html
<script src="node_modules/mallorca-ng/bundles/mallorca-ng.umd.js"></script>
```
and use global `ng.mallorcaNG` namespace.

## AoT compilation, Server Side Rendering & strict
This library is compatible with AoT compilation & Server Side Rendering. It also supports the `strict` TypeScript compiler option.

## Contribute
It would be awesome if you would like to contribute code or help with bugs. Just follow the guidelines [CONTRIBUTING](https://github.com/mallorcajs/mallorca-ng/blob/master/CONTRIBUTING.md).

## Aditional Resources
- [Library starter by Roberto Simonetti](https://github.com/robisim74/angular-library-starter) Allows you to create a library for Angular 4+ apps

## License
MIT
