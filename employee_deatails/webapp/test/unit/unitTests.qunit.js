/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"idED/employee_deatails/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
