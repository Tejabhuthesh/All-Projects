sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'work5',
            componentId: 'CategoriesObjectPage',
            entitySet: 'Categories'
        },
        CustomPageDefinitions
    );
});