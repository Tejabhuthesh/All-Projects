sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
      "use strict";
  
      return Controller.extend("idgpcet.zgpcet.controller.View2", {
        onInit: function () {
  
          // var path = jQuery.sap.getModulePath("idapp.project1", "/model/Students deatails.json")
          // let oModel = new sap.ui.model.json.JSONModel(path);
          // this.getView().setModel(oModel,"Data1");
  
          this.arry = [];
          this.obj = {};
          this.myModel = new sap.ui.model.json.JSONModel();
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.getRoute("View4").attachPatternMatched(this.onRouteMatch,this);
        },
  
           onRouteMatch:function() {
          
          },
              
        
        submit: function () {
          var key = this.getView().byId("pin").getValue();
          var key1= this.getView().byId("fname").getValue();
          
          var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
          loRouter.navTo("View4",{name1:key,name2:key1});  
        },
  
         onNavBack: function () {
          history.go(-1);
  
        }
      });
    });