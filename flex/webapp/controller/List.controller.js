sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/f/library',
    'sap/m/MessageBox',
    "sap/ui/core/BusyIndicator",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox,BusyIndicator,JSONModel) {
        "use strict";

        return Controller.extend("idflex.flex.controller.List", {
            onInit: function () {
                var oOwnerComponent = this.getOwnerComponent();

                this.bus = oOwnerComponent.getEventBus();
                
                var oModel = this.getOwnerComponent().getModel("LData");
                oModel.read("/userSet", {
                    success: function (odata) {
                        var oModel1 = new sap.ui.model.json.JSONModel();
                        oModel1.setData(odata);
                        this.getView().setModel(oModel1, "Data1");
                        this.getOwnerComponent().getModel("CData1").setData(oModel1);
                    }.bind(this),
                    error: function (oError) {
                        // Check what is ErrorHandler file
                        BusyIndicator.hide();
                        var message = oError;
                        var msg = $(oError.response.body).find('message').first().text();
                        MessageBox.error(msg);
                    }.bind(this),
                })
            },
            _getRouter: function () {
                // Keep in basecontroller
                return sap.ui.core.UIComponent.getRouterFor(this);
            },
            onListItemPress: function (oEvent) {
                var oFCL = this.oView.getParent().getParent();
                oFCL.setLayout("TwoColumnsMidExpanded");
                var productPath = oEvent.getSource().getBindingContext("Data1").getPath(),
				product = productPath.split("/").slice(-1).pop();
                this._getRouter().navTo("Detail", { Name: product });
            },
            onFullScreen: function () {
                this.bus.publish("flexible", "setListPage");
            },
            handleExitFullScreen:function(){
                this.onListItemPress();
            },
            handleClose:function(){
                this.bus.publish("flexible", "setListPageRemove");
            }
        });
    });
