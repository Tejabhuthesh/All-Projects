sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/odata/ODataModel", "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("idZEMPLOYEEEEE.zemployeeeee.controller.View1", {
            onInit: function () {
                var that = this;
                // var oModel = new ODataModel("/sap/opu/odata/SAP/ZEMPLOYEE_EEE_SRV/");
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZPROJECT_TABLES_SRV/");

              //  var oModel = that.getOwnerComponent().getModel("Data2");
                oModel.read("/UserSet", {
                    success: function (odata) {
                        debugger;
                        var oModel1 =new sap.ui.model.json.JSONModel();
                        oModel1.setData(odata);
                      
                        that.getView().setModel(oModel1, "Data1");
                       
                    },
                    error: function (oError) {
                       
                    }
                });
            }
        });
    });

