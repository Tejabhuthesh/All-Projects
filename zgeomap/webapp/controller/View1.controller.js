sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Device) {
        "use strict";

        return Controller.extend("idmaps.zgeomap.controller.View1", {
            onInit: function () {
                debugger;
                var t=this;
                var dataModel = t.getOwnerComponent().getModel("tableData");
                this.getView().setModel(dataModel, "sOrder1");
                //  var path = jQuery.sap.getModulePath("idmaps.zgeomap", "/model/Sdata.json");
                // var oModel = new JSONModel(path);
                // t.getView().setModel(oModel, "oModel1");

                // var path = jQuery.sap.getModulePath("idmaps.zgeomap", "/model/Data.json");
                // var oModel = new sap.ui.model.json.JSONModel(path);
                // this.getView().setModel(oModel);
    
                var oDeviceModel = new JSONModel(Device);
                oDeviceModel.setDefaultBindingMode("OneWay");
                t.getView().setModel(oDeviceModel, "device");
            },
            onPressResize: function ()	{
                if (this.byId("btnResize").getTooltip() == "Minimize") {
                    if (Device.system.phone) {
                        this.byId("vbi").minimize(132, 56, 1320, 560);//Height: 3,5 rem; Width: 8,25 rem
                    } else {
                        this.byId("vbi").minimize(168, 72, 1680, 720);//Height: 4,5 rem; Width: 10,5 rem
                    }
                    this.byId("btnResize").setTooltip("Maximize");
                } else {
                    this.byId("vbi").maximize();
                    this.byId("btnResize").setTooltip("Minimize");
                }
            },
            onPressLegend: function ()	{
                if (this.byId("vbi").getLegendVisible() == true) {
                    this.byId("vbi").setLegendVisible(false);
                    this.byId("btnLegend").setTooltip("Show legend");
                } else {
                    this.byId("vbi").setLegendVisible(true);
                    this.byId("btnLegend").setTooltip("Hide legend");
                }
            },
            onClickSpot: function (evt) {
               var pos= evt.oSource.mProperties.position;
               var text= evt.oSource.mProperties.labelText;
               var map= evt.getSource().openDetailWindow("My Detail Window  " + pos, text );
               
            },
            rightarrow: function (oEvent) {

                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");
            }
    
        });
    });
