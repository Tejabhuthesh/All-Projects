sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox"


],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast, MessageBox) {
        "use strict";

        return Controller.extend("idsales.zsales.controller.View2", {
            onInit: function () {

                var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("View2").attachPatternMatched(this.onRouteMatch, this);

            },

            onRouteMatch: function (oEvent) {
                debugger
                this._product = oEvent.getParameter("arguments").Name;
                var flag = oEvent.getParameter("arguments").flag;
                this._flags = flag;
                if (flag == "S") {
                    this.getView().byId("iUpdate").setVisible(true);
                    this.getView().byId("idSave").setVisible(false);
                    this.getView().byId("idObjectHeader").setVisible(true);

                    var _flag = {
                        "S": "S",
                        "V": this._product,
                        "C": "C"
                    }
                } else if (flag == "D") {
                    this.getView().byId("iUpdate").setVisible(true);
                    this.getView().byId("idSave").setVisible(false);
                    this.getView().byId("idObjectHeader").setVisible(true);
                    var _flag = {
                        "D": "D",
                        "V": this._product,
                        "C": "C"
                    }
                } else if (flag == "I") {
                    this.getView().byId("iUpdate").setVisible(true);
                    this.getView().byId("idSave").setVisible(false);
                    this.getView().byId("idObjectHeader").setVisible(true);
                    var _flag = {
                        "I": "I",
                        "V": this._product,
                        "C": "C"
                    }
                }
                else if (flag == "Copy_S") {
                    this.getView().byId("idDelite").setVisible(false);
                    this.getView().byId("iUpdate").setVisible(false);
                    //    this.onUpdateReq();
                    var _flag = {
                        "S": "S",
                        // "V": this._product,
                        "Copy": "Copy"
                    }
                   

                }  else if (flag == "Copy_D") {
                    this.getView().byId("idDelite").setVisible(false);
                    this.getView().byId("iUpdate").setVisible(false);
                    //    this.onUpdateReq();
                    var _flag = {
                        "D": "D",
                        // "V": this._product,
                        "Copy": "Copy"
                    }
                   

                }
                else if (flag == "Copy_I") {
                    this.getView().byId("idDelite").setVisible(false);
                    this.getView().byId("iUpdate").setVisible(false);
                    //    this.onUpdateReq();
                    var _flag = {
                        "I": "I",
                        // "V": this._product,
                        "Copy": "Copy"
                    }
                   

                }
                 else {
                    this.getView().byId("iUpdate").setVisible(false);
                    var _flag = {

                        "V": this._product,

                    }
                }
                var oModel1 = new JSONModel();
                oModel1.setData(_flag);
                this.getView().setModel(oModel1, "FlagModel");
           

                if (this._product == "V") {
                    this.getView().byId("idSave").setVisible(true);
                    this.getView().byId("idObjectHeader").setVisible(false);

                    this.getView().byId("NetValue_S").setVisible(false);
                    // this.getView().byId("CreatedBy").setVisible(false);
                    // this.getView().byId("CreatedOn").setVisible(false);

                    this.getView().byId("NetValue_D").setVisible(false);
                    this.getView().byId("NetValue_I").setVisible(false);


                    this._onIds();

                }
                else {
                    if (flag == "Copy_S" || flag == "Copy_D" || flag == "Copy_I") {
                        this.getView().byId("idSave").setVisible(true);
                        this.getView().byId("idObjectHeader").setVisible(false);

                        this.getView().byId("NetValue_S").setVisible(false);
                        // this.getView().byId("CreatedBy").setVisible(false);
                        // this.getView().byId("CreatedOn").setVisible(false);

                        this.getView().byId("NetValue_D").setVisible(false);
                        this.getView().byId("NetValue_I").setVisible(false);


                        this.getView().byId("idDelite").setVisible(false);

                    }
                    // var that= this;

                    // this.Sales_OrderData = this.getOwnerComponent().getModel("Sales_Order").getData().d.results[this._product];


                    // for (var i = 0; i <  this.getOwnerComponent().getModel("SalesSet1").getData().results.length; i++) {
                    //     delete  this.getOwnerComponent().getModel("SalesSet1").getData().results[i].__metadata;
                    //     var frmt = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd-MM-yyyy" });
                    //     var d = frmt.format(new Date( this.getOwnerComponent().getModel("SalesSet1").getData().results[i].Erdat));
                    //      this.getOwnerComponent().getModel("SalesSet1").getData().results[i].Erdat = d;
                    // }
                    this.Sales_OrderData = this.getOwnerComponent().getModel("SalesSet1").getData().results[this._product];

                    var oModel1 = new JSONModel();
                    oModel1.setData(this.Sales_OrderData);
                    this.getView().setModel(oModel1, "SalesSet");

                    // this.Delivery_OrderData = this.getOwnerComponent().getModel("Delivery").getData().d.results[this._product];
                    this.Delivery_OrderData = this.getOwnerComponent().getModel("DeliverySet1").getData().results[this._product];

                    var oModel = new JSONModel();
                    oModel.setData(this.Delivery_OrderData);
                    this.getView().setModel(oModel, "DeliverySet1");

                    // var Invoice_OrderData = this.getOwnerComponent().getModel("Invoice").getData().d.results[this._product];
                    var Invoice_OrderData = this.getOwnerComponent().getModel("InvoiceSet1").getData().results[this._product];

                    console.log(Invoice_OrderData);

                    var oModel2 = new JSONModel();
                    oModel2.setData(Invoice_OrderData);
                    this.getView().setModel(oModel2, "InvoiceSet1");
                    if (flag == "S") {
                        this.getView().byId("SaleOrder").setVisible(true);
                        this.ObjectHeader = {
                            Order: this.Sales_OrderData.Vbeln,
                            Item: this.Sales_OrderData.Posnr,
                            CreatedBy: this.Sales_OrderData.Ernam,
                            CreatedOn: this.Sales_OrderData.Erdat,
                            SaleOrderName: "SaleOrder No"
                        }
                    } else if (flag == "D") {
                        this.getView().byId("SaleOrder").setVisible(true);
                        this.ObjectHeader = {
                            Order: this.Delivery_OrderData.Vbeln,
                            Item: this.Delivery_OrderData.Posnr,
                            CreatedBy: this.Delivery_OrderData.Ernam,
                            CreatedOn: this.Delivery_OrderData.Erdat,
                            SaleOrderName: "Delivery Doc"
                        }
                    }
                    else if (flag == "I") {
                        this.getView().byId("SaleOrder").setVisible(false);
                        this.ObjectHeader = {
                            Order: Invoice_OrderData.Vbeln,
                            // Item: Invoice_OrderData.Posnr,
                            CreatedBy: Invoice_OrderData.Ernam,
                            CreatedOn: Invoice_OrderData.Erdat,
                            SaleOrderName: "Invoice No"
                        }
                    }
                }
                var oModel12 = new JSONModel();
                oModel12.setData(this.ObjectHeader);
                this.getView().setModel(oModel12, "ObjectModel");
                this.onNotVisible();

            },

            onNotVisible: function () {
                var _flag1 = {
                    "SS": "B",
                    "CS": "C"
                }
                var oModel1 = new JSONModel();
                oModel1.setData(_flag1);
                this.getView().setModel(oModel1, "EditModel");
            },

            onUpdateReq: function () {
                this.getView().byId("iUpdate").setVisible(false);
                this.getView().byId("idSave").setVisible(true);
                var _flag1 = {
                    "SS": "S"
                }
                var oModel1 = new JSONModel();
                oModel1.setData(_flag1);
                this.getView().setModel(oModel1, "EditModel");

                //     var oObjectPage = this.getView().byId("page"),
                //     bCurrentShowFooterState = oObjectPage.getShowFooter();

                // oObjectPage.setShowFooter(!bCurrentShowFooterState);

            },
            _onIds: function () {
                this.getView().byId("SaleOrder1").setValue("");
                this.getView().byId("LineItem").setValue("");
                this.getView().byId("DocumentDate_S").setValue("");
                this.getView().byId("ItemDescription").setValue("");
                this.getView().byId("SoldtoParty").setValue("");
                this.getView().byId("ShiptoParty").setValue("");
                this.getView().byId("Material").setValue("");
                this.getView().byId("Quantity").setValue("");
                this.getView().byId("UnitofMeasurement").setValue("");
                this.getView().byId("DeliveryDoc").setValue(""); /////////////
                this.getView().byId("LineItem_D").setValue("");
                this.getView().byId("DocumentDate").setValue("");
                this.getView().byId("ItemDescription_D").setValue("");
                this.getView().byId("SoldtoParty_D").setValue("");
                this.getView().byId("ShiptoParty_D").setValue("");
                this.getView().byId("Material_D").setValue("");
                this.getView().byId("Plant").setValue("");
                this.getView().byId("StorageLocation").setValue("");
                this.getView().byId("DeliveryQuantity").setValue("");
                this.getView().byId("UnitofMeasurement_I").setValue("");
                this.getView().byId("PickedQuantity").setValue("");
                this.getView().byId("InvoiceNo").setValue("");  /////
                this.getView().byId("BillingDate_I").setValue("");
                this.getView().byId("ItemDescription_I").setValue("");
                this.getView().byId("SoldtoParty_I").setValue("");
                this.getView().byId("Payer").setValue("");
                this.getView().byId("Material").setValue("");
                this.getView().byId("BilledQuantity").setValue("");
                this.getView().byId("CompanyCode").setValue("");



            },

            onCreate_S: function () {
                // this.mode = "Add";

                this.onNotVisible();


                if (this._product == "V") {
                    this.getView().byId("iUpdate").setVisible(false);
                    this.getView().byId("idSave").setVisible(true);
                }

                else {
                    if (this._flags == "Copy_S") {
                    }
                    else{
                        this.getView().byId("iUpdate").setVisible(true);
                        this.getView().byId("idSave").setVisible(false);    
                    }
                  
                }
                var that = this;
                var Vbeln = that.getView().byId("SaleOrder1").getValue();
                var Posnr = that.getView().byId("LineItem").getValue();
                var Audat = that.getView().byId("DocumentDate_S").getValue();
                var Arktx = that.getView().byId("ItemDescription").getValue();
                var Kunnr = that.getView().byId("SoldtoParty").getValue();
                var Kunag = that.getView().byId("ShiptoParty").getValue();
                var Matnr = that.getView().byId("Material").getValue();
                var Kwmeng = that.getView().byId("Quantity").getValue();
                var Kmein = that.getView().byId("UnitofMeasurement").getValue();



                var array = { Vbeln, Posnr, Audat, Arktx, Kunnr, Kunag, Matnr, Kwmeng, Kmein };

                var id = that.getView().byId("idObjectHeader").getIntro().split(":")[1].slice(1);

                var id1 = that.getView().byId("SaleOrder").getText();
                var payload = { Vbeln, Posnr, Audat, Arktx, Kunnr, Kunag, Matnr, Kwmeng, Kmein }


                var oModel = this.getOwnerComponent().getModel("Sales");
                this._flags
                if (this._flags == "X" || this._flags == "Copy_S") {
                    oModel.create("/SalesSet", array, {
                        success: function (odata) {
                            this.Sales_OrderData();
                            // oModel.read("/SalesSet", {

                            //     // success: function (odata) {
                            //     //     var oModel1 = new JSONModel();
                            //     //     oModel1.setData(odata);
                            //     //     that.getView().setModel(oModel1, "SalesSet");
                            //     //     alert("Success");
                            //     //     //  MessageBox.success(oModel1);

                            //     // }
                            // })

                        },
                        error: function (oError) {
                            alert("error");

                        }
                    });
                } else {
                    oModel.update("/SalesSet(Vbeln='" + id + "',Posnr='" + id1 + "')", payload, {
                        success: function (odata) {
                            oModel.read("/SalesSet", {
                                success: function (odata) {
                                    var oModel1 = new JSONModel();
                                    oModel1.setData(odata);
                                    that.getView().setModel(oModel1, "SalesSet");
                                    alert("Updated");

                                }
                            })
                        },
                        error: function (oError) {
                            alert("error");

                        }
                    });
                }


            },
            onCreate_D: function (oEvent) {
                // this.mode = "Add";
                this.onNotVisible();
                if (this._product == "V") {
                    this.getView().byId("iUpdate").setVisible(false);
                    this.getView().byId("idSave").setVisible(true);
                } else {
                    if (this._flags == "Copy_D") {
                    }
                    else{
                        this.getView().byId("iUpdate").setVisible(true);
                        this.getView().byId("idSave").setVisible(false);    
                    }
                }
                var that = this;
                var Vbeln = that.getView().byId("DeliveryDoc").getValue();
                var Posnr = that.getView().byId("LineItem_D").getValue();
                var Bldat = that.getView().byId("DocumentDate").getValue();
                var Arktx = that.getView().byId("ItemDescription_D").getValue();
                var Kunag = that.getView().byId("SoldtoParty_D").getValue();
                var Kunnr = that.getView().byId("ShiptoParty_D").getValue();
                var Matnr = that.getView().byId("Material_D").getValue();
                var Werks = that.getView().byId("Plant").getValue();
                var Lgort = that.getView().byId("StorageLocation").getValue();
                var Lfimg = that.getView().byId("DeliveryQuantity").getValue();
                var Vrkme = that.getView().byId("UnitofMeasurement_I").getValue();
                var Pikmg = that.getView().byId("PickedQuantity").getValue();

                var payload = { Vbeln, Posnr, Bldat, Arktx, Kunnr, Kunag, Matnr, Werks, Lgort, Lfimg, Vrkme, Pikmg };
                var oModel = this.getOwnerComponent().getModel("Sales");
                if (this._flags == "X"|| this._flags == "Copy_D") {


                    oModel.create("/DeliverySet", payload, {
                        success: function (odata) {

                            oModel.read("/DeliverySet", {
                                success: function (odata) {
                                    var oModel1 = new JSONModel();
                                    oModel1.setData(odata);
                                    that.getView().setModel(oModel1, "DeliverySet");
                                    alert("Success");
                                    //  MessageBox.success(oModel1);

                                }
                            })

                        },
                        error: function (oError) {
                            alert("error");

                        }
                    });
                } else {
                    var id = that.getView().byId("idObjectHeader").getIntro().split(":")[1].slice(1);

                    var id1 = that.getView().byId("SaleOrder").getText();
                    oModel.update("/DeliverySet(Vbeln='" + id + "',Posnr='" + id1 + "')", payload, {
                        success: function (odata) {
                            oModel.read("/DeliverySet", {
                                success: function (odata) {
                                    var oModel1 = new JSONModel();
                                    oModel1.setData(odata);
                                    that.getView().setModel(oModel1, "DeliverySet");
                                    alert("Updated");

                                }
                            })
                        },
                        error: function (oError) {
                            alert("error");

                        }
                    });
                }
            },
            onCreate_I: function (oEvent) {
                // this.mode = "Add";
                this.onNotVisible();
                if (this._product == "V") {
                    this.getView().byId("iUpdate").setVisible(false);
                    this.getView().byId("idSave").setVisible(true);
                } else {
                    if (this._flags == "Copy_I") {
                    }
                    else{
                        this.getView().byId("iUpdate").setVisible(true);
                        this.getView().byId("idSave").setVisible(false);    
                    }
                }
                var that = this;
                var Vbeln = that.getView().byId("InvoiceNo").getValue();
                var Fkdat = that.getView().byId("BillingDate_I").getValue();
                var Arktx = that.getView().byId("ItemDescription_I").getValue();
                var Kunag = that.getView().byId("SoldtoParty_I").getValue();
                var Kunnr = that.getView().byId("Payer").getValue();
                var Matnr = that.getView().byId("Material").getValue();
                var Fkimg = that.getView().byId("BilledQuantity").getValue();
                var Bukrs = that.getView().byId("CompanyCode").getValue();

                var payload = { Vbeln, Fkdat, Arktx, Kunnr, Kunag, Matnr, Fkimg, Bukrs };
                var oModel = this.getOwnerComponent().getModel("Sales");
                if (this._flags == "X"|| this._flags == "Copy_I") {

                    oModel.create("/InvoiceSet", payload, {
                        success: function (odata) {

                            oModel.read("/InvoiceSet", {
                                success: function (odata) {
                                    var oModel1 = new JSONModel();
                                    oModel1.setData(odata);
                                    that.getView().setModel(oModel1, "InvoiceSet");
                                    alert("Success");
                                    //  MessageBox.success(oModel1);

                                }
                            })

                        },
                        error: function (oError) {
                            alert("error");

                        }
                    });
                } else {
                    var id = that.getView().byId("idObjectHeader").getIntro().split(":")[1].slice(1);
                    oModel.update("/InvoiceSet('" + id + "')", payload, {
                        success: function (odata) {
                            oModel.read("/InvoiceSet", {
                                success: function (odata) {
                                    var oModel1 = new JSONModel();
                                    oModel1.setData(odata);
                                    that.getView().setModel(oModel1, "InvoiceSet");
                                    alert("Updated");

                                }
                            })
                        },
                        error: function (oError) {
                            alert("error");

                        }
                    });
                }
            },
            onFilterSelect: function (oEvent) {
                console.log(oEvent);
                var selectedKey = oEvent.getParameters().key;
                if (selectedKey == "Sales") {
                    this._flagFilterBarSelect = {
                        // "SS":"S"
                        "C": "S"

                    }
                } else if (selectedKey == "Delivery") {
                    this._flagFilterBarSelect = {
                        // "DD":"D"
                        "C": "D"
                    }
                }
                else
                    if (selectedKey == "Invoice") {
                        this._flagFilterBarSelect = {
                            // "II":"I"
                            "C": "I"

                        }
                    }
                // var oModel1 = new JSONModel();
                // oModel1.setData(_flag);
                // this.getView().setModel(oModel1, "FlagModel");
            },
            onUpdateSave: function (oEvent) {
                this._flags
                this._flagFilterBarSelect

                if (this._flagFilterBarSelect && this._flags) {

                    if (this._flags == "S" || this._flags == "X" && this._flagFilterBarSelect.C == "S" || this._flags == "Copy_S") {
                        // if (this._flags == "X") {
                        this.onCreate_S();
                    } else if (this._flags == "D" || this._flags == "X" && this._flagFilterBarSelect.C == "D" || this._flags == "Copy_D") {
                        this.onCreate_D();
                    } else if (this._flags == "I" || this._flags == "X" && this._flagFilterBarSelect.C == "I" || this._flags == "Copy_I") {
                        this.onCreate_I();
                    }
                } else if (this._flags) {
                    if (this._flags == "S" || this._flags == "X" || this._flags == "Copy_S") {
                        // if (this._flags == "X") {
                        this.onCreate_S();
                    } else if (this._flags == "D" || this._flags == "Copy_D") {
                        this.onCreate_D();
                    } else if (this._flags == "I" || this._flags == "Copy_I") {
                        this.onCreate_I();
                    }
                }
                else {
                    this.onCreate_S();


                }
            },
            onDelite: function (oEvent) {
                this._flags
                if (this._flags == "S") {
                    this.onDelite_S();
                } else if (this._flags == "D") {
                    this.onDelite_D();
                } else if (this._flags == "I") {
                    this.onDelite_I();
                }

            },
            onDelite_S: function () {
                var that = this;
                var Vbeln = that.getView().byId("SaleOrder1").getValue();
                var Posnr = that.getView().byId("LineItem").getValue();
                var oModel = that.getOwnerComponent().getModel("Sales");
                oModel.remove("/SalesSet(Vbeln='" + Vbeln + "',Posnr='" + Posnr + "')", {
                    success: function (odata) {
                        MessageBox.success("Success");
                        that.onNavBack();
                    },
                    error: function (oError) {
                        // alert("error");
                        MessageBox.error("error");
                    }
                });
            },
            onDelite_D: function () {
                var that = this;
                var Vbeln = that.getView().byId("DeliveryDoc").getValue();
                var Posnr = that.getView().byId("LineItem_D").getValue();
                var oModel = that.getOwnerComponent().getModel("Sales");
                oModel.remove("/DeliverySet(Vbeln='" + Vbeln + "',Posnr='" + Posnr + "')", {
                    success: function (odata) {

                        MessageBox.success("Success");
                        that.onNavBack();
                    },
                    error: function (oError) {
                        // alert("error");

                        MessageBox.error("error");
                    }
                });
            },
            onDelite_I: function () {
                var that = this;
                var Vbeln = that.getView().byId("InvoiceNo").getValue();
                var oModel = that.getOwnerComponent().getModel("Sales");
                oModel.remove("/InvoiceSet('" + Vbeln + "')", {
                    success: function (odata) {
                        that.onNavBack();
                        MessageBox.success("Success");
                    },
                    error: function (oError) {
                        // alert("error");
                        MessageBox.error("error");
                    }
                });
            },
            onNavBack: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View1");
            }

        });
    });
