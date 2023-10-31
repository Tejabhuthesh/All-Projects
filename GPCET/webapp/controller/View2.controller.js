sap.ui.define([
  "sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("idapp.project1.controller.View2", {
      onInit: function () {

        var dataModel = this.getOwnerComponent().getModel("tableData");
        this.getView().setModel(dataModel, "sOrder1");

        this.arry = [];
        this.obj = {};
        this.myModel = new sap.ui.model.json.JSONModel();
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.getRoute("View4").attachPatternMatched(this.onRouteMatch, this);
      },

      onRouteMatch: function () {

      },


      submit: function () {
        debugger;
        var userID = this.getView().byId("fname").getValue();
        var Password = this.getView().byId("pin").getValue();

        var oarray = this.getView().getModel("sOrder1").getData().Studentdeatails;
        if (userID === "") {
          this.byId("fname").setValueState(sap.ui.core.ValueState.Error);
        } else {
          this.byId("fname").setValueState(sap.ui.core.ValueState.Success);
        }

        if (Password === "") {
          this.byId("pin").setValueState(sap.ui.core.ValueState.Error);
        } else {
          this.byId("pin").setValueState(sap.ui.core.ValueState.Success);
        }
        for (var i = 0; i < oarray.length; i++) {

          if (userID === "") {

            this.byId("fname").setValueState("Warning");
            MessageToast.show("Please give UserName!");

          } else if (Password === "") {
            MessageToast.show("Please give Password");
            this.byId("pin").setValueState("Warning");
          } else
            // for (var i = 0; i < oarray.length; i++) {
            if (userID === oarray[i].Name && Password === oarray[i].PinNumber) {
              MessageBox.success("Login Successful!");
              this.byId("fname").setValueState(sap.ui.core.ValueState.Success);
              // this.byId("fname").setValueState(sap.ui.core.ValueState.Success);
              this.byId("pin").setValueState(sap.ui.core.ValueState.Success);
              this.getView().byId("idlogin").setType("Success");
              var loRouter = sap.ui.core.UIComponent.getRouterFor(this)
              loRouter.navTo("View4", { name1: Password, name2: userID });
              var userID = this.getView().byId("fname").setValue();
              var Password = this.getView().byId("pin").setValue();
              return true;

            }
        }

        for (var j = 0; j < oarray.length; j++) {
          if (userID !== oarray[j].Name && Password !== oarray[j].PinNumber) {

            this.byId("fname").setValueState(sap.ui.core.ValueState.Error);
            this.byId("pin").setValueState(sap.ui.core.ValueState.Error);
            this.getView().byId("idlogin").setType("Reject");
            MessageToast.show("Invalid User / Password!");
            return false;
          }
        }

      },
      // submit1: function (evt) {
      //     var oarray = this.getView().getModel("sOrder1").getData().Studentdeatails;

      //     var key = this.getView().byId("pin").getValue();
      //     var key1 = this.getView().byId("fname").getValue();


      //     for (var i = 0; i < oarray.length; i++) {

      //       if (key === oarray[i].PinNumber && key1 === oarray[i].Name) {
      //         MessageBox.success("Success");
      //         var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
      //         loRouter.navTo("View4", { name1: key, name2: key1 });

      //       } else {
      //         MessageToast.show("Invalid User / Password!");
      //       }
      //     }

      //   },

      onNavBack: function () {
        var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
        loRouter.navTo("View1");

      }
    });
  });