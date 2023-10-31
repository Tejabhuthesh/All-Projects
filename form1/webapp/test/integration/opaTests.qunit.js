sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'formid/form1/test/integration/FirstJourney',
		'formid/form1/test/integration/pages/TerritoriesObjectPage'
    ],
    function(JourneyRunner, opaJourney, TerritoriesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('formid/form1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTerritoriesObjectPage: TerritoriesObjectPage
                }
            },
            opaJourney.run
        );
    }
);