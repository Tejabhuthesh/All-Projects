sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("id9.loopupto9.controller.View1", {
            onInit: function () {

            },
            submit: function () {
                var key = this.getView().byId("num").getValue();
                var text = " ";
                for (let i = 1; i <= key; i++) {
                    text += " " + i + ",";
                }
                alert(text);
            },

            
        });
    });
