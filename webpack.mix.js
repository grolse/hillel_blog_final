const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
    'resources/js/app.js'
], 'public/js');

mix.styles([
    'resources/css/main.css',
    'resources/css/base.css',
    'resources/css/vendors.css',
    'resources/css/font-awesome/css/font-awesome.css',
    'resources/css/fonts.css'
], 'public/css/all.css');
