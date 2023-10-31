sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/mvc/XMLView"
    ],
    function(BaseController,XMLView) {
      "use strict";
  
      return BaseController.extend("idflex.flex.controller.App", {
        onInit() {
          this.bus = this.getOwnerComponent().getEventBus();
          this.bus.subscribe("flexible", "setListPage", this.setListPage, this);
          this.bus.subscribe("flexible", "setDetailPage", this.setDetailPage, this);
          this.bus.subscribe("flexible", "setAboutPage", this.setAboutPage, this);
          this.bus.subscribe("flexible", "setAboutFullScreen", this.setAboutFullScreen, this);
          this.bus.subscribe("flexible", "setListPageRemove", this.setListPageRemove, this);
    
          this.oFlexibleColumnLayout = this.byId("app");
        },
        onExit: function () {
          this.bus.unsubscribe("flexible", "setListPage", this.setListPage, this);
          this.bus.unsubscribe("flexible", "setDetailPage", this.setDetailPage, this);
          this.bus.unsubscribe("flexible", "setAboutPage", this.setAboutPage, this);
          this.bus.unsubscribe("flexible", "setAboutFullScreen", this.setAboutFullScreen, this);
          this.bus.unsubscribe("flexible", "setListPageRemove", this.setListPageRemove, this);
        },
        setListPage: function () {
          this.oFlexibleColumnLayout.setLayout("OneColumn");
        },
        setDetailPage: function () {
        
          this.oFlexibleColumnLayout.setLayout("MidColumnFullScreen");
        },
        setAboutPage:function(){
          // this._loadView({
          //   id: "aboutView",
          //   viewName: "idflex.flex.view.About"
          // }).then(function(AboutView) {
          //   this.oFlexibleColumnLayout.addEndColumnPage(AboutView);
          //   this.oFlexibleColumnLayout.setLayout(LayoutType.ThreeColumnsEndExpanded);
          // }.bind(this));
          this.oFlexibleColumnLayout.setLayout("TwoColumnsMidExpanded");
        },
        setAboutFullScreen:function(){
       
          this.oFlexibleColumnLayout.setLayout("EndColumnFullScreen");
        },
        setListPageRemove:function(){
          this.oFlexibleColumnLayout.setLayout("ThreeColumnsMidExpandedEndHidden");
        }
			
        // _loadView: function(options) {
        //   var mViews = this._mViews = this._mViews || Object.create(null);
        //   if (!mViews[options.id]) {
        //     mViews[options.id] = this.getOwnerComponent().runAsOwner(function() {
        //       return XMLView.create(options);
        //     });
        //   }
        //   return mViews[options.id];
        // }
      });
    });
  
  