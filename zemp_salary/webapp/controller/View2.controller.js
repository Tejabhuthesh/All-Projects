sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
        "use strict";

        return Controller.extend("idemp.zempsalary.controller.View2", {
            onInit: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("View2").attachPatternMatched(this.onRouteMatch, this);

            },

            onRouteMatch: function (evt) {
                var that = this;
                debugger;
                var KeyID2 = evt.mParameters.arguments.key1;
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZTEST_EMP_SALARY_SRV/");
               

                // var id1 = that.byId("id").getValue();
                oModel.read("/zemp_detailsSet('" + KeyID2 + "')", {
                    success: function (odata) {
                        var oModel1 = new sap.ui.model.json.JSONModel();
                        debugger;
                        oModel1.setData(odata);
                        that.getView().setModel(oModel1, "Data1");
                        MessageBox.success("Success");




                    },
                    error: function (oError) {
                        MessageBox.error("error");
                    }
                });
            },

            onNavBack: function () {
             history.go(-1);
     
           },
           onrightarrow: function () {
            var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
            loRouter.navTo("View3");
        }
        });
    });

