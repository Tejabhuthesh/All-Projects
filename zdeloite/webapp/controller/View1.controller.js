sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("zdeloite.controller.View1", {
            onInit: function () {
                var data = {
                    "Table": [
                        { "name": "Horarios 1" },
                        { "name": "Horarios 2" },
                        { "name": "Horario Vespertino" },
                        { "name": "Horario Mariana1" },
                        { "name": "Horario de 6 a 14" },
                        { "name": "Mariana Mochis" },
                        { "name": "Horario Malutino" },
                        { "name": "6x1 Cancum" },
                        { "name": "Prueba Edge" },
                        { "name": "Horario prueba" },
                        { "name": "Prueba 3 horarios" }],
                    "FragTable": [
                        { "day": "SUNDAY" },
                        { "day": "MONDAY" },
                        { "day": "TUESDAY" },
                        { "day": "WEDNESDAY" },
                        { "day": "THURSDAY" },
                        { "day": "FRIDAY" },
                        { "day": "SATURDAY" }
                    ],
                    "FragTabTime": [
                        { "time": "00:00" },
                        { "time": "01:00" },
                        { "time": "02:00" },
                        { "time": "03:00" },
                        { "time": "04:00" },
                        { "time": "05:00" },
                        { "time": "06:00" },
                        { "time": "07:00" },
                        { "time": "08:00" },
                        { "time": "09:00" },
                        { "time": "10:00" },
                        { "time": "11:00" },
                        { "time": "12:00" },
                        { "time": "13:00" },
                        { "time": "14:00" },
                        { "time": "15:00" },
                        { "time": "16:00" },
                        { "time": "17:00" },
                        { "time": "18:00" },
                        { "time": "19:00" },
                        { "time": "20:00" },
                        { "time": "21:00" },
                        { "time": "22:00" },
                        { "time": "23:00" },
                        { "time": "24:00" }
                    ],
                    "FragName": "name"

                };

                var oModel = new JSONModel(data);
                this.getView().setModel(oModel, "oModel");
            },
            onDeatails() {
                var oTable = this.byId("idEmployees_Table");
                debugger;
                // var selectedRowData = oTable.getSelectedContexts();
                var selectedRowData = oTable.getSelectedIndices();
                var aSelectedItems = [];
                for (var i = 0; i < selectedRowData.length; i++) {

                    // var i2 = selectedRowData[i]
                    // var sPath = oTable.getRows()[i2].oBindingContexts.oModel.sPath.split("/")[2];

                    aSelectedItems.push(this.getView().getModel("oModel").getData().Table[selectedRowData[i]].name);
                }

                if (!this.aDialog) {
                    this.aDialog = this.loadFragment({
                        name: "zdeloite.fragments.Incidence"
                    });
                }
                this.aDialog.then(function (cDialog) {
                    cDialog.open();
                });
                var oModel = new JSONModel();
                oModel.setData(aSelectedItems);
                this.getView().setModel(oModel, "Name");
            },
            onEdit() {
                if (!this.sDialog) {
                    this.sDialog = this.loadFragment({
                        name: "zdeloite.fragments.IncidentsToMoreThanOneEmployee"
                    });
                }
                this.sDialog.then(function (oDialog) {
                    oDialog.open();
                });
            },
            onClose: function () {
                this.byId("idCreatePackage").destroy();

                this.aDialog = undefined;
            },
            onSavePress: function () {
                this.byId("idCreatePackage").destroy();
                this.byId("SelectedEmployees").destroy();
                this.aDialog = undefined;
            },
            onClose_S: function () {

                this.byId("SelectedEmployees").destroy();
                this.sDialog = undefined;
            },
            selectText(evt) {
                debugger
            },
            onSelChangeSeq(oEvent) {
                debugger
                this.rowIndex1 = oEvent.getParameters().rowIndex;
            },
            onPress: function (oEvent) {
                var yourTableObject = this.getView().byId("idEmployees_Table");
                var rowIndex = oEvent.getParameters().rowIndex;
                var colIndex = oEvent.getParameters().columnIndex
                var selectedRow = yourTableObject.getRows()[rowIndex];
                if (this.rowIndex1 === rowIndex) {

                    this.coloumn = selectedRow.getCells()[colIndex];
                    // yourTableObject.addColumn(new sap.ui.table.Column({

                    //     label: new sap.ui.commons.Label({text: "RAM"}),
                        
                    //     template: new sap.ui.commons.Input().bindProperty("value","HI"),
                                       
                    //     }));
                    if( this.coloumn.getProperty('editable') === false){
                        selectedRow.getCells()[colIndex].setProperty("editable", true);
                    }
                    else{
                        selectedRow.getCells()[colIndex].setProperty("editable", false);
                    }
                    
                }
                var label = yourTableObject.getColumns()[colIndex].getAggregation('label').getProperty('text');
                var sPath = yourTableObject.getContextByIndex(rowIndex).sPath;
                var oDataSelect = yourTableObject.getContextByIndex(rowIndex).oModel.getProperty(sPath);
                // oEvent.getSource().setText("Update");
                // selectedRow.getCells()[colIndex].getParent('mAggregations').getCells()[colIndex].getProperty('text');

                //Making the Fields as Editable...

                // var oLineItemTable = sap.ui.getCore().byId("LineItemTableID");

                // var i = this.getParent().getIndex();
                // var i = rowIndex;


            },
            onLegend: function () {
				
                    if (!this.LDialog) {
                        this.LDialog = this.loadFragment({
                            name: "zdeloite.fragments.Legend"
                        });
                    }
                    this.LDialog.then(function (oDialog) {
                        oDialog.open();
                    });
			},
            onD:function (oEvent){
                var oTable = this.byId("idEmployees_Table");
                var selectedRowData = oTable.getSelectedIndices();
                for (var i = 0; i < selectedRowData.length; i++) {
                   
                    var i2 = selectedRowData[i]
                    
                    this.coloumn = oTable.getRows()[i2].getCells()[2];
                   
                    if( this.coloumn.getProperty('editable') === false){
                        oTable.getRows()[i2].getCells()[2].setProperty("editable", true);
                    }
                    else{
                        oTable.getRows()[i2].getCells()[2].setProperty("editable", false);
                    }
                }
            },

            showObject: function (oParameters) {
            },
            onAdd(oEvent) {
                if (this.coloumn != "" && this.rowIndex1 != "") {
                    console.log("aa");
                }
                else {
                    debugger
                }
            },
            handleOpen: function (oEvent) {
                var oResponsivePopoverOpener = this.getView().byId("openPopoverButton");
                var oResponsivePopover = this.getView().byId("helloPopover");
                oResponsivePopover.showAt(oResponsivePopoverOpener);
    
            },
    
            handleClose: function () {
                var oResponsivePopover = this.getView().byId("helloPopover");
                oResponsivePopover.close();
            }
        });
    });

//    this.getView().byId("idDeliveryTable").getColumns()[0].getAggregation('label').getProperty('text'),