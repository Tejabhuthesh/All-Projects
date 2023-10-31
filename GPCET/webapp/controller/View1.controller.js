sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("idapp.project1.controller.View1", {
            onPress: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    loRouter.navTo("View2");
            

            },
            onClick: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    loRouter.navTo("View3");
            

            },

            onNavBack: function () {
            //  history.go(-1);
            var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
            loRouter.navTo("http://localhost:8080/test/flpSandbox.html?sap-ui-xx-viewCache=false#idappproject1-display");
            
           },
           ZTEST_USER:function (oEvent) {
            // var supplier = oEvent.getSource().gettext("ZTEST_USER"); // read SupplierID from OData path Product/SupplierID
            var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation"); // get a handle on the global XAppNav service
            var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
            target: {
            semanticObject: "G002_GPCET",
            action: "display"
            },
            // params: {
            // "supplierID": supplier
            // }
            })) || ""; // generate the Hash to display a Supplier
            oCrossAppNavigator.toExternal({
            target: {
            shellHash: hash
            }
            });
           }

        });
    });
