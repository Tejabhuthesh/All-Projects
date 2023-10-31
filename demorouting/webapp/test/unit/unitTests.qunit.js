/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demoroutingid/demorouting/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
