sap.ui.define(
  [
    "./BaseController"
 
  ],
  function (BaseController) {
    "use strict";

    return BaseController.extend("idsales.zsales.controller.App", {
      // onInit() {
      //   // var Sales_OrderData = this.getOwnerComponent().getModel("Sales_Order").getData().d.results;
      //   // var Delivery_OrderData = this.getOwnerComponent().getModel("Delivery").getData().d.results;
      //   // var Invoice_OrderData = this.getOwnerComponent().getModel("Invoice").getData().d.results;
       
        
      // },
     
      onCreate: function () {
        var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
        loRouter.navTo("View2", { Name: "V", flag: "X" });
      },
      onDashboard: function () {
        var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
        loRouter.navTo("View1");
      }
    });
  }
);
