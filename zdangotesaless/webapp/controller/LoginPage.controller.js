sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("iddsales.zdangotesaless.controller.LoginPage", {
            onInit: function () {
                var that = this;
                debugger;
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZCUSTOMAPP_SRV/");
                // var oModel = this.getOwnerComponent().getModel("RegistraionData");
                oModel.read("/CustomdetailsSet", {
                    success: function (odata) {
                        // debugger;
                        var oModel1 = new sap.ui.model.json.JSONModel();
                        oModel1.setData(odata);
                        that.getView().setModel(oModel1, "Data1");
                        // alert("Success");
                        // MessageBox.success("Success");
                    },
                    error: function (error) {
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

                });
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("LoginPage").attachPatternMatched(this.onRouteMatch, this);
            },
            onRouteMatch:function(evt){
                var that=this
                var KeyID2 = evt.mParameters.arguments.key1;
                 var odata= {
                    "ram":KeyID2
                 }
                 var oModel1 = new sap.ui.model.json.JSONModel();
                 oModel1.setData(odata);
                 that.getView().setModel(oModel1, "Data2");

            },
            rightarrow: function (oEvent) {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("HomePage");
            },


            onLogin: function (evt) {
                var that=this;
                var oarray = that.getView().getModel("Data1").getData().results;

                var userID = that.getView().byId("idcustomer_id").getValue();
                if (userID === "") {
                    MessageToast.show("please give Value");
                    that.byId("idcustomer_id").setValueState("Warning");
                    return;
                } else {

                    that.byId("idcustomer_id").setValueState("Success");
                }
                var Password = that.getView().byId("idpassword").getValue();
                if (Password === "") {
                    MessageToast.show("please give Value");
                    that.byId("idpassword").setValueState("Warning");
                    return;
                } else {

                    that.byId("idpassword").setValueState("Success");
                }
                for (var i = 0; i < oarray.length; i++) {

                    if (userID === oarray[i].Kunnr && Password === oarray[i].Password) {
                        var login1 = this.getView().byId("idlogin").setType("Success");
                        var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                        loRouter.navTo("HomePage", { name1: userID, name2: Password });

                    } else {
                        var login = this.getView().byId("idlogin").setType("Reject");
                        MessageToast.show("Invalid User / Password!");
                    }
                }

            },

            onNavBack: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("RegisterPage");

            }
        });
    });
