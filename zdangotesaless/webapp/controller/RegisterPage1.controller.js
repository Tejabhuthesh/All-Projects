sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("iddsales.zdangotesaless.controller.RegisterPage", {
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
                    }, error: function () {
                        MessageBox.error("error");
                        // alert("Error");
                    }
                })
                // that.byId("idm_number").setType("Number");
            },
            rightarrow: function (oEvent) {
              
            var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("LoginPage",{key1:"ram"});
             },
            onRigister: function (oEvent) {
                // this.mode = "Add";

                var that = this;
                var Kunnr = that.getView().byId("idcustomer_id").getValue();
                if (Kunnr === "") {
                    MessageToast.show("please give Value");
                    that.byId("idcustomer_id").setValueState("Warning");
                    return;
                } else {

                    that.byId("idcustomer_id").setValueState("Success");
                }

                var Name1 = that.getView().byId("idname").getValue();
                if (Name1 === "") {
                    MessageToast.show("please give Value");
                    that.byId("idname").setValueState("Warning");
                    return;
                } else {
                    var p = /^[A-Za-z]+$/;
                    //   var val = document.getElementById('fname');

                    // if (Name1.p != null) {
                    //     alert("plz Enter alphabit only");
                    // }
                    // else {
                        if (Name1.match(p)) {
                            alert("Submitted Successfully");
                        }
                        else {
                            alert("plz Enzzter alphabit only")
                        }
                    // }
                    that.byId("idname").setValueState("Success");
                }

                var SmtpAddr = that.getView().byId("idaddress").getValue();
                if (SmtpAddr === "") {
                    MessageToast.show("please give Value");
                    that.byId("idaddress").setValueState("Warning");
                    return;
                } else {

                    that.byId("idaddress").setValueState("Success");
                }


                var Telf1 = that.getView().byId("idm_number").getValue();
                if (Telf1 === "") {
                    MessageToast.show("please give Value");
                    that.byId("idm_number").setValueState("Warning");
                    return;
                } else {
                    var p = /^\d{10}$/;

                    if (Telf1.length != 10) {
                        alert("Plz Enter 10 Digit Only!!");
                    }
                    that.byId("idm_number").setValueState("Success");
                }

                var AppUsrid = that.getView().byId("iduserid").getValue();
                if (AppUsrid === "") {
                    MessageToast.show("please give Value");
                    that.byId("iduserid").setValueState("Warning");
                    return;
                } else {

                    that.byId("iduserid").setValueState("Success");
                }

                var Password = that.getView().byId("idpassword").getValue();
                if (Password === "") {
                    MessageToast.show("please give Value");
                    that.byId("idpassword").setValueState("Warning");
                    return;
                } else {

                    that.byId("idpassword").setValueState("Success");
                }


                var array = { Kunnr, Name1, SmtpAddr, Telf1, AppUsrid, Password };
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZCUSTOMAPP_SRV/");

                oModel.create("/CustomdetailsSet", array, {
                    success: function (odata) {

                        oModel.read("/CustomdetailsSet", {
                            success: function (odata) {
                                var oModel1 = new sap.ui.model.json.JSONModel();
                                oModel1.setData(odata);
                                that.getView().setModel(oModel1, "Data1");
                                MessageToast.show(" Rigistraion Successufull.");

                            }
                        })

                    },
                    error: function (oError) {
                        MessageToast.show("Rigistraion Failed!");

                    }
                });

                var Kunnr = that.getView().byId("idcustomer_id").setValue();
                var Name1 = that.getView().byId("idname").setValue();
                var SmtpAddr = that.getView().byId("idaddress").setValue();
                var Telf1 = that.getView().byId("idm_number").setValue();
                var AppUsrid = that.getView().byId("iduserid").setValue();
                var Password = that.getView().byId("idpassword").setValue();

            },
            handleChange: function (oEvent) {

            },
            onlive: function(oEvent){
                debugger;
                var regex = /^[0-9]*$/;
                if(oEvent.getParameter("liveValue") === "" 
                          || !oEvent.getParameter("liveValue").match(regex)){
                        this.setValueState(sap.ui.core.ValueState.Error);
           }
            else{
                       this.setValueState(sap.ui.core.ValueState.Success);
            }
           }
        });
    });