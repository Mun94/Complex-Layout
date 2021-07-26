
Ext.application({
    name:'complex layout',
    appFolder:'./js',

    requires:['js.data.description'],
    aaaa:
    launch:() => {

        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                Ext.create('js.component.north'),
                Ext.create('js.component.west'),
                Ext.create('js.component.center'),
                Ext.create('js.component.east'),
                Ext.create('js.component.south'),
            ],
        })    // description.includePTag()
    },
});