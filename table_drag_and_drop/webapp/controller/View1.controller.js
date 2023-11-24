sap.ui.define([
    "sap/ui/core/mvc/Controller",

    "sap/ui/model/json/JSONModel"
    // "../Utils"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("tabledraganddrop.controller.View1", {
            onInit: function () {
                this.dataToPush = [];
                var oModel1 = this.getOwnerComponent().getModel("Emloyee").getData().Employedetails;
                var oModel = new JSONModel();
                oModel.setData(oModel1);
                this.getView().setModel(oModel, "oModel");
                var t= this.getView().getModel("oModel").getData().length;
                var data=[{"len":"3"}]
                var oModel1 = new JSONModel(data);
               
                this.getView().setModel(oModel1, "oModel1");

            },
            moveToAvailableProductsTable: function (oEvent) {

                var oTable = this.byId("idSelcetedTable");
                var sPath = oTable.getSelectedContextPaths()[0].slice(1);
                var sData1 = oEvent.getSource().getModel("oModel1").getData()[sPath];
                var sData = oEvent.getSource().getModel("oModel").getData();
                sData.push(sData1);
                this.getView().getModel("oModel").setData(sData);

                var _SEelectedremove = oEvent.getSource().getModel("oModel1").getData();
                _SEelectedremove.splice(sPath, 1);
                this.getView().getModel("oModel1").setData(_SEelectedremove);
                oTable.removeSelections(true);
            },

            moveToSelectedProductsTable: function (oEvent) {
                var oTable = this.byId("table");
                var sPath = oTable.getSelectedContextPaths()[0].slice(1);
                this.dataToPush.push(this.getView().getModel("oModel").getData()[sPath]);

                var oModel = new JSONModel();
                oModel.setData(this.dataToPush);
                this.getView().setModel(oModel, "oModel1");
                var sData = oEvent.getSource().getModel("oModel").getData();
                sData.splice(sPath, 1);
                this.getView().getModel("oModel").setData(sData);
                oTable.removeSelections(true);

            },
            onRowAvailable: function (oEvent) {
                debugger
            },
            onDropAvailableProductsTable: function (oEvent) {
                var oTable = this.byId("idSelcetedTable");
                var oDraggedItem = oEvent.getParameter("draggedControl");
                var sPath = oDraggedItem.getBindingContextPath().slice(1);

                var sData1 = oEvent.getSource().getModel("oModel1").getData()[sPath];
                var sData = oEvent.getSource().getModel("oModel").getData();
                sData.push(sData1);
                this.getView().getModel("oModel").setData(sData);

                var _SEelectedremove = oEvent.getSource().getModel("oModel1").getData();
                _SEelectedremove.splice(sPath, 1);
                this.getView().getModel("oModel1").setData(_SEelectedremove);
                oTable.removeSelections(true);
            },
            onDropSelectedProductsTabl: function (oEvent) {
                var oTable = this.byId("table");
                var oDraggedItem = oEvent.getParameter("draggedControl");
                var sPath = oDraggedItem.getBindingContextPath().slice(1);

                var sData1 = oEvent.getSource().getModel("oModel").getData()[sPath];
                if (this.dataToPush.length == "0") {
                    this.dataToPush.push(sData1);
                    var oModel = new JSONModel();
                    oModel.setData(this.dataToPush);
                    this.getView().setModel(oModel, "oModel1");
                } else {
                    var sData = oEvent.getSource().getModel("oModel1").getData();
                    sData.push(sData1);
                    this.getView().getModel("oModel1").setData(sData);
                }
                var _SEelectedremove = oEvent.getSource().getModel("oModel").getData();
                _SEelectedremove.splice(sPath, 1);
                this.getView().getModel("oModel").setData(_SEelectedremove);
                oTable.removeSelections(true);
            },

            moveUp: function (oEvent) {
                // this.moveSelectedItem("Up");
                // oEvent.getSource().focus();
                this.getView().getModel("i18n").getResourceBundle().aPropertyFiles[0].mProperties
                this.getOwnerComponent().getModel("i18n").getResourceBundle();
               var unique= this.getView().getModel("oModel").getData();
                var _HUNumber = unique.find(function (element) {
                    return element.Name === "Teja" ;
                })
            },

            moveDown: function (oEvent) {
             

                // this.moveSelectedItem("Down");
                // oEvent.getSource().focus();
            },
        });
    });
