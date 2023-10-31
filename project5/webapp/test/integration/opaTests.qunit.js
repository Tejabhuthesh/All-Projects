sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project5/test/integration/FirstJourney',
		'project5/test/integration/pages/OrdersObjectPage',
		'project5/test/integration/pages/Order_DetailsObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersObjectPage, Order_DetailsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project5') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersObjectPage: OrdersObjectPage,
					onTheOrder_DetailsObjectPage: Order_DetailsObjectPage
                }
            },
            opaJourney.run
        );
    }
);