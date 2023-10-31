sap.ui.define([
    "sap/ui/core/mvc/Controller", 'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("fileuploader.controller.View1", {
            onInit: function () {

            }, 
            handleUploadComplete: function (oEvent) {
                var sResponse = oEvent.getParameter("response"),
                    iHttpStatusCode = parseInt(/\d{3}/.exec(sResponse)),
                    sMessage;

                if (sResponse) {
                    sMessage = iHttpStatusCode === 200 ? sResponse + " (Upload Success)" : sResponse + " (Upload Error)";
                    MessageToast.show(sMessage);
                }
            },
            handleUploadPress: function () {
                var oFileUploader = this.byId("fileUploader");
                oFileUploader.checkFileReadable().then(function () {
                    oFileUploader.upload();
                }, function (error) {
                    MessageToast.show("The file cannot be read. It may have changed.");
                }).then(function () {
                    oFileUploader.clear();
                });
            }
            ,
            onDownloadSelectedButton: function(){
                var oUploadSet = this.byId("UploadSet");

                oUploadSet.getItems().forEach(function (oItem) {
                    if (oItem.getListItem().getSelected()) {
                        oItem.download(true);
                    }
                });
            }
        });
    });
