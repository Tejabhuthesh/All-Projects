//@ui5-bundle project7/Component-preload.js
sap.ui.require.preload({
	"project7/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","project7/model/models"],function(e,t,i){"use strict";return e.extend("project7.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"project7/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("project7.controller.App",{onInit:function(){}})});
},
	"project7/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("project7.controller.View1",{onInit:function(){}})});
},
	"project7/i18n/i18n.properties":'# This is the resource bundle for project7\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title\n\nflpTitle=Test\n',
	"project7/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"project7","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.13.0","toolsId":"236a9b82-e9e1-451c-86da-10fa6b2407d5"},"crossNavigation":{"inbounds":{"test-display":{"semanticObject":"test","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.121.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"project7.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"project7.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"project7.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"project7"}}',
	"project7/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"project7/view/App.view.xml":'<mvc:View controllerName="project7.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"project7/view/View1.view.xml":'<mvc:View controllerName="project7.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content /></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
