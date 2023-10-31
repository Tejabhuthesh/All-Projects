/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"idsalary/zemploysalary/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
