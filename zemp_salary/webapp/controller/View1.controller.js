sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("idemp.zempsalary.controller.View1", {
            onInit: function () {
                this.onReadAll();

            },
            onReadAll: function () {
                var that = this;
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZTEST_EMP_SALARY_SRV/");

                oModel.read("/zemp_detailsSet", {
                    success: function (odata) {
                        var oModel1 = new sap.ui.model.json.JSONModel();
                        debugger;
                        oModel1.setData(odata);
                        that.getView().setModel(oModel1, "Data1");
                        // MessageBox.success("Success");

                    },
                    error: function (oError) {
                        MessageBox.error("error");
                    }
                });
            },

            rightarrow: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");
            },
            onEmpid: function (evt) {

                var key = evt.oSource.mProperties.text;
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2", { key1: key });
            },

            onSearch: function (evt) {

                var that = this;
                var oTable = that.getView().byId("idProductsTable");
                var oBinding = oTable.getBinding("items");

                if (evt.getId() == "liveChange") {
                    var sQuery = evt.mParameters.newValue;
                }

                var that = this;
                if (sQuery) {
                    var oFilter = new sap.ui.model.Filter('EmpId', 'Contains', sQuery);                   //EQ =
                    var oFilter1 = new sap.ui.model.Filter('EmpName', 'Contains', sQuery);                // CONTAINS Notequal
                    var oFilter2 = new sap.ui.model.Filter('EmpPhone', 'Contains', sQuery);
                    var oFilter3 = new sap.ui.model.Filter('EmpEmail', 'Contains', sQuery);
                    var oFilter4 = new sap.ui.model.Filter('EmpDep', 'Contains', sQuery);
                    var oFilter5 = new sap.ui.model.Filter('BasicPay', 'Contains', sQuery);                   //EQ =
                    var oFilter6 = new sap.ui.model.Filter('Hra', 'Contains', sQuery);                // CONTAINS Notequal
                    var oFilter7 = new sap.ui.model.Filter('SplAllowance', 'Contains', sQuery);
                    var oFilter8 = new sap.ui.model.Filter('ShiftAllowance', 'Contains', sQuery);
                    var oFilter9 = new sap.ui.model.Filter('MonthlyPay', 'Contains', sQuery);
                    var ofilters = new sap.ui.model.Filter([oFilter, oFilter1, oFilter2, oFilter3, oFilter4, oFilter5, oFilter6, oFilter7, oFilter8, oFilter9]);
                }
                oBinding.filter(ofilters);


            },

            onEdit: function (oEvent) {

                this.mode = "edit";
                var that = this;
                //  var sData = oEvent.getSource().getModel("Data1").getData();
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

                        this._oDialog = sap.ui.xmlfragment(myView.getId(), "idemp.zempsalary.view.Dialog", this);
                        myView.addDependent(this._oDialog);
                        this._oDialog.open();
                    }
                    else {

                        that.byId("idDialog").open();
                    }

                    var aSelectedItems = [];
                    for (var i = 0; i < selectedRowData.length; i++) {
                        if (selectedRowData[i].getObject()) {
                            aSelectedItems.push(selectedRowData[i].getObject());
                        }
                    }
                    var oModel = new sap.ui.model.json.JSONModel();
                    oModel.setData(aSelectedItems);
                    that.getView().setModel(oModel, "Data3");
                }

            },
            CancelPress: function () {
                this.byId("idDialog").close();
            },
            SavePress: function (oEvent) {
                // var that = this;

                // debugger;
                // var payload = [];
                // payload = oEvent.oSource.oPropagatedProperties.oModels.Data3.oData;
                // for (var i = 0; i < payload.length; i++) {
                //     var id = oEvent.oSource.oPropagatedProperties.oModels.Data3.oData[i].EmpId;

                //      var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZTEST_EMP_SALARY_SRV/");
                //     oModel.update("/zemp_detailsSet( " + id + ")", payload[i], {
                //         success: function (odata) {


                //             MessageBox.success("Success");
                //             that.onReadAll();

                //         },
                //         error: function (oError) {
                //             MessageBox.error("error");
                //         }
                //     });



                var that = this;
                var payload = oEvent.oSource.oPropagatedProperties.oModels.Data3.oData;
                var id = oEvent.oSource.oPropagatedProperties.oModels.Data3.oData[0].EmpId;
                 var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZTEST_EMP_SALARY_SRV/");
               // var oModel = that.getOwnerComponent().getModel("tableData");
                oModel.update("/zemp_detailsSet('" + id + "')", payload, {
                    success: function (odata) {
                        var oModel = that.getOwnerComponent().getModel("tableData");
                        oModel.read("/zemp_detailsSet", {
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
            onAdd: function (oEvent) {

                var myView = this.getView();
                // var oDialog1 = myView.byId("id1Dialog");
                this._oDialog = myView.byId("id1Dialog");
                if (!this._oDialog) {

                    this._oDialog = sap.ui.xmlfragment(myView.getId(), "idemp.zempsalary.view.Dialog1", this);
                    myView.addDependent(this._oDialog);
                    this._oDialog.open();

                }
                else {

                    this.byId("id1Dialog").open();
                }

            },
            AddPress: function (oEvent) {
                // this.mode = "Add";

                var that = this;
                // var EmpId = "000009";
                var EmpId = that.getView().byId("EmpId").getValue();
                var EmpName = that.getView().byId("EmpName").getValue();
                var EmpPhone = that.getView().byId("EmpPhone").getValue();
                var EmpEmail = that.getView().byId("EmpEmail").getValue();
                var EmpDep = that.getView().byId("EmpDep").getValue();
                var BasicPay = that.getView().byId("BasicPay").getValue();
                var Hra = that.getView().byId("Hra").getValue();
                var SplAllowance = that.getView().byId("SplAllowance").getValue();
                var ShiftAllowance = that.getView().byId("ShiftAllowance").getValue();
                var MonthlyPay = that.getView().byId("MonthlyPay").getValue();

                var array = { EmpId, EmpName, EmpPhone, EmpEmail, EmpDep, BasicPay, Hra, SplAllowance, ShiftAllowance, MonthlyPay };


                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZTEST_EMP_SALARY_SRV/");
                oModel.create("/zemp_detailsSet", array, {
                    success: function (odata) {
                        MessageBox.success("Success");
                        that.onReadAll();


                    },
                    error: function (oError) {
                        alert("error");

                    }
                });
                that.byId("id1Dialog").close();

            },
            CancelPress1: function () {
                this.byId("id1Dialog").close();
            },

            dialogAftercloseadd: function (oEvent) {

                this._oDialog.destroy();
            },
            dialogAfterclosedit: function (oEvent) {

                this._oDialog.destroy();
            }
        });
    });
