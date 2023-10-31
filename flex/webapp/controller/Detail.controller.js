sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/f/library',
    'sap/m/MessageBox',
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/BusyIndicator",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, fioriLibrary, MessageBox,JSONModel,BusyIndicator) {
        "use strict";

        return Controller.extend("idflex.flex.controller.Detail", {
            onInit: function () {
                this.bus = this.getOwnerComponent().getEventBus();
            
             

                var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("Detail").attachPatternMatched(this.onRouteMatch, this);

                // var Namee = oRouter.getHashChanger().getHash().slice(7);
            },
            onRouteMatch: function (oEvent) {
                debugger
                this._product = oEvent.getParameter("arguments").Name || this._product || "0";
                // var data3=	this.getView().bindElement({
                // 		path: "/results/" + this._product,
                // 		model: "Data1"
                // 	});
                // var data = this.getView().getModel("Data1").getData().results[this._product]
                var data =  this.getOwnerComponent().getModel("CData1").getData().oData.results[this._product];
                var oModel = new JSONModel();
                oModel.setData(data);
                this.getView().setModel(oModel, "Data6");

                    var data2 =  this.getOwnerComponent().getModel("CData1").getData().oData;
                var oModel1 = new JSONModel();
                oModel1.setData(data2);
                this.getView().setModel(oModel1, "Data1");

            },

            onEditToggleButtonPress: function () {
                var oObjectPage = this.getView().byId("ObjectPageLayout"),
                    bCurrentShowFooterState = oObjectPage.getShowFooter();

                oObjectPage.setShowFooter(!bCurrentShowFooterState);
            },
            onDelitePress: function (oEvent) {
                var oModel = this.getOwnerComponent().getModel("CData").getData().d.results;
                var oModel1 = this.getOwnerComponent().getModel("CData1").getData();
            },
            onSuppliers: function (oEvent) {
                var oFCL = this.oView.getParent().getParent();
                oFCL.setLayout("ThreeColumnsMidExpanded");
                var productPath = oEvent.getSource().getBindingContext("Data1").getPath(),
                    product = productPath.split("/").slice(-1).pop();

                var oEVentBus = sap.ui.getCore().getEventBus();

                oEVentBus.publish("Detail", "ShowPopup", { text: product });

            },
            handleFullScreen: function () {
                this.bus.publish("flexible", "setDetailPage");
            },
            handleExitFullScreen: function () {
                this.bus.publish("flexible", "setAboutPage");
            },

            handleClose: function () {

                this.bus.publish("flexible", "setListPage");
            },

        });
    });
