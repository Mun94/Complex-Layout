const northDescription = '<p>north - generally for menus, toolbars and/or advertisements</p>'

Ext.define('mvc.component.north', {
    extend:'Ext.Component',
    region:'north',
    html: northDescription,
    border: false,
    margin: '0 0 5 0',
});
mvc.data.data.includePTag()