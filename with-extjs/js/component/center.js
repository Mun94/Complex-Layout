Ext.define('js.component.center', {
    extend: 'Ext.tab.Panel',
    region: 'center',
    activeTab: 0, 
    items: [{
                title: 'Close Me',
                html : js.data.description.includePTag('middleCloseMe'),
                closable: true,
                autoScroll: true
            },{
                title: 'Center Panel',
                autoScroll: true,
                items:[{
                    xtype: 'component',
                    autoEl: {
                        tag: 'a',
                        href: '#',
                        html: 'toggle the west region'
                    },
                    listeners: {
                        click: {
                            element: 'el',
                            fn: () => {
                                const toggleWest = Ext.ComponentQuery.query('#westWrap')[0];
                                toggleWest.toggleCollapse();
                        }}
                    },
                    border: false
                },{
                    xtype: 'component',
                    html: js.data.description.includePTag('middleCenterPanel'),
                    border: false
                }]
            }]
});