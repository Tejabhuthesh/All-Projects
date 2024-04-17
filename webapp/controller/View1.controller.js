sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/PDFViewer",
    "sap/ui/model/json/JSONModel",

    "sap/m/MessageToast",
    "sap/ui/core/util/File"

], function (Controller, PDFViewer, JSONModel, MessageToast, File) {
    "use strict";

    return Controller.extend("pdflabel.controller.View1", {

        onInit: function () {
            // debugger
            // var that = this; // Save the reference to "this" to use inside the AJAX callback
            // var zplCode; // Variable to store the retrieved ZPL code

            // $.ajax({
            //     url: "https://hvl-test.myxcarrier.com/Labels/273198627451.txt",
            //     async: false,
            //     success: function (data) {
            //          zplCode = data;


            //             // Convert the ZPL code to base64
            //             var base64Zpl = btoa(zplCode);
            //            var pdfViewer= that.getView().byId("pdfViewer");
            //             // Set the base64 encoded ZPL code as source for PDFViewer
            //             // Assuming the ID of the PDFViewer control is "pdfViewer"
            //             pdfViewer.setSource("data:application/pdf;base64," + base64Zpl);


            //         // var base64Zpl = btoa(zplCode);

            //         // var bytes = new TextEncoder().encode(zplCode);

            //         // // Convert the byte array to base64
            //         // var base64Zpl = btoa(String.fromCharCode.apply(null, bytes));

            //         // // Create a Blob from the base64 encoded string
            //         // var blob = new Blob([base64Zpl], { type: "application/pdf" });

            //         // // Create a URL for the Blob
            //         // var url = URL.createObjectURL(blob);

            //         // // Set the URL as the source property of the PDFViewer
            //         // var pdfViewer = new sap.m.PDFViewer({
            //         //     source: url,
            //         //     isTrustedSource: true
            //         // });

            //         // // Add the PDFViewer to the DOM or to a UI container
            //         // pdfViewer.placeAt("content");

            //     }
            // });
            // // this._pdfViewer = new PDFViewer({
            // //     isTrustedSource: true
            // // });
            // // this.getView().addDependent(this._pdfViewer);

            // // var oSample1Model = new JSONModel({
            // //     Source: sap.ui.require.toUrl("https://hvl-test.myxcarrier.com/Labels/273198627451.pdf"),
            // //     Preview: sap.ui.require.toUrl("https://hvl-test.myxcarrier.com/Labels/273198627451.jpg")
            // // });


            // // this.byId('image1').setModel(oSample1Model);

        },
        onFormSubmit: function () {
            var zpl = "^XA^CF,0,0,0^PR12^MD30^PW800^POI^CI13^LH0,20\n^FO12,124^GB755,2,2^FS\n^FO12,390^GB777,2,2^FS\n^FO32,3^AdN,0,0^FWN^FH^FDFROM:^FS\n^FO32,19^AdN,0,0^FWN^FH^FDShipper^FS\n^FO32,37^AdN,0,0^FWN^FH^FDHudson Valley Lighting, Inc^FS\n^FO32,55^AdN,0,0^FWN^FH^FD151 Airport Drive^FS\n^FO32,73^AdN,0,0^FWN^FH^FD^FS\n^FO32,109^AdN,0,0^FWN^FH^FDUS ^FS\n^FO224,3^AdN,0,0^FWN^FH^FD(800) 814-3993^FS\n^FO28,742^A0N,24,24^FWN^FH^FDTRK#^FS\n^FO28,800^A0N,27,32^FWN^FH^FD## MASTER ## ^FS\n^FO136,712^A0N,27,36^FWN^FH^FD1 of 2^FS\n^FO32,91^AdN,0,0^FWN^FH^FDWappingers Falls NY 12590^FS\n^FO478,3^AdN,0,0^FWN^FH^FDSHIP DATE: 09APR24^FS\n^FO478,19^AdN,0,0^FWN^FH^FDACTWGT: 22.00 LB^FS\n^FO478,37^AdN,0,0^FWN^FH^FDCAD: 114810957/WSXI3600^FS\n^FO478,91^AdN,0,0^FWN^FH^FDBILL SENDER^FS\n^FO39,136^A0N,39,39^FWN^FH^FDHome Depot^FS\n^FO39,178^A0N,39,39^FWN^FH^FDHome Depot^FS\n^FO39,220^A0N,39,39^FWN^FH^FD11682 Forest Central Drive^FS\n^FO39,262^A0N,39,39^FWN^FH^FD.^FS\n^FO39,347^AdN,0,0^FWN^FH^FD(877) 722-7546^FS\n^FO39,304^A0N,43,40^FWN^FH^FDDallas TX 75243^FS\n^FO719,304^A0N,43,40^FWN^FH^FD(US)^FS\n^FO677,462^GB104,10,10^FS\n^FO677,472^GB10,112,10^FS\n^FO771,472^GB10,112,10^FS\n^FO677,584^GB104,10,10^FS\n^FO464,--^GB2,126,2^FS\n^FO687,480^A0N,128,137^FWN^FH^FDH^FS\n^FO654,402^A0N,43,58^FWN^FH^FDFedEx^FS\n^FO663,448^AbN,11,7^FWN^FH^FDHome Delivery^FS\n^FO791,493^A0N,13,18^FWB^FH^FDJ241024011001uv^FS\n^FO9,136^A0N,21,21^FWN^FH^FDTO^FS\n^FO21,412^BY2,2^B7N,10,5,14^FH^FWN^FH^FD[)>_1E01_1D0275243_1D840_1D804_1D273198627451_1DFDEG_1D0425198_1D100_1D_1D1/2_1D22.00LB_1DN_1D11682 Forest Central Drive_1DDallas_1DTX_1DHome Depot_1E06_1D10ZGH007_1D11ZHome Depot_1D12Z8777227546_1D14Z._1D20Z_1C_1D28Z00273198627451_1D31Z9622080430000425198400273198627451_1D9K80000347_1D_1E_04^FS\n^FO28,837^A0N,107,96^FWN^FH^FD^FS\n^FO12,681^GB777,2,2^FS\n^FO494,885^A0N,43,43^FWN^FH^FD^FS\n^FO788,28^AbN,11,7^FWB^FH^FD583J4/5D80/9AE3^FS\n^FO95,746^A0N,53,40^FWN^FH^FD2731 9862 7451^FS\n^FO409,695^A0N,51,38^FWN^FH^FB390,,,R,^FD                   ^FS\n^FO404,747^A0N,51,38^FWN^FH^FB400,,,R,^FD                   ^FS\n^FO413,799^A0N,40,40^FWN^FH^FB386,,,R,^FD                ^FS\n^FO495,841^A0N,44,44^FWN^FH^FB298,,,R,^FD     75243^FS\n^FO574,901^A0N,24,24^FWN^FH^FB120,,,R,^FD      ^FS\n^FO695,885^A0N,43,43^FWN^FH^FB100,,,R,^FD   ^FS\n^FO39,927^A0N,27,36^FWN^FH^FD9622 0804 3 (000 000 0000) 0 00 2731 9862 7451^FS\n^FO75,968^BY3,2^BCN,200,N,N,N,N^FWN^FD>;9622080430000425198400273198627451^FS\n^FO478,55^AdN,0,0^FWN^FH^FDDIMMED: 10 X 10 X 10 IN^FS\n^FO329,349^AbN,11,7^FWN^FH^FDREF: 80000347^FS\n^FO39,363^AbN,11,7^FWN^FH^FDINV: ^FS\n^FO39,377^AbN,11,7^FWN^FH^FDPO: PO08012022-1^FS\n^FO429,377^AbN,11,7^FWN^FH^FDDEPT: ^FS\n^PQ1\n^XZ\n"; // Provide the ZPL code to convert


            // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
            var bin = zpl;
            // console.log('File Size:', Math.round(bin.length / 1024), 'KB');
            // console.log('PDF Version:', bin.match(/^.PDF-([0-9.]+)/)[1]);
            // console.log('Create Date:', bin.match(/<xmp:CreateDate>(.+?)<\/xmp:CreateDate>/)[1]);
            // console.log('Modify Date:', bin.match(/<xmp:ModifyDate>(.+?)<\/xmp:ModifyDate>/)[1]);
            // console.log('Creator Tool:', bin.match(/<xmp:CreatorTool>(.+?)<\/xmp:CreatorTool>/)[1]);

            // Embed the PDF into the HTML page and show it to the user
            var obj = document.createElement('object');
            obj.style.width = '100%';
            obj.style.height = '842pt';
            obj.type = 'application/pdf';
            obj.data = 'data:application/pdf;base64,' + bin;
            document.body.appendChild(obj);

            // Insert a link that allows the user to download the PDF file
            var link = document.createElement('a');
            link.innerHTML = 'Download PDF file';
            link.download = 'file.pdf';
            link.href = 'data:application/octet-stream;base64,' + bin;
            document.body.appendChild(link);
            // var dpi = 203;

            // jQuery.ajax({
            //     url: "https://hvl-test.myxcarrier.com/v2/convert/zpl/to/pdf", // Replace with your server-side endpoint
            //     type: "POST",
            //     data: { zpl: zpl, dpi: dpi },
            //     success: function (response) {
            //         var objectUrl = URL.createObjectURL(response);
            //         window.open(objectUrl, '_blank');
            //     },
            //     error: function (jqXHR, textStatus, errorThrown) {
            //         console.error("Error:", errorThrown);
            //         MessageBox.error("Error converting ZPL to PDF: " + errorThrown);
            //     }
            // });
        },

        onDownloadButtonClick: function () {
            var zpl = "^XA^CF,0,0,0^PR12^MD30^PW800^POI^CI13^LH0,20\n^FO12,124^GB755,2,2^FS\n^FO12,390^GB777,2,2^FS\n^FO32,3^AdN,0,0^FWN^FH^FDFROM:^FS\n^FO32,19^AdN,0,0^FWN^FH^FDShipper^FS\n^FO32,37^AdN,0,0^FWN^FH^FDHudson Valley Lighting, Inc^FS\n^FO32,55^AdN,0,0^FWN^FH^FD151 Airport Drive^FS\n^FO32,73^AdN,0,0^FWN^FH^FD^FS\n^FO32,109^AdN,0,0^FWN^FH^FDUS ^FS\n^FO224,3^AdN,0,0^FWN^FH^FD(800) 814-3993^FS\n^FO28,742^A0N,24,24^FWN^FH^FDTRK#^FS\n^FO28,800^A0N,27,32^FWN^FH^FD## MASTER ## ^FS\n^FO136,712^A0N,27,36^FWN^FH^FD1 of 2^FS\n^FO32,91^AdN,0,0^FWN^FH^FDWappingers Falls NY 12590^FS\n^FO478,3^AdN,0,0^FWN^FH^FDSHIP DATE: 09APR24^FS\n^FO478,19^AdN,0,0^FWN^FH^FDACTWGT: 22.00 LB^FS\n^FO478,37^AdN,0,0^FWN^FH^FDCAD: 114810957/WSXI3600^FS\n^FO478,91^AdN,0,0^FWN^FH^FDBILL SENDER^FS\n^FO39,136^A0N,39,39^FWN^FH^FDHome Depot^FS\n^FO39,178^A0N,39,39^FWN^FH^FDHome Depot^FS\n^FO39,220^A0N,39,39^FWN^FH^FD11682 Forest Central Drive^FS\n^FO39,262^A0N,39,39^FWN^FH^FD.^FS\n^FO39,347^AdN,0,0^FWN^FH^FD(877) 722-7546^FS\n^FO39,304^A0N,43,40^FWN^FH^FDDallas TX 75243^FS\n^FO719,304^A0N,43,40^FWN^FH^FD(US)^FS\n^FO677,462^GB104,10,10^FS\n^FO677,472^GB10,112,10^FS\n^FO771,472^GB10,112,10^FS\n^FO677,584^GB104,10,10^FS\n^FO464,--^GB2,126,2^FS\n^FO687,480^A0N,128,137^FWN^FH^FDH^FS\n^FO654,402^A0N,43,58^FWN^FH^FDFedEx^FS\n^FO663,448^AbN,11,7^FWN^FH^FDHome Delivery^FS\n^FO791,493^A0N,13,18^FWB^FH^FDJ241024011001uv^FS\n^FO9,136^A0N,21,21^FWN^FH^FDTO^FS\n^FO21,412^BY2,2^B7N,10,5,14^FH^FWN^FH^FD[)>_1E01_1D0275243_1D840_1D804_1D273198627451_1DFDEG_1D0425198_1D100_1D_1D1/2_1D22.00LB_1DN_1D11682 Forest Central Drive_1DDallas_1DTX_1DHome Depot_1E06_1D10ZGH007_1D11ZHome Depot_1D12Z8777227546_1D14Z._1D20Z_1C_1D28Z00273198627451_1D31Z9622080430000425198400273198627451_1D9K80000347_1D_1E_04^FS\n^FO28,837^A0N,107,96^FWN^FH^FD^FS\n^FO12,681^GB777,2,2^FS\n^FO494,885^A0N,43,43^FWN^FH^FD^FS\n^FO788,28^AbN,11,7^FWB^FH^FD583J4/5D80/9AE3^FS\n^FO95,746^A0N,53,40^FWN^FH^FD2731 9862 7451^FS\n^FO409,695^A0N,51,38^FWN^FH^FB390,,,R,^FD                   ^FS\n^FO404,747^A0N,51,38^FWN^FH^FB400,,,R,^FD                   ^FS\n^FO413,799^A0N,40,40^FWN^FH^FB386,,,R,^FD                ^FS\n^FO495,841^A0N,44,44^FWN^FH^FB298,,,R,^FD     75243^FS\n^FO574,901^A0N,24,24^FWN^FH^FB120,,,R,^FD      ^FS\n^FO695,885^A0N,43,43^FWN^FH^FB100,,,R,^FD   ^FS\n^FO39,927^A0N,27,36^FWN^FH^FD9622 0804 3 (000 000 0000) 0 00 2731 9862 7451^FS\n^FO75,968^BY3,2^BCN,200,N,N,N,N^FWN^FD>;9622080430000425198400273198627451^FS\n^FO478,55^AdN,0,0^FWN^FH^FDDIMMED: 10 X 10 X 10 IN^FS\n^FO329,349^AbN,11,7^FWN^FH^FDREF: 80000347^FS\n^FO39,363^AbN,11,7^FWN^FH^FDINV: ^FS\n^FO39,377^AbN,11,7^FWN^FH^FDPO: PO08012022-1^FS\n^FO429,377^AbN,11,7^FWN^FH^FDDEPT: ^FS\n^PQ1\n^XZ\n"; // Provide the ZPL code to convert
            jQuery.ajax({
                url: "https://hvl-test.myxcarrier.com/Labels/273198627451.txt", // Replace with your server-side endpoint for conversion
                type: "GET",

                success: function (response) {
                    // Convert the response (PDF content) to a Blob
                    var blob = new Blob([response], { type: 'application/pdf' });

                    // Create a temporary anchor element to download the PDF
                    var element = document.createElement('a');
                    element.setAttribute('href', URL.createObjectURL(blob));
                    element.setAttribute('download', 'labelzoom.pdf');
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error("Error:", errorThrown);
                    MessageBox.error("Error converting ZPL to PDF: " + errorThrown);
                }
            });
            // var element = document.createElement('a');
            // element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(zpl));
            // element.setAttribute('download', 'labelzoom.pdf');
            // element.style.display = 'none';
            // document.body.appendChild(element);
            // element.click();
            // document.body.removeChild(element);
        },
        onButtonPress: function () {
            // Base64 encoded PDF content (replace 'b64' with your actual Base64 encoded PDF content)
            var base64String = "XlhBXkNGLDAsMCwwXlBSMTJeTUQzMF5QVzgwMF5QT0leQ0kxM15MSDAsMjAKXkZPMTIsMTI0XkdCNzU1LDIsMl5GUwpeRk8xMiwzOTBeR0I3NzcsMiwyXkZTCl5GTzMyLDNeQWROLDAsMF5GV05eRkheRkRGUk9NOl5GUwpeRk8zMiwxOV5BZE4sMCwwXkZXTl5GSF5GRFNoaXBwZXJeRlMKXkZPMzIsMzdeQWROLDAsMF5GV05eRkheRkRIdWRzb24gVmFsbGV5IExpZ2h0aW5nLCBJbmNeRlMKXkZPMzIsNTVeQWROLDAsMF5GV05eRkheRkQxNTEgQWlycG9ydCBEcml2ZV5GUwpeRk8zMiw3M15BZE4sMCwwXkZXTl5GSF5GRF5GUwpeRk8zMiwxMDleQWROLDAsMF5GV05eRkheRkRVUyBeRlMKXkZPMjI0LDNeQWROLDAsMF5GV05eRkheRkQoODAwKSA4MTQtMzk5M15GUwpeRk8yOCw3NDJeQTBOLDI0LDI0XkZXTl5GSF5GRFRSSyNeRlMKXkZPMjgsODAwXkEwTiwyNywzMl5GV05eRkheRkQjIyBNQVNURVIgIyMgXkZTCl5GTzEzNiw3MTJeQTBOLDI3LDM2XkZXTl5GSF5GRDEgb2YgMl5GUwpeRk8zMiw5MV5BZE4sMCwwXkZXTl5GSF5GRFdhcHBpbmdlcnMgRmFsbHMgTlkgMTI1OTBeRlMKXkZPNDc4LDNeQWROLDAsMF5GV05eRkheRkRTSElQIERBVEU6IDA5QVBSMjReRlMKXkZPNDc4LDE5XkFkTiwwLDBeRldOXkZIXkZEQUNUV0dUOiAyMi4wMCBMQl5GUwpeRk80NzgsMzdeQWROLDAsMF5GV05eRkheRkRDQUQ6IDExNDgxMDk1Ny9XU1hJMzYwMF5GUwpeRk80NzgsOTFeQWROLDAsMF5GV05eRkheRkRCSUxMIFNFTkRFUl5GUwpeRk8zOSwxMzZeQTBOLDM5LDM5XkZXTl5GSF5GREhvbWUgRGVwb3ReRlMKXkZPMzksMTc4XkEwTiwzOSwzOV5GV05eRkheRkRIb21lIERlcG90XkZTCl5GTzM5LDIyMF5BME4sMzksMzleRldOXkZIXkZEMTE2ODIgRm9yZXN0IENlbnRyYWwgRHJpdmVeRlMKXkZPMzksMjYyXkEwTiwzOSwzOV5GV05eRkheRkQuXkZTCl5GTzM5LDM0N15BZE4sMCwwXkZXTl5GSF5GRCg4NzcpIDcyMi03NTQ2XkZTCl5GTzM5LDMwNF5BME4sNDMsNDBeRldOXkZIXkZERGFsbGFzIFRYIDc1MjQzXkZTCl5GTzcxOSwzMDReQTBOLDQzLDQwXkZXTl5GSF5GRChVUyleRlMKXkZPNjc3LDQ2Ml5HQjEwNCwxMCwxMF5GUwpeRk82NzcsNDcyXkdCMTAsMTEyLDEwXkZTCl5GTzc3MSw0NzJeR0IxMCwxMTIsMTBeRlMKXkZPNjc3LDU4NF5HQjEwNCwxMCwxMF5GUwpeRk80NjQsLS1eR0IyLDEyNiwyXkZTCl5GTzY4Nyw0ODBeQTBOLDEyOCwxMzdeRldOXkZIXkZESF5GUwpeRk82NTQsNDAyXkEwTiw0Myw1OF5GV05eRkheRkRGZWRFeF5GUwpeRk82NjMsNDQ4XkFiTiwxMSw3XkZXTl5GSF5GREhvbWUgRGVsaXZlcnleRlMKXkZPNzkxLDQ5M15BME4sMTMsMTheRldCXkZIXkZESjI0MTAyNDAxMTAwMXV2XkZTCl5GTzksMTM2XkEwTiwyMSwyMV5GV05eRkheRkRUT15GUwpeRk8yMSw0MTJeQlkyLDJeQjdOLDEwLDUsMTReRkheRldOXkZIXkZEWyk+XzFFMDFfMUQwMjc1MjQzXzFEODQwXzFEODA0XzFEMjczMTk4NjI3NDUxXzFERkRFR18xRDA0MjUxOThfMUQxMDBfMURfMUQxLzJfMUQyMi4wMExCXzFETl8xRDExNjgyIEZvcmVzdCBDZW50cmFsIERyaXZlXzFERGFsbGFzXzFEVFhfMURIb21lIERlcG90XzFFMDZfMUQxMFpHSDAwN18xRDExWkhvbWUgRGVwb3RfMUQxMlo4Nzc3MjI3NTQ2XzFEMTRaLl8xRDIwWl8xQ18xRDI4WjAwMjczMTk4NjI3NDUxXzFEMzFaOTYyMjA4MDQzMDAwMDQyNTE5ODQwMDI3MzE5ODYyNzQ1MV8xRDlLODAwMDAzNDdfMURfMUVfMDReRlMKXkZPMjgsODM3XkEwTiwxMDcsOTZeRldOXkZIXkZEXkZTCl5GTzEyLDY4MV5HQjc3NywyLDJeRlMKXkZPNDk0LDg4NV5BME4sNDMsNDNeRldOXkZIXkZEXkZTCl5GTzc4OCwyOF5BYk4sMTEsN15GV0JeRkheRkQ1ODNKNC81RDgwLzlBRTNeRlMKXkZPOTUsNzQ2XkEwTiw1Myw0MF5GV05eRkheRkQyNzMxIDk4NjIgNzQ1MV5GUwpeRk80MDksNjk1XkEwTiw1MSwzOF5GV05eRkheRkIzOTAsLCxSLF5GRCAgICAgICAgICAgICAgICAgICBeRlMKXkZPNDA0LDc0N15BME4sNTEsMzheRldOXkZIXkZCNDAwLCwsUixeRkQgICAgICAgICAgICAgICAgICAgXkZTCl5GTzQxMyw3OTleQTBOLDQwLDQwXkZXTl5GSF5GQjM4NiwsLFIsXkZEICAgICAgICAgICAgICAgIF5GUwpeRk80OTUsODQxXkEwTiw0NCw0NF5GV05eRkheRkIyOTgsLCxSLF5GRCAgICAgNzUyNDNeRlMKXkZPNTc0LDkwMV5BME4sMjQsMjReRldOXkZIXkZCMTIwLCwsUixeRkQgICAgICBeRlMKXkZPNjk1LDg4NV5BME4sNDMsNDNeRldOXkZIXkZCMTAwLCwsUixeRkQgICBeRlMKXkZPMzksOTI3XkEwTiwyNywzNl5GV05eRkheRkQ5NjIyIDA4MDQgMyAoMDAwIDAwMCAwMDAwKSAwIDAwIDI3MzEgOTg2MiA3NDUxXkZTCl5GTzc1LDk2OF5CWTMsMl5CQ04sMjAwLE4sTixOLE5eRldOXkZEPjs5NjIyMDgwNDMwMDAwNDI1MTk4NDAwMjczMTk4NjI3NDUxXkZTCl5GTzQ3OCw1NV5BZE4sMCwwXkZXTl5GSF5GRERJTU1FRDogMTAgWCAxMCBYIDEwIElOXkZTCl5GTzMyOSwzNDleQWJOLDExLDdeRldOXkZIXkZEUkVGOiA4MDAwMDM0N15GUwpeRk8zOSwzNjNeQWJOLDExLDdeRldOXkZIXkZESU5WOiBeRlMKXkZPMzksMzc3XkFiTiwxMSw3XkZXTl5GSF5GRFBPOiBQTzA4MDEyMDIyLTFeRlMKXkZPNDI5LDM3N15BYk4sMTEsN15GV05eRkheRkRERVBUOiBeRlMKXlBRMQpeWFoK";

            // Decode the Base64 string
            // var newWindow = window.open('data:application/pdf;base64,' + b64);
            var decodedString = atob(base64String);

            // Convert the decoded string to a Blob
            var blob = new Blob([base64String], { type: "application/pdf" }); // Set MIME type to "application/pdf" for PDF
            var url = URL.createObjectURL(blob);

            // Open the PDF in a new window
            window.open(url);
            // Read the Blob as a Data URL
            var reader = new FileReader();
            reader.readAsDataURL(blob);

            // Callback function triggered once the reading operation is complete
            reader.onloadend = function () {
                // Convert the Data URL to base64
                var convertedBase64 = reader.result.split(",")[1]; // Extracting only the base64 string from the Data URL

                // Now, 'convertedBase64' contains the base64 string with the PDF MIME type
                console.log(convertedBase64);
            };

        },
        onPress: function () {

            $.ajax({
                url: "https://hvl-test.myxcarrier.com/Labels/273198627451.txt",
                async: false,
                success: function (data) {
                    var zplCode = data;

                    var base64Zpl = btoa(zplCode);
                    var blob = new Blob([zplCode], { type: "application/pdf" });
                    var url = URL.createObjectURL(blob);
                    sap.m.URLHelper.redirect(url, true);
                    // var pdfViewer = new sap.m.PDFViewer({
                    //     source: url,
                    //     isTrustedSource: true
                    // });
                    // pdfViewer.placeAt("content");
                }
            });
        },
        onButtonPressq: function () {
            // Assume you have a button in your UI triggering this function
            var zplCode = "^XA^CF,0,0,0^PR12^MD30^PW800^POI^CI13^LH0,20\n^FO12,124^GB755,2,2^FS\n^FO12,390^GB777,2,2^FS\n^FO32,3^AdN,0,0^FWN^FH^FDFROM:^FS\n^FO32,19^AdN,0,0^FWN^FH^FDShipper^FS\n^FO32,37^AdN,0,0^FWN^FH^FDHudson Valley Lighting, Inc^FS\n^FO32,55^AdN,0,0^FWN^FH^FD151 Airport Drive^FS\n^FO32,73^AdN,0,0^FWN^FH^FD^FS\n^FO32,109^AdN,0,0^FWN^FH^FDUS ^FS\n^FO224,3^AdN,0,0^FWN^FH^FD(800) 814-3993^FS\n^FO28,742^A0N,24,24^FWN^FH^FDTRK#^FS\n^FO28,800^A0N,27,32^FWN^FH^FD## MASTER ## ^FS\n^FO136,712^A0N,27,36^FWN^FH^FD1 of 2^FS\n^FO32,91^AdN,0,0^FWN^FH^FDWappingers Falls NY 12590^FS\n^FO478,3^AdN,0,0^FWN^FH^FDSHIP DATE: 09APR24^FS\n^FO478,19^AdN,0,0^FWN^FH^FDACTWGT: 22.00 LB^FS\n^FO478,37^AdN,0,0^FWN^FH^FDCAD: 114810957/WSXI3600^FS\n^FO478,91^AdN,0,0^FWN^FH^FDBILL SENDER^FS\n^FO39,136^A0N,39,39^FWN^FH^FDHome Depot^FS\n^FO39,178^A0N,39,39^FWN^FH^FDHome Depot^FS\n^FO39,220^A0N,39,39^FWN^FH^FD11682 Forest Central Drive^FS\n^FO39,262^A0N,39,39^FWN^FH^FD.^FS\n^FO39,347^AdN,0,0^FWN^FH^FD(877) 722-7546^FS\n^FO39,304^A0N,43,40^FWN^FH^FDDallas TX 75243^FS\n^FO719,304^A0N,43,40^FWN^FH^FD(US)^FS\n^FO677,462^GB104,10,10^FS\n^FO677,472^GB10,112,10^FS\n^FO771,472^GB10,112,10^FS\n^FO677,584^GB104,10,10^FS\n^FO464,--^GB2,126,2^FS\n^FO687,480^A0N,128,137^FWN^FH^FDH^FS\n^FO654,402^A0N,43,58^FWN^FH^FDFedEx^FS\n^FO663,448^AbN,11,7^FWN^FH^FDHome Delivery^FS\n^FO791,493^A0N,13,18^FWB^FH^FDJ241024011001uv^FS\n^FO9,136^A0N,21,21^FWN^FH^FDTO^FS\n^FO21,412^BY2,2^B7N,10,5,14^FH^FWN^FH^FD[)>_1E01_1D0275243_1D840_1D804_1D273198627451_1DFDEG_1D0425198_1D100_1D_1D1/2_1D22.00LB_1DN_1D11682 Forest Central Drive_1DDallas_1DTX_1DHome Depot_1E06_1D10ZGH007_1D11ZHome Depot_1D12Z8777227546_1D14Z._1D20Z_1C_1D28Z00273198627451_1D31Z9622080430000425198400273198627451_1D9K80000347_1D_1E_04^FS\n^FO28,837^A0N,107,96^FWN^FH^FD^FS\n^FO12,681^GB777,2,2^FS\n^FO494,885^A0N,43,43^FWN^FH^FD^FS\n^FO788,28^AbN,11,7^FWB^FH^FD583J4/5D80/9AE3^FS\n^FO95,746^A0N,53,40^FWN^FH^FD2731 9862 7451^FS\n^FO409,695^A0N,51,38^FWN^FH^FB390,,,R,^FD                   ^FS\n^FO404,747^A0N,51,38^FWN^FH^FB400,,,R,^FD                   ^FS\n^FO413,799^A0N,40,40^FWN^FH^FB386,,,R,^FD                ^FS\n^FO495,841^A0N,44,44^FWN^FH^FB298,,,R,^FD     75243^FS\n^FO574,901^A0N,24,24^FWN^FH^FB120,,,R,^FD      ^FS\n^FO695,885^A0N,43,43^FWN^FH^FB100,,,R,^FD   ^FS\n^FO39,927^A0N,27,36^FWN^FH^FD9622 0804 3 (000 000 0000) 0 00 2731 9862 7451^FS\n^FO75,968^BY3,2^BCN,200,N,N,N,N^FWN^FD>;9622080430000425198400273198627451^FS\n^FO478,55^AdN,0,0^FWN^FH^FDDIMMED: 10 X 10 X 10 IN^FS\n^FO329,349^AbN,11,7^FWN^FH^FDREF: 80000347^FS\n^FO39,363^AbN,11,7^FWN^FH^FDINV: ^FS\n^FO39,377^AbN,11,7^FWN^FH^FDPO: PO08012022-1^FS\n^FO429,377^AbN,11,7^FWN^FH^FDDEPT: ^FS\n^PQ1\n^XZ\n"; // Provide the ZPL code to convert

            const fs = require('fs');
            const { ZplToPdfConverter } = require('node-zpl');

            // Assuming you have your ZPL code stored in a variable named zplCode

            // Create an instance of ZplToPdfConverter
            const converter = new ZplToPdfConverter();

            // Convert ZPL to PDF
            converter.convert(zplCode)
                .then(pdfData => {
                    // Save PDF to a file
                    fs.writeFileSync('output.pdf', pdfData);
                    console.log('PDF saved successfully.');
                })
                .catch(error => {
                    console.error('Error converting ZPL to PDF:', error);
                });
        },

        convertZplToPdf: function (zplCode) {
            var that = this;

            // Load html2canvas dynamically
            sap.ui.require(["path_to_html2canvas/html2canvas.min"], function (html2canvas) {
                // Create a div element to hold the ZPL content
                var div = document.createElement('div');
                div.innerHTML = zplCode;

                // Render the ZPL content onto a virtual canvas
                html2canvas(div).then(function (canvas) {
                    // Convert the canvas to a PDF
                    var pdf = new jsPDF();
                    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
                    pdf.save('output.pdf');
                }).catch(function (error) {
                    console.error("Error rendering ZPL to canvas:", error);
                    MessageBox.error("Error rendering ZPL to canvas: " + error.message);
                });
            });
        },
        // onButtonPress: function() {
        //     // Assume you have a button in your UI triggering this function
        //     var zplCode = "^XA^CF,0,0,0^PR12^MD30^PW800^POI^CI13^LH0,20\n^FO12,124^GB755,2,2^FS\n^FO12,390^GB777,2,2^FS\n^FO32,3^AdN,0,0^FWN^FH^FDFROM:^FS\n^FO32,19^AdN,0,0^FWN^FH^FDShipper^FS\n^FO32,37^AdN,0,0^FWN^FH^FDHudson Valley Lighting, Inc^FS\n^FO32,55^AdN,0,0^FWN^FH^FD151 Airport Drive^FS\n^FO32,73^AdN,0,0^FWN^FH^FD^FS\n^FO32,109^AdN,0,0^FWN^FH^FDUS ^FS\n^FO224,3^AdN,0,0^FWN^FH^FD(800) 814-3993^FS\n^FO28,742^A0N,24,24^FWN^FH^FDTRK#^FS\n^FO28,800^A0N,27,32^FWN^FH^FD## MASTER ## ^FS\n^FO136,712^A0N,27,36^FWN^FH^FD1 of 2^FS\n^FO32,91^AdN,0,0^FWN^FH^FDWappingers Falls NY 12590^FS\n^FO478,3^AdN,0,0^FWN^FH^FDSHIP DATE: 09APR24^FS\n^FO478,19^AdN,0,0^FWN^FH^FDACTWGT: 22.00 LB^FS\n^FO478,37^AdN,0,0^FWN^FH^FDCAD: 114810957/WSXI3600^FS\n^FO478,91^AdN,0,0^FWN^FH^FDBILL SENDER^FS\n^FO39,136^A0N,39,39^FWN^FH^FDHome Depot^FS\n^FO39,178^A0N,39,39^FWN^FH^FDHome Depot^FS\n^FO39,220^A0N,39,39^FWN^FH^FD11682 Forest Central Drive^FS\n^FO39,262^A0N,39,39^FWN^FH^FD.^FS\n^FO39,347^AdN,0,0^FWN^FH^FD(877) 722-7546^FS\n^FO39,304^A0N,43,40^FWN^FH^FDDallas TX 75243^FS\n^FO719,304^A0N,43,40^FWN^FH^FD(US)^FS\n^FO677,462^GB104,10,10^FS\n^FO677,472^GB10,112,10^FS\n^FO771,472^GB10,112,10^FS\n^FO677,584^GB104,10,10^FS\n^FO464,--^GB2,126,2^FS\n^FO687,480^A0N,128,137^FWN^FH^FDH^FS\n^FO654,402^A0N,43,58^FWN^FH^FDFedEx^FS\n^FO663,448^AbN,11,7^FWN^FH^FDHome Delivery^FS\n^FO791,493^A0N,13,18^FWB^FH^FDJ241024011001uv^FS\n^FO9,136^A0N,21,21^FWN^FH^FDTO^FS\n^FO21,412^BY2,2^B7N,10,5,14^FH^FWN^FH^FD[)>_1E01_1D0275243_1D840_1D804_1D273198627451_1DFDEG_1D0425198_1D100_1D_1D1/2_1D22.00LB_1DN_1D11682 Forest Central Drive_1DDallas_1DTX_1DHome Depot_1E06_1D10ZGH007_1D11ZHome Depot_1D12Z8777227546_1D14Z._1D20Z_1C_1D28Z00273198627451_1D31Z9622080430000425198400273198627451_1D9K80000347_1D_1E_04^FS\n^FO28,837^A0N,107,96^FWN^FH^FD^FS\n^FO12,681^GB777,2,2^FS\n^FO494,885^A0N,43,43^FWN^FH^FD^FS\n^FO788,28^AbN,11,7^FWB^FH^FD583J4/5D80/9AE3^FS\n^FO95,746^A0N,53,40^FWN^FH^FD2731 9862 7451^FS\n^FO409,695^A0N,51,38^FWN^FH^FB390,,,R,^FD                   ^FS\n^FO404,747^A0N,51,38^FWN^FH^FB400,,,R,^FD                   ^FS\n^FO413,799^A0N,40,40^FWN^FH^FB386,,,R,^FD                ^FS\n^FO495,841^A0N,44,44^FWN^FH^FB298,,,R,^FD     75243^FS\n^FO574,901^A0N,24,24^FWN^FH^FB120,,,R,^FD      ^FS\n^FO695,885^A0N,43,43^FWN^FH^FB100,,,R,^FD   ^FS\n^FO39,927^A0N,27,36^FWN^FH^FD9622 0804 3 (000 000 0000) 0 00 2731 9862 7451^FS\n^FO75,968^BY3,2^BCN,200,N,N,N,N^FWN^FD>;9622080430000425198400273198627451^FS\n^FO478,55^AdN,0,0^FWN^FH^FDDIMMED: 10 X 10 X 10 IN^FS\n^FO329,349^AbN,11,7^FWN^FH^FDREF: 80000347^FS\n^FO39,363^AbN,11,7^FWN^FH^FDINV: ^FS\n^FO39,377^AbN,11,7^FWN^FH^FDPO: PO08012022-1^FS\n^FO429,377^AbN,11,7^FWN^FH^FDDEPT: ^FS\n^PQ1\n^XZ\n"; // Provide the ZPL code to convert

        //     this.convertZplToPdf(zplCode).then(function(pdfBase64) {
        //         // Do something with the PDF base64 string, like downloading or displaying
        //         console.log("PDF Base64:", pdfBase64);
        //     }).catch(function(error) {
        //         // Handle errors
        //         console.error("Error:", error);
        //     });
        // },

        // convertZplToPdf: async function(zplCode) {
        //     try {
        //         // Assuming zplToPdfConverter is a library or service for ZPL to PDF conversion
        //         const pdfBase64 = await zplToPdfConverter.convertZplToPdf(zplCode);
        //         return pdfBase64;
        //     } catch (error) {
        //         console.error("Error converting ZPL to PDF:", error);
        //         throw error;
        //     }
        // },
        onPress2: function () {
            var that = this;
            var zplCode;
            $.ajax({
                url: "https://hvl-test.myxcarrier.com/Labels/273198627451.txt",
                async: false,
                success: function (data) {
                    zplCode = data;


                    // Convert the ZPL code to base64
                    var base64Zpl = btoa(zplCode);
                    // var uint8Array = new Uint8Array(Array.from(base64Zpl, char => char.charCodeAt(0)));


                    //     var image = new sap.m.Image("captcha" + 0, {
                    // 		src: "data:application/pdf;base64," + base64Zpl
                    // 	});
                    // 	image.setWidth("100%");

                    //     var divToPrint = "data:application/pdf;base64," + base64Zpl;
                    // 				//   var base644 = document.getElementById("captcha0").src;
                    // var newWin = window.open("", "Print-Window");
                    // newWin.document.open();
                    // newWin.document.write('<html><body onload="window.print()"><div><img src="' + divToPrint +
                    //     '"/></div></body></html>');
                    // newWin.document.close();
                    // setTimeout(function () {
                    //     newWin.close();
                    // }, 1000);
                    var link = document.createElement('a');
                    link.innerHTML = 'Download PDF file';
                    link.download = 'file.pdf';
                    link.href = 'data:application/pdf;base64,' + base64Zpl;

                    // Simulate a click on the link to trigger the download
                    link.click();

                    var blob = new Blob([btoa(zplCode)], { type: "application/pdf" });

                    // Create a URL for the Blob object
                    var url = window.URL.createObjectURL(blob);
                    var downloadLink = document.createElement("a");
                    downloadLink.href = url;
                    downloadLink.download = "sample.pdf";
                    downloadLink.click();
                    //                         // Set the base64 encoded ZPL code as source for PDFViewer
                    //                         var pdfViewer = that.getView().byId("pdfViewer"); // Assuming the ID of the PDFViewer control is "pdfViewer"
                    //                         pdfViewer.setSource("data:application/pdf;base64," + base64Zpl);


                    // var base64Zpl = btoa(zplCode);

                    // var bytes = new TextEncoder().encode(zplCode);

                    // // Convert the byte array to base64
                    // var base64Zpl = btoa(String.fromCharCode.apply(null, bytes));

                    // // Create a Blob from the base64 encoded string
                    // var blob = new Blob([base64Zpl], { type: "application/pdf" });

                    // // Create a URL for the Blob
                    // var url = URL.createObjectURL(blob);

                    // // Set the URL as the source property of the PDFViewer
                    // var pdfViewer = new sap.m.PDFViewer({
                    //     source: url,
                    //     isTrustedSource: true
                    // });

                    // // Add the PDFViewer to the DOM or to a UI container
                    // pdfViewer.placeAt("content");

                }
            });
        },
        onExtractText: function () {

            // var zplCode = "^XA^CF,0,0,0^PR12^MD30^PW800^POI^CI13^LH0,20\n^FO12,124^GB755,2,2^FS\n^FO12,390^GB777,2,2^FS\n^FO32,3^AdN,0,0^FWN^FH^FDFROM:^FS\n^FO12,681^GB777,2,2^FS\n^FO494,885^A0N,43,43^FWN^FH^FD^FS\n^FO788,28^AbN,11,7^FWB^FH^FD583J4/5D80/9AE3^FS\n^FO95,746^A0N,53,40^FWN^FH^FD2731 9862 7451^FS\n^FO409,695^A0N,51,38^FWN^FH^FB390,,,R,^FD                   ^FS\n^FO404,747^A0N,51,38^FWN^FH^FB400,,,R,^FD                   ^FS\n^FO413,799^A0N,40,40^FWN^FH^FB386,,,R,^FD                ^FS\n^FO495,841^A0N,44,44^FWN^FH^FB298,,,R,^FD     75243^FS\n^FO574,901^A0N,24,24^FWN^FH^FB120,,,R,^FD      ^FS\n^FO695,885^A0N,43,43^FWN^FH^FB100,,,R,^FD   ^FS\n^FO39,927^A0N,27,36^FWN^FH^FD9622 0804 3 (000 000 0000) 0 00 2731 9862 7451^FS\n^FO75,968^BY3,2^BCN,200,N,N,N,N^FWN^FD>;9622080430000425198400273198627451^FS\n^FO478,55^AdN,0,0^FWN^FH^FDDIMMED: 10 X 10 X 10 IN^FS\n^FO329,349^AbN,11,7^FWN^FH^FDREF: 80000347^FS\n^FO39,363^AbN,11,7^FWN^FH^FDINV: ^FS\n^FO39,377^AbN,11,7^FWN^FH^FDPO: PO08012022-1^FS\n^FO429,377^AbN,11,7^FWN^FH^FDDEPT: ^FS\n^PQ1\n^XZ";
            // var base64Zpl = btoa(zplCode);

            // var bytes = new TextEncoder().encode(zplCode);

            // // Convert the byte array to base64
            // var base64Zpl = btoa(String.fromCharCode.apply(null, bytes));

            // // Create a Blob from the base64 encoded string
            // var blob = new Blob([base64Zpl], { type: "application/pdf" });

            // // Create a URL for the Blob
            // var url = URL.createObjectURL(blob);

            // // Set the URL as the source property of the PDFViewer
            // var pdfViewer = new sap.m.PDFViewer({
            //     source: url
            // });

            // // Add the PDFViewer to the DOM or to a UI container
            // pdfViewer.placeAt("content");
            // var extractedText = this.extractTextFromZPL(zplCode);
            // this.createPDF(extractedText);
        },

        // extractTextFromZPL: function(zplCode) {
        //     // Write your logic to extract text from ZPL code
        //     // This might involve regular expressions or specific parsing logic
        //     // For simplicity, let's assume we just remove ZPL commands and return the remaining text
        //     var text = zplCode.replace(/\^.*?\n/g, "");

        //     return text;
        // },

        // createPDF: function(text) {
        //     console.log(text);
        //     if (text.trim().length === 0) {
        //         sap.m.MessageToast.show("Text is empty. Cannot generate PDF.");
        //         return;
        //     }
        //     // Create a new instance of jsPDF
        //     var blob = new Blob([text], { type: "application/pdf" });

        //     // Create a URL for the Blob
        //     var url = URL.createObjectURL(blob);

        //     // Open the PDF in a new tab using the PDFViewer control
        //     sap.m.URLHelper.redirect(url, true);
        // },
        // Example base64-encoded PDF data
        // var base64Data = "JVBERi0xLjMKJf////8KMSAwIG9iago8PAovVGl0bGUgKP7/DQovQ3JlYXRvciAo/v8AWAALAAA...";
        // var base64Data = "J15YQV5DRiwwLDAsMF5QUjEyXk1EMzBeUFc4MDBeUE9JXkNJMTNeTEgwLDIwXG5eRk8xMiwxMjReR0I3NTUsMiwyXkZTXG5eRk8xMiwzOTBeR0I3NzcsMiwyXkZTXG5eRk8zMiwzXkFkTiwwLDBeRldOXkZIXkZERlJPTTpeRlNcbl5GTzMyLDE5XkFkTiwwLDBeRldOXkZIXkZEU2hpcHBlcl5GU1xuXkZPMzIsMzdeQWROLDAsMF5GV05eRkheRkRIdWRzb24gVmFsbGV5IExpZ2h0aW5nLCBJbmNeRlNcbl5GTzMyLDU1XkFkTiwwLDBeRldOXkZIXkZEMTUxIEFpcnBvcnQgRHJpdmVeRlNcbl5GTzMyLDczXkFkTiwwLDBeRldOXkZIXkZEXkZTXG5eRk8zMiwxMDleQWROLDAsMF5GV05eRkheRkRVUyBeRlNcbl5GTzIyNCwzXkFkTiwwLDBeRldOXkZIXkZEKDgwMCkgODE0LTM5OTNeRlNcbl5GTzI4LDc0Ml5BME4sMjQsMjReRldOXkZIXkZEVFJLI15GU1xuXkZPMjgsODAwXkEwTiwyNywzMl5GV05eRkheRkQjIyBNQVNURVIgIyMgXkZTXG5eRk8xMzYsNzEyXkEwTiwyNywzNl5GV05eRkheRkQxIG9mIDJeRlNcbl5GTzMyLDkxXkFkTiwwLDBeRldOXkZIXkZEV2FwcGluZ2VycyBGYWxscyBOWSAxMjU5MF5GU1xuXkZPNDc4LDNeQWROLDAsMF5GV05eRkheRkRTSElQIERBVEU6IDA5QVBSMjReRlNcbl5GTzQ3OCwxOV5BZE4sMCwwXkZXTl5GSF5GREFDVFdHVDogMjIuMDAgTEJeRlNcbl5GTzQ3OCwzN15BZE4sMCwwXkZXTl5GSF5GRENBRDogMTE0ODEwOTU3L1dTWEkzNjAwXkZTXG5eRk80NzgsOTFeQWROLDAsMF5GV05eRkheRkRCSUxMIFNFTkRFUl5GU1xuXkZPMzksMTM2XkEwTiwzOSwzOV5GV05eRkheRkRIb21lIERlcG90XkZTXG5eRk8zOSwxNzheQTBOLDM5LDM5XkZXTl5GSF5GREhvbWUgRGVwb3ReRlNcbl5GTzM5LDIyMF5BME4sMzksMzleRldOXkZIXkZEMTE2ODIgRm9yZXN0IENlbnRyYWwgRHJpdmVeRlNcbl5GTzM5LDI2Ml5BME4sMzksMzleRldOXkZIXkZELl5GU1xuXkZPMzksMzQ3XkFkTiwwLDBeRldOXkZIXkZEKDg3NykgNzIyLTc1NDZeRlNcbl5GTzM5LDMwNF5BME4sNDMsNDBeRldOXkZIXkZERGFsbGFzIFRYIDc1MjQzXkZTXG5eRk83MTksMzA0XkEwTiw0Myw0MF5GV05eRkheRkQoVVMpXkZTXG5eRk82NzcsNDYyXkdCMTA0LDEwLDEwXkZTXG5eRk82NzcsNDcyXkdCMTAsMTEyLDEwXkZTXG5eRk83NzEsNDcyXkdCMTAsMTEyLDEwXkZTXG5eRk82NzcsNTg0XkdCMTA0LDEwLDEwXkZTXG5eRk80NjQsLS1eR0IyLDEyNiwyXkZTXG5eRk82ODcsNDgwXkEwTiwxMjgsMTM3XkZXTl5GSF5GREheRlNcbl5GTzY1NCw0MDJeQTBOLDQzLDU4XkZXTl5GSF5GREZlZEV4XkZTXG5eRk82NjMsNDQ4XkFiTiwxMSw3XkZXTl5GSF5GREhvbWUgRGVsaXZlcnleRlNcbl5GTzc5MSw0OTNeQTBOLDEzLDE4XkZXQl5GSF5GREoyNDEwMjQwMTEwMDF1dl5GU1xuXkZPOSwxMzZeQTBOLDIxLDIxXkZXTl5GSF5GRFRPXkZTXG5eRk8yMSw0MTJeQlkyLDJeQjdOLDEwLDUsMTReRkheRldOXkZIXkZEWyk+XzFFMDFfMUQwMjc1MjQzXzFEODQwXzFEODA0XzFEMjczMTk4NjI3NDUxXzFERkRFR18xRDA0MjUxOThfMUQxMDBfMURfMUQxLzJfMUQyMi4wMExCXzFETl8xRDExNjgyIEZvcmVzdCBDZW50cmFsIERyaXZlXzFERGFsbGFzXzFEVFhfMURIb21lIERlcG90XzFFMDZfMUQxMFpHSDAwN18xRDExWkhvbWUgRGVwb3RfMUQxMlo4Nzc3MjI3NTQ2XzFEMTRaLl8xRDIwWl8xQ18xRDI4WjAwMjczMTk4NjI3NDUxXzFEMzFaOTYyMjA4MDQzMDAwMDQyNTE5ODQwMDI3MzE5ODYyNzQ1MV8xRDlLODAwMDAzNDdfMURfMUVfMDReRlNcbl5GTzI4LDgzN15BME4sMTA3LDk2XkZXTl5GSF5GRF5GU1xuXkZPMTIsNjgxXkdCNzc3LDIsMl5GU1xuXkZPNDk0LDg4NV5BME4sNDMsNDNeRldOXkZIXkZEXkZTXG5eRk83ODgsMjheQWJOLDExLDdeRldCXkZIXkZENTgzSjQvNUQ4MC85QUUzXkZTXG5eRk85NSw3NDZeQTBOLDUzLDQwXkZXTl5GSF5GRDI3MzEgOTg2MiA3NDUxXkZTXG5eRk80MDksNjk1XkEwTiw1MSwzOF5GV05eRkheRkIzOTAsLCxSLF5GRCAgICAgICAgICAgICAgICAgICBeRlNcbl5GTzQwNCw3NDdeQTBOLDUxLDM4XkZXTl5GSF5GQjQwMCwsLFIsXkZEICAgICAgICAgICAgICAgICAgIF5GU1xuXkZPNDEzLDc5OV5BME4sNDAsNDBeRldOXkZIXkZCMzg2LCwsUixeRkQgICAgICAgICAgICAgICAgXkZTXG5eRk80OTUsODQxXkEwTiw0NCw0NF5GV05eRkheRkIyOTgsLCxSLF5GRCAgICAgNzUyNDNeRlNcbl5GTzU3NCw5MDFeQTBOLDI0LDI0XkZXTl5GSF5GQjEyMCwsLFIsXkZEICAgICAgXkZTXG5eRk82OTUsODg1XkEwTiw0Myw0M15GV05eRkheRkIxMDAsLCxSLF5GRCAgIF5GU1xuXkZPMzksOTI3XkEwTiwyNywzNl5GV05eRkheRkQ5NjIyIDA4MDQgMyAoMDAwIDAwMCAwMDAwKSAwIDAwIDI3MzEgOTg2MiA3NDUxXkZTXG5eRk83NSw5NjheQlkzLDJeQkNOLDIwMCxOLE4sTixOXkZXTl5GRD47OTYyMjA4MDQzMDAwMDQyNTE5ODQwMDI3MzE5ODYyNzQ1MV5GU1xuXkZPNDc4LDU1XkFkTiwwLDBeRldOXkZIXkZERElNTUVEOiAxMCBYIDEwIFggMTAgSU5eRlNcbl5GTzMyOSwzNDleQWJOLDExLDdeRldOXkZIXkZEUkVGOiA4MDAwMDM0N15GU1xuXkZPMzksMzYzXkFiTiwxMSw3XkZXTl5GSF5GRElOVjogXkZTXG5eRk8zOSwzNzdeQWJOLDExLDdeRldOXkZIXkZEUE86IFBPMDgwMTIwMjItMV5GU1xuXkZPNDI5LDM3N15BYk4sMTEsN15GV05eRkheRkRERVBUOiBeRlNcbl5QUTFcbl5YWlxuJw==";

        // // Create a Blob from the base64 string
        // var blob = b64toBlob(base64Data, 'application/pdf');

        // // Create a URL for the Blob
        // var pdfUrl = URL.createObjectURL(blob);

        // // Whitelist blob URL to enable display in SAPUI5 controls
        // jQuery.sap.addUrlWhitelist("blob");

        // // Create a PDF viewer instance
        // var pdfViewer = new sap.m.PDFViewer({
        //     source: pdfUrl,
        //     isTrustedSource: true
        // });

        // // Set the PDF source
        // // pdfViewer.setSource(pdfUrl);

        // // Set the title
        // pdfViewer.setTitle("PDF File");

        // // Open the PDF viewer
        // pdfViewer.open();

        // // Function to convert base64 to Blob
        // function b64toBlob(b64Data, contentType = '', sliceSize = 512) {
        //     var byteCharacters = atob(b64Data);
        //     var byteArrays = [];

        //     for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        //         var slice = byteCharacters.slice(offset, offset + sliceSize);

        //         var byteNumbers = new Array(slice.length);
        //         for (var i = 0; i < slice.length; i++) {
        //             byteNumbers[i] = slice.charCodeAt(i);
        //         }

        //         var byteArray = new Uint8Array(byteNumbers);
        //         byteArrays.push(byteArray);
        //     }

        //     var blob = new Blob(byteArrays, { type: contentType });
        //     return blob;
        // }

        // },

        onPress1: function (oEvent) {
            var url = "https://hvl-test.myxcarrier.com/Labels/273198627451.txt";
            var backendUrl = "https://hvl-test.myxcarrier.com/Labels/273198627451.pdf";

            // Make AJAX call to backend service
            // $.ajax({
            //     url: backendUrl,
            //     type: "POST",
            //     data: { url: url },
            //     success: function (response) {
            //         // Handle success - e.g., display or download the PDF
            //         // Here, 'response' contains the PDF file from the backend
            //         // For example, you can open the PDF in a new window/tab
            //         window.open(response.url);
            //     },
            //     error: function (xhr, status, error) {
            //         // Handle error
            //         console.log(xhr)
            //     }
            // });
            $.ajax({
                url: "https://hvl-test.myxcarrier.com/Labels/273198627451.txt",
                async: false,
                success: function (data) {
                    let content = data;
                    // var doc = new jsPDF();

                    // // Set the font size and text data
                    // doc.setFontSize(12);
                    // doc.text(data, 10, 10);

                    // // Save the PDF
                    // doc.save("output.pdf");
                    var docDefinition = {
                        content: [
                            { text: data }
                        ]
                    };

                    // Create the PDF
                    var pdfDoc = pdfmake.createPdf(docDefinition);

                    // Call download() when the PDF is ready
                    pdfDoc.getBlob(function (blob) {
                        saveAs(blob, "output.pdf");
                    });
                    let str = "J15YQV5DRiwwLDAsMF5QUjEyXk1EMzBeUFc4MDBeUE9JXkNJMTNeTEgwLDIwXG5eRk8xMiwxMjReR0I3NTUsMiwyXkZTXG5eRk8xMiwzOTBeR0I3NzcsMiwyXkZTXG5eRk8zMiwzXkFkTiwwLDBeRldOXkZIXkZERlJPTTpeRlNcbl5GTzMyLDE5XkFkTiwwLDBeRldOXkZIXkZEU2hpcHBlcl5GU1xuXkZPMzIsMzdeQWROLDAsMF5GV05eRkheRkRIdWRzb24gVmFsbGV5IExpZ2h0aW5nLCBJbmNeRlNcbl5GTzMyLDU1XkFkTiwwLDBeRldOXkZIXkZEMTUxIEFpcnBvcnQgRHJpdmVeRlNcbl5GTzMyLDczXkFkTiwwLDBeRldOXkZIXkZEXkZTXG5eRk8zMiwxMDleQWROLDAsMF5GV05eRkheRkRVUyBeRlNcbl5GTzIyNCwzXkFkTiwwLDBeRldOXkZIXkZEKDgwMCkgODE0LTM5OTNeRlNcbl5GTzI4LDc0Ml5BME4sMjQsMjReRldOXkZIXkZEVFJLI15GU1xuXkZPMjgsODAwXkEwTiwyNywzMl5GV05eRkheRkQjIyBNQVNURVIgIyMgXkZTXG5eRk8xMzYsNzEyXkEwTiwyNywzNl5GV05eRkheRkQxIG9mIDJeRlNcbl5GTzMyLDkxXkFkTiwwLDBeRldOXkZIXkZEV2FwcGluZ2VycyBGYWxscyBOWSAxMjU5MF5GU1xuXkZPNDc4LDNeQWROLDAsMF5GV05eRkheRkRTSElQIERBVEU6IDA5QVBSMjReRlNcbl5GTzQ3OCwxOV5BZE4sMCwwXkZXTl5GSF5GREFDVFdHVDogMjIuMDAgTEJeRlNcbl5GTzQ3OCwzN15BZE4sMCwwXkZXTl5GSF5GRENBRDogMTE0ODEwOTU3L1dTWEkzNjAwXkZTXG5eRk80NzgsOTFeQWROLDAsMF5GV05eRkheRkRCSUxMIFNFTkRFUl5GU1xuXkZPMzksMTM2XkEwTiwzOSwzOV5GV05eRkheRkRIb21lIERlcG90XkZTXG5eRk8zOSwxNzheQTBOLDM5LDM5XkZXTl5GSF5GREhvbWUgRGVwb3ReRlNcbl5GTzM5LDIyMF5BME4sMzksMzleRldOXkZIXkZEMTE2ODIgRm9yZXN0IENlbnRyYWwgRHJpdmVeRlNcbl5GTzM5LDI2Ml5BME4sMzksMzleRldOXkZIXkZELl5GU1xuXkZPMzksMzQ3XkFkTiwwLDBeRldOXkZIXkZEKDg3NykgNzIyLTc1NDZeRlNcbl5GTzM5LDMwNF5BME4sNDMsNDBeRldOXkZIXkZERGFsbGFzIFRYIDc1MjQzXkZTXG5eRk83MTksMzA0XkEwTiw0Myw0MF5GV05eRkheRkQoVVMpXkZTXG5eRk82NzcsNDYyXkdCMTA0LDEwLDEwXkZTXG5eRk82NzcsNDcyXkdCMTAsMTEyLDEwXkZTXG5eRk83NzEsNDcyXkdCMTAsMTEyLDEwXkZTXG5eRk82NzcsNTg0XkdCMTA0LDEwLDEwXkZTXG5eRk80NjQsLS1eR0IyLDEyNiwyXkZTXG5eRk82ODcsNDgwXkEwTiwxMjgsMTM3XkZXTl5GSF5GREheRlNcbl5GTzY1NCw0MDJeQTBOLDQzLDU4XkZXTl5GSF5GREZlZEV4XkZTXG5eRk82NjMsNDQ4XkFiTiwxMSw3XkZXTl5GSF5GREhvbWUgRGVsaXZlcnleRlNcbl5GTzc5MSw0OTNeQTBOLDEzLDE4XkZXQl5GSF5GREoyNDEwMjQwMTEwMDF1dl5GU1xuXkZPOSwxMzZeQTBOLDIxLDIxXkZXTl5GSF5GRFRPXkZTXG5eRk8yMSw0MTJeQlkyLDJeQjdOLDEwLDUsMTReRkheRldOXkZIXkZEWyk+XzFFMDFfMUQwMjc1MjQzXzFEODQwXzFEODA0XzFEMjczMTk4NjI3NDUxXzFERkRFR18xRDA0MjUxOThfMUQxMDBfMURfMUQxLzJfMUQyMi4wMExCXzFETl8xRDExNjgyIEZvcmVzdCBDZW50cmFsIERyaXZlXzFERGFsbGFzXzFEVFhfMURIb21lIERlcG90XzFFMDZfMUQxMFpHSDAwN18xRDExWkhvbWUgRGVwb3RfMUQxMlo4Nzc3MjI3NTQ2XzFEMTRaLl8xRDIwWl8xQ18xRDI4WjAwMjczMTk4NjI3NDUxXzFEMzFaOTYyMjA4MDQzMDAwMDQyNTE5ODQwMDI3MzE5ODYyNzQ1MV8xRDlLODAwMDAzNDdfMURfMUVfMDReRlNcbl5GTzI4LDgzN15BME4sMTA3LDk2XkZXTl5GSF5GRF5GU1xuXkZPMTIsNjgxXkdCNzc3LDIsMl5GU1xuXkZPNDk0LDg4NV5BME4sNDMsNDNeRldOXkZIXkZEXkZTXG5eRk83ODgsMjheQWJOLDExLDdeRldCXkZIXkZENTgzSjQvNUQ4MC85QUUzXkZTXG5eRk85NSw3NDZeQTBOLDUzLDQwXkZXTl5GSF5GRDI3MzEgOTg2MiA3NDUxXkZTXG5eRk80MDksNjk1XkEwTiw1MSwzOF5GV05eRkheRkIzOTAsLCxSLF5GRCAgICAgICAgICAgICAgICAgICBeRlNcbl5GTzQwNCw3NDdeQTBOLDUxLDM4XkZXTl5GSF5GQjQwMCwsLFIsXkZEICAgICAgICAgICAgICAgICAgIF5GU1xuXkZPNDEzLDc5OV5BME4sNDAsNDBeRldOXkZIXkZCMzg2LCwsUixeRkQgICAgICAgICAgICAgICAgXkZTXG5eRk80OTUsODQxXkEwTiw0NCw0NF5GV05eRkheRkIyOTgsLCxSLF5GRCAgICAgNzUyNDNeRlNcbl5GTzU3NCw5MDFeQTBOLDI0LDI0XkZXTl5GSF5GQjEyMCwsLFIsXkZEICAgICAgXkZTXG5eRk82OTUsODg1XkEwTiw0Myw0M15GV05eRkheRkIxMDAsLCxSLF5GRCAgIF5GU1xuXkZPMzksOTI3XkEwTiwyNywzNl5GV05eRkheRkQ5NjIyIDA4MDQgMyAoMDAwIDAwMCAwMDAwKSAwIDAwIDI3MzEgOTg2MiA3NDUxXkZTXG5eRk83NSw5NjheQlkzLDJeQkNOLDIwMCxOLE4sTixOXkZXTl5GRD47OTYyMjA4MDQzMDAwMDQyNTE5ODQwMDI3MzE5ODYyNzQ1MV5GU1xuXkZPNDc4LDU1XkFkTiwwLDBeRldOXkZIXkZERElNTUVEOiAxMCBYIDEwIFggMTAgSU5eRlNcbl5GTzMyOSwzNDleQWJOLDExLDdeRldOXkZIXkZEUkVGOiA4MDAwMDM0N15GU1xuXkZPMzksMzYzXkFiTiwxMSw3XkZXTl5GSF5GRElOVjogXkZTXG5eRk8zOSwzNzdeQWJOLDExLDdeRldOXkZIXkZEUE86IFBPMDgwMTIwMjItMV5GU1xuXkZPNDI5LDM3N15BYk4sMTEsN15GV05eRkheRkRERVBUOiBeRlNcbl5QUTFcbl5YWlxuJw==";
                    //****************************************************************** */
                    // var URL = "https://hvl-test.myxcarrier.com/Labels/273198627451.pdf";
                    // sap.m.URLHelper.redirect(URL, true);

                    // var image = new sap.m.Image("captcha" + 0, {

                    //     src: "data:application/pdf;base64," + str

                    // });
                    //****************************************************************** */


                    let blob = new Blob([str], { type: "application/pdf" }); // Create a Blob from the base64 string
                    let pdf = URL.createObjectURL(blob); // Create a URL for the Blob
                    jQuery.sap.addUrlWhitelist("blob"); // Add blob URL to the whitelist

                    this._pdfViewer = new sap.m.PDFViewer(); // Create PDF viewer instance
                    this._pdfViewer.setSource(pdf); // Set the PDF source
                    this._pdfViewer.setTitle("PDF File");
                    // Set the title
                    this._pdfViewer.open()
                    // window.open(this._pdfViewer.open());

                    //****************************************************************** */

                    // var base644 = document.getElementById("captcha0").src;
                    // var newWin = window.open("", "Print-Window");
                    // newWin.document.open();
                    // newWin.document.write('<html><body onload="window.print()"><div><img src="' + pdf +
                    //     '"/></div></body></html>');
                    // newWin.document.close();
                    // setTimeout(function () {
                    //     newWin.close();
                    // }, 1000);
                    //****************************************************************** */
                    // Open the PDF viewe
                    // let blob = new Blob([str], {
                    //     type: "application/pdf"
                    // }),
                    //     pdf = URL.createObjectURL(blob);
                    // jQuery.sap.addUrlWhitelist("blob");

                    // this._pdfViewer = new sap.m.PDFViewer({
                    //     isTrustedSource: true
                    // });
                    // this._pdfViewer.setSource(pdf);
                    // this._pdfViewer.setTitle("PDF File");
                    // this._pdfViewer.open();

                    //****************************************************************** */

                    // const label = new sap.m.Label();
                    // // label.printDensity = new PrintDensity(PrintDensityName['8dpmm']);
                    // label.width = 100;label.height = 50;
                    // // label.padding = new Spacing(10);

                    // const text = new Text(); 
                    // // label.content.push(text); 
                    // // text.fontFamily = new FontFamily(FontFamilyName.D); 
                    // text.text = str; 
                    // const zpl = label.generateZPL();
                    // // ^XA//^FB780,1,0,L,0//^FDHello World!^FS//^XZ

                    //                     const raw = new raw();
                    //                     label.content.push(raw);
                    //                     raw.data = `str;

                    // `

                    //                     const zpl = label.generateZpl();
                }
            });



            // var file = new File(["test.txt"], "https://hvl-test.myxcarrier.com/Labels/273198627451.txt");
            // var reader = new FileReader();    // Read file content on file loaded event
            // reader.onload = function (event) {
            //     let content = event.target.result;
            //     this._pdfViewer = new sap.m.PDFViewer();
            //     this._pdfViewer.setSource(content);
            //     this._pdfViewer.setTitle("PDF File");
            //     this._pdfViewer.open();
            // };

            // Convert data to base64 
            // reader.readAsDataURL(file);


            // export const fileToBase64 = (filename, filepath) => {
            // return new Promise(resolve => {
            //   var file = new File([filename], filepath);
            //   var reader = new FileReader();    // Read file content on file loaded event
            //   reader.onload = function(event) {
            //     resolve(event.target.result);
            //   };

            //   // Convert data to base64 
            //   reader.readAsDataURL(file);
            // });
            //   };
            //   Example call:fileToBase64("test.pdf", "../files/test.pdf").then(result => {
            //     console.log(result);
            //   });

            // var sSource = oEvent.getSource().getModel().getData().Source;
            // this._pdfViewer.setSource(sSource);
            // this._pdfViewer.setTitle("My Custom Title");
            // this._pdfViewer.open();

            // var IMG_DATA= "https://hvl-test.myxcarrier.com/Labels/273198627451.pdf";
            // 	this._pdfViewer = new PDFViewer();
            // 						this.getView().addDependent(this._pdfViewer);
            // 						this._pdfViewer.setSource(IMG_DATA);
            // 						this._pdfViewer.open();
            //                         window.open(response.url);

            // var url = "https://hvl-test.myxcarrier.com/Labels/273198627451.txt";
            // var backendUrl = "http://api.labelary.com/v1/printers/8dpmm/labels/4x6/0";

            // // Make AJAX call to backend service
            // $.ajax({
            //     url: backendUrl,
            //     type: "POST",
            //     data: { url: url },
            //     success: function (response) {
            //         // Handle success - e.g., display or download the PDF
            //         // Here, 'response' contains the PDF file from the backend
            //         // For example, you can open the PDF in a new window/tab
            //         window.open(response.url);
            //     },
            //     error: function (xhr, status, error) {
            //         // Handle error
            //         console.log(xhr)
            //     }
            // });
        },

        onClick: function () {
            // var fs = require('fs');
            // var request = require('request');

            // var zpl = "https://hvl-test.myxcarrier.com/Labels/273198627451.txt";

            // var options = {
            //     encoding: null,
            //     formData: { file: zpl },
            //     headers: { 'Accept': 'application/pdf' }, // omit this line to get PNG images back
            //     url: 'http://api.labelary.com/v1/printers/8dpmm/labels/4x6/0/'
            // };

            // request.post(options, function (err, resp, body) {
            //     if (err) {
            //         return console.log(err);
            //     }

            //     var filename = options.headers && options.headers['Accept'] === 'application/pdf' ? 'label.pdf' : 'label.png';

            //     fs.writeFile(filename, body, function (err) {
            //         if (err) {
            //             console.log(err);
            //         }
            //     });
            // });

            // const express = require('express');
            // const bodyParser = require('body-parser');
            // const request = require('request');
            // const fs = require('fs');

            // const app = express();
            // const port = 3000;

            // app.use(bodyParser.urlencoded({ extended: true }));
            // app.use(bodyParser.json());

            // app.post('/convert-to-pdf', (req, res) => {
            //     const url = req.body.url; // Assuming the URL is sent in the request body
            //     const options = {
            //         encoding: null,
            //         url: url
            //     };

            //     // Fetch the content from the URL
            //     request.get(options, function (err, resp, body) {
            //         if (err) {
            //             return res.status(500).send(err);
            //         }

            //         // Here, you can use a library like 'pdfkit' or 'puppeteer' to generate the PDF
            //         // For simplicity, let's assume 'body' contains the content of the URL

            //         // Write the content to a PDF file
            //         fs.writeFile('label.pdf', body, function (err) {
            //             if (err) {
            //                 console.log(err);
            //                 return res.status(500).send(err);
            //             }
            //             // Send the PDF file back to the Fiori app
            //             res.sendFile('label.pdf');
            //         });
            //     });
            // });

            // app.listen(port, () => {
            //     console.log(`Server is listening at http://localhost:${port}`);
            // });

        },
        onFileUpload: function (event) {

            var script = document.createElement('script');

            // Set the source to the Axios CDN
            script.src = 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';

            // Append the script element to the document's head
            document.head.appendChild(script);

            // Once the script is loaded, you can use Axios
            script.onload = function () {
                axios({
                    url: 'https://hvl-test.myxcarrier.com/Labels/273198627451.txt',
                    method: 'GET',
                    responseType: 'arraybuffer'
                }).then((response) => {
                    let blob = new Blob([response.data],
                        { type: response.headers['content-type'] });
                    let url = window.URL.createObjectURL(blob);

                    // $('#frame').attr('src', url);
                    this._pdfViewer = new PDFViewer();
                    // this.getView().addDependent(this._pdfViewer);
                    this._pdfViewer.setSource(url);
                    this._pdfViewer.setTitle("My Custom Title");
                    this._pdfViewer.open();
                });
            };


        },
    });


});
