sap.ui.define([
    "sap/ui/core/mvc/Controller",
    
    "sap/m/Dialog",

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Dialog) {
        "../audio"

        "use strict";
        return Controller.extend("customerapp.customerodataapp.controller.View1", {
            onInit: function () {

                var eventBus = sap.ui.getCore().getEventBus();
                eventBus.subscribe("View2", "ShowPopup", this.onShowPopup, this); // Listener L

                var d= document.getElementById("button");
                console.log(d);
            },
            onShowPopup: function (sChanal, sEvent, oData) {
                // debugger
                // if (sEvent === "ShowPopup" ) {
                //    var msg = "Message from :" +sChanal+" - Event:"+sEvent+" - "+oData.text;
                // } else {
                //     var msg = "Message from : Main View";
                // }
                // MessageBox.information(msg);
                var song = this.getView().byId("song").mProperties.text;
                this.audio = new Audio(song);
                this.audio.play();

            },
            onstop: function () {
                if (this.audio.paused) {
                    this.audio.play();
                }
                else {
                    this.audio.pause();
                }

            },
            playPause: function (evt) {
                var abbc = "ghhh";
                document.getElementById(snapId);
            },
            onclick: function () {
                alert("Clicked!");
            },

            openBarcodeScannerDialog: function (oEvent) {
                this.byId("bsd").show();
            },
            handleScanError: function (oEvent) {
                this.byId("scanResultLabel").setText("Error result: " + oEvent.getParameter("message"));
                this.byId("bsd").close();
            },
            handleScanSuccess: function (oEvent) {
                this.byId("scanResultLabel").setText("Success result: " + oEvent.getParameter("text"));
                this.byId("bsd").close();
            }
            ,
          

        });
    });
