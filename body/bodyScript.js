const getElementBody = value =>  document.querySelector(value);

// west side button controll
getElementBody('.navigation-button').addEventListener('click', e => {
    const {style: navigationPanelStyle} = getElementBody('.navigation-panel');
    const {style: settingsPanelStyle} = getElementBody('.settings-panel');
    const {style: informationPanelStyle} = getElementBody('.information-panel');
    
    const settingsButton = getElementBody('.settings-button');
    const informationButton = getElementBody('.information-button');

    if(navigationPanelStyle.display === 'none'){
        e.target.innerHTML = '-';
        settingsButton.innerHTML = '+';
        informationButton.innerHTML = '+';

        navigationPanelStyle.display= 'block';
        settingsPanelStyle.display= 'none';
        informationPanelStyle.display= 'none';
    }else{
        e.target.innerHTML = '+';
        settingsButton.innerHTML = '-';

        navigationPanelStyle.display = 'none';
        settingsPanelStyle.display= 'block';
    };
});

getElementBody('.settings-button').addEventListener('click', e => {
    const {style: navigationPanelStyle} = getElementBody('.navigation-panel');
    const {style: settingsPanelStyle} = getElementBody('.settings-panel');
    const {style: informationPanelStyle} = getElementBody('.information-panel');

    const navigationButton = getElementBody('.navigation-button');
    const informationButton = getElementBody('.information-button');

    if(settingsPanelStyle.display === 'block'){
        e.target.innerHTML = '+';
        informationButton.innerHTML= '-';

        settingsPanelStyle.display= 'none';
        informationPanelStyle.display= 'block';
    }else{
        navigationButton.innerHTML = '+';
        e.target.innerHTML = '-';
        informationButton.innerHTML = '+';

        navigationPanelStyle.display= 'none';
        settingsPanelStyle.display= 'block';
        informationPanelStyle.display= 'none';
    };
});

getElementBody('.information-button').addEventListener('click', e => {
    const {style: navigationPanelStyle} = getElementBody('.navigation-panel');
    const {style: settingsPanelStyle} = getElementBody('.settings-panel');
    const {style: informationPanelStyle} = getElementBody('.information-panel');

    const navigationButton = getElementBody('.navigation-button');
    const settingsButton = getElementBody('.settings-button');

    if(informationPanelStyle.display === 'block'){
        settingsButton.innerHTML = '-';
        e.target.innerHTML = '+';

        settingsPanelStyle.display= 'block';
        informationPanelStyle.display= 'none';
    }else{
        navigationButton.innerHTML = '+';
        settingsButton.innerHTML = '+';
        e.target.innerHTML = '-';

        navigationPanelStyle.display= 'none';
        settingsPanelStyle.display = 'none';
        informationPanelStyle.display = 'block';
    };
});