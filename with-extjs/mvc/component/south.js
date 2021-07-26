Ext.define('mvc.component.south', {
    extend: 'Ext.panel.Panel',
    region: 'south',
    title: 'South Panel',
    items:{
        xtype: 'component',
        autoEl: {
            tag: 'p',
            html: 'south - generally for informational stuff, also could be for status bar'
        }
    },
    collapsible: true,
    split: true,
    height: 100,
    minHeight: 100
});


