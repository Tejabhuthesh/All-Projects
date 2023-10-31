sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'form/test/integration/FirstJourney',
		'form/test/integration/pages/CustomersObjectPage',
		'form/test/integration/pages/OrdersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersObjectPage, OrdersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('form') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersObjectPage: CustomersObjectPage,
					onTheOrdersObjectPage: OrdersObjectPage
                }
            },
            opaJourney.run
        );
    }
);