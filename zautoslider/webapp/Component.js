sap.ui.define([
	
	'sap/ui/core/UIComponent',
	"sap/ui/Device",
	"zautoslider/model/models",
	'sap/ui/model/json/JSONModel',
	'sap/f/library',
	"sap/f/FlexibleColumnLayoutSemanticHelper"
], function ( UIComponent, Device, models, JSONModel, fioriLibrary, FlexibleColumnLayoutSemanticHelper) {
	'use strict';

	return UIComponent.extend('zautoslider.Component', {

		metadata: {
			manifest: 'json'
		},

		init: function () {
			var oModel,
				oRouter;

			UIComponent.prototype.init.apply(this, arguments);

			oModel = new JSONModel();
			this.setModel(oModel);

			// set products demo model on this sample

			this.setModel(models.createDeviceModel(), "device");
			oRouter = this.getRouter();
			oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
			oRouter.initialize();

		},
		getHelper: function () {
			return this._getFcl().then(function(oFCL) {
				var oSettings = {
					defaultTwoColumnLayoutType: fioriLibrary.LayoutType.TwoColumnsMidExpanded,
					defaultThreeColumnLayoutType: fioriLibrary.LayoutType.ThreeColumnsMidExpanded
				};
				return (FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings));
			});
		},

		_onBeforeRouteMatched: function (oEvent) {
			var oModel = this.getModel(),
				sLayout = oEvent.getParameters().arguments.layout,
				oNextUIState;

			// If there is no layout parameter, set a default layout (normally OneColumn)
			if (!sLayout) {
				this.getHelper().then(function(oHelper) {
					oNextUIState = oHelper.getNextUIState(0);
					oModel.setProperty("/layout", oNextUIState.layout);
				});
				return;
				// sLayout = fioriLibrary.LayoutType.OneColumn;
			}
			oModel.setProperty("/layout", sLayout);

		},
		_getFcl: function () {
			return new Promise(function(resolve, reject) {
				var oFCL = this.getRootControl().byId('app');
				if (!oFCL) {
					this.getRootControl().attachAfterInit(function(oEvent) {
						resolve(oEvent.getSource().byId('app'));
					}, this);
					return;
				}
				resolve(oFCL);

			}.bind(this));
		}
	});
});