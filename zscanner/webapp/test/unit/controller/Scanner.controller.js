/*global QUnit*/

sap.ui.define([
	"idScanner/zscanner/controller/Scanner.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Scanner Controller");

	QUnit.test("I should test the Scanner controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
