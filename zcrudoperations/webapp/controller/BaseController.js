sap.ui.define(
  [
    "sap/ui/core/mvc/Controller"
  ],
  function (BaseController) {
    "use strict";

    return BaseController.extend("idodata1.project50000.controller.BaseController.", {
      onBeforeRendering() {

        var that = this;

        var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZEMPLOYEE_EEE_SRV/");
        var tab1;
        tab1 = "userSet";
        // tab = "MaraSet";
        // var id = "Tina"

        oModel.read("/" + tab1, {
        // oModel.read("/userSet('" + id + "')", {
          success: function (odata) {
            var oModel1 = new sap.ui.model.json.JSONModel();
            oModel1.setData(odata);
            that.getView().setModel(oModel1, "Data1");
            // alert("Success");



          },
          error: function (oError) {
            alert("error");
          }
        });
        // return [tab1];
        // that.rightarrow(tab1);

        // ,
        //   "/MaraSet",
        //   //  {

        //   // success: function (odata) {
        //   //   debugger;
        //   //   var oModel1 = new sap.ui.model.json.JSONModel();
        //   //   oModel1.setData(odata);
        //   //   that.getView().setModel(oModel1, "Data2");

        //   // },
        //   // error: function (oError) {
        //   //   alert("error");

        //   // }
        // });
        // debugger;
        // oModel.read("/MaraSet", {

        //   success: function (odata) {
        //       var oModel1 = new sap.ui.model.json.JSONModel();
        //       oModel1.setData(odata);
        //       that.getView().setModel(oModel1, "Data2");
        //       alert("Success");


        //   },
        //   error: function (oError) {
        //       alert("error");

        //   }
        //     });



        // var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZPROJECT_TABLES_SRV/");

        // oModel.read("/UserSet", {
        //   success: function (odata) {
        //     var oModel1 = new sap.ui.model.json.JSONModel();
        //     oModel1.setData(odata);
        //     that.getView().setModel(oModel1, "Data2");
        //     alert("Success");
        //   },
        //   error: function (oError) {
        //     alert("error");

        //   }
        // });
      },

      onSearch: function (evt) {

        var that = this;
        var oTable = that.getView().byId("idProductsTable");
        var oBinding = oTable.getBinding("items");

        if (evt.getId() == "liveChange") {
          var sQuery = evt.mParameters.newValue;
        }

        var that = this;
        if (sQuery) {
          var oFilter = new sap.ui.model.Filter('Name', 'Contains', sQuery);                   //EQ =
          var oFilter1 = new sap.ui.model.Filter('Zemprole', 'Contains', sQuery);                // CONTAINS Notequal
          var oFilter2 = new sap.ui.model.Filter('Zgender', 'Contains', sQuery);
          var oFilter3 = new sap.ui.model.Filter('Zcity', 'Contains', sQuery);
          var oFilter4 = new sap.ui.model.Filter('Znumber', 'Contains', sQuery);

          var ofilters = new sap.ui.model.Filter([oFilter, oFilter1, oFilter2, oFilter3, oFilter4]);
        }
        oBinding.filter(ofilters);


      }


    });
  }
);
