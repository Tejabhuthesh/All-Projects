sap.ui.define([
  "sap/ui/core/mvc/Controller"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (BaseController) {
    "use strict";

    return BaseController.extend("idsales.zsales.controller..BaseController", {
      onInit: function () {

        this._flagFilterBarSelect = {
          "C": "S"
        };
        var oModel = this.getOwnerComponent().getModel("Sales");
        oModel.read("/SalesSet", {
          success: function (odata) {
            for (var i = 0; i < odata.results.length; i++) {
              delete odata.results[i].__metadata;
              var frmt = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd-MM-yyyy" });
              var d = frmt.format(new Date(odata.results[i].Audat));
              odata.results[i].Audat = d;
            }
            var oModel1 = new sap.ui.model.json.JSONModel();
            oModel1.setData(odata);
            this.getView().setModel(oModel1, "SalesSet");
            this._d = odata.results.length;
            // MessageBox.success("Success");
            this.getView().getModel("SalesSet1").setData(odata);

          }.bind(this),
          error: function (oError) {
            BusyIndicator.hide();
            var msg = $(oError.response.body).find('message').first().text();
            var action = "OK";
            MessageBox.error(msg, {

              onClose: function () {
                if (action === "OK") {

                }
              }
            });
          }
        });
        oModel.read("/DeliverySet", {
          success: function (odata) {
            // for (var i = 0; i < odata.results.length; i++) {
            //     delete odata.results[i].__metadata;
            //     var frmt = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd-MM-yyyy" });
            //     var d = frmt.format(new Date(odata.results[i].Bldat));
            //     odata.results[i].Bldat = d;
            // }

            for (var i = 1; i < odata.results.length; i++) {
              delete odata.results[i].__metadata;
              var frmt = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd-MM-yyyy" });
              var d = frmt.format(new Date(odata.results[i].Audat));
              odata.results[i].Audat = d;
            }
            var oModel1 = new sap.ui.model.json.JSONModel();
            oModel1.setData(odata);
            this.getView().setModel(oModel1, "DeliverySet");
            this.D = this.getView().getModel("DeliverySet").getData().results.length;
            this.getView().getModel("DeliverySet1").setData(odata);
          }.bind(this),
          error: function (oError) {
            BusyIndicator.hide();
            var msg = $(oError.response.body).find('message').first().text();
            var action = "OK";
            MessageBox.error(msg, {

              onClose: function () {
                if (action === "OK") {

                }
              }
            });
          }
        });
        oModel.read("/InvoiceSet", {
          success: function (odata) {
            for (var i = 0; i < odata.results.length; i++) {
              delete odata.results[i].__metadata;
              var frmt = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "dd-MM-yyyy" });
              var d = frmt.format(new Date(odata.results[i].Fkdat));
              odata.results[i].Fkdat = d;

            }
            var oModel1 = new sap.ui.model.json.JSONModel();
            oModel1.setData(odata);
            this.getView().setModel(oModel1, "InvoiceSet");
          
            this.getView().getModel("InvoiceSet1").setData(odata);
          }.bind(this),
          error: function (oError) {
            BusyIndicator.hide();
            var msg = $(oError.response.body).find('message').first().text();
            var action = "OK";
            MessageBox.error(msg, {

              onClose: function () {
                if (action === "OK") {

                }
              }
            });
          }
        });
    //  var d=this.getOwnerComponent().getModel("SalesSet1").getData().results;
    //  var c=this.getOwnerComponent().getModel("DeliverySet1").getData().results;
    //  var e=this.getOwnerComponent().getModel("InvoiceSet1").getData().results;

        //  this.onpp();
      },
    

    });
  });
