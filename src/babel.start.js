/**
 * we need to use babel-register and polyfill to start application with
 * ES6/ES7 syntax. Unfortunatelly you can't start the app without 
 * a layer of extra combiler for now
 */

require('babel-register');
require('babel-polyfill');
require('./server.js')