sap.ui.define([
    "./BaseController",
    "./BaaseController",
    "./View3Controller",
    "./oValidationsController",
    "./View4Controller",
    "./AController"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    // function (Controller,BaaseController,View3Controller,AttachmentController,oValidationsController,BaseController,View4Controller) {
        function (BaseController,AController) {
    "use strict";

        return BaseController.extend("idemploye.readtwoentitys.controller.View1", {
            onInit: function () {
                this.onRead1();
            },

            onRead1: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("View1").attachPatternMatched(this.onObjectMatch, this);

            },

            onObjectMatch: function () {
                debugger;
                var that = this;
                var tab1 = "userSet";
                this.onReadAll(tab1);

            },
            onexport:function () {
                this.AController = new AController({
                    Component: this.getOwnerComponent()
                })
                 this.AController.press();

            },

            rightarrow: function () {
                debugger;
                // var that = this;
                // var data= "ram";
                // var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                // loRouter.navTo("View2");
                // that.base(data);
                // this.BaaseController = new View4Controller({
                //     Component: this.getOwnerComponent()
                // })
                //  this.BaaseController.basees();
                // this.right();
                this.BaaseController = new AttachmentController({
                    Component: this.getOwnerComponent()
                })
                 this.BaaseController.onpress();

                // this.View3Controller = new View3Controller({
                //     Component: this.getOwnerComponent()
                // })
                // this.View3Controller._www();

               
                
                // this.View3Controller = new BaaseController({
                //     Component: this.getOwnerComponent()
                // })
                // this.View3Controller._arrow();
            }
        });
    });
