sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/f/library'

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, fioriLibrary) {
        "use strict";

        return Controller.extend("zautoslider.controller.View1", {
            onInit: function () {
                
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oModel = this.getOwnerComponent().getModel(); 
            },
            onListItemPress: function () {
                // var productPath = oEvent.getSource().getBindingContext("products").getPath(),
                //     product = productPath.split("/").slice(-1).pop();
               var oNextUIState;
			this.getOwnerComponent().getHelper().then(function (oHelper) {
				oNextUIState = oHelper.getNextUIState(1);
				this.oRouter.navTo("View2", {
					layout: oNextUIState.layout
					
				});
			}.bind(this));
                // this.oRouter.navTo("View2", { layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded });

            },
            onFullScreen: function () {
                // this.bFocusFullScreenButton = true;
                // var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/fullScreen");
                // this.navigateToView(sNextLayout, "detailDetail");
                this.oRouter.navTo("View2", { layout: fioriLibrary.LayoutType.OneColumn });
            },
            handleExitFullScreen: function () {
                this.bFocusFullScreenButton = true;
                this.oRouter.navTo("View2", { layout: fioriLibrary.LayoutType.TwoColumnsBeginExpanded });
            },
            handleClose: function () {
                this.oRouter.navTo("View2", { layout: fioriLibrary.LayoutType.ThreeColumnsMidExpanded });
            }
           
          
        });
    });
