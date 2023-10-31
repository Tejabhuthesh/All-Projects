sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/f/library',
    "sap/m/MessageBox",
    "sap/ui/core/BusyIndicator",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, fioriLibrary, MessageBox, BusyIndicator,JSONModel) {
        "use strict";

        return Controller.extend("idflex.flex.controller.About", {
            onInit: function () {
                this.bus = this.getOwnerComponent().getEventBus();
                var eventBus = sap.ui.getCore().getEventBus();
                eventBus.subscribe("Detail", "ShowPopup", this.onShowPopup, this); // Listener L

            },
            onShowPopup: function (sChanal, sEvent, oData) {
                debugger
                if (sEvent === "ShowPopup") {
                    var sPath = oData.text;
                } else {
                    var msg = "Message from : Main View";
                }
                // MessageBox.information(msg);
                var data = this.getOwnerComponent().getModel("CData1").getData().oData.results[sPath];
                var oModel = new JSONModel();
                oModel.setData(data);
                this.getView().setModel(oModel, "Data6");

            },
            handleFullScreen: function () {
                this.bus.publish("flexible", "setAboutFullScreen");

            },
            handleExitFullScreen: function () {

                this.bus.publish("flexible", "setAboutPage");
            },
            handleClose: function () {

                this.bus.publish("flexible", "setAboutPage");
            },
        });
    });
