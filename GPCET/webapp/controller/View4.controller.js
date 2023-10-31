sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("idapp.project1.controller.View4", {
            onInit: function () {
               debugger;

            //    var Name=  this.getOwnerComponent().getModel("globalModel")[0].Name ;

                // var path = jQuery.sap.getModulePath("idapp.project1", "/model/Students.json");
                // oProductsModel = new sap.ui.model.json.JSONModel("../model/products.json");
                // var oModel = new sap.ui.model.json.JSONModel(path);
                // this.getView().setModel(oModel, "sOrder1");

                var dataModel = this.getOwnerComponent().getModel("tableData");
                this.getView().setModel(dataModel, "sOrder1");
           
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("View4").attachPatternMatched(this.onRouteMatch, this);


            },
            onRouteMatch: function (evt) {
                debugger
                var array1 = evt.mParameters.view.oModels.sOrder1.oData.Studentdeatails;
                var data = [];
                 var KeyID2 = evt.mParameters.arguments.name1;
                var KeyID3 = evt.mParameters.arguments.name2;


                for (var i = 0; i < array1.length; i++) {

                    if (KeyID2 === array1[i].PinNumber && KeyID3 === array1[i].Name) {
                        data.push(array1[i]);

                        var oModel = new sap.ui.model.json.JSONModel();
                        oModel.setData(data);
                        this.getView().setModel(oModel, "Data2");
                    }   
                }
            },
            onNavBack: function () {
                history.go(-1);

            },
    
            Logout: function () {
                var t=this;
                var success="Are You Sure Want To LogOut!!";
               
                new sap.m.MessageBox.success(success ,{
                    actions: [sap.m.MessageBox.Action.OK,sap.m.MessageBox.Action.CANCEL]  ,
                    emphasizedAction: [sap.m.MessageBox.Action.OK,sap.m.MessageBox.Action.CANCEL],
                    onClose: function (actions) {
                        debugger;
                        if (actions === "OK") {
                            var loRouter = sap.ui.core.UIComponent.getRouterFor(t);
                            loRouter.navTo("View2");
                        }
                       
                    },
              
                });
                // MessageBox.success("Successful! Your account Logged out.", {
                //     actions: [MessageBox.Action.CANCEL],
                //     details:
                //         "<p>Do you Want to go to Login Portal(Y/N)? <a href='http://localhost:8084/test/flpSandbox.html?sap-ui-xx-viewCache=false#idappproject1-display&/View2'> YES</a>.",
                //     contentWidth: "100px",

                // });
            }, Logout1: function () {
                MessageBox.success("Successful! Your account Logged out.");
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");
            },

            onPressMasterBack: function () {
                var that = this;
                that.getSplitContObj().backMaster();
                that.getSplitContObj().backDetail();
            },
            onPressDetailBack: function () {
                this.getSplitContObj().backDetail();
            },
            onListItemPress: function (oEvent) {
                var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

                this.getSplitContObj().toDetail(this.createId(sToPageId));
            },
            getSplitContObj: function () {
                var result = this.byId("SplitContDemo");
                if (!result) {
                    Log.error("SplitApp object can't be found");
                }
                return result;
            },
            myprofile: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("myprofile"));
            },
            passwordchange: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("passwordchange"));
            },

            feepayment: function () {
                var that = this;
                that.getSplitContObj().toMaster(this.createId("master2"));
            }, Dashboard: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("dashboard1"));

            },
            classwork: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("classwork"));
            }
            ,
            Applications: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("Applications"));
            }
            ,
            Feedback: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("Feedback"));
            }
            ,
            GrivenceCell: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("GrivenceCell"));
            }
            ,
            TrainingandPlacement: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("TrainingandPlacement"));
            }
            ,
            PlanMyTraining: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("PlanMyTraining"));
            }
            ,
            InovationIdeas: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("InovationIdeas"));
            }
            ,
            DigitalLab: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("DigitalLab"));
            }

            ,
            training: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("TrainingandPlacement"));
            }

            ,
            feedue: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("feepayment"));
            },notification: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("notification"));
            }, attendence: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("attendence"));
            }
            , midmarks: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("midmarks"));
            }
            , backlogs: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("backlogs"));
            }
            , placed: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("placed"));
            }
            , progress: function () {
                var that = this;
                that.getSplitContObj().toDetail(this.createId("progress"));
            }



        });
    });