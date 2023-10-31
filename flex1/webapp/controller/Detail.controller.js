sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/f/library'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,fioriLibrary) {
        "use strict";

        return Controller.extend("idflex.flex.controller.Detail", {
            // onInit: function () {

            //     var that = this;
            //     var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
            //     oRouter.getRoute("Detail").attachPatternMatched(that.onRouteMatch, that);

            //     var oModel = that.getOwnerComponent().getModel("LData");
            //     oModel.read("/userSet", {
            //         success: function (odata) {
            //             // debugger;
            //             var oModel1 = new sap.ui.model.json.JSONModel();
            //             oModel1.setData(odata);
            //             that.getView().setModel(oModel1, "Data1");
            //             // alert("Success");
            //             // MessageBox.success(oModel1);

            //         },
            //         error: function (oError) {
            //             sap.ui.core.BusyIndicator.hide();
            //             var message = error;
            //             var msg = $(error.response.body).find('message').first().text();
            //             var action = "OK";
            //             new sap.m.MessageBox.error(msg, {

            //                 onClose: function () {
            //                     if (action === "OK") {

            //                     }
            //                 }
            //             });
            //         }
            //     })
            // },

            onInit: function () {
                var oOwnerComponent = this.getOwnerComponent();
    
                this.oRouter = oOwnerComponent.getRouter();
                this.oModel = oOwnerComponent.getModel();
    
                this.oRouter.getRoute("list").attachPatternMatched(this._onProductMatched, this);
                this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
            },
            _onProductMatched: function (oEvent) {
                // this._product = oEvent.getParameter("arguments").product || this._product || "0";
                // this.getView().bindElement({
                //     path: "/ProductCollection/" + this._product,
                //     model: "products"
                // });
            },
            onRouteMatch: function (evt) {
                debugger
                var array1 = evt.mParameters.view.oModels.Data1.oData.results;
                var data = [];
               
                var name= evt.mParameters.arguments.Name;


                for (var i = 0; i < array1.length; i++) {

                    if ( name === array1[i].Name) {
                        data.push(array1[i]);

                        var oModel = new sap.ui.model.json.JSONModel();
                        oModel.setData(data);
                        this.getView().setModel(oModel, "Data6");
                    }   
                }
            },
            
            onEditToggleButtonPress: function() {
                var oObjectPage = this.getView().byId("ObjectPageLayout"),
                    bCurrentShowFooterState = oObjectPage.getShowFooter();
    
                oObjectPage.setShowFooter(!bCurrentShowFooterState);
            },
            onSuppliers:function(){
                var oFCL = this.oView.getParent().getParent();
    
                oFCL.setLayout(fioriLibrary.LayoutType.ThreeColumnsMidExpanded);
            },
            onExit: function () {
                this.oRouter.getRoute("List").detachPatternMatched(this._onProductMatched, this);
                this.oRouter.getRoute("Detail").detachPatternMatched(this._onProductMatched, this);
            }
        });
    });
