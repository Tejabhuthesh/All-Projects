sap.ui.define(function () {

    "use strict";

    var formatter = {

        //text controller using.
       /* colorState: function (oEvent) {

            switch (oEvent) {

                case "26":
                    return "red";
                case "25":
                    return "green";
                case "24":
                    return "Yellow";
                case "23":
                    return "blue";
                default:

                    return "rose";
            }
        },*/
    // Colour sheme using.
        // colorState: function (oEvent) {

        //     switch (oEvent) {

        //         case "26":
        //             return 1;
        //         case "25":
        //             return 3;
        //         case "24":
        //             return 5;
        //         case "23":
        //             return 7;
        //         default:

        //             return 8;
        //     }
        // },

        // object number using .
        colorsState :  function (fValue) {
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
        },
          // object number using .
          colors1State :  function (fValue1) {
            try {
              if (fValue1 === "Male") {
                    return "Success";
                } else if (fValue1 === "Female") {
                    return "Warning";
                
                } else if(fValue1 === "other"){
                    return "Error";
                }
            }
             catch (err) {
                return "None";
            }
        }
        
    };

    return formatter;


}, /* bExport= */ true);  





// sap.ui.define(function () {

//     "use strict";
//     return {
//         statusText: function (value) {
//             var statusVal = "";
//             switch (value) {
//                 case "26":
//                     statusVal = "Success"
//                     return statusVal;

//                 case "25":
//                     statusVal = "Pending"
//                     return statusVal;
//                 case "23":
//                     statusVal = "Success"
//                     return statusVal;

//                 default:
//                     return value;
//             }
//         }
//     };



// });