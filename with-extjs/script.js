Ext.create('Ext.container.Viewport', {
    layout: 'border',
    items: [{
        region: 'north',
        html: '<h1 class="x-panel-header">Page Title</h1>',
        border: false,
        margin: '0 0 5 0'
    }, {
        region: 'west',
        collapsible: true,
        title: 'West Panel',
        split: true,
        width: 150,
        layout: 'accordion',
        items:[{
            title: 'Navigation',
            html: "Hi. I'm the west panel."
        },{
            title: 'Settings',
            html: 'Some settings in here.'
        },{
            title: 'Information',
            html: 'Some info in here.'
        }]
        // could use a TreePanel or AccordionLayout for navigational items
    }, {
        region: 'south',
        title: 'South Panel',
        collapsible: true,
        html: 'Information goes here',
        split: true,
        height: 100,
        minHeight: 100
    }, {
        region: 'east',
        title: 'East Panel',
        collapsible: true,
        split: true,
        width: 150
    }, {
        region: 'center',
        xtype: 'tabpanel', // TabPanel itself has no title
        activeTab: 0,      // First tab active by default
        items: [
                    {
                        title: 'Tab 1',
                        bodyPadding: 10,
                        html : 'A simple tab'
                    },
                    {
                        title: 'Tab 2',
                        html : 'Another one'
                    }
                ],
    }]
});
