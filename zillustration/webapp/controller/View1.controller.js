sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("idillustration.zillustration.controller.View1", {
            onInit: function () {
              

                //var oModel = this.getOwnerComponent().getModel("Northwind1");
                 var oModel = new sap.ui.model.odata.ODataModel("/V2/Northwind/Northwind.svc/");
                //  https://services.odata.org/northwind/northwind.svc/
                oModel.read("/Invoices", {
                    success: function (odata) {
                    
                           
                        var oModel1 = new sap.ui.model.json.JSONModel();
                        oModel1.setData(odata);
                        this.getView().setModel(oModel1, "oModel1");
                       

                    }.bind(this),
                    error: function (oError) {
                       
                    }
                });
            }
        });
    });
