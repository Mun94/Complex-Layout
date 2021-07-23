Ext.onReady(() => {
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'north',
            html: northDescription,
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
            html: southDescription,
            split: true,
            height: 100,
            minHeight: 100
        }, {
            region: 'east',
            title: 'East Panel',
            collapsible: true,
            split: true,
            width: 300,
            xtype:'tabpanel',
            tabPosition: 'bottom',
            activeTab: 1, 
            items:[{
                title:'A Tab',
                html:aTab
            },{
                title:'Property Grid',
                closable: true,
                items:[{
                    xtype:'button',
                    text:'test'
                },{
                    xtype: 'gridpanel',
                    columns:[{
                        text: 'Name',
                        dataIndex: 'name',   
                    },{
                        text: 'Value',
                        dataIndex: 'value',
                        flex:1
                    }],
                    store:{
                        fields: ['name', 'value'],
                        data:[{
                            name: '(name)',
                            value: 'Properties Grid'
                        },{
                            name: 'autoFitColumns',
                            value: true
                        },{
                            name: 'borderWidth',
                            value: 1
                        },{
                            name: 'created',
                            value: '10/15/2006'
                        },{
                            name: 'grouping',
                            value: false
                        },{
                            name: 'productionQuality',
                            value: false
                        },{
                            name: 'tested',
                            value: false
                        },{
                            name: 'version',
                            value: 0.01
                        }]
                    }
                }]
            }]
        }, {
            region: 'center',
            xtype: 'tabpanel', // TabPanel itself has no title
            activeTab: 0,      // First tab active by default
            items: [
                    {
                        title: 'Close Me',
                        html : closeMe,
                        border: false,
                        closable: true
                    },
                    {
                        title: 'Center Panel',
                        html : centerPanel,
                        border: false
                    }
            ],
        }]
    });
})