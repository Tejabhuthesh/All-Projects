
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("demoroutingid.demorouting.controller.View2", {

            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                oRouter.getRoute("View2").attachPatternMatched(this.onRouteMatch, this);

            },

            onRouteMatch: function (evt) {
                // var array1 = [

                //     {
                //         "Employeid": "10",
                //         "Name": "Teja",
                //         "Date of Birth": "01-04-2001",
                //         "Age": "26",
                //         "Role": " Fiori role",
                //         "Date of Joining": "07-08-2022",
                //         "Position": "intern",
                //         "CTC": "12,000",
                //         "Number": "9550840453",
                //         "Alternative Mobile Number": "6281245810",
                //         "Email ID": "tejabhutesh@gmail.com",
                //         "Address": "NKP,MADAKASIRA,INDIA"
                //     },
                //     {

                //         "Employeid": "456",
                //         "Name": "Ram",
                //         "Date of Birth": "01-04-2001",
                //         "Age": "25",
                //         "Role": " Fiori role",
                //         "Date of Joining": "07-08-2022",
                //         "Position": "intern",
                //         "CTC": "18,000",
                //         "Number": "9550840453",
                //         "Alternative Mobile Number": "6281245810",
                //         "Email ID": "tejabhutesh@gmail.com",
                //         "Address": "NKP,MADAKASIRA,INDIA"


                //     },
                //     {

                //         "Employeid": "345",
                //         "Name": "Srinath",
                //         "Date of Birth": "01-04-2001",
                //         "Age": "24",
                //         "Role": " Fiori role",
                //         "Date of Joining": "07-08-2022",
                //         "Position": "intern",
                //         "CTC": "10,000",
                //         "Number": "9550840453",
                //         "Alternative Mobile Number": "6281245810",
                //         "Email ID": "tejabhutesh@gmail.com",
                //         "Address": "NKP,MADAKASIRA,INDIA"


                //     },
                //     {

                //         "Employeid": "999",
                //         "Name": "Sidh",
                //         "Date of Birth": "01-04-2001",
                //         "Age": "23",
                //         "Role": " Fiori role",
                //         "Date of Joining": "07-08-2022",
                //         "Position": "intern",
                //         "CTC": "17,000",
                //         "Number": "9550840453",
                //         "Alternative Mobile Number": "6281245810",
                //         "Email ID": "tejabhutesh@gmail.com",
                //         "Address": "NKP,MADAKASIRA,INDIA"


                //     },
                //     {

                //         "Employeid": "555",
                //         "Name": "Bhuthesh",
                //         "Date of Birth": "01-04-2001",
                //         "Age": "22",
                //         "Role": " Fiori role",
                //         "Date of Joining": "07-08-2022",
                //         "Position": "intern",
                //         "CTC": "13,000",
                //         "Number": "9550840453",
                //         "Alternative Mobile Number": "6281245810",
                //         "Email ID": "tejabhutesh@gmail.com",
                //         "Address": "NKP,MADAKASIRA,INDIA"
                //     }
                // ];
                var KeyID2 = evt.mParameters.arguments.KeyID;
                debugger;
                var array1 = evt.mParameters.view.oPropagatedProperties.oModels.tableData.oData.Employedetails;
                var data = [];
                for (var i = 0; i < array1.length; i++) {
                    if (KeyID2 == array1[i].Employeid) {
                        data.push(array1[i]);
                        var oModel = new sap.ui.model.json.JSONModel();
                        oModel.setData(data);
                        this.getView().setModel(oModel, "Data2");
                    }
                }
            },

            //var data = evt.getParameter('arguments').KeyID;

            //sap.m.MessageToast.show(data);
            //    var data = oEvent.getParameter('arguments').id;


            onNavBack: function () {
                history.go(-1);

            }
        })
    });