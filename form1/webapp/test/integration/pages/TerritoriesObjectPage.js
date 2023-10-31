sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'formid.form1',
            componentId: 'TerritoriesObjectPage',
            entitySet: 'Territories'
        },
        CustomPageDefinitions
    );
});