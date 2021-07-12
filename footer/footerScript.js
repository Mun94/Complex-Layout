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

    const toggleWestSide = useGetElement('.toggle-the-west-region');

    const westSideFolded = useGetElement('.west-side-block-folded');  
    const eastSideFolded = useGetElement('.east-side-block-folded');

    southDescriptionPlace.innerHTML = southDescription;

    middleDescriptionPlace.style.height = `${middleDescriptionPlace.clientHeight - southSideBlock.clientHeight}px`;
    eastDescriptionPlace.style.height = '570px';
    
    westSideNavigationPanel.style.height = '468px';
    westSideSettingsPanel.style.height = '468px';
    westSideInformationPanel.style.height = '468px';

    useClickEvent(centerPanelButton, () => {
        const toggleWestSide = useGetElement('.toggle-the-west-region');
        toggleWestSide && useClickEvent(toggleWestSide, () => {
            const westSideFolded = useGetElement('.west-side-block-folded'); 
            westSideFolded ? westSideFolded.style.height = '632px' : null;
        });
    });

    useClickEvent(closeMeClose , () => {
        const toggleWestSide = useGetElement('.toggle-the-west-region');
        toggleWestSide && useClickEvent(toggleWestSide, () => {
            const westSideFolded = useGetElement('.west-side-block-folded'); 
            westSideFolded ? westSideFolded.style.height = '632px' : null;
        });
    });

    toggleWestSide && useClickEvent(toggleWestSide, () => {
        const westSideFolded = useGetElement('.west-side-block-folded'); 
        westSideFolded ? westSideFolded.style.height = '632px' : null;
    });

    westSideFolded ? westSideFolded.style.height = '632px' : null;
    useClickEvent(westSideTopButton , () => {
        const westSideFolded = useGetElement('.west-side-block-folded'); 
        westSideFolded.style.height = '632px';
    });
    eastSideFolded ? eastSideFolded.style.height = '632px' : null;
    useClickEvent(eastSideTopButton, () => {
        const eastSideFolded = useGetElement('.east-side-block-folded');
        eastSideFolded.style.height = '632px';
    });

    navigationButton && useClickEvent(navigationButton, () => {
        westSideNavigationPanel.style.height = '468px';
    });
    settingsButton && useClickEvent(settingsButton, () => {
        westSideSettingsPanel.style.height ='468px';
    });
    informationButton && useClickEvent(informationButton, () => {
        westSideInformationPanel.style.height = '468px';
    });

    southSideTopButton && useClickEvent(southSideTopButton, () => {
        const westSideFolded = useGetElement('.west-side-block-folded');  
        const eastSideFolded = useGetElement('.east-side-block-folded');

        middleDescriptionPlace.style.height = `${middleDescriptionPlace.clientHeight + southSideBlock.clientHeight}px`;
        eastDescriptionPlace.style.height = '680px';
      
        westSideNavigationPanel.style.height = '578px';
        westSideSettingsPanel.style.height = '578px';
        westSideInformationPanel.style.height = '578px';

        navigationButton && useClickEvent(navigationButton, () => {
            westSideNavigationPanel.style.height = '578px';
        });
        settingsButton && useClickEvent(settingsButton, () => {
            westSideSettingsPanel.style.height = '578px';
        });
        informationButton && useClickEvent(informationButton, () => {
            westSideInformationPanel.style.height = '578px';
        });


        westSideFolded ? westSideFolded.style.height = '732px' : null;
        useClickEvent(westSideTopButton , () => {
        const westSideFolded = useGetElement('.west-side-block-folded'); 
        westSideFolded.style.height = '732px';
        });

        eastSideFolded ? eastSideFolded.style.height = '732px' : null;
        useClickEvent(eastSideTopButton, () => {
        const eastSideFolded = useGetElement('.east-side-block-folded');
        eastSideFolded.style.height = '732px';
        });

        southSideBlock.remove();
        southParent.appendChild(southSideFolded);
    });
});