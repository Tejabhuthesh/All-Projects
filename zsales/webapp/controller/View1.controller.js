sap.ui.define([
    "./BaseController",
    "sap/ui/core/BusyIndicator",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, BusyIndicator, MessageBox, JSONModel, FilterOperator, Filter, exportLibrary, Spreadsheet) {
        "use strict";
        var EdmType = sap.ui.export.EdmType;
        return BaseController.extend("idsales.zsales.controller.View1", {
           
            _getRouter: function () {

                return sap.ui.core.UIComponent.getRouterFor(this);
            },
            onSaleOrder: function (oEvent) {
                var productPath = oEvent.getSource().getBindingContext("SalesSet").getPath(),
                    icon = oEvent.getSource().mProperties.icon,
                    product = productPath.split("/").slice(-1).pop();
                if (icon === "sap-icon://copy") {
                    this._getRouter().navTo("View2", { Name: product, flag: "Copy_S" });
                } else {
                    this._getRouter().navTo("View2", { Name: product, flag: "S" });
                    //  this._getRouter().navTo("View2");
                }
            },
            onDelivery: function (oEvent) {
                var productPath = oEvent.getSource().getBindingContext("DeliverySet").getPath(),
                    icon = oEvent.getSource().mProperties.icon,
                    product = productPath.split("/").slice(-1).pop();
                if (icon === "sap-icon://copy") {
                    this._getRouter().navTo("View2", { Name: product, flag: "Copy_D" });
                } else {
                    this._getRouter().navTo("View2", { Name: product, flag: "D" });
                    //  this._getRouter().navTo("View2");
                }
            },
            onInvoice: function (oEvent) {
                var productPath = oEvent.getSource().getBindingContext("InvoiceSet").getPath(),
                    icon = oEvent.getSource().mProperties.icon,
                    product = productPath.split("/").slice(-1).pop();
                if (icon === "sap-icon://copy") {
                    this._getRouter().navTo("View2", { Name: product, flag: "Copy_I" });
                } else {
                    this._getRouter().navTo("View2", { Name: product, flag: "I" });
                }
                //  this._getRouter().navTo("View2");
            },
            // onFilterSelect: function (oEvent) {
            //     console.log(oEvent);
            //     var selectedKey = oEvent.getParameters().selectedKey;
            //     if (selectedKey == "Sales") {
            //         this.flag = "S";
            //     } else if (selectedKey == "Delivery") {
            //         this.flag = "D";
            //     } else {
            //         this.flag = "I";
            //     }
            // },
            onFilterSelect: function (oEvent) {
                console.log(oEvent);
                var selectedKey = oEvent.getParameters().key;
                if (selectedKey == "Sales") {
                    this._flagFilterBarSelect = {
                        "C": "S"
                    }
                } else if (selectedKey == "Delivery") {
                    this._flagFilterBarSelect = {
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
            onNavBack: function () {

                this._getRouter().navTo("View2");
            },
            onSearch: function (evt) {
                debugger
                if (this._flagFilterBarSelect.C == "S") {

                    var oTable = this.getView().byId("idSalesTable");
                    var oBinding = oTable.getBinding("rows");

                    if (evt.getId() == "liveChange") {
                        var sQuery = evt.mParameters.newValue;
                    }
                    if (sQuery) {

                        var d = [];
                        var ofilters = new Filter(d);

                        var oTable1 = oTable.getColumns();

                        for (var i = 0; i < oTable1.length; i++) {
                            d.push(new Filter({
                                path: oTable1[i].getProperty('filterProperty'),
                                operator: 'Contains',
                                value1: sQuery
                            }));
                        }

                    }
                    oBinding.filter(ofilters);
                }
                else if (this._flagFilterBarSelect.C == "D") {

                    var oTable = this.getView().byId("idDeliveryTable");
                    var oBinding = oTable.getBinding("rows");

                    if (evt.getId() == "liveChange") {
                        var sQuery = evt.mParameters.newValue;
                    }
                    if (sQuery) {
                        var d = [];
                        var ofilters = new Filter(d);

                        var oTable1 = oTable.getColumns();

                        for (var i = 0; i < oTable1.length; i++) {
                            d.push(new Filter({
                                path: oTable1[i].getProperty('filterProperty'),
                                operator: 'Contains',
                                value1: sQuery
                            }));
                        }
                    }
                    oBinding.filter(ofilters);
                }
                else if (this._flagFilterBarSelect.C == "I") {

                    var oTable = this.getView().byId("idInvoiceTable");
                    var oBinding = oTable.getBinding("rows");

                    if (evt.getId() == "liveChange") {
                        var sQuery = evt.mParameters.newValue;
                    }
                    if (sQuery) {
                        var d = [];
                        var ofilters = new Filter(d);

                        var oTable1 = oTable.getColumns();

                        for (var i = 0; i < oTable1.length; i++) {
                            d.push(new Filter({
                                path: oTable1[i].getProperty('filterProperty'),
                                operator: 'Contains',
                                value1: sQuery
                            }));
                        }
                    }
                    oBinding.filter(ofilters);
                }

            },

            createColumnConfig: function () {
                var aCols = [];
                var oTable = this.byId('idSalesTable').getColumns();
                for (var i = 0; i < oTable.length; i++) {
                    aCols.push({
                        label: oTable[i].getAggregation('label').getProperty('text'),
                        property: oTable[i].getProperty('filterProperty'),
                        type: EdmType.String
                    });
                }

                return aCols;
            },

            onExport: function () {
                var aCols, oRowBinding, oSettings, oSheet, oTable;

                aCols = this.createColumnConfig();

                oTable = this.byId('idSalesTable');
                oRowBinding = oTable.getBinding('rows').aIndices;
                var TableData = [];
                if (oRowBinding.length == this.getView().getModel("SalesSet").getData().results.length) {
                    TableData = oTable.getBinding('rows');
                } else {
                    for (var i = 0; i < oRowBinding.length; i++) {
                        TableData.push(this.getView().getModel("SalesSet").getData().results[oRowBinding[i]]);
                    }
                }
                oSettings = {
                    workbook: {
                        columns: aCols,
                        hierarchyLevel: 'Level'
                    },
                    dataSource: TableData,
                    fileName: 'Sale Order Deatails.xlsx',
                    worker: true // We need to disable worker because we are using a MockServer as OData Service
                };

                oSheet = new sap.ui.export.Spreadsheet(oSettings);
                oSheet.build().finally(function () {
                    oSheet.destroy();
                });
            },
            createColumnConfig_I: function () {

                var aCols = [];
                var oTable = this.byId('idInvoiceTable').getColumns();
                for (var i = 0; i < oTable.length; i++) {
                    aCols.push({
                        label: oTable[i].getAggregation('label').getProperty('text'),
                        property: oTable[i].getProperty('filterProperty'),
                        type: EdmType.String
                    });
                }

                return aCols;
            },
            onExport_I: function () {
                var aCols, oRowBinding, oSettings, oSheet, oTable;

                aCols = this.createColumnConfig_I();

                oTable = this.byId('idInvoiceTable');
                oRowBinding = oTable.getBinding('rows').aIndices;
                var TableData = [];
                if (oRowBinding.length == this.getView().getModel("InvoiceSet").getData().results.length) {
                    TableData = oTable.getBinding('rows');
                } else {
                    for (var i = 0; i < oRowBinding.length; i++) {
                        TableData.push(this.getView().getModel("InvoiceSet").getData().results[oRowBinding[i]]);
                    }
                }
                oSettings = {
                    workbook: {
                        columns: aCols,
                        hierarchyLevel: 'Level'
                    },
                    dataSource: TableData,
                    fileName: 'Invoice Deatails.xlsx',
                    worker: true // We need to disable worker because we are using a MockServer as OData Service
                };

                oSheet = new sap.ui.export.Spreadsheet(oSettings);
                oSheet.build().finally(function () {
                    oSheet.destroy();
                });
            },
            createColumnConfig_D: function () {

                var aCols = [];
                var oTable = this.byId('idDeliveryTable').getColumns();
                for (var i = 0; i < oTable.length; i++) {
                    aCols.push({
                        label: oTable[i].getAggregation('label').getProperty('text'),
                        property: oTable[i].getProperty('filterProperty'),
                        type: EdmType.String
                    });
                }

                return aCols;
            },
            onExport_D: function () {
                var aCols, oRowBinding, oSettings, oSheet, oTable;

                aCols = this.createColumnConfig_I();

                oTable = this.byId('idDeliveryTable');
                oRowBinding = oTable.getBinding('rows').aIndices;
                var TableData = [];
                if (oRowBinding.length == this.getView().getModel("DeliverySet").getData().results.length) {
                    TableData = oTable.getBinding('rows');
                } else {
                    for (var i = 0; i < oRowBinding.length; i++) {
                        TableData.push(this.getView().getModel("DeliverySet").getData().results[oRowBinding[i]]);
                    }
                }
                oSettings = {
                    workbook: {
                        columns: aCols,
                        hierarchyLevel: 'Level'
                    },
                    dataSource: TableData,
                    fileName: 'Delivery Deatails.xlsx',
                    worker: true // We need to disable worker because we are using a MockServer as OData Service
                };

                oSheet = new sap.ui.export.Spreadsheet(oSettings);
                oSheet.build().finally(function () {
                    oSheet.destroy();
                });
            },
            onPressGo: function (evt) {
                var that = this;
                var oBinding = that.getView().byId("idSalesTable").getBinding("rows");
                // oBinding.oList
                for (var i = 0; i < oBinding.oList.length; i++) {
                    delete oBinding.oList[i].__metadata;
                    var frmt = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd/MM/yyyy" });
                    var d = frmt.format(new Date(oBinding.oList[i].Erdat));
                    oBinding.oList[i].Erdat = d;
                }
                //    var  oSorter = new sap.ui.model.Sorter('Name', false);
                //     oBinding.sorters([oSorter]);
                var oFinalFilter = [],
                    aName = [],
                    aRole = [],
                    aGender = [];


                var Name = that.byId("_SaleOrder").getSelectedItems();
                var Role = that.byId("_CreatedBy").getSelectedItems();
                var Gender = that.byId("_CreatedOn").getSelectedItems();


                if (!Name.length > 0 &&
                    !Role.length > 0 &&
                    !Gender.length > 0) {
                    !oBinding.filter([]);
                } else {

                    for (var i = 0; i < Name.length; i++) {
                        aName.push(new sap.ui.model.Filter({
                            path: "Vbeln",
                            operator: 'EQ',
                            value1: Name[i].getText()
                        }));
                    }
                    for (var i = 0; i < Role.length; i++) {
                        aRole.push(new sap.ui.model.Filter({
                            path: "Ernam",
                            operator: 'EQ',
                            value1: Role[i].getText()
                        }));
                    }
                    for (var i = 0; i < Gender.length; i++) {
                        aGender.push(new sap.ui.model.Filter({
                            path: "Erdat",
                            operator: 'EQ',
                            value1: Gender[i].getText()
                        }));
                    }
                    if (aName.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aName,
                        }));
                    }
                    if (aRole.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aRole,
                        }));
                    }
                    if (aGender.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aGender,
                        }));
                    }
                    oBinding.filter(oFinalFilter);
                }
            },
            onPressClear: function (oEvent) {

                this.byId("_SaleOrder").setSelectedItems("");
                this.byId("_CreatedBy").setSelectedItems("");
                this.byId("_CreatedOn").setSelectedItems("");
                var oBinding = this.getView().byId("idSalesTable").getBinding("rows");
                !oBinding.filter([]);
            },
            onPressGo_D: function (evt) {
                var that = this;
                var oBinding = that.getView().byId("idDeliveryTable").getBinding("rows");
                //    var  oSorter = new sap.ui.model.Sorter('Name', false);
                //     oBinding.sorters([oSorter]);
                for (var i = 0; i < oBinding.oList.length; i++) {
                    delete oBinding.oList[i].__metadata;
                    var frmt = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd/MM/yyyy" });
                    var d = frmt.format(new Date(oBinding.oList[i].Erdat));
                    oBinding.oList[i].Erdat = d;
                }
                var oFinalFilter = [],
                    aName = [],
                    aRole = [],
                    aGender = [];


                var Name = that.byId("_DeliveryDoc").getSelectedItems();
                var Role = that.byId("_CreatedBy_D").getSelectedItems();
                var Gender = that.byId("_CreatedOn_D").getSelectedItems();


                if (!Name.length > 0 &&
                    !Role.length > 0 &&
                    !Gender.length > 0 &&
                    !City.length > 0 &&
                    !Number.length > 0) {
                    !oBinding.filter([]);
                } else {

                    for (var i = 0; i < Name.length; i++) {
                        aName.push(new sap.ui.model.Filter({
                            path: "Vbeln",
                            operator: 'EQ',
                            value1: Name[i].getText()
                        }));
                    }
                    for (var i = 0; i < Role.length; i++) {
                        aRole.push(new sap.ui.model.Filter({
                            path: "Ernam",
                            operator: 'EQ',
                            value1: Role[i].getText()
                        }));
                    }
                    for (var i = 0; i < Gender.length; i++) {
                        aGender.push(new sap.ui.model.Filter({
                            path: "Erdat",
                            operator: 'EQ',
                            value1: Gender[i].getText()
                        }));
                    }
                    if (aName.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aName,
                        }));
                    }
                    if (aRole.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aRole,
                        }));
                    }
                    if (aGender.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aGender,
                        }));
                    }
                    oBinding.filter(oFinalFilter);
                }
            },
            onPressClear_D: function (oEvent) {

                this.byId("_DeliveryDoc").setSelectedItems("");
                this.byId("_CreatedBy_D").setSelectedItems("");
                this.byId("_CreatedOn_D").setSelectedItems("");
                var oBinding = this.getView().byId("idDeliveryTable").getBinding("rows");
                !oBinding.filter([]);
            },
            onPressGo_I: function (evt) {
                var that = this;
                var oBinding = that.getView().byId("idInvoiceTable").getBinding("rows");
                //    var  oSorter = new sap.ui.model.Sorter('Name', false);
                //     oBinding.sorters([oSorter]);
                for (var i = 0; i < oBinding.oList.length; i++) {
                    delete oBinding.oList[i].__metadata;
                    var frmt = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd/MM/yyyy" });
                    var d = frmt.format(new Date(oBinding.oList[i].Erdat));
                    oBinding.oList[i].Erdat = d;
                }
                var oFinalFilter = [],
                    aName = [],
                    aRole = [],
                    aGender = [];


                var Name = that.byId("_InvoiceNo").getSelectedItems();
                var Role = that.byId("_CreatedBy_I").getSelectedItems();
                var Gender = that.byId("_CreatedOn_I").getSelectedItems();


                if (!Name.length > 0 &&
                    !Role.length > 0 &&
                    !Gender.length > 0 &&
                    !City.length > 0 &&
                    !Number.length > 0) {
                    !oBinding.filter([]);
                } else {

                    for (var i = 0; i < Name.length; i++) {
                        aName.push(new sap.ui.model.Filter({
                            path: "Vbeln",
                            operator: 'EQ',
                            value1: Name[i].getText()
                        }));
                    }
                    for (var i = 0; i < Role.length; i++) {
                        aRole.push(new sap.ui.model.Filter({
                            path: "Ernam",
                            operator: 'EQ',
                            value1: Role[i].getText()
                        }));
                    }
                    for (var i = 0; i < Gender.length; i++) {
                        aGender.push(new sap.ui.model.Filter({
                            path: "Erdat",
                            operator: 'EQ',
                            value1: Gender[i].getText()
                        }));
                    }
                    if (aName.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aName,
                        }));
                    }
                    if (aRole.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aRole,
                        }));
                    }
                    if (aGender.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aGender,
                        }));
                    }
                    oBinding.filter(oFinalFilter);
                }
            },
            onPressClear_I: function () {

                this.byId("_InvoiceNo").setSelectedItems("");
                this.byId("_CreatedBy_I").setSelectedItems("");
                this.byId("_CreatedOn_I").setSelectedItems("");
                var oBinding = this.getView().byId("idInvoiceTable").getBinding("rows");
                !oBinding.filter([]);
            },
            handleSelectionChange(evt) {
                debugger
            },
            handleSelectionFinish(evt) {
                debugger
            },
            onAfterRendering(){
                // this.onPressClear_I();
            }
        

        });
    });
