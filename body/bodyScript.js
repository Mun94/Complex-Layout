// west side button controll(클릭시 왼쪽으로 접힘)
const {style: westSideBlock} = useGetElement('.west-side-block');
const {style: westSideTop} = useGetElement('.west-side-block .top');
const {style: categoryBlockStyle} = useGetElement('.west-side-block .category');
const westSideTopButton = useGetElement('.west-side-block .button');

useClickEvent(westSideTopButton, e=> {
    if(categoryBlockStyle.display === 'none'){
        westSideBlock.width = '400px';

        categoryBlockStyle.display = 'block';

        westSideTop.width = 'initial';
        westSideTop.height = 'initial';
        westSideTop.flexDirection = 'initial';
        westSideTop.justifyContent ='space-between';

        westSideTopButton.innerHTML = '<';
    }else{
        westSideBlock.width = 'initial';

        categoryBlockStyle.display = 'none';

        westSideTop.width = '16px';
        westSideTop.height = '730px';
        westSideTop.flexDirection = 'column-reverse';
        westSideTop.justifyContent ='flex-end';
        
        westSideTopButton.innerHTML = '>';
    };
});


// west side category button controll
const {style: navigationPanelStyle} = useGetElement('.navigation-panel');
const {style: settingsPanelStyle} = useGetElement('.settings-panel');
const {style: informationPanelStyle} = useGetElement('.information-panel');

const navigationButton = useGetElement('.navigation-button');
const settingsButton = useGetElement('.settings-button');
const informationButton = useGetElement('.information-button');

useClickEvent(navigationButton, e => {
    categoryFold(
        navigationPanelStyle,
        settingsPanelStyle,
        informationPanelStyle,
        e.target,
        settingsButton,
        informationButton
        );
});

useClickEvent(settingsButton, e => {
    categoryFold(
        settingsPanelStyle,
        informationPanelStyle,
        navigationPanelStyle,
        e.target,
        informationButton,
        navigationButton
        );
});

useClickEvent(informationButton, e => {
    categoryFold(
        informationPanelStyle, 
        settingsPanelStyle, 
        navigationPanelStyle,
        e.target,
        settingsButton,
        navigationButton
        );
});

const categoryFold = (
    myPanel, 
    otherPanel,
    other2Panel, 
    myButton, // e.target
    otherButton,
    other2Button 
    ) => {
    if(myPanel.display === 'block'){
        myButton.innerHTML = '+';
        myPanel.display= 'none';

        otherButton.innerHTML = '-';
        otherPanel.display= 'block';
    }else{
        myButton.innerHTML = '-';
        myPanel.display = 'block';

        otherButton.innerHTML = '+';
        otherPanel.display = 'none';

        other2Button.innerHTML = '+';
        other2Panel.display= 'none';
    };
};

// middle button controll
const closeMeButton = useGetElement('.close-me-button');
const centerPanelButton = useGetElement('.center-panel-button');

const descriptionPlace = useGetElement('.middle-block .description');

descriptionPlace.innerHTML = closeMe;

useClickEvent(closeMeButton, () => {
   if(descriptionPlace.innerHTML === closeMe) return; // 없으면 클릭때마다 같은 부분이 중첩으로 계속 새로 생김

    descriptionPlace.innerHTML = closeMe;
});

useClickEvent(centerPanelButton, () => {
    if(descriptionPlace.innerHTML === centerPanel) return;

    descriptionPlace.innerHTML = centerPanel;

    const toggleWestSide = useGetElement('.whatthe');

    toggleWestSide && useClickEvent(toggleWestSide, () =>{
        if(categoryBlockStyle.display === 'none'){
            westSideBlock.width = '400px';
    
            categoryBlockStyle.display = 'block';
    
            westSideTop.width = 'initial';
            westSideTop.height = 'initial';
            westSideTop.flexDirection = 'initial';
            westSideTop.justifyContent ='space-between';
    
            westSideTopButton.innerHTML = '<';
        }else{
            westSideBlock.width = 'initial';
    
            categoryBlockStyle.display = 'none';
    
            westSideTop.width = '16px';
            westSideTop.height = '730px';
            westSideTop.flexDirection = 'column-reverse';
            westSideTop.justifyContent ='flex-end';
            
            westSideTopButton.innerHTML = '>';
        };
    });
});

// middle toggle west side controll