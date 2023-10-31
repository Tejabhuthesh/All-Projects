sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'work5',
            componentId: 'CategoriesList',
            entitySet: 'Categories'
        },
        CustomPageDefinitions
    );
});