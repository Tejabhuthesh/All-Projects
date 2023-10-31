sap.ui.define([
    "./BaseController", "sap/m/MessageToast", "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, MessageToast, MessageBox) {
        "use strict";

        return BaseController.extend("idodata1.project50000.controller.View1", {

            onInit() {
                var that = this;

                that.byId("editmode").setVisible(false);
                that.byId("addButton").setVisible(false);
                that.byId("deleteButton").setVisible(false);
                that.byId("idProductsTable").setMode("None");
            },
            rightarrow: function (oEvent) {
                debugger;

                // this.onInit("userSet");
                // var tab3 = oEvent.getParameters("arguments").tab1;
                // var tab3 = oEvent;
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");


            },   

            onDelite: function (oEvent) {

                var that = this;
                that.mode = "delete";

                var sData = oEvent.getSource().getModel("Data1").getData();
                var oTable = this.byId("idProductsTable");
                var selectedRowData = oTable.getSelectedContexts();
                if (selectedRowData.length === 0) {
                    MessageToast.show("please select atleast one row");
                    return;
                } else {
                    for (var i = selectedRowData.length - 1; i >= 0; i--) {
                        var oThisObj = selectedRowData[i].getObject();
                        var index = $.map(sData.results, function (obj, index) {
                            if (obj === oThisObj) {
                                return index;
                            }
                        });

                        // var id = sData.results[index].Name;
                    

                    var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZEMPLOYEE_EEE_SRV/");
                    oModel.remove("/userSet('" + sData.results[index].Name + "')", {
                        success: function (odata) {
                            oModel.read("/userSet", {
                                success: function (odata) {
                                    var oModel1 = new sap.ui.model.json.JSONModel();
                                    oModel1.setData(odata);
                                    that.getView().setModel(oModel1, "Data1");
                                    // alert("Success");
                                    MessageBox.success("Success");

                                }
                            })
                        },
                        error: function (oError) {
                            // alert("error");
                            MessageBox.error("error");
                        }
                    });
                }
                }
            }, onAdd: function (oEvent) {

                var myView = this.getView();
                // var oDialog1 = myView.byId("id1Dialog");
                this._oDialog = myView.byId("id1Dialog");
                if (!this._oDialog) {

                    this._oDialog = sap.ui.xmlfragment(myView.getId(), "idodata1.project50000.view.Dialog1", this);
                    myView.addDependent(this._oDialog);
                    this._oDialog.open();

                }
                else {

                    this.byId("id1Dialog").open();
                }

            },
            CancelPress1: function () {

                this.byId("id1Dialog").close();

            },

            AddPress: function (oEvent) {
                // this.mode = "Add";

                var that = this;
                var Name = that.getView().byId("name").getValue();
                var Zemprole = that.getView().byId("Zemprole").getValue();
                var Zgender = that.getView().byId("Zgender").getValue();
                var Znumber = that.getView().byId("Znumber").getValue();
                var Zcity = that.getView().byId("Zcity").getValue();

                var array = { Name, Zemprole, Zgender, Znumber, Zcity };


                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZEMPLOYEE_EEE_SRV/");
                oModel.create("/userSet", array, {
                    success: function (odata) {

                        oModel.read("/userSet", {
                            success: function (odata) {
                                var oModel1 = new sap.ui.model.json.JSONModel();
                                oModel1.setData(odata);
                                that.getView().setModel(oModel1, "Data1");
                                alert("Success");
                                //  MessageBox.success(oModel1);

                            }
                        })

                    },
                    error: function (oError) {
                        alert("error");

                    }
                });
                that.byId("id1Dialog").close();

            },
            onEdit: function (oEvent) {

                this.mode = "edit";
                var that = this;
                var sData = oEvent.getSource().getModel("Data1").getData();
                var oTable = that.byId("idProductsTable");
                debugger;
                var selectedRowData = oTable.getSelectedContexts();

                
                var myView = that.getView();
                // var oDialog = myView.byId("idDialog");

                this._oDialog = myView.byId("idDialog");


                if (selectedRowData.length === 0) {
                    MessageToast.show("please select atleast one row");
                    return;
                } else {
                    if (!this._oDialog) {

                        this._oDialog = sap.ui.xmlfragment(myView.getId(), "idodata1.project50000.view.Dialog", this);
                        myView.addDependent(this._oDialog);
                        this._oDialog.open();
                    }
                    else {

                        that.byId("idDialog").open();
                    }

        // only one record
                    for (var i = selectedRowData.length - 1; i >= 0; i--) {
                        var oThisObj = selectedRowData[i].getObject();
                        var index = $.map(sData.results, function (obj, index) {
                            if (obj === oThisObj) {
                                return index;
                            }
                        });
                        sData.results[index];
                    }
                    var oModel = new sap.ui.model.json.JSONModel();
                    oModel.setData(sData.results[index]);
                    that.getView().setModel(oModel, "Data3");


                    // var aSelectedItems = [];
                    // for (var i = 0; i < selectedRowData.length; i++) {
                    //     if (selectedRowData[i].getObject()) {
                    //         aSelectedItems.push(selectedRowData[i].getObject());
                    //     }
                    // }
                    // var oModel = new sap.ui.model.json.JSONModel();
                    // oModel.setData(aSelectedItems);
                    // that.getView().setModel(oModel, "Data3");
                }




            },
            SavePress: function (oEvent) {
                var that = this;
                var payload = oEvent.oSource.oPropagatedProperties.oModels.Data3.oData;
                var id = oEvent.oSource.oPropagatedProperties.oModels.Data3.oData.Name;
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZEMPLOYEE_EEE_SRV/");
                oModel.update("/userSet('" + id + "')", payload, {
                    success: function (odata) {
                        oModel.read("/userSet", {
                            success: function (odata) {
                                var oModel1 = new sap.ui.model.json.JSONModel();
                                oModel1.setData(odata);
                                that.getView().setModel(oModel1, "Data1");
                                // alert("Success");
                                MessageBox.success("Success");

                            }
                        })
                    },
                    error: function (oError) {
                        // alert("error");
                        MessageBox.error("error");
                    }
                });
                that.byId("idDialog").close();

            },

            dialogAftercloseadd: function (oEvent) {

                this._oDialog.destroy();
            },
            dialogAfterclosedit: function (oEvent) {

                this._oDialog.destroy();
            },

            Lock: function (oEvent) {

                if (oEvent.getSource().getText() === "Unlocked") {
                    oEvent.getSource().setText("Locked");

                    oEvent.getSource().setIcon("sap-icon://locked");
                    this.byId("editmode").setVisible(false);
                    this.byId("addButton").setVisible(false);
                    this.byId("deleteButton").setVisible(false);
                    this.byId("idProductsTable").setMode("None");

                    // this.byId("editmode").setEnabled(false);
                    // this.byId("addButton").setEnabled(false);
                    // this.byId("deleteButton").setEnabled(false);
                }
                else {
                    oEvent.getSource().setText("Unlocked");
                    oEvent.getSource().setIcon("sap-icon://unlocked");

                    this.byId("editmode").setVisible(true);
                    this.byId("addButton").setVisible(true);
                    this.byId("deleteButton").setVisible(true);
                    this.byId("idProductsTable").setMode("MultiSelect");
                    // this.byId("editmode").setEnabled(true);
                    // this.byId("addButton").setEnabled(true);
                    // this.byId("deleteButton").setEnabled(true);


                }
            },
            // ZGPCET:function (oEvent) {
            //     // var supplier = oEvent.getSource().gettext("ZTEST_USER"); // read SupplierID from OData path Product/SupplierID
            //     var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation"); // get a handle on the global XAppNav service
            //     var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
            //     target: {
            //     semanticObject: "G001_GPCET",
            //     action: "display"
            //     },
            //     // params: {
            //     // "supplierID": supplier
            //     // }
            //     })) || ""; // generate the Hash to display a Supplier
            //     oCrossAppNavigator.toExternal({
            //     target: {
            //     shellHash: hash
            //     }
            //     });
            //    }
            sort: function () {
                var that = this;
                var oTable = that.getView().byId("idProductsTable");
                var oBinding = oTable.getBinding("items").oList;
                var oSorter = new sap.ui.model.Sorter('Zemprole', false);   // true = descending order   // false = ascending order

                oBinding.Sorter(oSorter);
                alert("Success");

                // var oView = this.getView();
                // var oTable = oView.byId("idProductsTable");
                // oTable.sort(oView.byId("name"), SortOrder.Descending, true);
            },
            ZGPCET: function (oEvent) {
                var fgetService = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService;

                this.oCrossAppNavigator = fgetService && fgetService("CrossApplicationNavigation");

                this.oCrossAppNavigator.toExternal({ target: { shellHash: "#G001_GPCET-display" } });
            },
        });
    });
