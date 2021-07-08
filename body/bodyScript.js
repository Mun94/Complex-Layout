const getElementBody = value =>  document.querySelector(value);

const {style: navigationPanelStyle} = getElementBody('.navigation-panel');
const {style: settingsPanelStyle} = getElementBody('.settings-panel');
const {style: informationPanelStyle} = getElementBody('.information-panel');

const navigationButton = getElementBody('.navigation-button');
const settingsButton = getElementBody('.settings-button');
const informationButton = getElementBody('.information-button');

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