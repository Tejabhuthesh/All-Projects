sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("candidate.deatails.zcandidates.controller.View1", {
            onInit: function () {

            },
            onCreatePackage:function(){
                if (!this.aDialog) {
                    this.aDialog = this.loadFragment({
                        name: "candidate.deatails.zcandidates.view.fragments.CreatePackage"
                    });
                }

                this.aDialog.then(function (oDialog) {
                    oDialog.open();
                });
            },
            onCancel: function () {
                this.byId("idCreatePackage").destroy();
                this.aDialog = undefined;
            },
            onSavePress:function(){
                this.byId("idCreatePackage").destroy();
                this.aDialog = undefined;
            }
            
        });
    });
