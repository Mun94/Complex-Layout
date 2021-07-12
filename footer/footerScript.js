const southSideTopFoldedButton = useGetElement('.south-side-block-folded .button');
const southSideFolded = useGetElement('.south-side-block-folded');
const southParent = useGetElement('.footer');

const westSideNavigationPanel = useGetElement('.navigation-panel');
const westSideSettingsPanel = useGetElement('.settings-panel');
const westSideInformationPanel = useGetElement('.information-panel');
// const middleDescriptionPlace = useGetElement('.middle .description');

const southSideHtml = `
    <div class= "south-side-block">
        <div class= "top">
            <div class= "title">
                south
            </div>
            <button class= "button">
                v
            </button>
        </div>

        <div class= "description"></div>
    </div>
`;

useClickEvent(southSideTopFoldedButton, () => {
    southSideFolded.outerHTML = southSideHtml;

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

    middleDescriptionPlace.style.height = `${middleDescriptionPlace.clientHeight - southDescriptionPlace.clientHeight}px`;
    eastDescriptionPlace.style.height = '615px';
    
    westSideNavigationPanel.style.height = '512px';
    westSideSettingsPanel.style.height = '512px';
    westSideInformationPanel.style.height = '512px';

    useClickEvent(centerPanelButton, () => {
        const toggleWestSide = useGetElement('.toggle-the-west-region');
        toggleWestSide && useClickEvent(toggleWestSide, () => {
            const westSideFolded = useGetElement('.west-side-block-folded'); 
            westSideFolded ? westSideFolded.style.height = '678px' : null;
        });
    });

    useClickEvent(closeMeClose , () => {
        const toggleWestSide = useGetElement('.toggle-the-west-region');
        toggleWestSide && useClickEvent(toggleWestSide, () => {
            const westSideFolded = useGetElement('.west-side-block-folded'); 
            westSideFolded ? westSideFolded.style.height = '678px' : null;
        });
    });

    toggleWestSide && useClickEvent(toggleWestSide, () => {
        const westSideFolded = useGetElement('.west-side-block-folded'); 
        westSideFolded ? westSideFolded.style.height = '678px' : null;
    });

    westSideFolded ? westSideFolded.style.height = '678px' : null;
    useClickEvent(westSideTopButton , () => {
        const westSideFolded = useGetElement('.west-side-block-folded'); 
        westSideFolded.style.height = '678px';
    });

    useClickEvent(westSideDragZoneButton , () => {
        const westSideFolded = useGetElement('.west-side-block-folded'); 
        westSideFolded ? westSideFolded.style.height = '678px' : null;
    });

    eastSideFolded ? eastSideFolded.style.height = '678px' : null;
    useClickEvent(eastSideTopButton, () => {
        const eastSideFolded = useGetElement('.east-side-block-folded');
        eastSideFolded.style.height = '678px';
    });

    useClickEvent(eastSideDragZoneButton , () => {
        const eastSideFolded = useGetElement('.east-side-block-folded'); 
        eastSideFolded ? eastSideFolded.style.height = '678px' : null;
    });

    navigationButton && useClickEvent(navigationButton, () => {
        westSideNavigationPanel.style.height = '512px';
    });
    settingsButton && useClickEvent(settingsButton, () => {
        westSideSettingsPanel.style.height ='512px';
    });
    informationButton && useClickEvent(informationButton, () => {
        westSideInformationPanel.style.height = '512px';
    });

    southSideTopButton && useClickEvent(southSideTopButton, () => {
        const westSideFolded = useGetElement('.west-side-block-folded');  
        const eastSideFolded = useGetElement('.east-side-block-folded');

        middleDescriptionPlace.style.height = `${middleDescriptionPlace.clientHeight + southDescriptionPlace.clientHeight}px`;
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

        useClickEvent(centerPanelButton, () => {
            const toggleWestSide = useGetElement('.toggle-the-west-region');
            toggleWestSide && useClickEvent(toggleWestSide, () => {
                const westSideFolded = useGetElement('.west-side-block-folded'); 
                westSideFolded ? westSideFolded.style.height = '743px' : null;
            });
        });
    
        useClickEvent(closeMeClose , () => {
            const toggleWestSide = useGetElement('.toggle-the-west-region');
            toggleWestSide && useClickEvent(toggleWestSide, () => {
                const westSideFolded = useGetElement('.west-side-block-folded'); 
                westSideFolded ? westSideFolded.style.height = '743px' : null;
            });
        });
    
        toggleWestSide && useClickEvent(toggleWestSide, () => {
            const westSideFolded = useGetElement('.west-side-block-folded'); 
            westSideFolded ? westSideFolded.style.height = '743px' : null;
        });

        westSideFolded ? westSideFolded.style.height = '743px' : null;
        useClickEvent(westSideTopButton , () => {
        const westSideFolded = useGetElement('.west-side-block-folded'); 
        westSideFolded.style.height = '743px';
        });

        useClickEvent(westSideDragZoneButton , () => {
            const westSideFolded = useGetElement('.west-side-block-folded'); 
            westSideFolded ? westSideFolded.style.height = '743px' : null;
        });

        eastSideFolded ? eastSideFolded.style.height = '743px' : null;
        useClickEvent(eastSideTopButton, () => {
        const eastSideFolded = useGetElement('.east-side-block-folded');
        eastSideFolded.style.height = '743px';
        });

        useClickEvent(eastSideDragZoneButton , () => {
            const eastSideFolded = useGetElement('.east-side-block-folded'); 
            eastSideFolded ? eastSideFolded.style.height = '678px' : null;
        });

        southSideBlock.remove();
        southParent.appendChild(southSideFolded);
    });
});

