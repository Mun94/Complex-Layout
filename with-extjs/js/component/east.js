Ext.define('js.component.east', {
    extend: 'Ext.tab.Panel',
    region: 'east',
    title: 'East Panel',
    collapsible: true,
    split: true,
    tabPosition: 'bottom',
    activeTab: 1, 
    items: [{
                title:'A Tab',
                html: js.data.description.includePTag('eastATab'),
            },{
                title:'Property Grid',
                closable: true,
                border:false,
                items: [{   
                            bbar: ['->', {
                                xtype: 'button',
                                text: 'test',
                            }]
                        },{
                            xtype: 'propertygrid',
                            source: { ...js.data.description.content.east.rowValue, 
                                created: Ext.Date.parse( js.data.description.content.east.rowValue.created, 'm/d/Y')}
                        }]
            }],
    width: 300,
});