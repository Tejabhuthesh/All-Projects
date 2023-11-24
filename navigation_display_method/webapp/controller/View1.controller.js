sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("navigationdisplaymethod.controller.View1", {
            onInit: function () {

            },
            getRouter : function () {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },
            onDisplayNotFound : function () {
                // display the "notFound" target without changing the hash
                this.getRouter().getTargets().display("TargetView2" ,{
                    fromTarget : "TargetView1"
                });
            },
           
            
        });
    });
