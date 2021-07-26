Ext.define('js.component.center', {
    extend: 'Ext.tab.Panel',
    region: 'center',
    activeTab: 0,      // First tab active by default
    items: [{
                title: 'Close Me',
                html : js.data.description.includePTag('middleCloseMe'),
                closable: true,
                autoScroll: true
            },{
                title: 'Center Panel',
                autoScroll: true,
                items:[{
                    xtype: 'text',
                    text: 'toggle the west region',
                    listeners:{
                        click: () => {
                            const toggleWest = Ext.ComponentQuery.query('#westWrap')[0];
                            toggleWest.toggleCollapse();
                        }
                    },
                    border: false
                },{
                    xtype: 'component',
                    html: js.data.description.includePTag('middleCenterPanel'),
                    border: false
                }]
            }]
});