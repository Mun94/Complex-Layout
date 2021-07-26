const {
    north,
    west: { navigation, settings, information},
    middle: { closeMe, centerPanel },
    east: { aTab, rowValue },
    south
} = dataDesecription;

const splitDescription = (descArr) => {
    return descArr.map(desc => {
        const splitDesc = String(desc).split('\n');
        let includePTag = '';

        for(let i= 0; i < splitDesc.length; i++){
            includePTag += `<p>${splitDesc[i]}</p>`
        };

        return includePTag;
    })
};

const insert = [north, navigation, settings, information, closeMe, centerPanel, aTab, south];

const [
    northDescription,
    navigaitonDescription,
    settingsDescription,
    informationDescription,
    closeMeDescription,
    centerPanelDesecription,
    aTabDescription,
    southDescription
] = splitDescription(insert)



