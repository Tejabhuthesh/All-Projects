sap.ui.define([
  "./BaseController", "./BaaseController"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, BaseController) {
    "use strict";

    return Controller.extend("idemploye.readtwoentitys.controller.View2", {
      onInit: function () {
        this.onRead();
      },

      onRead: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.getRoute("View2").attachPatternMatched(this.onRouteMatch, this);

      },

      onRouteMatch: function () {
        debugger;
        var tab1 = "MaraSet";
        this.onReadAll(tab1);
      },
      onNavBack: function () {
        // history.go(-1);
        // this.right();
        this.BaaseController = new BaseController({
          Component: this.getOwnerComponent()
      })
       this.BaaseController.right();
      }
    });
  });