// south side drag zone button 클릭 시 펴지고 접힘
const southSideDragZoneButton = useGetElement('.south-side-drag-zone .button');

useClickEvent(southSideDragZoneButton, () => {
   

    if(!useGetElement('.south-side-block-folded')){
        const southDescriptionPlace = useGetElement('.south-side-block .description');
        const southSideTopButton = useGetElement('.south-side-block .button');
        const southSideBlock = useGetElement('.south-side-block');
      
        const navigationButton = useGetElement('.navigation-button');
        const settingsButton = useGetElement('.settings-button');
        const informationButton = useGetElement('.information-button');
    
        const toggleWestSide = useGetElement('.toggle-the-west-region');
    
        const westSideFolded = useGetElement('.west-side-block-folded');  
        const eastSideFolded = useGetElement('.east-side-block-folded');

        middleDescriptionPlace.style.height = `${middleDescriptionPlace.clientHeight + southDescriptionPlace.clientHeight}px`;
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

        useClickEvent(centerPanelButton, () => {
            const toggleWestSide = useGetElement('.toggle-the-west-region');
            toggleWestSide && useClickEvent(toggleWestSide, () => {
                const westSideFolded = useGetElement('.west-side-block-folded'); 
                westSideFolded ? westSideFolded.style.height = '743px' : null;
            });
        });
    
        useClickEvent(closeMeClose , () => {
            const toggleWestSide = useGetElement('.toggle-the-west-region');
            toggleWestSide && useClickEvent(toggleWestSide, () => {
                const westSideFolded = useGetElement('.west-side-block-folded'); 
                westSideFolded ? westSideFolded.style.height = '743px' : null;
            });
        });
    
        toggleWestSide && useClickEvent(toggleWestSide, () => {
            const westSideFolded = useGetElement('.west-side-block-folded'); 
            westSideFolded ? westSideFolded.style.height = '743px' : null;
        });

        westSideFolded ? westSideFolded.style.height = '743px' : null;
        useClickEvent(westSideTopButton , () => {
        const westSideFolded = useGetElement('.west-side-block-folded'); 
        westSideFolded.style.height = '743px';
        });

        useClickEvent(westSideDragZoneButton , () => {
            const westSideFolded = useGetElement('.west-side-block-folded'); 
            westSideFolded ? westSideFolded.style.height = '743px' : null;
        });

        eastSideFolded ? eastSideFolded.style.height = '743px' : null;
        useClickEvent(eastSideTopButton, () => {
        const eastSideFolded = useGetElement('.east-side-block-folded');
        eastSideFolded.style.height = '743px';
        });

        useClickEvent(eastSideDragZoneButton , () => {
            const eastSideFolded = useGetElement('.east-side-block-folded'); 
            eastSideFolded ? eastSideFolded.style.height = '678px' : null;
        });
         southSideBlock.remove();
         southParent.appendChild(southSideFolded);
    }else{
        southSideFolded.outerHTML = southSideHtml;
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

    middleDescriptionPlace.style.height = `${middleDescriptionPlace.clientHeight - southDescriptionPlace.clientHeight}px`;
    eastDescriptionPlace.style.height = '615px';
    
    westSideNavigationPanel.style.height = '512px';
    westSideSettingsPanel.style.height = '512px';
    westSideInformationPanel.style.height = '512px';

    useClickEvent(centerPanelButton, () => {
        const toggleWestSide = useGetElement('.toggle-the-west-region');
        toggleWestSide && useClickEvent(toggleWestSide, () => {
            const westSideFolded = useGetElement('.west-side-block-folded'); 
            westSideFolded ? westSideFolded.style.height = '678px' : null;
        });
    });

    useClickEvent(closeMeClose , () => {
        const toggleWestSide = useGetElement('.toggle-the-west-region');
        toggleWestSide && useClickEvent(toggleWestSide, () => {
            const westSideFolded = useGetElement('.west-side-block-folded'); 
            westSideFolded ? westSideFolded.style.height = '678px' : null;
        });
    });

    toggleWestSide && useClickEvent(toggleWestSide, () => {
        const westSideFolded = useGetElement('.west-side-block-folded'); 
        westSideFolded ? westSideFolded.style.height = '678px' : null;
    });

    westSideFolded ? westSideFolded.style.height = '678px' : null;
    useClickEvent(westSideTopButton , () => {
        const westSideFolded = useGetElement('.west-side-block-folded'); 
        westSideFolded.style.height = '678px';
    });

    useClickEvent(westSideDragZoneButton , () => {
        const westSideFolded = useGetElement('.west-side-block-folded'); 
        westSideFolded ? westSideFolded.style.height = '678px' : null;
    });

    eastSideFolded ? eastSideFolded.style.height = '678px' : null;
    useClickEvent(eastSideTopButton, () => {
        const eastSideFolded = useGetElement('.east-side-block-folded');
        eastSideFolded.style.height = '678px';
    });

    useClickEvent(eastSideDragZoneButton , () => {
        const eastSideFolded = useGetElement('.east-side-block-folded'); 
        eastSideFolded ? eastSideFolded.style.height = '678px' : null;
    });

    navigationButton && useClickEvent(navigationButton, () => {
        westSideNavigationPanel.style.height = '512px';
    });
    settingsButton && useClickEvent(settingsButton, () => {
        westSideSettingsPanel.style.height ='512px';
    });
    informationButton && useClickEvent(informationButton, () => {
        westSideInformationPanel.style.height = '512px';
    });

        useClickEvent(southSideTopButton, () => {
            const southSideBlock = useGetElement('.south-side-block');
            const westSideFolded = useGetElement('.west-side-block-folded');  
            const eastSideFolded = useGetElement('.east-side-block-folded');
    
            middleDescriptionPlace.style.height = `${middleDescriptionPlace.clientHeight + southDescriptionPlace.clientHeight}px`;
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
    
            useClickEvent(centerPanelButton, () => {
                const toggleWestSide = useGetElement('.toggle-the-west-region');
                toggleWestSide && useClickEvent(toggleWestSide, () => {
                    const westSideFolded = useGetElement('.west-side-block-folded'); 
                    westSideFolded ? westSideFolded.style.height = '743px' : null;
                });
            });
        
            useClickEvent(closeMeClose , () => {
                const toggleWestSide = useGetElement('.toggle-the-west-region');
                toggleWestSide && useClickEvent(toggleWestSide, () => {
                    const westSideFolded = useGetElement('.west-side-block-folded'); 
                    westSideFolded ? westSideFolded.style.height = '743px' : null;
                });
            });
        
            toggleWestSide && useClickEvent(toggleWestSide, () => {
                const westSideFolded = useGetElement('.west-side-block-folded'); 
                westSideFolded ? westSideFolded.style.height = '743px' : null;
            });
    
            westSideFolded ? westSideFolded.style.height = '743px' : null;
            useClickEvent(westSideTopButton , () => {
            const westSideFolded = useGetElement('.west-side-block-folded'); 
            westSideFolded.style.height = '743px';
            });
    
            useClickEvent(westSideDragZoneButton , () => {
                const westSideFolded = useGetElement('.west-side-block-folded'); 
                westSideFolded ? westSideFolded.style.height = '743px' : null;
            });
    
            eastSideFolded ? eastSideFolded.style.height = '743px' : null;
            useClickEvent(eastSideTopButton, () => {
            const eastSideFolded = useGetElement('.east-side-block-folded');
            eastSideFolded.style.height = '743px';
            });
    
            useClickEvent(eastSideDragZoneButton , () => {
                const eastSideFolded = useGetElement('.east-side-block-folded'); 
                eastSideFolded ? eastSideFolded.style.height = '678px' : null;
            });
            southSideBlock.remove();
            southParent.appendChild(southSideFolded);
        });
    }
})