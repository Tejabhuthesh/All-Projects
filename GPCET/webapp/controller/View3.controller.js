sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel","sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,MessageBox) {
        "use strict";

        return Controller.extend("idapp.project1.controller.View3", {
            onInit() {
                var that = this;
                this._dataModel =that.getOwnerComponent().getModel("tableData");
                this._dataModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
                this._dataModel.setProperty("/Studentdeatails", "2345")

                // that.getView().setModel(this._dataModel, "sOrder1");
                // var oModel = that.getOwnerComponent().getModel("Northwind");

                // oModel.read("/Invoices", {
                //     success: function (odata) {
                    
                //         debugger;
                //         var oModel1 = new JSONModel();
                //         oModel1.setData(odata);
                //         that.getView().setModel(oModel1, "oModel1");
                //         alert("Success");

                //     },
                //     error: function (oError) {
                //         alert("error");
                //     }
                // });
            },
            onNavBack: function () {
                
               
                history.go(-1);

            },
            onpress1:function(){
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");

            },
            onhh:function(){;

               var data= this._dataModel.getProperty("/Studentdeatails");

                alert("Success" + data);
            }
        });
    });