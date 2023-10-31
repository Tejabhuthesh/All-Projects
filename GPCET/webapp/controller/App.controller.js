sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("idapp.project1.controller.App", {
        onInit() {
        },
        pressOnTileOne:function() {
          var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
          loRouter.navTo("View1");
        },
        Digitalcampus:function(){
          var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
          loRouter.navTo("View2");
        },
        Rigistration:function(){
          var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
          loRouter.navTo("View3");
        }
      });
    }
  );
  