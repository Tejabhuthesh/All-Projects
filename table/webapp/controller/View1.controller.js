
    sap.ui.define([
        "sap/ui/core/mvc/Controller", "sap/m/MessageBox",
        "sap/ui/model/odata/ODataModel"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller, MessageBox, ODataModel) {
            "use strict";
    
            return Controller.extend("table.controller.View1", {
                onInit: function () {
                    var that = this;
    
                   var oModel = that.getOwnerComponent().getModel("Data2");
                    //var oModel = new ODataModel("/sap/opu/odata/sap/ZPROJECT_TABLES_SRV/")
    
                 //  var oModel = new ODataModel("/sap/opu/odata/sap/ZTESTING_PROJECT_SRV/");
                    oModel.read("/UserSet", {
                        success: function (odata) {
    
                            var oModel1 = new ODataModel();
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
    