sap.ui.define(
  [
    "sap/ui/core/mvc/Controller"
  ],
  function (Controller) {
    "use strict";

    return Controller.extend("zautoslider.controller.App", {
      onInit() {

        this.oOwnerComponent = this.getOwnerComponent();
        this.oRouter = this.oOwnerComponent.getRouter();
        // this.oModel = this.oOwnerComponent.getModel();
        this.oRouter.attachRouteMatched(this.onRouteMatched, this);
      },

      onRouteMatched: function (evt) {

        var sRouteName = evt.getParameter("name");
        // oArguments = evt.getParameter("arguments");



        this.currentRouteName = sRouteName;
        this._updateUIElements();
        // this.currentProduct = oArguments;
      },
      onStateChanged: function (oEvent) {
        var bIsNavigationArrow = oEvent.getParameter("isNavigationArrow"),
          sLayout = oEvent.getParameter("layout");
          this._updateUIElements();
        // Replace the URL with the new layout if a navigation arrow was used
        if (bIsNavigationArrow) {
          this.oRouter.navTo(this.currentRouteName, { layout: sLayout }, true);
         
          // loRouter.navTo("RouteView1", { layout: "OneColumn" , product: "OneColumn"}, true);
        }
      },


      _updateUIElements: function () {
        var oModel = this.oOwnerComponent.getModel(),
          oUIState;
        this.oOwnerComponent.getHelper().then(function (oHelper) {
          oUIState = oHelper.getCurrentUIState();
          oModel.setData(oUIState);
        });
      }

      // onExit: function () {
      //   this.oRouter.detachRouteMatched(this.onRouteMatched, this);
      //   this.oRouter.detachBeforeRouteMatched(this.onBeforeRouteMatched, this);
      // }
    });
  }
);
