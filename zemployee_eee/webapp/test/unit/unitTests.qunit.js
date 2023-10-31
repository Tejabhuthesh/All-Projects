/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"idZEMPLOYEE_EEE/zemployee_eee/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
