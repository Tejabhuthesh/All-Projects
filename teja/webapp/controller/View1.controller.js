// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//      "sap/ui/model/json/JSONModel",
//       "sap/ui/model/odata/ODataModel"
// ],

//     /**
//      * @param {typeof sap.ui.core.mvc.Controller} Controller
//      */
//     function (Controller,ODataModel) {
//         "use strict";

//         return Controller.extend("tejaid.teja.controller.View1", {
//             onInit: function () {
//          var that=this;
//                var oModel= new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZPROJECT_TABLES_SRV/")
//                // var oModel = that.getOwnerComponent().getModel();              
//                  oModel.read("/UserSet",{
//                     success: function (odata1) {
//                   //     var oModel1 = new JSONModel();
//                   var oModel1 = new ODataModel();
//                          oModel1.setData(odata1);
//                          that.getView().setModel(oModel1,"Data1");
//                          console.log(odata1);
//                          },
//                         error: function (oError) {
//                          console.log(oError);
//                         }
//                 });
//             }
//         });
//     });

sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/m/MessageBox", "sap/ui/model/odata/ODataModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel,MessageBox) {
        "use strict";

        return Controller.extend("tejaid.teja.controller.View1", {
            onInit: function () {
                //  var that = this;
                //   var oModel = that.getOwnerComponent().getModel("Data2");              
                //   oModel.read("/UserSet",{
                //      success: function (odata1) {
                //    //     var oModel1 = new JSONModel();
                //    var oModel1 = new ODataModel();
                //           oModel1.setData(odata1);
                //           that.getView().setModel(oModel1,"Data1");
                //           console.log(odata1);
                //           },
                //          error: function (oError) {
                //           console.log(oError);
                //          }
                //  });
                var that=this;
                that.onReadAll();
                //  this.onEdit();

            },

            onReadAll: function () {

                var that = this;
                var oModel = that.getOwnerComponent().getModel("Data2");
                oModel.read("/UserSet", {
                    success: function (odata1) {
                        //     var oModel1 = new JSONModel();
                        var oModel1 = new ODataModel();
                        oModel1.setData(odata1);
                        that.getView().setModel(oModel1, "Data1");
                        console.log(odata1);
                    },
                    error: function (oError) {
                        console.log(oError);
                    }
                })
            }
            ,

            onEdit: function (oEvent) {
                var that=this;
                var oModel4 = that.getOwnerComponent().getModel("Data2");
                oModel4.setUseBatch(false);
                if (oEvent.getSource().getText() === "Edit") {
                    oEvent.getSource().setText("Submit");
                    oEvent.getSource().getParent().getParent().getCells()[2].setEditable(true);
                }
                else {
                    oEvent.getSource().setText("Edit");
                    oEvent.getSource().getParent().getParent().getCells()[2].setEditable(false);
                    var oInput = oEvent.getSource().getParent().getParent().getCells()[2].getValue();
                     // var oId = oEvent.getSource().getBindingContext().getProperty("Name");
                    var oId = oEvent.oSource.oPropagatedProperties.oBindingContexts.Data1.oModel.oData.results[0];
                    oModel4.update("/UserSet("+ oId +")",
                        { Znumber: oInput }, {success: function (odata1) {
                            that.onReadAll();
                            MessageBox.success(odata1);
                        },
                        error: function (oError) {
                            console.log(oError);
                        }
                    })

                }

            }
          
             ,
             onDelite: function(oEvent){
                var that = this;
                var oModel = that.getOwnerComponent().getModel("Data2");
                oModel.setUseBatch(false);
               var oId = oEvent.oSource.oPropagatedProperties.oBindingContexts.Data1.oModel.oData.results;

                oModel.remove("/UserSet('"+oId+"')",{

                    success: function (oData) {
                        
                        MessageBox.success(oData);
                     that.onReadAll();
                    },
                    error: function (oError) {
                        MessageBox.error(oError);
                    }
                })
            }
        });
    });
