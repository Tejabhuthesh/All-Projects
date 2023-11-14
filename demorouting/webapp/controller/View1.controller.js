
sap.ui.define([
    "sap/ui/core/mvc/Controller"
    , "../model/formatter", "sap/m/MessageToast", "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter, MessageToast, MessageBox) {
        "use strict";

        return Controller.extend("demoroutingid.demorouting.controller.View1", {
            formatter: formatter,
            onInit: function () {

                this.mode = undefined;
                var t = this;
                var path = jQuery.sap.getModulePath("demoroutingid.demorouting", "/model/Employe details.json");
                var oModel = new sap.ui.model.json.JSONModel(path);
                t.getView().setModel(oModel, "sOrder1");

                var dataModel = t.getOwnerComponent().getModel("tableData");
                t.getView().setModel(dataModel, "sOrder1");
            } ,
           

            onRowClick: function (evt) {
                // var key = evt.oSource.oPropagatedProperties.oModels.sOrder1.oData.Employedetails;
                var key = evt.oSource.mAggregations.cells[0].mProperties.text;
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);

                loRouter.navTo("View2", { KeyID: key });

            },

            onPressMasterBack: function () {
                var that = this;
                that.getSplitContObj().backMaster();
            },

            onListPress: function () {
                var that = this;
                that.getSplitContObj().toMaster(this.createId("master2"));
            },
            onPressDetailBack: function () {
                this.getSplitContObj().backDetail();
            },
            onListItemPress: function (oEvent) {
                var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

                this.getSplitContObj().toDetail(this.createId(sToPageId));
            },



            colorState: function (oEvent1) {
                switch (oEvent1) {

                    case "26":
                        return 1;
                    case "25":
                        return 3;
                    case "24":
                        return 5;
                    case "23":
                        return 7;
                    default:

                        return 8;
                }
            },

            colorsState: function (fValue) {
                try {
                    // fValue = parseFloat(fValue);
                    if (fValue < 0) {
                        return "None";
                    } else if (fValue > 15000) {
                        return "Success";
                    } else if (fValue < 12000) {
                        return "Warning";
                    }
                    else if (fValue <= 13000) {
                        return "Error";
                    } else {
                        return "Pending";
                    }
                } catch (err) {
                    return "None";
                }
            }
            ,
            // onEdit: function (oEvent) {
            //     this.mode = "edit";
            //     // var that = this;
            //     var oTable = this.byId("idSalesTable");
            //     var selectedRowData = oTable.getSelectedContexts();
            //     // var sData = oEvent.getSource().getModel("sOrder1").getData();

            //     if (oEvent.getSource().getText() === "Edit") {
            //         oEvent.getSource().setText("Submit");
            //         oEvent.getSource().getParent().getParent().getCells()[5].setEditable(true);
            //     }
            //     else {
            //         oEvent.getSource().setText("Edit");
            //         oEvent.getSource().getParent().getParent().getCells()[5].setEditable(false);
            //         //    var oInput = oEvent.getSource().getParent().getParent().getCells()[5].getValue();
            //         //    var oId = oEvent.oSource.oPropagatedProperties.oModels.sOrder1.oData.Employedetails[1];

            //         //      sData.Employedetails.push(oId);                  
            //         //     that.getView().getModel("sOrder1").setData(sData);
            //     }
            // },



            onDelete: function (oEvent) {
                this.mode = "delete";
                var that = this;
                var sData = oEvent.getSource().getModel("sOrder1").getData();
                var oTable = this.byId("idSalesTable");
                var selectedRowData = oTable.getSelectedContexts();
                if (selectedRowData.length === 0) {
                    MessageToast.show("please select atleast one row");
                    return;
                } else {
                    for (var i = selectedRowData.length - 1; i >= 0; i--) {
                        var oThisObj = selectedRowData[i].getObject();
                        var index = $.map(sData.Employedetails, function (obj, index) {
                            if (obj === oThisObj) {
                                return index;
                            }
                        });
                        sData.Employedetails.splice(index, 1);
                    }
                    that.getView().getModel("sOrder1").setData(sData);
                    oTable.removeSelections(true);
                }
            },
            onAdd: function (oEvent) {

                var myView = this.getView();
                // var oDialog1 = myView.byId("id1Dialog");
                this._oDialog = myView.byId("id1Dialog");
                if (!this._oDialog) {

                    this._oDialog = sap.ui.xmlfragment(myView.getId(), "demoroutingid.demorouting.view.Dialog1", this);
                    myView.addDependent(this._oDialog);
                    this._oDialog.open();

                }
                else {

                    this.byId("id1Dialog").open();
                }

            },

            CancelPress1: function () {

                this.byId("id1Dialog").close();

            },

            AddPress: function (oEvent) {
                this.mode = "Add";

                var that = this;
                var Employeid = that.getView().byId("id").getValue();
                var Name = that.getView().byId("name").getValue();
                var DateofBirth = that.getView().byId("date").getValue();


                var Age = that.getView().byId("age").getValue();
                var Gender = that.getView().byId("Gender").getValue();
                var Role = that.getView().byId("role").getValue();
                var DateofJoining = that.getView().byId("DateofJoining").getValue();

                var Position = that.getView().byId("position").getValue();
                var CTC = that.getView().byId("ctc").getValue();
                var Number = that.getView().byId("no").getValue();
                var landline = that.getView().byId("mno").getValue();
                var EmailID = that.getView().byId("email").getValue();
                var Address = that.getView().byId("address").getValue();

                var array = { Employeid, Name, DateofBirth, Age, Gender, Role, DateofJoining, Position, CTC, Number, landline, EmailID, Address };

                var sData = oEvent.getSource().getModel("sOrder1").getData();
                sData.Employedetails.push(array);
                that.getView().getModel("sOrder1").setData(sData);

                that.byId("id1Dialog").close();

            }
            ,
            onEdit: function (oEvent) {

                debugger;
                this.mode = "edit";
                var that = this;

                var myView = that.getView();
                // var oDialog = myView.byId("idDialog");
                // var oDialog =myView.byId("idDialog");
                this._oDialog = myView.byId("idDialog");
                // if (!this._oDialog ) {

                //       this._oDialog  = sap.ui.xmlfragment(myView.getId(), "demoroutingid.demorouting.view.Dialog", this);
                //     myView.addDependent(this._oDialog );
                //       this._oDialog .open();
                // }
                // else {

                //     that.byId("idDialog").open();
                // }


                var sData = oEvent.getSource().getModel("sOrder1").getData();
                var oTable = that.byId("idSalesTable");
                var selectedRowData = oTable.getSelectedContexts();
                if (selectedRowData.length === 0) {
                    MessageToast.show("please select atleast one row");
                    return;
                } else {
                    if (!this._oDialog) {

                        this._oDialog = sap.ui.xmlfragment(myView.getId(), "demoroutingid.demorouting.view.Dialog", this);
                        myView.addDependent(this._oDialog);
                        this._oDialog.open();
                    }
                    else {

                        that.byId("idDialog").open();
                    }

                    for (var i = selectedRowData.length - 1; i >= 0; i--) {
                        var oThisObj = selectedRowData[i].getObject();
                        var index = $.map(sData.Employedetails, function (obj, index) {
                            if (obj === oThisObj) {
                                return index;
                            }
                        });
                        sData.Employedetails[index];
                    }
                    var oModel = new sap.ui.model.json.JSONModel();
                    oModel.setData(sData.Employedetails[index]);
                    that.getView().setModel(oModel, "Data3");
                }
            }
            , SavePress: function () {
                MessageBox.success("Saved Successfuly.")
                this.byId("idDialog").close();
            }
            ,

            dialogAftercloseadd: function (oEvent) {

                // this._oDialog.destroy();
                this._oDialog.destroy();
            },
            dialogAfterclosedit: function (oEvent) {

                // this._oDialog.destroy();
                this._oDialog.destroy();
            },

            Lock: function (oEvent) {

                if (oEvent.getSource().getText() === "Unlocked") {
                    oEvent.getSource().setText("Locked");

                    oEvent.getSource().setIcon("sap-icon://locked");
                    this.byId("editmode").setVisible(false);
                    this.byId("addButton").setVisible(false);
                    this.byId("deleteButton").setVisible(false);
                    this.byId("idSalesTable").setMode("None");

                    // this.byId("editmode").setEnabled(false);
                    // this.byId("addButton").setEnabled(false);
                    // this.byId("deleteButton").setEnabled(false);
                }
                else {
                    oEvent.getSource().setText("Unlocked");
                    oEvent.getSource().setIcon("sap-icon://unlocked");

                    this.byId("editmode").setVisible(true);
                    this.byId("addButton").setVisible(true);
                    this.byId("deleteButton").setVisible(true);
                    this.byId("idSalesTable").setMode("MultiSelect");
                    // this.byId("editmode").setEnabled(true);
                    // this.byId("addButton").setEnabled(true);
                    // this.byId("deleteButton").setEnabled(true);


                }
            }

        });
    });
