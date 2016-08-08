'use strict';
var gutil = require('gulp-util');
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var through = require('through2');
var R = require('ramda');
var WebDriver = require('selenium-webdriver');
var AxeBuilder = require('axe-webdriverjs');
var Promise = require('promise');
var PLUGIN_NAME = 'gulp-axewebdriver';


function gulpAxeWebDriver (options) {
	

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}
		if (file.isStream()) {
			cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
			return;
		}

		try {

		} catch (err) {
			this.emit('error', new gutil.PluginError(PLUGIN_NAME, err));
		}

		cb();
	});
};

// Exporting the plugin main function
module.exports = gulpAxeWebDriver;