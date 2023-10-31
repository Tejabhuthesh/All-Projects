sap.ui.define([
    // "sap/ui/vbm/AnalyticMap",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    // "sap/ui/Device"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller
        // , JSONModel, Device, AnalyticMap
        ) {
        "use strict";
        // AnalyticMap.GeoJSONURL = "test-resources/sap/ui/vbm/demokit/media/analyticmap/L0.json";
        return Controller.extend("idmaps.zgeomap.controller.View2", {
            onInit: function () {
                debugger;
                var t = this;


                // var path = jQuery.sap.getModulePath("idmaps.zgeomap", "/model/Sdata.json");
                // var oModel = new sap.ui.model.json.JSONModel(path);
                // t.getView().setModel(oModel);

                // var oDeviceModel = new JSONModel(Device);
                // oDeviceModel.setDefaultBindingMode("OneWay");
                // t.getView().setModel(oDeviceModel, "device");

            },
            onclick: function (evt) {
                debugger;
                var t = this;


                // var path = jQuery.sap.getModulePath("idmaps.zgeomap","/model/Sdata.json");
                // var oModel = new sap.ui.model.json.JSONModel(path);
                // t.getView().setModel(oModel);
                // var dataModel = t.getOwnerComponent().getModel("tableData");
                // this.getView().setModel(dataModel, "sOrder1");


                var that = this;
                //var x = that.byId("vbi");
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        // alert("latitude" + position.coords.latitude + " " + "longitude" + position.coords.longitude) ;
                        var pos1 = position.coords.latitude;

                        var pos2 = position.coords.longitude;

                        var pos = ("" + pos2 + ";" + pos1 + ";" + 0);
                        // "latitude": position.coords.latitude,
                        // "longitude": position.coords.longitude,
                        // "pos": "37.622882;55.755202;0",
                        // "pos": "77.1024902;28.7040592;0",
                        
                        var data = {
                           
                            "pos": pos,
                            "tooltip": "Bangalore",
                            "type": "Success",
                            "text": "Success"
                            
                        }
                        var oModel = new sap.ui.model.json.JSONModel(data);
                        that.getView().setModel(oModel, "Data1");
                    });
                } else {
                    alert("Geolocation is not supported by this browser.");
                }


            },
            
            rightarrow: function (oEvent) {

                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View3");
            }
        });
    });
