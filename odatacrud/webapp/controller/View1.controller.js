sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("idodata.odatacrud.controller.View1", {
            onInit: function () {

            },
            onpress: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    loRouter.navTo("View2");
            

            },  onNavBack: function () {
                history.go(+2);

            }
        });
    });
