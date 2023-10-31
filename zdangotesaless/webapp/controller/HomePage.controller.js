sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("iddsales.zdangotesaless.controller.HomePage", {
            onInit: function () {
                var that = this;
                debugger;
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPLANTDETAILS_SRV/");
                // var oModel = this.getOwnerComponent().getModel("RegistraionData");
                oModel.read("/InputPlantInfoSet", {
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
                        var message = error;
                        var msg = $(error.response.body).find('message').first().text();
                        var action = "OK";
                        new sap.m.MessageBox.error(msg, {

                            onClose: function () {
                                if (action === "OK") {

                                }
                            }
                        });
                    }
                })
                // var $a = $(this.getView().byId("form1").getDomRef());
               
            },
            // onNavBack: function () {
            //     var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
            //     loRouter.navTo("LoginPage", { key1: "ram" });

            // },
            onFindFood:function(oEvent){
                var city=this.getView().byId("SelectYourRestaurant").getValue();
                if(city ===""){
                
                }else{
                    var label=this.getView().byId("idresturantname").setText("Order Food Online in " +city);
                }
            },
            onHomeLogin:function(evt){
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("LoginPage", { key1: "ram" });
            },
            onHomesign:function(evt){
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("RegisterPage");
            }
        });
    });