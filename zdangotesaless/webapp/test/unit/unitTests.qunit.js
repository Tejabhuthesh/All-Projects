/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"id_d_sales/zdangotesaless/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
