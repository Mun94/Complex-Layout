Ext.define('js.component.south', {
    extend: 'Ext.panel.Panel',
    region: 'south',
    title: 'South Panel',
    html: js.data.description.includePTag('south'),
    collapsible: true,
    split: true,
});


