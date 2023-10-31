sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zdangote.controller.View1", {
            onInit: function () {
                var that =this;
                debugger;
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPLANTDETAILS_SRV/");
                // var oModel = this.getOwnerComponent().getModel("RegistraionData");
                oModel.read("/InputPlantInfoSet", {
                    success: function (odata) {
                        // debugger;
                        var oModel1 = new sap.ui.model.json.JSONModel();
                        oModel1.setData(odata);
                        that.getView().setModel(oModel1, "Data1");
                        alert("Success");
                        //  MessageBox.success(oModel1);

                    },error : function(oError) {
                        // MessageBox.error("Error");
                        alert("Error");
                    }
                })

            }
        });
    });
