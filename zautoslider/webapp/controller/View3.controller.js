sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/f/library'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, fioriLibrary) {
        "use strict";

        return Controller.extend("zautoslider.controller.View3", {
            onInit: function () {
                var oOwnerComponent = this.getOwnerComponent();
                this.oRouter = oOwnerComponent.getRouter();
                this.oRouter.getRoute("View3").attachPatternMatched(this._onPatternMatch, this);

            },
            _onPatternMatch: function (oEvent) {
                this._supplier = oEvent.getParameter("arguments");
                this._product = oEvent.getParameter("arguments");

            },
            onFullScreen: function () {
                this.oRouter.navTo("View3", { layout: fioriLibrary.LayoutType.EndColumnFullScreen });
            },
            handleExitFullScreen: function () {
                this.oRouter.navTo("View3", { layout: fioriLibrary.LayoutType.ThreeColumnsEndExpanded });
            },
            handleClose: function () {
                this.oRouter.navTo("View3", { layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded });
            },

            onExit: function () {
                this.oRouter.getRoute("View3").detachPatternMatched(this._onPatternMatch, this);
            }
        });
    });
