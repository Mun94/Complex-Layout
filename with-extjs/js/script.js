const propertyGridFieldAndData = () => {
    const rowValues = {
        name: ['(name)', 'autoFitColumns', 'borderWidth', 'created', 'grouping', 'productionQuality', 'tested', 'version'],
        value: ['Properties Grid', true, 1, '10/15/2006', false, false, false, 0.01]
    };
    const {name, value} = rowValues;
    let data = [];

    for(let i =0;  i < name.length; i++){
        data.push({name: name[i], value: value[i]});
    };

    return { fields: Object.keys(rowValues), data };
};

const toggleWestEvent = () => {
    return {
        afterrender: () => {
            const toggleWestEle = document.querySelector('.toggle-the-west-region');
            const toggleWest = Ext.ComponentQuery.query('#westWrap')[0];
            
            Ext.get(toggleWestEle).on('click', () => {
                    toggleWest.toggleCollapse();
                });
            }
        };
};

const north = {
    region: 'north',
    html: northDescription,
    border: false,
    margin: '0 0 5 0'
};

const west = {
    region: 'west',
    title: 'West Panel',
    itemId: 'westWrap',
    collapsible: true,
    split: true,
    layout: 'accordion',
    items:[{
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
};

const center =  {
    region: 'center',
    xtype: 'tabpanel', // TabPanel itself has no title
    activeTab: 0,      // First tab active by default
    items: [{
                title: 'Close Me',
                html : closeMe,
                closable: true,
                autoScroll: true
            },{
                title: 'Center Panel',
                html: centerPanel,
                autoScroll: true,
                listeners: toggleWestEvent()
            }]
};

const east = {
    region: 'east',
    title: 'East Panel',
    collapsible: true,
    split: true,
    xtype: 'tabpanel',
    tabPosition: 'bottom',
    activeTab: 1, 
    items: [{
                title:'A Tab',
                html:aTab,
            },{
                title:'Property Grid',
                closable: true,
                border:false,
                items: [{   
                            bbar: ['->',{
                                xtype: 'button',
                                text: 'test',
                            }]
                        },{
                            xtype: 'propertygrid',
                            source: rowValue
                        }]
            }],
    width: 300,
};

const south =  {
    region: 'south',
    title: 'South Panel',
    html: southDescription,
    collapsible: true,
    split: true,
    height: 100,
    minHeight: 100
};

Ext.onReady(() => {
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [
            north,
            west,
            center,
            east,
            south
        ]
    });
});