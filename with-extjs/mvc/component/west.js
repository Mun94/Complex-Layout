Ext.define('component.west', {
    extend: 'Ext.panel.Panel',
    region: 'west',
    title: 'West Panel',
    itemId: 'westWrap',
    collapsible: true,
    split: true,
    layout: 'accordion',
    items: [{
                title: 'Navigation',
                html: navigaitonDescription,
                iconCls: 'navigation-icon'
            },{
                title: 'Settings',
                html: settingsDescription,
                iconCls: 'settings-icon'
            },{
                title: 'Information',
                html: informationDescription,
                iconCls: 'information-icon'
            }],
    width: 200,
});