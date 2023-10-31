sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/f/library'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, fioriLibrary) {
        "use strict";

        return Controller.extend("zautoslider.controller.View2", {
            onInit: function () {
               
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oModel = this.getOwnerComponent().getModel();
            },
            onListItemPress: function () {
                this.oRouter.navTo("View3", { layout: fioriLibrary.LayoutType.ThreeColumnsMidExpanded });
            },
            onFullScreen:function(){
                var t = this;
                // var sNextLayout = t.oModel.getProperty("/actionButtonsInfo/midColumn/fullScreen");
                // var sNextLayout = t.getView().getModel().getProperty("/actionButtonsInfo/midColumn/fullScreen");
                // t.oRouter.navTo("View2", {layout: sNextLayout});
                this.oRouter.navTo("View2", { layout: fioriLibrary.LayoutType.MidColumnFullScreen });
            },
            handleExitFullScreen:function(){
               
                // var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/endColumn/exitFullScreen");
                this.oRouter.navTo("View2", { layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded });
            },
            handleClose:function(){
                this.oRouter.navTo("View2", { layout: fioriLibrary.LayoutType.OneColumn });
            }
            
        });
    });
