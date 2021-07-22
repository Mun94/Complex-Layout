Ext.create('Ext.container.Viewport', {
    layout: 'border',
    items: [{
        region: 'north',
        html: '<h1 class="x-panel-header">Page Title</h1>',
        border: false,
        margin: '0 0 5 0'
    }, {
        region: 'west',
        collapsible: true,
        title: 'West Panel',
        split: true,
        width: 150,
        layout: 'accordion',
        items:[{
            title: 'Navigation',
            html: "Hi. I'm the west panel.",
            iconCls: 'x-fa fa-file'
        },{
            title: 'Settings',
            html: 'Some settings in here.',
            iconCls: 'x-fa fa-file'
        },{
            title: 'Information',
            html: 'Some info in here.',
            iconCls: 'x-fa fa-file'
        }]
        // could use a TreePanel or AccordionLayout for navigational items
    }, {
        region: 'south',
        title: 'South Panel',
        collapsible: true,
        html: 'Information goes here',
        split: true,
        height: 100,
        minHeight: 100
    }, {
        region: 'east',
        title: 'East Panel',
        collapsible: true,
        split: true,
        width: 150
    }, {
        region: 'center',
        xtype:'tabpanel',
        
    }]
});

// Ext.onReady(() => {
//     Ext.create('Ext.tab.Panel', {
//         width: 500,
//         height: 500,
//         renderTo: Ext.getBody(),
//         tabPosition: 'bottom',
//         items:[{
//             xtype: 'panel',
//             title: '탭1',
//             items:[{
//                 xtype: 'button',
//                 text: '버튼1'
//             }]
//         },{
//             xtype: 'panel',
//             title: '탭2',
//             items:[{
//                 xtype: 'button',
//                 text: '버튼2'
//             }]
//         }]
//     })
// })

// Ext.onReady(() => {
//     Ext.create('Ext.grid.Panel', {
//         width: 500,
//         height: 500,
//         renderTo: Ext.getBody(),
//         columns:[{
//             text: '컬럼1',
//             style: 'text-align: center',
//             flex: 1,
//             dataIndex: 'c1'
//         },{
//             text: '컬럼2',
//             align: 'right',
//             flex: 1,
//             dataIndex: 'c3'
//         },{
//             text: '컬럼3',
//             align: 'left',
//             flex: 1,
//             dataIndex: 'c2'
//         }],
//         store: {
//             fields: ['c1', 'c2', 'c3'],
//             data:[{
//                 c1: '컬럼 1-1',
//                 c2: '컬럼 1-2',
//                 c3: '컬럼 1-3'
//             }, {
//                 c1: '컬럼 2-1',
//                 c2: '컬럼 2-2',
//                 c3: '컬럼 2-3'
//             }]
//         }
//     })
// })
