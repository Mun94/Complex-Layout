const southSideTopFoldedButton = useGetElement('.south-side-block-folded .button');
const southSideFolded = useGetElement('.south-side-block-folded');
const southParent = useGetElement('.footer');

const westSideNavigationPanel = useGetElement('.navigation-panel');
const westSideSettingsPanel = useGetElement('.settings-panel');
const westSideInformationPanel = useGetElement('.information-panel');
// const middleDescriptionPlace = useGetElement('.middle .description');

useClickEvent(southSideTopFoldedButton, () => {
    southSideFolded.outerHTML = southSideFoldedHtml;

    const southDescriptionPlace = useGetElement('.south-side-block .description');
    const southSideTopButton = useGetElement('.south-side-block .button');
    const southSideBlock = useGetElement('.south-side-block');
    const navigationButton = useGetElement('.navigation-button');
    const settingsButton = useGetElement('.settings-button');
    const informationButton = useGetElement('.information-button');

    southDescriptionPlace.innerHTML = southDescription;

    middleDescriptionPlace.style.height = `${middleDescriptionPlace.clientHeight - southSideBlock.clientHeight}px`
    eastDescriptionPlace.style.height = `${eastDescriptionPlace.clientHeight - southSideBlock.clientHeight}px`;
    westSideNavigationPanel.style.height = `${westSideNavigationPanel.clientHeight - southSideBlock.clientHeight}px`;
    westSideSettingsPanel.style.height = `${westSideSettingsPanel.clientHeight - southSideBlock.clientHeight}px`;
    westSideInformationPanel.style.height = `${westSideInformationPanel.clientHeight - southSideBlock.clientHeight}px`;

    useClickEvent(navigationButton, () => {
        westSideNavigationPanel.style.height = '468px';
    });
    useClickEvent(settingsButton, () => {
        westSideSettingsPanel.style.height ='468px';
    });
    useClickEvent(informationButton, () => {
        westSideInformationPanel.style.height = '468px';
    });

    southSideTopButton && useClickEvent(southSideTopButton, () => {
        middleDescriptionPlace.style.height = `${middleDescriptionPlace.clientHeight + southSideBlock.clientHeight}px`
        eastDescriptionPlace.style.height = `${eastDescriptionPlace.clientHeight + southSideBlock.clientHeight}px`;
        westSideNavigationPanel.style.height = `${westSideNavigationPanel.clientHeight + southSideBlock.clientHeight}px`;
        westSideSettingsPanel.style.height = `${westSideSettingsPanel.clientHeight + southSideBlock.clientHeight}px`;
        westSideInformationPanel.style.height = `${westSideInformationPanel.clientHeight + southSideBlock.clientHeight}px`;
        
        useClickEvent(navigationButton, () => {
            westSideNavigationPanel.style.height = '578px';
        });
        useClickEvent(settingsButton, () => {
            westSideSettingsPanel.style.height = '578px';
        });
        useClickEvent(informationButton, () => {
            westSideInformationPanel.style.height = '578px';
        });

        southSideBlock.remove();
        southParent.appendChild(southSideFolded);
    });
});