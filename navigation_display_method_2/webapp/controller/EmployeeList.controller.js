sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("navigationdisplaymethod2.controllerEmployeeList", {

		onListItemPressed : function(oEvent){
			var oItem, oCtx;

			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();

			this.getRouter().navTo("EmployeeDetail",{
				// employeeId : oCtx.getProperty("Employeid")
                employeeId : oCtx.getPath().split("/")[2]
			});

		}
	});

});
