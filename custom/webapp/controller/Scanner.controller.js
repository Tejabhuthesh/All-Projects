sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";
        var prefixId;
        var oScanResultText;
        var oScanResultText1;
        return Controller.extend("idcartonenquiry.zcartonenquiry.controller.Scanner", {
            onInit: function () {

                var that = this;
                oScanResultText = that.getView().byId('idHUNumber');
                oScanResultText1 = that.getView().byId('idScanHere');
                that.getView().byId("sampleBarcodeScannerButtonChild").setVisible(false);
            },
            onScanSuccess: function (oEvent) {
                var t = this;

                if (oEvent.getParameter("cancelled")) {
                    MessageToast.show("Scan cancelled");
                } else {
                    if (oEvent.getParameter("text")) {
                        oScanResultText.setValue(oEvent.getParameter("text"));
                        var HUNumber = oEvent.getParameter("text");
                        var id = HUNumber.split("-")[0];
                        var oFilter = new sap.ui.model.Filter('ZhuNumber', 'EQ', id);
                        // var oModel = t.getOwnerComponent().getModel("ScanDataa");
                        // var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZCODE_SCANNER_VERIFICATION_SRV/?$filter=(ZhuNumber%20eq%20%27"+id+"%27) ");
                        // oModel.read("/CodeScannerSet", null, ["$filter=ZhuNumber eq '" + id + "'"],{
                        // oModel.read("/CodeScannerSet?$filter=(ZhuNumber%20eq%20%27CODE%20128%27)", {
                        var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZCODE_SCANNER_VERIFICATION_SRV/");
                        // oModel.read("/CodeScannerSet?$filter=ZhuNumber eq  ('" + id + "')", {
                            oModel.read("/CodeScannerSet", {
                            filters: [oFilter],
                            success: function (odata) {
                                var oModel1 = new JSONModel();
                                oModel1.setData(odata);
                                t.getView().setModel(oModel1, "ScanData");
                                var audio = new Audio("../audio/beep-08b.mp3");
                                audio.play();
                                var data = odata.results;
                                for (var i = 0; i < data.length; i++) {
                                    delete data[i].ZchildNum;
                                }

                                let newArray = [];
                                let uniqueObject = {};
                                for (let i in data) {
                                    var objTitle = data[i]['Matnr'];

                                    uniqueObject[objTitle] = data[i];
                                }
                                for (i in uniqueObject) {
                                    newArray.push(uniqueObject[i]);
                                }
                                for (var i = 0; i < newArray.length; i++) {
                                    if (HUNumber === newArray[i].ZhuNumber) {
                                        var oModel1 = new JSONModel();
                                        oModel1.setData(newArray);
                                        t.getView().setModel(oModel1, "ScanData1");
                                        let TS = [];
                                        for (var i = 0; i < newArray.length; i++) {
                                            TS.push(newArray[i].Menge);
                                        }
                                        let sum = 0;

                                        for (let i = 0; i < TS.length; i++) {
                                            sum += parseInt(TS[i]);
                                        }

                                        t.byId("idTS").setValue(sum);
                                        t.getView().byId("sampleBarcodeScannerButtonChild").setVisible(true);
                                    } else {
                                        // var audio = new Audio("../audio/beep-05.mp3");
                                        // audio.play();
                                        t.getView().byId("sampleBarcodeScannerButtonChild").setVisible(false);
                                        var warning = "Wrong SKU Number";
                                        sap.m.MessageBox.warning(warning, {
                                            actions: [sap.m.MessageBox.Action.OK],
                                            emphasizedAction: [sap.m.MessageBox.Action.OK],
                                            onClose: function () {
                                            }
                                        });
                                    }
                                }

                            },
                            error: function (oError) {

                            }
                        })
                    }
                }
            },

            onScanError: function (oEvent) {
                MessageToast.show("Scan failed: " + oEvent, { duration: 1000 });
                var audio = new Audio("../audio/beep-05.mp3");
                audio.play();
            },

            onScanLiveupdate: function (oEvent) {
                // User can implement the validation about inputting value
            },

            // onAfterRendering: function () {
            //     // Reset the scan result
            //     var oScanButton = this.getView().byId('sampleBarcodeScannerButton');
            //     if (oScanButton) {
            //         $(oScanButton.getDomRef()).on("click", function () {
            //             oScanResultText.setValue('');
            //         });
            //     }
            // },

            onScanAgainSuccess: function (oEvent) {
                var t = this;
                if (oEvent.getParameter("cancelled")) {
                    MessageToast.show("Scan cancelled", { duration: 1000 });
                } else {
                    if (oEvent.getParameter("text")) {
                        oScanResultText1.setValue(oEvent.getParameter("text"));

                        var array1 = t.getView().getModel("ScanData").getData().results;
                        var warning = "You Already Scanned this Item!";
                        var warning1 = "Wrong SKU Number";
                        var success = "success";

                        var KeyID2 = oEvent.getParameter("text");
                        var grid = KeyID2.split("-")[2];
                        for (var i = 0; i < array1.length; i++) {
                            if (KeyID2 === array1[i].ZdNum) {

                                if (array1[i].Zscanned < array1[i].Menge) {
                                    var Zscann = parseInt(array1[i].Zscanned);
                                    Zscann += 1;
                                    array1[i].Zscanned = Zscann;

                                    for (var i = 0; i < array1.length; i++) {
                                        if (KeyID2 === array1[i].ZdNum) {
                                            if (array1[i].Zscanned === 1) {
                                                var sData = oEvent.getSource().oPropagatedProperties.oModels.ScanData1.oData;
                                                for (var l = 0; l < sData.length; l++) {
                                                    if (grid === sData[l].Zgrid) {

                                                        if (sData[l].Zscanned < sData[l].Menge) {

                                                            var Zscann = parseInt(sData[l].Zscanned);
                                                            Zscann += 1;
                                                            sData[l].Zscanned = Zscann;

                                                            t.getView().getModel("ScanData1").setData(sData);

                                                            var audio = new Audio("../audio/beep-08b.mp3");
                                                            audio.play();
                                                            new sap.m.MessageBox.success(success, {
                                                                actions: [sap.m.MessageBox.Action.OK],
                                                                emphasizedAction: [sap.m.MessageBox.Action.OK],
                                                                onClose: function () {
                                                                }
                                                            });
                                                        }
                                                    };
                                                }
                                            } else {
                                                var audio = new Audio("../audio/beep-05.mp3");
                                                audio.play();
                                                new sap.m.MessageBox.warning(warning, {
                                                    actions: [sap.m.MessageBox.Action.OK],
                                                    emphasizedAction: [sap.m.MessageBox.Action.OK],
                                                    onClose: function () {
                                                    }
                                                });
                                            }
                                        }

                                    }
                                }

                                let TS = [];
                                for (var i = 0; i < sData.length; i++) {
                                    TS.push(sData[i].Zscanned);
                                }
                                let sum = 0;

                                for (let i = 0; i < TS.length; i++) {
                                    sum += parseInt(TS[i]);
                                }

                                t.byId("idSO").setValue(sum);


                            } else if (KeyID2 === array1[i].ZhuNumber) {

                                var audio = new Audio("../audio/beep-05.mp3");
                                audio.play();
                                var t = this;
                                new sap.m.MessageBox.warning(warning1, {

                                    id: "msgbox",
                                    actions: [sap.m.MessageBox.Action.OK],
                                    emphasizedAction: [sap.m.MessageBox.Action.OK],
                                    onClose: function (actions) {
                                        if (actions === "OK") {
                                            // sap.ui.getCore().byId("msgbox").close();
                                        }

                                    }
                                });

                            }
                            else {
                                MessageToast.show("This Item Not Related Our Item");
                            }
                        }
                    } else {
                        oScanResultText1.setText('');
                    }
                }
            }
        });
    });
