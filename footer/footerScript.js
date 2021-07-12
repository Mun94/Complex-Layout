const southSideTopFoldedButton = useGetElement('.south-side-block-folded .button');
const southSideFolded = useGetElement('.south-side-block-folded');
const southParent = useGetElement('.footer');
const southSideDragZone = useGetElement('.south-side-drag-zone');

const westSideNavigationPanel = useGetElement('.navigation-panel');
const westSideSettingsPanel = useGetElement('.settings-panel');
const westSideInformationPanel = useGetElement('.information-panel');

// south side drag zone 창 크기 조절
const onSouthMouseMove =  e => {
    const southSideBlock = useGetElement('.south-side-block');

    southSideBlock.style.minHeight = '111px';
    southSideBlock.style.maxHeight = '465px';

    southSideBlock ? southSideBlock.style.height = (111 + 844 - e.screenY) + 'px' : null;
    middleDescriptionPlace.style.height = 657 - 111 - southSideBlock.clientHeight + 148 + 64 + 'px';
    eastDescriptionPlace.style.height = 615 - 111 - southSideBlock.clientHeight + 148 + 64 + 'px';
    
    westSideNavigationPanel.style.height = 512 - 111 - southSideBlock.clientHeight + 148 + 64 + 'px';
    westSideSettingsPanel.style.height = 512 - 111 - southSideBlock.clientHeight + 148 + 64 + 'px';
    westSideInformationPanel.style.height = 512 - 111 - southSideBlock.clientHeight + 148 + 64 + 'px';
};

const onSouthMouseDown = e => {
    document.addEventListener('mousemove', onSouthMouseMove);
};

southSideDragZone.addEventListener('mousedown', onSouthMouseDown);

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onSouthMouseMove);

    const onClickFoldButton = (button, side) => {
        button && useClickEvent(button, () => {
            const folded = useGetElement(`.${side}`+'-side-block-folded');
            const middleBlock = useGetElement('.middle-block');
    
            folded ? folded.style.height = middleBlock.clientHeight-19 + 'px' : null;
        });
    };

    const westSideTopButton = useGetElement('.west-side-block .button');
    onClickFoldButton(westSideTopButton, 'west');

    const eastSideTopButton = useGetElement('.east-side-block .button');
    onClickFoldButton(eastSideTopButton, 'east');

    const westSideDragZoneButton = useGetElement('.west-side-drag-zone .button');
    onClickFoldButton(westSideDragZoneButton, 'west');

    const eastSideDragZoneButton = useGetElement('.east-side-drag-zone .button');
    onClickFoldButton(eastSideDragZoneButton, 'east');

    const onClickWestSideCategory = (button, side) =>{
        button && useClickEvent(button, () => {
            const southSideBlock = useGetElement('.south-side-block');
            const panel = useGetElement(`.${side}`+'-panel');
            
            panel ? panel.style.height = 512 - 111 - southSideBlock.clientHeight + 148 + 64 + 'px' : null;
        });
    };

    const westSideNavigationButton = useGetElement('.navigation-button');
    onClickWestSideCategory(westSideNavigationButton, 'navigation');

    const westSideSettingsButton = useGetElement('.settings-button');
    onClickWestSideCategory(westSideSettingsButton, 'settings');

    const westSideInformationButton = useGetElement('.information-button');
    onClickWestSideCategory(westSideInformationButton, 'information');
});

// south side 상단 버튼 눌렀을 때
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

    middleDescriptionPlace.style.height = '657px';
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

        middleDescriptionPlace.style.height = '721px';
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

        middleDescriptionPlace.style.height = '721px';
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

    middleDescriptionPlace.style.height = '657px';
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
    };
});