// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ],
//     /**
//      * @param {typeof sap.ui.core.mvc.Controller} Controller
//      */
//     function (Controller) {
//         "use strict";

//         return Controller.extend("zillustrationcustom.controller.View1", {
//             onInit: function () {

//             }
//         });
//     });

sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/m/library"
], function (JSONModel, Controller, library) {
		"use strict";

		var oIllustratedMessageSize = library.IllustratedMessageSize;

		return Controller.extend("zillustrationcustom.controller.View1", {

			onInit: function () {

				var aIMISizeData = [];

				Object.keys(oIllustratedMessageSize).forEach(function (sKey) {
					aIMISizeData.push({key: oIllustratedMessageSize[sKey], text: sKey});
				});

				this.oModel = new JSONModel({
					sizeTypes: aIMISizeData
				});

				this.oModel.setProperty("/sSelectedSize", aIMISizeData[0].key);

				this.getView().setModel(this.oModel);
			},
			onSelectSize: function (oEvent) {
				this.oModel.setProperty("/sSelectedSize", oEvent.getParameter("selectedItem").getKey());
			}
		});

	});

