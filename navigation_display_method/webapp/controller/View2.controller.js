sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History) {
        "use strict";

        return Controller.extend("navigationdisplaymethod.controller.View2", {
            onInit: function () {
                var oRouter, oTarget;

                oRouter = this.getRouter();
                oTarget = oRouter.getTarget("TargetView2");
                oTarget.attachDisplay(function (oEvent) {
                    this._oData = oEvent.getParameter("data");	// store the data
                }, this);
                // this._onRouteMatchd();
            },
            getRouter: function () {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },
            onNavBack: function () {
                // this.getRouter().navTo("View1");
                // history.go(-1);
                // in some cases we could display a certain target when the back button is pressed
                if (this._oData && this._oData.fromTarget) {
                    this.getRouter().getTargets().display(this._oData.fromTarget);
                    delete this._oData.fromTarget;
                    return;
                }

                // // call the parent's onNavBack
                // BaseController.prototype.onNavBack.apply(this, arguments);

                var oHistory, sPreviousHash;

                oHistory = History.getInstance();
                sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    this.getRouter().navTo("AppView1", {}, true /*no history*/);
                }

            },
            ONPRESS: function (oEvent) {
                this.getRouter().navTo("View3", { id: 3 });
                this.getRouter().getTargets().display("TargetView3" ,{
                    fromTarget : "TargetView2"
                });
            }
            // _onRouteMatchd: function (oEvent) {
            //     // var d=  this.getView().getBindingContext("jsonModel");
            //     var oArgs, oView;
            //     // oArgs = oEvent.getParameter("arguments");
            //     oView = this.getView();
            //     oView.bindElement({
            //         path: "/Employedetails",
            //         model: "jsonModel",
            //         events: {
            //             change: this._onBinding.bind(this),
            //             dataRequested: function (oEvent) {
            //                 oView.setBusy(true);
            //             }, dataReceived: function (oEvent) {
            //                 oView.setBusy(false);
            //             }
            //         }


            //     })
            //     oView.getBindingContext("jsonModel").getModel().getData().Employedetails
            // },
            // _onBinding:function(oEvent){
            //     if(!this.getView().getBindingContext("jsonModel")){
            //         this.getRouter().getTargets().display("TargetView1");
            //     }
            // }
        });
    });
