sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("idstring.zstringmethods.controller.View3", {
            onInit() {
            },
            // var value=50;//global variable                                  
            onadd: function () {
              
                var key = this.byId("input1").getValue();         //Local scope
                var key1 = this.byId("input2").getValue();
              var out=  this.onarguments(key, key1);                               // call functions
              this.byId("out").setValue(out);

            },
             onarguments: function (a, b) {                        //function with  arguments
                if(!a){
                   a=6
                }
                if(!b){                                // function with default value
                    b=6
                }

                var out = parseInt(a) + parseInt(b);
                // this.byId("out").setValue(out);
                return out;
            },

            key6 :"ram",           //Global Scope 
            onadd1:function(){
                var value=50;      //Local scope
                this.sad(value);
                 alert(this.key6); 
            },
            sad:function(evt){
                alert(evt);
            }
        });
    }
);
