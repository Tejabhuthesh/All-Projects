sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("idgpcet.zgpcet.controller.View3", {
            onNavBack: function () {
                history.go(-1);

            },
            onpress1:function(){
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");

            }
        });
    });