
Ext.application({
    name:'complex layout',
    appFolder:'./mvc',

    requires:['mvc.data.data'],

    launch:() => {

        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                Ext.create('mvc.component.north'),
                Ext.create('mvc.component.west'),
                Ext.create('mvc.component.center'),
                Ext.create('mvc.component.east'),
                Ext.create('mvc.component.south'),
            ],
        })    // description.includePTag()
    },
});