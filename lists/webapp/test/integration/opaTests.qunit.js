sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'listid/lists/test/integration/FirstJourney',
		'listid/lists/test/integration/pages/TerritoriesList',
		'listid/lists/test/integration/pages/TerritoriesObjectPage'
    ],
    function(JourneyRunner, opaJourney, TerritoriesList, TerritoriesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('listid/lists') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTerritoriesList: TerritoriesList,
					onTheTerritoriesObjectPage: TerritoriesObjectPage
                }
            },
            opaJourney.run
        );
    }
);