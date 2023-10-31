// /**
//  * eslint-disable @sap/ui5-jsdocs/no-jsdoc
//  */

// sap.ui.define([
//         "sap/ui/core/UIComponent",
//         "sap/ui/Device",
//         "zillustrationcustom/model/models"
//     ],
//     function (UIComponent, Device, models) {
//         "use strict";

//         return UIComponent.extend("zillustrationcustom.Component", {
//             metadata: {
//                 manifest: "json"
//             },

//             /**
//              * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
//              * @public
//              * @override
//              */
//             init: function () {
//                 // call the base component's init function
//                 UIComponent.prototype.init.apply(this, arguments);

//                 // enable routing
//                 this.getRouter().initialize();

//                 // set the device model
//                 this.setModel(models.createDeviceModel(), "device");
//             }
//         });
//     }
// );

sap.ui.define(['sap/ui/core/UIComponent', "sap/ui/Device", 'sap/m/IllustrationPool', "zillustrationcustom/model/models"],
    function (UIComponent, Device, IllustrationPool, models) {
        "use strict";

        return UIComponent.extend("zillustrationcustom.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {

                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                var oCustomSet = {
                    setFamily: "Custom",// C:\SAPDevelop\openui5_1\src\sap.m\test\sap\m\demokit\sample\IllustratedMessageInPageCustom\illustrations
                    setURI: sap.ui.require.toUrl("illustrations")
                };

                // register Custom illustration set
                IllustrationPool.registerIllustrationSet(oCustomSet, false);
                // enable routing
                this.getRouter().initialize();

                //                 // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    });
