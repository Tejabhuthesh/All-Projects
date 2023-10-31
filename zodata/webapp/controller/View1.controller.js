sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageBox",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
        "use strict";

        return Controller.extend("idodata.zodata.controller.View1", {
            onInit: function () {
                //  var that =this;
                // var oModel = that.getOwnerComponent().getModel("Data2");
                // // var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZEMPLOYEE_EEE_SRV/");
                // oModel.read("/userSet", {
                   
                //     success: function (odata) {
                //         debugger;
                //         var oModel1 =new sap.ui.model.json.JSONModel();
                //         oModel1.setData(odata);
                      
                //         that.getView().setModel(oModel1, "Data1");
                       
                //     },
                //     error: function (oError) {
                       
                //     }
                // });

                 var that = this;

                 var oModel = that.getOwnerComponent().getModel("Data2");
                // var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZEMPLOYEE_EEE_SRV/");
                oModel.read("/userSet", {
                    success: function (odata) {

                        var oModel1 = new sap.ui.model.json.JSONModel();
                        oModel1.setData(odata);
                        that.getView().setModel(oModel1, "Data1");
                        MessageBox.success(oModel1);

                    },
                    error: function (oError) {
                        MessageBox.error(oError);
                    }
                });
            }
        });
    });
