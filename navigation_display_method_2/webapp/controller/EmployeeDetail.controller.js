sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("navigationdisplaymethod2.controller.EmployeeDetail", {

		onInit: function () {
			var oRouter = this.getRouter();

			oRouter.getRoute("EmployeeDetail").attachMatched(this._onRouteMatched, this);

			// Hint: we don't want to do it this way
			/*
			 oRouter.attachRouteMatched(function (oEvent){
				 var sRouteName, oArgs, oView;

				 sRouteName = oEvent.getParameter("name");
				 if (sRouteName === "employee"){
				 	this._onRouteMatched(oEvent);
				 }
			 }, this);
			 */

		},

		_onRouteMatched : function (oEvent) {
			var oArgs, oView;

			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			oView.bindElement({
                path:"/Employedetails"+"/"+ oArgs.employeeId,
				// path : "/Employedetails(" + oArgs.employeeId + ")",
				events : {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
		},

		_onBindingChange : function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},

		onShowResume : function (oEvent) {
			var oCtx = this.getView().getBindingContext();

			this.getRouter().navTo("employeeResume", {
				employeeId : oCtx.getProperty("EmployeeID")
			});
		}

	});

});
