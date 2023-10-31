sap.ui.define([
  "sap/ui/core/mvc/Controller"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (BaseController) {
    "use strict";

    return BaseController.extend("idemploye.readtwoentitys.controller.BaseController", {
      onInit: function () {
        this.onReadAll();
      },
      onReadAll(evt) {

        var that = this;

        var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZEMPLOYEE_EEE_SRV/");

        var tab1 = evt;

        oModel.read("/" + tab1, {
          success: function (odata) {
            var oModel1 = new sap.ui.model.json.JSONModel();
            oModel1.setData(odata);
            that.getView().setModel(oModel1, "Data1");
            alert("Success");

          },
          error: function (oError) {
            alert("error");
          }
        });


      }
      ,
      right: function () {
         debugger;
        var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View1");
    }
  
    });
  });
