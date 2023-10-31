sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/ODataModel",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
   
],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel, MessageToast, FilterOperator, Filter, MessageBox, exportLibrary, Spreadsheet) {
        "use strict";
        var EdmType = sap.ui.export.EdmType;
        // var EdmType =exportLibrary.EdmType;
       
        return Controller.extend("idfilters.zfilters.controller.View2", {
            onInit: function () {
              
                var oModel = this.getOwnerComponent().getModel();
                oModel.read("/userSet", {
                    success: function (odata) {
                        var oModel1 = new JSONModel();

                        oModel1.setData(odata);
                        this.getView().setModel(oModel1, "Data1");
                     

                    }.bind(this),
                    error: function (oError) {
                        alert("error");
                    }
                });



            }, onNavBack: function () {

                history.go(-1);

            },
            
            rightarrow: function () {

                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View3");
            },
            onSearch: function (evt) {

            
                var oTable = this.getView().byId("idProductsTable");
                var oBinding = oTable.getBinding("rows");

                if (evt.getId() == "liveChange") {
                    var sQuery = evt.mParameters.newValue;
                }

               
                if (sQuery) {
                    var oFilter = new Filter('Name', 'Contains', sQuery);                   //EQ =
                    var oFilter1 = new Filter('Zemprole', 'Contains', sQuery);                // CONTAINS Notequal
                    var oFilter2 = new Filter('Zgender', 'Contains', sQuery);
                    var oFilter3 = new Filter('Zcity', 'Contains', sQuery);
                    var oFilter4 = new Filter('Znumber', 'Contains', sQuery);

                    var ofilters = new Filter([oFilter, oFilter1, oFilter2, oFilter3, oFilter4]);
                }
                oBinding.filter(ofilters);


            },
            createColumnConfig: function () {

                var aCols = [];

               
                aCols.push({
                    label: 'Name',
                    property: 'Name',
                    type: EdmType.String

                });

                aCols.push({
                    label: 'Zemprole',
                    property: 'Zemprole',
                    type: EdmType.String
                });

                aCols.push({
                    label: 'Zgender',
                    property: 'Zgender',
                    type: EdmType.String
                });

                aCols.push({
                    label: 'Zcity',
                    property: 'Zcity',
                    type: EdmType.String
                });

                aCols.push({
                    label: 'Znumber',
                    property: 'Znumber',
                    type: EdmType.String,


                });

               

                return aCols;
            },

            onExport: function () {
                var aCols, oRowBinding, oSettings, oSheet, oTable;

                aCols = this.createColumnConfig();

                oTable = this.byId('idProductsTable');
                oRowBinding = oTable.getBinding('rows').aIndices;
                var TableData = [];
                if (oRowBinding.length == this.getView().getModel("Data1").getData().results.length) {
                    TableData = oTable.getBinding('rows');
                } else {
                    for (var i = 0; i < oRowBinding.length; i++) {
                        TableData.push(this.getView().getModel("Data1").getData().results[oRowBinding[i]]);
                    }
                }


                oSettings = {
                    workbook: {
                        columns: aCols,
                        hierarchyLevel: 'Level'
                    },
                    dataSource: TableData,
                    fileName: 'Table export sample.xlsx',
                    worker: true // We need to disable worker because we are using a MockServer as OData Service
                };

                oSheet = new sap.ui.export.Spreadsheet(oSettings);
                oSheet.build().finally(function () {
                    oSheet.destroy();
                });
            },
            // handleSelectionChangeName: function (evt) {
            //     var that = this;
            //     var oTable = that.getView().byId("idProductsTable");
            //     var oBinding = oTable.getBinding("rows"),
            //         oFinalFilter = [],
            //         aName = [];

            //     // Name = this.byId("idname").getTokens();

            //     var Name = that.byId("idname").getSelectedItems();
            //     if (!Name.length > 0) {
            //         !oBinding.filter([]);
            //     } else {
            //         for (var i = 0; i < Name.length; i++) {
            //             aName.push(new sap.ui.model.Filter({
            //                 path: "Name",
            //                 operator: 'EQ',
            //                 value1: Name[i].getText()
            //             }));
            //         }

            //         oFinalFilter.push(new sap.ui.model.Filter({
            //             and: false,
            //             filters: [
            //                 new sap.ui.model.Filter({
            //                     and: false,
            //                     filters: aName
            //                 })
            //             ]
            //         }));
            //         oBinding.filter(oFinalFilter);
            //     }
            // },
            // handleSelectionChangeRole: function (evt) {
            //     var that = this;
            //     var oTable = that.getView().byId("idProductsTable");
            //     var oBinding = oTable.getBinding("rows"),
            //         oFinalFilter = [],
            //         aRole = [],
            //         aName = []
            //     // Role = this.byId("idRole").getTokens();

            //     var Role = that.byId("idemprole").getSelectedItems();
            //     var Name = that.byId("idname").getSelectedItems();
            //     if (!Role.length > 0) {
            //         !oBinding.filter([]);
            //     } else {
            //         for (var i = 0; i < Role.length; i++) {
            //             aRole.push(new sap.ui.model.Filter({
            //                 path: "Zemprole",
            //                 operator: 'EQ',
            //                 value1: Role[i].getText()
            //             }));
            //         }
            //         for (var i = 0; i < Name.length; i++) {
            //             aName.push(new sap.ui.model.Filter({
            //                 path: "Name",
            //                 operator: 'EQ',
            //                 value1: Name[i].getText()
            //             }));
            //         }


            //         oFinalFilter.push(


            //             new sap.ui.model.Filter({
            //                 and: false,
            //                 filters: aRole
            //             }),
            //             new sap.ui.model.Filter({
            //                 and: false,
            //                 filters: aName
            //             })

            //         );
            //         oBinding.filter(oFinalFilter);
            //     }
            // },

            // handleSelectionChangeGender: function (evt) {
            //     var that = this;
            //     var oTable = that.getView().byId("idProductsTable");
            //     var oBinding = oTable.getBinding("rows"),
            //         oFinalFilter = [],
            //         aGender = [];

            //     // Gender = this.byId("idGender").getTokens();

            //     var Gender = that.byId("idgender").getSelectedItems();
            //     if (!Gender.length > 0) {
            //         !oBinding.filter([]);
            //     } else {
            //         for (var i = 0; i < Gender.length; i++) {
            //             aGender.push(new sap.ui.model.Filter({
            //                 path: "Zgender",
            //                 operator: 'EQ',
            //                 value1: Gender[i].getText()
            //             }));
            //         }

            //         oFinalFilter.push(new sap.ui.model.Filter({
            //             and: false,
            //             filters: [
            //                 new sap.ui.model.Filter({
            //                     and: false,
            //                     filters: aGender
            //                 })
            //             ]
            //         }));
            //         oBinding.filter(oFinalFilter);
            //     }
            // },
            // handleSelectionChangeCity: function (evt) {
            //     var that = this;
            //     var oTable = that.getView().byId("idProductsTable");
            //     var oBinding = oTable.getBinding("rows"),
            //         oFinalFilter = [],
            //         aCity = [];

            //     // City = this.byId("idCity").getTokens();

            //     var City = that.byId("idcity").getSelectedItems();
            //     if (!City.length > 0) {
            //         !oBinding.filter([]);
            //     } else {
            //         for (var i = 0; i < City.length; i++) {
            //             aCity.push(new sap.ui.model.Filter({
            //                 path: "Zcity",
            //                 operator: 'EQ',
            //                 value1: City[i].getText()
            //             }));
            //         }

            //         oFinalFilter.push(new sap.ui.model.Filter({
            //             and: false,
            //             filters: [
            //                 new sap.ui.model.Filter({
            //                     and: false,
            //                     filters: aCity
            //                 })
            //             ]
            //         }));
            //         oBinding.filter(oFinalFilter);
            //     }
            // },
            // handleSelectionChangeNumber: function (evt) {
            //     var that = this;
            //     var oTable = that.getView().byId("idProductsTable");
            //     var oBinding = oTable.getBinding("rows");



            //     var oFinalFilter = [];
            //     var aNumber = [];

            //     // Number = this.byId("idNumber").getTokens();

            //     var Number = that.byId("idnumber").getSelectedItems();
            //     if (!Number.length > 0) {
            //         !oBinding.filter([]);
            //     } else {
            //         for (var i = 0; i < Number.length; i++) {
            //             aNumber.push(new sap.ui.model.Filter({
            //                 path: "Znumber",
            //                 operator: 'EQ',
            //                 value1: Number[i].getText()
            //             }));
            //         }

            //         oFinalFilter.push(new sap.ui.model.Filter({
            //             and: false,
            //             filters: [
            //                 new sap.ui.model.Filter({
            //                     and: false,
            //                     filters: aNumber
            //                 })
            //             ]
            //         }));
            //         oBinding.filter(oFinalFilter);
            //     }
            // },
            onPressGo: function (evt) {
                var that = this;
                var oBinding = that.getView().byId("idProductsTable").getBinding("rows");
                //    var  oSorter = new sap.ui.model.Sorter('Name', false);
                //     oBinding.sorters([oSorter]);
                var oFinalFilter = [],
                    aName = [],
                    aRole = [],
                    aGender = [],
                    aCity = [],
                    aNumber = [];

                var Name = that.byId("idname").getSelectedItems();
                var Role = that.byId("idemprole").getSelectedItems();
                var Gender = that.byId("idgender").getSelectedItems();
                var City = that.byId("idcity").getSelectedItems();
                var Number = that.byId("idnumber").getSelectedItems();

                if (!Name.length > 0 &&
                    !Role.length > 0 &&
                    !Gender.length > 0 &&
                    !City.length > 0 &&
                    !Number.length > 0) {
                    !oBinding.filter([]);
                } else {

                    for (var i = 0; i < Name.length; i++) {
                        aName.push(new sap.ui.model.Filter({
                            path: "Name",
                            operator: 'EQ',
                            value1: Name[i].getText()
                        }));
                    }
                    for (var i = 0; i < Role.length; i++) {
                        aRole.push(new sap.ui.model.Filter({
                            path: "Zemprole",
                            operator: 'EQ',
                            value1: Role[i].getText()
                        }));
                    }
                    for (var i = 0; i < Gender.length; i++) {
                        aGender.push(new sap.ui.model.Filter({
                            path: "Zgender",
                            operator: 'EQ',
                            value1: Gender[i].getText()
                        }));
                    }
                    for (var i = 0; i < City.length; i++) {
                        aCity.push(new sap.ui.model.Filter({
                            path: "Zcity",
                            operator: 'EQ',
                            value1: City[i].getText()
                        }));
                    }
                    for (var i = 0; i < Number.length; i++) {
                        aNumber.push(new sap.ui.model.Filter({
                            path: "Znumber",
                            operator: 'EQ',
                            value1: Number[i].getText()
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
                    if (aCity.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aCity,
                        }));
                    }
                    if (aNumber.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aNumber,
                        }));
                    }

                    // oFinalFilter.push(
                    //     new sap.ui.model.Filter({
                    //         and: false,
                    //         filters: aName
                    //     }),
                    //     new sap.ui.model.Filter({
                    //         and: false,
                    //         filters: aRole
                    //     }),
                    //     new sap.ui.model.Filter({
                    //         and: false,
                    //         filters: aGender
                    //     }),
                    //     new sap.ui.model.Filter({
                    //         and: false,
                    //         filters: aCity
                    //     }),
                    //     new sap.ui.model.Filter({
                    //         and: false,
                    //         filters: aNumber
                    //     })
                    // );
                    oBinding.filter(oFinalFilter);

                }
                // MessageToast.show("please select atleast one row");
            },
            onnamepress: function (evt) {

                var that = this;
                var myView = that.getView();
                // var oDialog = myView.byId("idDialog1");
                this._oDialog = myView.byId("idDialog");


                if (!this._oDialog) {

                    this._oDialog = sap.ui.xmlfragment(myView.getId(), "idfilters.zfilters.view.Dialog", this);
                    myView.addDependent(this._oDialog);
                    this._oDialog.open();
                }
                else {

                    that.byId("idDialog").open();
                }
            },
            SavePress: function (evt) {
                debugger;


            },
            onpressrow: function (evt) {
                debugger;
                var oModel = this.getView().getModel("Data1").getData();
                var path = evt.oSource.oPropagatedProperties.oBindingContexts.Data1.sPath;
                var sPath = parseInt(path.slice(9));
                var oTable = this.getView().getId("idProductsTable");

                // var oModel = evt.oSource.oPropagatedProperties.oBindingContexts.Data1.oModel.oData.results;
                oModel.results.splice(sPath, 1);
                // evt.oSource.oPropagatedProperties.oBindingContexts.Data1.oModel.oData.results.setData(oModel);
                this.getView().getModel("Data1").setData(oModel);
                // oTable.removeSelections(true);
            },
            ondeliteall: function (oEvent) {
                this.mode = "delete";
                var that = this;
                var sData = oEvent.getSource().getModel("Data1").getData();
                var oTable = this.byId("idProductsTable");
                var selectedRowData = oTable.getSelectedIndices();
                // getSelectedContexts();
                if (selectedRowData.length === 0) {
                    alert("please select atleast one row");

                    return;
                } else {
                    for (var i = selectedRowData.length - 1; i >= 0; i--) {
                        var key = selectedRowData[i]
                        var oThisObj = sData.results[key];
                        var index = $.map(sData.results, function (obj, index) {
                            if (obj === oThisObj) {
                                return index;
                            }
                        });
                        sData.results.splice(index, 1);
                    }
                    that.getView().getModel("Data1").setData(sData);
                    // oTable.removeSelections(true);
                }
            }
        });
    });