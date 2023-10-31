sap.ui.define(
  [
    "./BaseController"
  ],
  function (BaseController) {
    "use strict";

    return BaseController.extend("idodata1.project50000.controller.View2", {
      onAfterRendering() {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

        oRouter.getRoute("View2").attachPatternMatched(this.onRouteMatch, this);
      },
      onRouteMatch: function (evt) {
        debugger;
        // var tab2 = evt.mParameters.arguments.tab;
        // var tab33 = "MaraSet";
        // tab2.setValue(tab33);


      }
      , onNavBack: function () {
        history.go(-1);

      }
    });
  }
);
