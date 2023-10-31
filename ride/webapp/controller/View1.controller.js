sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageBox",
    "sap/ui/model/odata/ODataModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, ODataModel) {
        "use strict";

        return Controller.extend("ride.controller.View1", {
            onInit: function () {
                

                var oModel = this.getOwnerComponent().getModel("ZTESTING_PROJECT_SRV");

                oModel.read("/Test1Set", {
                    success: function (odata) {

                        console.log(odata);
                    }.bind(this),
                    error: function (oError) {
                        MessageBox.error(oError);
                    }
                });
            }
        });
    });
