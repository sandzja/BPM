Ext.define('ABLV.view.Galvenais', {
    extend: 'Ext.Container',
    xtype: 'galvenais',
    alias: 'widget.galvenais',

    requires: [
        'ABLV.view.Main'
    ],

    config: {
        id: 'viewport',
        layout: {
            animation: 'slide',
            type: 'card'
        },
        items: [
            {
                xtype: 'mainview'
            }
        ]
    }

});