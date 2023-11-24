sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("navigationdisplaymethod2.controller.Home", {
            onInit: function () {

            },
            onDisplayNotFound : function () {
                // display the "notFound" target without changing the hash
                this.getRouter().getTargets().display("notFound", {
                    fromTarget : "Home"
                });
            },
    
            onNavToEmployees : function () {
                this.getRouter().navTo("EmployeeList");
                // this.getRouter().getTargets().display("Employee", {
                //     fromTarget : "Home"
                // });
            }
        });
    });
