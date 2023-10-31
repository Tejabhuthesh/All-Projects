/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"idemployee_d/employedeatails/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
