/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"navigation_display_method_2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
