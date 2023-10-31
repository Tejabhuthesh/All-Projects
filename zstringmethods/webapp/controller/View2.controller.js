sap.ui.define([
  "sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("idstring.zstringmethods.controller.View2", {
      onInit() {


        this.str = [];
      } ,
      rightarrow: function () {
        var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
        loRouter.navTo("View3");
    },
      onjoin: function () {

        var t = this;
        var key = t.getView().byId("idjoin").getValue();
        if (key === "") {
          MessageToast.show("please give Value");
          t.byId("idjoin").setValueState("Warning");
          return;
        } else {
          t.byId("idjoin").setValueState("Success");
          let key11 = t.getView().byId("idjoin1").getValue();
          let key12 = t.getView().byId("idjoin2").getValue();
          let key13 = t.getView().byId("idjoin3").getValue();
          var fruits = [key11, key12, key13];
          //let key = this.getView().byId("idjoin").getValue();
          let key2 = fruits.join(key);
          MessageBox.success(key2);
        }

      },
      onshift: function () {
        let key11 = this.getView().byId("idjoin1").getValue();
        let key12 = this.getView().byId("idjoin2").getValue();
        let key13 = this.getView().byId("idjoin3").getValue();
        if (key11 === "" && key12 === "" && key13 === "") {
          this.byId("idjoin1").setValueState("Warning");
          this.byId("idjoin2").setValueState("Warning");
          this.byId("idjoin3").setValueState("Warning");
          MessageToast.show("please give Value");
          return;

        } else {
          this.byId("idjoin1").setValueState("Success");
          this.byId("idjoin2").setValueState("Success");
          this.byId("idjoin3").setValueState("Success");
          // let fruits = ["Banana", "Orange", "Apple", "Mango"];
          let fruits = [key11, key12, key13];
          let key2 = fruits.shift();                                      // its removing first one
          MessageBox.success(fruits.toString());
        }
      },
      onpop: function () {
        
      //  this.getElementsByClassName('popbutton');
       this.byId("idjoin").setEnabled(false);
        // idjoin.setAttribute('class', 'popbutton');
        let key11 = this.getView().byId("idjoin1").getValue();
        let key12 = this.getView().byId("idjoin2").getValue();
        let key13 = this.getView().byId("idjoin3").getValue();
        if (key11 === "" && key12 === "" && key13 === "") {
          this.byId("idjoin1").setValueState("Warning");
          this.byId("idjoin2").setValueState("Warning");
          this.byId("idjoin3").setValueState("Warning");
          MessageToast.show("please give Value");
          return;

        } else {
          this.byId("idjoin1").setValueState("Success");
          this.byId("idjoin2").setValueState("Success");
          this.byId("idjoin3").setValueState("Success");
          let fruits = [key11, key12, key13];
          //  let fruits = ["Banana", "Orange", "Apple", "Mango"];
          //let key = this.getView().byId("idjoin").getValue();
          let key2 = fruits.pop();                                         // its removing last one
          MessageBox.success(fruits.toString());
        }

      },
      onunshift: function () {
        let key = this.getView().byId("idjoin").getValue();
        if (key === "") {

          MessageToast.show("please give Value");

          return;

        } else {
          let key11 = this.getView().byId("idjoin1").getValue();
          let key12 = this.getView().byId("idjoin2").getValue();
          let key13 = this.getView().byId("idjoin3").getValue();
          let fruits = [key11, key12, key13];
          //  let fruits = ["Banana", "Orange", "Apple", "Mango"];

          let key2 = fruits.unshift(key);
          MessageBox.success(fruits.toString());
        }

      },
      onpush: function () {
        let key = this.getView().byId("idjoin").getValue();
        if (key === "") {
          this.byId("idjoin").setValueState("Warning");
          MessageToast.show("please give Value");
          return;

        } else {
          this.byId("idjoin").setValueState("Success");
          let key11 = this.getView().byId("idjoin1").getValue();
          let key12 = this.getView().byId("idjoin2").getValue();
          let key13 = this.getView().byId("idjoin3").getValue();
          this.fruits = [key11, key12, key13];
          // let fruits = ["Banana", "Orange", "Apple", "Mango"];

          this.fruits.push(key);


          MessageBox.success(this.fruits.toString());

          // let str1 = this.getView().byId("idjoin").getValue();
          // this.str.push(str1);
          // str1 = this.getView().byId("idjoin").setValue();
          // MessageBox.success(this.str.toString());
        }

      },
      onconcat: function () {
        let key = this.getView().byId("idjoin").getValue();
        if (key === "") {
          this.byId("idjoin").setValueState("Warning");
          MessageToast.show("please give Value");
          return;

        } else {
          this.byId("idjoin").setValueState("Success");
          let key11 = this.getView().byId("idjoin1").getValue();
          let key12 = this.getView().byId("idjoin2").getValue();
          let key13 = this.getView().byId("idjoin3").getValue();
          var fruits = [key11, key12, key13];
          // let fruits = ["Banana", "Orange", "Apple", "Mango"];

          let key4 = fruits.concat(key);


          MessageBox.success(key4.toString());

        }

      },

      ondelite: function () {
        var key = this.getView().byId("idjoin").getValue();
        if (key === "") {
          this.byId("idjoin").setValueState("Warning");
          MessageToast.show("please give index Number");
          return;
        } else {
          this.byId("idjoin").setValueState("Success");
          let key11 = this.getView().byId("idjoin1").getValue();
          let key12 = this.getView().byId("idjoin2").getValue();
          let key13 = this.getView().byId("idjoin3").getValue();
          var fruits = [key11, key12, key13];
          //let key = this.getView().byId("idjoin").getValue();
          delete fruits[key];
          MessageBox.success(fruits.toString());
        }

      },
      onflat: function () {
        const myArr = [[1,2],[3,4],[5,6]];

        const newArr = myArr.flat();
        MessageBox.success(newArr.toString());
      },
      onslice: function () {
        let key = this.getView().byId("idjoin").getValue();
        if (key === "") {
          this.byId("idjoin").setValueState("Warning");
          MessageToast.show("please give Value");
          return;

        } else {
          this.byId("idjoin").setValueState("Success");
          let key11 = this.getView().byId("idjoin1").getValue();
          let key12 = this.getView().byId("idjoin2").getValue();
          let key13 = this.getView().byId("idjoin3").getValue();
          var fruits = [key11, key12, key13];
          // let fruits = ["Banana", "Orange", "Apple", "Mango"];

          let key4 = fruits.slice(key);


          MessageBox.success(key4.toString());

        }

      }
    });
  }
);
