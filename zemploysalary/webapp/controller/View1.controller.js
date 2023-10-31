
sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("idsalary.zemploysalary.controller.View1", {
            onInit: function () {
                this.onReadAll();

            },
            onReadAll: function () {
                var that = this;
                debugger;
                
                // var oModel = that.getOwnerComponent().getModel('Data5');
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZTEST_EMP_SALARY_SRV/?$orderby=EmpId asc");
                oModel.read("/zemp_detailsSet", {
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

                        this._oDialog = sap.ui.xmlfragment(myView.getId(), "idsalary.zemploysalary.view.Dialog", this);
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
                // var payload = [{
                //     "BasicPay": "16500",
                //     "EmpDep": "ITI",
                //     "EmpEmail": "bhu@gmail.com",
                //     "EmpId": "0000000001",
                //     "EmpName": "BHUTESHTEJA",
                //     "EmpPhone": "9830928393",
                //     "Hra": "2000",
                //     "MonthlyPay": "25000",
                //     "ShiftAllowance": "5000",
                //     "SplAllowance": "1200"
                // }]

                
               var payload = oEvent.oSource.oPropagatedProperties.oModels.Data3.oData;
               
                for (var i = 0; i < payload.length; i++) {
                    var id = oEvent.oSource.oPropagatedProperties.oModels.Data3.oData[i].EmpId;
                   
                    var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZTEST_EMP_SALARY_SRV/");
                    oModel.update("/zemp_detailsSet('" + id + "')",payload[i],{
                        method: "PUT",

                        success: function (data) {
                            MessageBox.success("Success");
                            this.onReadAll();
                            // MessageBox.success("Record Updated");
                        },
                        error: function (error) {
                            MessageBox.error("Record  Not Updated");
                        }

                    });
                }
                this.byId("idDialog").close();

            


        },

            onAdd: function (oEvent) {

                var myView = this.getView();
                // var oDialog1 = myView.byId("id1Dialog");
                this._oDialog = myView.byId("id1Dialog");
                if (!this._oDialog) {

                    this._oDialog = sap.ui.xmlfragment(myView.getId(), "idsalary.zemploysalary.view.Dialog1", this);
                    myView.addDependent(this._oDialog);
                    this._oDialog.open();

                }
                else {

                    this.byId("id1Dialog").open();
                }

            },
            AddPress: function (oEvent) {

                var that = this;

                var EmpId = that.getView().byId("EmpId").getValue();
                var EmpName = that.getView().byId("EmpName").getValue();
                var EmpPhone = that.getView().byId("EmpPhone").getValue();
                var EmpEmail = that.getView().byId("EmpEmail").getValue();
                var EmpDep = that.getView().byId("EmpDep").getValue();
                var BasicPay = parseInt(that.getView().byId("BasicPay").getValue());
                var Hra = parseInt(that.getView().byId("Hra").getValue());
                var SplAllowance = parseInt(that.getView().byId("SplAllowance").getValue());
                var ShiftAllowance = parseInt(that.getView().byId("ShiftAllowance").getValue());
                var MonthlyPay = that.getView().byId("MonthlyPay").getValue();

                var array = { EmpId, EmpName, EmpPhone, EmpEmail, EmpDep, BasicPay, Hra, SplAllowance, ShiftAllowance, MonthlyPay };


                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZTEST_EMP_SALARY_SRV/");
                oModel.create("/zemp_detailsSet", array, {
                    success: function (odata) {
                        MessageBox.success("Success");
                        that.onReadAll();


                    },
                    error: function (oError) {
                        MessageBox.error("error");

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
            },
            onDelite: function (oEvent) {

                var that = this;
                that.mode = "delete";


                var oTable = that.byId("idProductsTable");
                debugger;
                var selectedRowData = oTable.getSelectedContexts();

                if (selectedRowData.length === 0) {
                    MessageToast.show("please select atleast one row");
                    return;
                } else {
                    var aSelectedItems = [];
                    for (var i = 0; i < selectedRowData.length; i++) {
                        if (selectedRowData[i].getObject()) {
                            aSelectedItems.push(selectedRowData[i].getObject());
                        }
                    }
                    var id = aSelectedItems[0].EmpId;
                    var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZTEST_EMP_SALARY_SRV/");
                    oModel.remove("/zemp_detailsSet('" + id + "')", {
                        success: function (odata) {
                            that.onReadAll();
                            MessageBox.success("Success");

                        },
                        error: function (oError) {
                            // alert("error");
                            MessageBox.error("error");
                        }
                    });
                }
            },
            onPressGo: function (evt) {
                var that = this;
                var oBinding = that.getView().byId("idProductsTable").getBinding("items");

                var oFinalFilter = [],
                    aEmpId = [],
                    aEmpName = [],
                    aEmpPhone = [],
                    aEmpEmail = [],
                    aEmpDep = [],

                    aBasicPay = [],
                    aHra = [],
                    aSplAllowance = [],
                    aShiftAllowance = [],
                    aMonthlyPay = [];

                var EmpId = that.byId("idEmpId").getSelectedItems();
                var EmpName = that.byId("idEmpName").getSelectedItems();
                var EmpPhone = that.byId("idEmpPhone").getSelectedItems();
                var EmpEmail = that.byId("idEmpEmail").getSelectedItems();
                var EmpDep = that.byId("idEmpDep").getSelectedItems();

                var BasicPay = that.byId("idBasicPay").getSelectedItems();
                var Hra = that.byId("idHra").getSelectedItems();
                var SplAllowance = that.byId("idSplAllowance").getSelectedItems();
                var ShiftAllowance = that.byId("idShiftAllowance").getSelectedItems();
                var MonthlyPay = that.byId("idMonthlyPay").getSelectedItems();

                if (!EmpId.length > 0 &&
                    !EmpName.length > 0 &&
                    !EmpPhone.length > 0 &&
                    !EmpEmail.length > 0 &&
                    !EmpDep.length > 0 &&

                    !BasicPay.length > 0 &&
                    !Hra.length > 0 &&
                    !SplAllowance.length > 0 &&
                    !ShiftAllowance.length > 0 &&
                    !MonthlyPay.length > 0) {

                    !oBinding.filter([]);
                } else {

                    for (var i = 0; i < EmpId.length; i++) {
                        aEmpId.push(new sap.ui.model.Filter({
                            path: "EmpId",
                            operator: 'EQ',
                            value1: EmpId[i].getText()
                        }));
                    }
                    for (var i = 0; i < EmpName.length; i++) {
                        aEmpName.push(new sap.ui.model.Filter({
                            path: "EmpName",
                            operator: 'EQ',
                            value1: EmpName[i].getText()
                        }));
                    }
                    for (var i = 0; i < EmpPhone.length; i++) {
                        aEmpPhone.push(new sap.ui.model.Filter({
                            path: "EmpPhone",
                            operator: 'EQ',
                            value1: EmpPhone[i].getText()
                        }));
                    }
                    for (var i = 0; i < EmpEmail.length; i++) {
                        aEmpEmail.push(new sap.ui.model.Filter({
                            path: "EmpEmail",
                            operator: 'EQ',
                            value1: EmpEmail[i].getText()
                        }));
                    }
                    for (var i = 0; i < EmpDep.length; i++) {
                        aEmpDep.push(new sap.ui.model.Filter({
                            path: "EmpDep",
                            operator: 'EQ',
                            value1: EmpDep[i].getText()
                        }));
                    }

                    for (var i = 0; i < BasicPay.length; i++) {
                        aBasicPay.push(new sap.ui.model.Filter({
                            path: "BasicPay",
                            operator: 'EQ',
                            value1: BasicPay[i].getText()
                        }));
                    }
                    for (var i = 0; i < Hra.length; i++) {
                        aHra.push(new sap.ui.model.Filter({
                            path: "Hra",
                            operator: 'EQ',
                            value1: Hra[i].getText()
                        }));
                    }
                    for (var i = 0; i < SplAllowance.length; i++) {
                        aSplAllowance.push(new sap.ui.model.Filter({
                            path: "SplAllowance",
                            operator: 'EQ',
                            value1: SplAllowance[i].getText()
                        }));
                    }
                    for (var i = 0; i < ShiftAllowance.length; i++) {
                        aShiftAllowance.push(new sap.ui.model.Filter({
                            path: "ShiftAllowance",
                            operator: 'EQ',
                            value1: ShiftAllowance[i].getText()
                        }));
                    }
                    for (var i = 0; i < MonthlyPay.length; i++) {
                        aMonthlyPay.push(new sap.ui.model.Filter({
                            path: "MonthlyPay",
                            operator: 'EQ',
                            value1: MonthlyPay[i].getText()
                        }));
                    }

                    if (aEmpId.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aEmpId,
                        }));
                    }
                    if (aEmpName.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aEmpName,
                        }));
                    }
                    if (aEmpPhone.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aEmpPhone,
                        }));
                    }
                    if (aEmpEmail.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aEmpEmail,
                        }));
                    }
                    if (aEmpDep.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aEmpDep,
                        }));
                    }
                    if (aBasicPay.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aBasicPay,
                        }));
                    }
                    if (aHra.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aHra,
                        }));
                    }
                    if (aSplAllowance.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aSplAllowance,
                        }));
                    }
                    if (aShiftAllowance.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aShiftAllowance,
                        }));
                    }
                    if (aMonthlyPay.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aMonthlyPay,
                        }));
                    }


                    oBinding.filter(oFinalFilter);

                }
            }
        });
    });
