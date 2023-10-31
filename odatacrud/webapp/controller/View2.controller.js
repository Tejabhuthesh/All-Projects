sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("idodata.odatacrud.controller.View2", {
            onInit: function () {

            },
            onPress: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    loRouter.navTo("View3");
            

            },  onNavBack: function () {
                history.go(-1);

            }
        });
    });
