const {style: navigationPanelStyle} = HookGetElement('.navigation-panel');
const {style: settingsPanelStyle} = HookGetElement('.settings-panel');
const {style: informationPanelStyle} = HookGetElement('.information-panel');

const navigationButton = HookGetElement('.navigation-button');
const settingsButton = HookGetElement('.settings-button');
const informationButton = HookGetElement('.information-button');

// west side button controll
navigationButton.addEventListener('click', e => {
    clickEvent(
        navigationPanelStyle,
        settingsPanelStyle,
        informationPanelStyle,
        e.target,
        settingsButton,
        informationButton
        );
});

settingsButton.addEventListener('click', e => {
    clickEvent(
        settingsPanelStyle,
        informationPanelStyle,
        navigationPanelStyle,
        e.target,
        informationButton,
        navigationButton
        );
});

informationButton.addEventListener('click', e => {
    clickEvent(
        informationPanelStyle, 
        settingsPanelStyle, 
        navigationPanelStyle,
        e.target,
        settingsButton,
        navigationButton
        );
});

const clickEvent = (
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

// moddle button controll
const closeMeButton = HookGetElement('.close-me-button');
const centerPanelButton = HookGetElement('.center-panel-button');

const descriptionPlace = HookGetElement('.middle-block .description');
descriptionPlace.innerHTML = closeMe;

closeMeButton.addEventListener('click', () => {
   if(descriptionPlace.innerHTML === closeMe) return; // 없으면 클릭때마다 같은 부분이 중첩으로 계속 새로 생김

    descriptionPlace.innerHTML = closeMe;
})

centerPanelButton.addEventListener('click', () => {
    if(descriptionPlace.innerHTML === centerPanel) return;

    descriptionPlace.innerHTML = centerPanel;
})