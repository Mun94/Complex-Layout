Ext.define('js.component.west', {
    extend: 'Ext.panel.Panel',
    region: 'west',
    title: 'West Panel',
    itemId: 'westWrap',
    collapsible: true,
    split: true,
    layout: 'accordion',
    items: [{
                title: 'Navigation',
                html: js.data.description.includePTag('westNavigation'),
                iconCls: 'navigation-icon'
            },{
                title: 'Settings',
                html: js.data.description.includePTag('westSettings'),
                iconCls: 'settings-icon'
            },{
                title: 'Information',
                html: js.data.description.includePTag('westInformation'),
                iconCls: 'information-icon'
            }],
    width: 200,
});