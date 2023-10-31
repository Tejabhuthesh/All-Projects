sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'project5',
            componentId: 'Order_DetailsObjectPage',
            entitySet: 'Order_Details'
        },
        CustomPageDefinitions
    );
});