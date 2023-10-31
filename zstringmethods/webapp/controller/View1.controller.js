sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("idstring.zstringmethods.controller.View1", {
            onInit: function () {
                //   this.byId("idlen").setVisible(false);

            },
            rightarrow: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");
            },
            onLength: function () {
                let key = this.getView().byId("idlen").getValue();
                MessageBox.success("The length of the string is " + key.length);
            },
            onSlice: function () {

                let key = this.getView().byId("idlen").getValue();
                let key1 = this.getView().byId("num1").getValue();
                let key3 = this.getView().byId("num2").getValue();
                if (key3) {
                    let key2 = key.slice(key1, key3);
                    MessageBox.success("The sliced (extracted) part of the string is: " + key2);

                } else {
                    let key2 = key.slice(key1);
                    MessageBox.success("The sliced (extracted) part of the string is: " + key2);
                }
            },
            onSubstring: function (oEvent) {

                let key = this.getView().byId("idlen").getValue();
                let key1 = this.getView().byId("num1").getValue();
                let key3 = this.getView().byId("num2").getValue();
                if (key3) {
                    let key2 = key.substring(key1, key3);
                    MessageBox.success("The substring() method extract a part of a string and returns the extracted parts in a new string: " + key2);

                } else {
                    let key2 = key.substring(key1);
                    MessageBox.success("The substring() method extract a part of a string and returns the extracted parts in a new string: " + key2);
                }
            },
            onSubstr: function () {

                let key = this.getView().byId("idlen").getValue();
                let key1 = this.getView().byId("num1").getValue();
                let key3 = this.getView().byId("num2").getValue();
                if (key3) {
                    let key2 = key.substr(key1, key3);
                    MessageBox.success("The substr() method extract a part of a string and returns the extracted parts in a new string: " + key2);

                } else {
                    let key2 = key.substr(key1);
                    MessageBox.success("The substr() method extract a part of a string and returns the extracted parts in a new string: " + key2);
                }
            },
            onReplaceall: function () {
                let text = this.getView().byId("replace").mProperties.text;
                let key3 = this.getView().byId("idlen").getValue();

                let key2 = text.replace(/Microsoft/g, key3);

                MessageBox.success(key2);
            },
            onReplace: function () {
                // let text = this.getView().byId("replace").mProperties.text;
                let key3 = this.getView().byId("idlen").getValue();
                let key1 = this.getView().byId("num1").getValue();
                let key4 = this.getView().byId("num2").getValue();
                let key2 = key3.replace(key1, key4);

                MessageBox.success(key2);
            },
            onReplacealll: function () {
                let key3 = this.getView().byId("idlen").getValue();
                let key1 = this.getView().byId("num1").getValue();
                let key4 = this.getView().byId("num2").getValue();
                let key2 = key3.replaceAll(key1, key4);

                MessageBox.success(key2);
            },
            onUpPer: function () {
                var text = this.getView().byId("idlen").getValue();
                MessageBox.success("Convert string to upper case: " + text.toUpperCase());

            },
            onLower: function () {
                let text = this.getView().byId("idlen").getValue();
                MessageBox.success("Convert string to lower case: " + text.toLowerCase());
            },
            onContact: function () {
                let text1 = this.getView().byId("num1").getValue();
                let text2 = this.getView().byId("num2").getValue();
                let key2 = text1.concat(" ", text2);
                MessageBox.success(key2);
            },
            onTrim : function () {
                let key3 = this.getView().byId("idlen").getValue();
                let key2 = key3.trim();
                MessageBox.success(key2);
            },
            onpadStart : function() {
                let key3 = this.getView().byId("idlen").getValue();
                let text1 = this.getView().byId("num1").getValue();
                let text2 = this.getView().byId("num2").getValue();
                let key2 = key3.padEnd(parseInt(text2),text1);
                MessageBox.success(key2);
            }

        });
    });
