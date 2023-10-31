sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/m/MessageBox",	"sap/m/MessageToast",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageBox,MessageToast) {
        "use strict";

        return Controller.extend("customerapp.customerodataapp.controller.View2", {
            onInit: function () {

            },
            onButtonPress: function (oEvent) {
                var oButton = oEvent.getSource();
                this.byId("actionSheet").openBy(oButton);
            },
            onPress:function(){
            MessageBox.alert("Link was clicked!");
            },
            onExit: function () {

                var eventBus = sap.ui.getCore().getEventBus();

                eventBus.unsubscribe("View2", "ShowPopup", this.onShowPopup, this);

            },
            onRatingChange: function (oEvent) {
                var fValue = oEvent.getParameter("value");
                
    
                MessageToast.show("ratingConfirmation"  +  fValue);
            }
        });
    });
