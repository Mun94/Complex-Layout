Ext.define('mvc.component.east', {
    extend: 'Ext.tab.Panel',
    region: 'east',
    title: 'East Panel',
    collapsible: true,
    split: true,
    tabPosition: 'bottom',
    activeTab: 1, 
    items: [{
                title:'A Tab',
                html:aTabDescription,
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
                            source: {...rowValue, created: Ext.Date.parse(rowValue.created, 'm/d/Y')}
                        }]
            }],
    width: 300,
});