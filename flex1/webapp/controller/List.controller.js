sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/f/library'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,fioriLibrary) {
        "use strict";

        return Controller.extend("idflex.flex.controller.List", {
            onInit: function () {
                var that = this;
                var oModel = that.getOwnerComponent().getModel("LData");
                oModel.read("/userSet", {
                    success: function (odata) {
                        // debugger;
                        var oModel1 = new sap.ui.model.json.JSONModel();
                        oModel1.setData(odata);
                        that.getView().setModel(oModel1, "Data1");
                        // alert("Success");
                        // MessageBox.success(oModel1);

                    },
                    error: function (oError) {
                        sap.ui.core.BusyIndicator.hide();
                     
                        var msg = $(oError.response.body).find('message').first().text();
                        var action = "OK";
                        new sap.m.MessageBox.error(msg, {

                            onClose: function () {
                                if (action === "OK") {

                                }
                            }
                        });
                    }
                })
                this.oRouter = this.getOwnerComponent().getRouter();
            },
            onListItemPress: function (oEvent) {
                // var oFCL = this.oView.getParent().getParent();
                // oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
                //  var Name=evt.oSource.mAggregations.cells[0].mProperties.title;
                //  var loRouter = sap.ui.core.UIComponent.getRouterFor(this)
                //  loRouter.navTo("Detail", { Name: Name});
                var productPath = oEvent.getSource().getBindingContext("products").getPath(),
				product = productPath.split("/").slice(-1).pop();
                 this.oRouter.navTo("detail", {layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded, product: product});
            }
        });
    });
