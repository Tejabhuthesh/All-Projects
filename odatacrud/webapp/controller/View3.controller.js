sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("idodata.odatacrud.controller.View3", {
            onInit: function () {

            },  onNavBack: function () {
                history.go(-1);

            }
        });
    });
