sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/m/MessageBox",	'sap/ui/model/odata/v2/ODataModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox,ODataModel) {
        "use strict";

        return Controller.extend("idemp.zempsalary.controller.View2", {
            onInit: function () {

               

            },

    //         onSearch: function (evt) {
    //   debugger;
    //           var that = this;
    //           var oTable = that.getView().byId("LineItemsSmartTable");
    //           var oBinding = oTable.getBinding("items");
      
    //           if (evt.getId() == "liveChange") {
    //             var sQuery = evt.mParameters.newValue;
    //           }
      
    //           var that = this;
    //           if (sQuery) {
    //             var oFilter = new sap.ui.model.Filter('EmpId', 'Contains', sQuery);                   //EQ =
    //             var oFilter1 = new sap.ui.model.Filter('EmpName', 'Contains', sQuery);                // CONTAINS Notequal
    //             var oFilter2 = new sap.ui.model.Filter('EmpPhone', 'Contains', sQuery);
    //             var oFilter3 = new sap.ui.model.Filter('EmpEmail', 'Contains', sQuery);
    //             var oFilter4 = new sap.ui.model.Filter('EmpDep', 'Contains', sQuery);
    //             var oFilter5= new sap.ui.model.Filter('BasicPay', 'Contains', sQuery);                   //EQ =
    //             var oFilter6 = new sap.ui.model.Filter('Hra', 'Contains', sQuery);                // CONTAINS Notequal
    //             var oFilter7 = new sap.ui.model.Filter('SplAllowance', 'Contains', sQuery);
    //             var oFilter8 = new sap.ui.model.Filter('ShiftAllowance', 'Contains', sQuery);
    //             var oFilter9 = new sap.ui.model.Filter('MonthlyPay', 'Contains', sQuery);
    //             var ofilters = new sap.ui.model.Filter([oFilter, oFilter1, oFilter2, oFilter3, oFilter4,oFilter5, oFilter6, oFilter7, oFilter8, oFilter9]);
    //           }
    //           oBinding.filter(ofilters);
      
      
    //         },

           

            onNavBack: function () {
             history.go(-1);
     
           }
        });
    });

