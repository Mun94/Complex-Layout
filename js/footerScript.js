const eastFoldedFolder = document.querySelector('.east-folded-folder-close');
const westFoldedFolder = document.querySelector('.west-folded-folder-close');

// southSideFolde(dTopButton.addEventListener('click', () => {
//     setTimeout(() => {
//         closeMeDescriptionPlace.style.height = 721 - 64 + 'px';
//         centerPanelDescriptionPlace.style.height = 721 - 64 + 'px';
    
//         eastFoldedFolder.style.height = 743 - 64 + 'px';
//         westFoldedFolder.style.height = 743 - 64 + 'px';
    
//         propertyGridDescriptionPlace.style.height = 645 - 64 + 'px';
//         aTabDescriptionPlace.style.height = 645 - 64 + 'px';
    
//         const westCategoryPanel = document.querySelector('.open-west-panel .west-category-panel');
//         westCategoryPanel.style.height = 578 - 64 + 'px';
//     }, 400)
// });


// southSideTopButton.addEventListener('click', () => {
//     closeMeDescriptionPlace.style.height = 721 + 64 + 'px';
//     centerPanelDescriptionPlace.style.height = 721 + 64 + 'px';

//     eastFoldedFolder.style.height = 743 + 64 + 'px';
//     westFoldedFolder.style.height = 743 + 64 + 'px';

//     propertyGridDescriptionPlace.style.height = 645 + 64 + 'px';
//     aTabDescriptionPlace.style.height = 645 + 64 + 'px';

//     const westCategoryPanel = document.querySelector('.open-west-panel .west-category-panel');
//     westCategoryPanel.style.height = 578 + 64 + 'px';
// });

// const southSideTopFoldedButton = document.querySelector('.south-side-block-folded .button');
// const southSideFolded = document.querySelector('.south-side-block-folded');
// const southParent = document.querySelector('.footer');
// const southSideDragZone = document.querySelector('.south-side-drag-zone');

// const westSideNavigationPanel = document.querySelector('.navigation-panel');
// const westSideSettingsPanel = document.querySelector('.settings-panel');
// const westSideInformationPanel = document.querySelector('.information-panel');

// // south side drag zone 창 크기 조절
// const onSouthMouseMove =  e => {
//     const southSideBlock = document.querySelector('.south-side-block');
//     const westSideFolded = document.querySelector('.west-side-block-folded');
//     const eastSideFolded = document.querySelector('.east-side-block-folded');

//     westSideFolded ? westSideFolded.style.height = 743 - 110 - southSideBlock.clientHeight + 148  + 'px' :null; // height가 678px이 돼야 함
//     eastSideFolded ? eastSideFolded.style.height = 743 - 110 - southSideBlock.clientHeight + 148  + 'px' :null;

//     southSideBlock ? southSideBlock.style.minHeight = '110px' : null;
//     southSideBlock ? southSideBlock.style.maxHeight = '465px' : null;
//     southSideBlock ? southSideBlock.style.height = (110 + 844 - e.screenY) + 'px' : null;
    
//     southSideBlock ? middleDescriptionPlace.style.height = 721 - 110 - southSideBlock.clientHeight + 148 + 'px' : null;
//     southSideBlock ? eastDescriptionPlace.style.height = 680 - 110 - southSideBlock.clientHeight + 148 + 'px' : null;
    
//     southSideBlock ? westSideNavigationPanel.style.height = 578 - 110 - southSideBlock.clientHeight + 148 + 'px' : null;
//     southSideBlock ?  westSideSettingsPanel.style.height = 578 - 110 - southSideBlock.clientHeight + 148 + 'px' : null;
//     southSideBlock ? westSideInformationPanel.style.height = 578 - 110 - southSideBlock.clientHeight + 148 + 'px': null;
// };

// const onSouthMouseDown = e => {
//     document.addEventListener('mousemove', onSouthMouseMove);
// };

// southSideDragZone.addEventListener('mousedown', onSouthMouseDown);

// // 마우스 업
// document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', onSouthMouseMove);

//     const onClickFoldButton = (button, side) => {
//         button && button.addEventListener('click', () => {
//             const folded = document.querySelector(`.${side}`+'-side-block-folded');
//             const middleBlock = document.querySelector('.middle-block');
    
//             folded ? folded.style.height = middleBlock.clientHeight-19 + 'px' : null;
//         });
//     };

//     const westSideTopButton = document.querySelector('.west-side-block .button');
//     onClickFoldButton(westSideTopButton, 'west');

//     const eastSideTopButton = document.querySelector('.east-side-block .button');
//     onClickFoldButton(eastSideTopButton, 'east');

//     const southSideTopButton = document.querySelector('.south-side-block .button');
//     southSideTopButton && southSideTopButton.addEventListener('click', () => {
//         const middleDescriptionPlace = document.querySelector('.middle-block .description');

//         middleDescriptionPlace.style.height = '721px';
//     });

//     const westSideDragZoneButton = document.querySelector('.west-side-drag-zone .button');
//     onClickFoldButton(westSideDragZoneButton, 'west');

//     const eastSideDragZoneButton = document.querySelector('.east-side-drag-zone .button');
//     onClickFoldButton(eastSideDragZoneButton, 'east');

//     const toggleWestSide = document.querySelector('.toggle-the-west-region');
//     onClickFoldButton(toggleWestSide, 'west');

//     const onClickWestSideCategory = (button, side) =>{
//         button && button.addEventListener('click', () => {
//             const southSideBlock = document.querySelector('.south-side-block');
//             const panel = document.querySelector(`.${side}`+'-panel');
            
//             panel && southSideBlock ? panel.style.height = 578 - 110 - southSideBlock.clientHeight + 155 + 'px' : null;
//         });
//     };

//     const westSideNavigationButton = document.querySelector('.navigation-button');
//     onClickWestSideCategory(westSideNavigationButton, 'navigation');

//     const westSideSettingsButton = document.querySelector('.settings-button');
//     onClickWestSideCategory(westSideSettingsButton, 'settings');

//     const westSideInformationButton = document.querySelector('.information-button');
//     onClickWestSideCategory(westSideInformationButton, 'information');
// });

// // south side 상단 버튼 눌렀을 때
// const southSideHtml = `
//     <div class= "south-side-block">
//         <div class= "top">
//             <div class= "title">
//                 south
//             </div>
//             <button class= "button">
//                 v
//             </button>
//         </div>

//         <div class= "description"></div>
//     </div>
// `;

// southSideTopFoldedButton.addEventListener('click', () => {
//     southSideDragZoneButton.style.transform = 'rotate(180deg)';
//     southSideFolded.outerHTML = southSideHtml;

//     const southDescriptionPlace = document.querySelector('.south-side-block .description');
//     const southSideTopButton = document.querySelector('.south-side-block .button');
//     const southSideBlock = document.querySelector('.south-side-block');
  
//     const navigationButton = document.querySelector('.navigation-button');
//     const settingsButton = document.querySelector('.settings-button');
//     const informationButton = document.querySelector('.information-button');

//     const toggleWestSide = document.querySelector('.toggle-the-west-region');

//     const westSideFolded = document.querySelector('.west-side-block-folded');  
//     const eastSideFolded = document.querySelector('.east-side-block-folded');

//     southDescriptionPlace.innerHTML = southDescription;

//     middleDescriptionPlace.style.height = '657px';
//     eastDescriptionPlace.style.height = '615px';
    
//     westSideNavigationPanel.style.height = '512px';
//     westSideSettingsPanel.style.height = '512px';
//     westSideInformationPanel.style.height = '512px';

//     centerPanelButton.addEventListener('click', () => {
//         const toggleWestSide = document.querySelector('.toggle-the-west-region');
//         toggleWestSide && toggleWestSide.addEventListener('click', () => {
//             const westSideFolded = document.querySelector('.west-side-block-folded'); 
//             westSideFolded ? westSideFolded.style.height = '678px' : null;
//         });
//     });

//     closeMeClose.addEventListener('click', () => {
//         const toggleWestSide = document.querySelector('.toggle-the-west-region');
//         toggleWestSide && toggleWestSide.addEventListener('click', () => {
//             const westSideFolded = document.querySelector('.west-side-block-folded'); 
//             westSideFolded ? westSideFolded.style.height = '678px' : null;
//         });
//     });

//     toggleWestSide && toggleWestSide.addEventListener('click', () => {
//         const westSideFolded = document.querySelector('.west-side-block-folded'); 
//         westSideFolded ? westSideFolded.style.height = '678px' : null;
//     });

//     westSideFolded ? westSideFolded.style.height = '678px' : null;
//     westSideTopButton.addEventListener('click' , () => {
//         const westSideFolded = document.querySelector('.west-side-block-folded'); 
//         westSideFolded.style.height = '678px';
//     });

//     westSideDragZoneButton.addEventListener('click' , () => {
//         const westSideFolded = document.querySelector('.west-side-block-folded'); 
//         westSideFolded ? westSideFolded.style.height = '678px' : null;
//     });

//     eastSideFolded ? eastSideFolded.style.height = '678px' : null;
//     eastSideTopButton.addEventListener('click', () => {
//         const eastSideFolded = document.querySelector('.east-side-block-folded');
//         eastSideFolded.style.height = '678px';
//     });

//     eastSideDragZoneButton.addEventListener('click' , () => {
//         const eastSideFolded = document.querySelector('.east-side-block-folded'); 
//         eastSideFolded ? eastSideFolded.style.height = '678px' : null;
//     });

//     navigationButton && navigationButton.addEventListener('click', () => {
//         westSideNavigationPanel.style.height = '512px';
//     });
//     settingsButton && settingsButton.addEventListener('click', () => {
//         westSideSettingsPanel.style.height ='512px';
//     });
//     informationButton && informationButton.addEventListener('click', () => {
//         westSideInformationPanel.style.height = '512px';
//     });

//     southSideTopButton.addEventListener('click', () => {
//         southSideDragZoneButton.style.transform = 'rotate(0deg)';
        
//         const westSideFolded = document.querySelector('.west-side-block-folded');  
//         const eastSideFolded = document.querySelector('.east-side-block-folded');

//         middleDescriptionPlace.style.height = '721px';
//         eastDescriptionPlace.style.height = '680px';
      
//         westSideNavigationPanel.style.height = '578px';
//         westSideSettingsPanel.style.height = '578px';
//         westSideInformationPanel.style.height = '578px';

//         navigationButton && navigationButton.addEventListener('click', () => {
//             westSideNavigationPanel.style.height = '578px';
//         });
//         settingsButton && settingsButton.addEventListener('click', () => {
//             westSideSettingsPanel.style.height = '578px';
//         });
//         informationButton && informationButton.addEventListener('click', () => {
//             westSideInformationPanel.style.height = '578px';
//         });

//         centerPanelButton.addEventListener('click', () => {
//             const toggleWestSide = document.querySelector('.toggle-the-west-region');
//             toggleWestSide && toggleWestSide.addEventListener('click', () => {
//                 const westSideFolded = document.querySelector('.west-side-block-folded'); 
//                 westSideFolded ? westSideFolded.style.height = '743px' : null;
//             });
//         });
    
//         closeMeClose.addEventListener('click' , () => {
//             const toggleWestSide = document.querySelector('.toggle-the-west-region');
//             toggleWestSide && toggleWestSide.addEventListener('click', () => {
//                 const westSideFolded = document.querySelector('.west-side-block-folded'); 
//                 westSideFolded ? westSideFolded.style.height = '743px' : null;
//             });
//         });
    
//         toggleWestSide && toggleWestSide.addEventListener('click', () => {
//             const westSideFolded = document.querySelector('.west-side-block-folded'); 
//             westSideFolded ? westSideFolded.style.height = '743px' : null;
//         });

//         westSideFolded ? westSideFolded.style.height = '743px' : null;
//         westSideTopButton.addEventListener('click' , () => {
//         const westSideFolded = document.querySelector('.west-side-block-folded'); 
//         westSideFolded.style.height = '743px';
//         });

//         westSideDragZoneButton.addEventListener('click' , () => {
//             const westSideFolded = document.querySelector('.west-side-block-folded'); 
//             westSideFolded ? westSideFolded.style.height = '743px' : null;
//         });

//         eastSideFolded ? eastSideFolded.style.height = '743px' : null;
//         eastSideTopButton.addEventListener('click', () => {
//         const eastSideFolded = document.querySelector('.east-side-block-folded');
//         eastSideFolded.style.height = '743px';
//         });

//         eastSideDragZoneButton.addEventListener('click' , () => {
//             const eastSideFolded = document.querySelector('.east-side-block-folded'); 
//             eastSideFolded ? eastSideFolded.style.height = '678px' : null;
//         });

//         southSideBlock.remove();
//         southParent.appendChild(southSideFolded);
//     });
// });

// // south side drag zone button 클릭 시 펴지고 접힘
// const southSideDragZoneButton = document.querySelector('.south-side-drag-zone .button');

// southSideDragZoneButton.addEventListener('click', () => {
//     southSideDragZoneButton.style.transform = 'rotate(0deg)';

//     if(!document.querySelector('.south-side-block-folded')){
//         const southDescriptionPlace = document.querySelector('.south-side-block .description');
//         const southSideTopButton = document.querySelector('.south-side-block .button');
//         const southSideBlock = document.querySelector('.south-side-block');
      
//         const navigationButton = document.querySelector('.navigation-button');
//         const settingsButton = document.querySelector('.settings-button');
//         const informationButton = document.querySelector('.information-button');
    
//         const toggleWestSide = document.querySelector('.toggle-the-west-region');
    
//         const westSideFolded = document.querySelector('.west-side-block-folded');  
//         const eastSideFolded = document.querySelector('.east-side-block-folded');

//         middleDescriptionPlace.style.height = '721px';
//         eastDescriptionPlace.style.height = '680px';
      
//         westSideNavigationPanel.style.height = '578px';
//         westSideSettingsPanel.style.height = '578px';
//         westSideInformationPanel.style.height = '578px';

//         navigationButton && navigationButton.addEventListener('click', () => {
//             westSideNavigationPanel.style.height = '578px';
//         });
//         settingsButton && settingsButton.addEventListener('click', () => {
//             westSideSettingsPanel.style.height = '578px';
//         });
//         informationButton && informationButton.addEventListener('click', () => {
//             westSideInformationPanel.style.height = '578px';
//         });

//         centerPanelButton.addEventListener('click', () => {
//             const toggleWestSide = document.querySelector('.toggle-the-west-region');
//             toggleWestSide && toggleWestSide.addEventListener('click', () => {
//                 const westSideFolded = document.querySelector('.west-side-block-folded'); 
//                 westSideFolded ? westSideFolded.style.height = '743px' : null;
//             });
//         });
    
//         closeMeClose.addEventListener('click' , () => {
//             const toggleWestSide = document.querySelector('.toggle-the-west-region');
//             toggleWestSide && toggleWestSide.addEventListener('click', () => {
//                 const westSideFolded = document.querySelector('.west-side-block-folded'); 
//                 westSideFolded ? westSideFolded.style.height = '743px' : null;
//             });
//         });
    
//         toggleWestSide && toggleWestSide.addEventListener('click', () => {
//             const westSideFolded = document.querySelector('.west-side-block-folded'); 
//             westSideFolded ? westSideFolded.style.height = '743px' : null;
//         });

//         westSideFolded ? westSideFolded.style.height = '743px' : null;
//         westSideTopButton.addEventListener('click' , () => {
//         const westSideFolded = document.querySelector('.west-side-block-folded'); 
//         westSideFolded.style.height = '743px';
//         });

//         westSideDragZoneButton.addEventListener('click' , () => {
//             const westSideFolded = document.querySelector('.west-side-block-folded'); 
//             westSideFolded ? westSideFolded.style.height = '743px' : null;
//         });

//         eastSideFolded ? eastSideFolded.style.height = '743px' : null;
//         eastSideTopButton.addEventListener('click', () => {
//         const eastSideFolded = document.querySelector('.east-side-block-folded');
//         eastSideFolded.style.height = '743px';
//         });

//         eastSideDragZoneButton.addEventListener('click' , () => {
//             const eastSideFolded = document.querySelector('.east-side-block-folded'); 
//             eastSideFolded ? eastSideFolded.style.height = '678px' : null;
//         });
//          southSideBlock.remove();
//          southParent.appendChild(southSideFolded);
//     }else{
//         southSideDragZoneButton.style.transform = 'rotate(180deg)';

//         southSideFolded.outerHTML = southSideHtml;
//         const southDescriptionPlace = document.querySelector('.south-side-block .description');
//         const southSideTopButton = document.querySelector('.south-side-block .button');
//         const southSideBlock = document.querySelector('.south-side-block');
    
//         const navigationButton = document.querySelector('.navigation-button');
//         const settingsButton = document.querySelector('.settings-button');
//         const informationButton = document.querySelector('.information-button');

//         const toggleWestSide = document.querySelector('.toggle-the-west-region');

//         const westSideFolded = document.querySelector('.west-side-block-folded');  
//         const eastSideFolded = document.querySelector('.east-side-block-folded');

//         southDescriptionPlace.innerHTML = southDescription;

//         middleDescriptionPlace.style.height = '657px';
//         eastDescriptionPlace.style.height = '615px';
        
//         westSideNavigationPanel.style.height = '512px';
//         westSideSettingsPanel.style.height = '512px';
//         westSideInformationPanel.style.height = '512px';

//         centerPanelButton.addEventListener('click', () => {
//             const toggleWestSide = document.querySelector('.toggle-the-west-region');
//             toggleWestSide && toggleWestSide.addEventListener('click', () => {
//                 const westSideFolded = document.querySelector('.west-side-block-folded'); 
//                 westSideFolded ? westSideFolded.style.height = '678px' : null;
//             });
//         });

//         closeMeClose.addEventListener('click' , () => {
//             const toggleWestSide = document.querySelector('.toggle-the-west-region');
//             toggleWestSide && toggleWestSide.addEventListener('click', () => {
//                 const westSideFolded = document.querySelector('.west-side-block-folded'); 
//                 westSideFolded ? westSideFolded.style.height = '678px' : null;
//             });
//         });

//         toggleWestSide && toggleWestSide.addEventListener('click', () => {
//             const westSideFolded = document.querySelector('.west-side-block-folded'); 
//             westSideFolded ? westSideFolded.style.height = '678px' : null;
//         });

//         westSideFolded ? westSideFolded.style.height = '678px' : null;
//         westSideTopButton.addEventListener('click' , () => {
//             const westSideFolded = document.querySelector('.west-side-block-folded'); 
//             westSideFolded.style.height = '678px';
//         });

//         westSideDragZoneButton.addEventListener('click' , () => {
//             const westSideFolded = document.querySelector('.west-side-block-folded'); 
//             westSideFolded ? westSideFolded.style.height = '678px' : null;
//         });

//         eastSideFolded ? eastSideFolded.style.height = '678px' : null;
//         eastSideTopButton.addEventListener('click', () => {
//             const eastSideFolded = document.querySelector('.east-side-block-folded');
//             eastSideFolded.style.height = '678px';
//         });

//         eastSideDragZoneButton.addEventListener('click' , () => {
//             const eastSideFolded = document.querySelector('.east-side-block-folded'); 
//             eastSideFolded ? eastSideFolded.style.height = '678px' : null;
//         });

//         navigationButton && navigationButton.addEventListener('click', () => {
//             westSideNavigationPanel.style.height = '512px';
//         });
//         navigationButton && settingsButton.addEventListener('click', () => {
//             westSideSettingsPanel.style.height ='512px';
//         });
//         navigationButton && informationButton.addEventListener('click', () => {
//             westSideInformationPanel.style.height = '512px';
//         });

//             southSideTopButton.addEventListener('click', () => {
//                 const southSideBlock = document.querySelector('.south-side-block');
//                 const westSideFolded = document.querySelector('.west-side-block-folded');  
//                 const eastSideFolded = document.querySelector('.east-side-block-folded');
        
//                 middleDescriptionPlace.style.height = `${middleDescriptionPlace.clientHeight + southDescriptionPlace.clientHeight}px`;
//                 eastDescriptionPlace.style.height = '680px';
            
//                 westSideNavigationPanel.style.height = '578px';
//                 westSideSettingsPanel.style.height = '578px';
//                 westSideInformationPanel.style.height = '578px';
        
//                 navigationButton && navigationButton.addEventListener('click', () => {
//                     westSideNavigationPanel.style.height = '578px';
//                 });
//                 settingsButton && settingsButton.addEventListener('click', () => {
//                     westSideSettingsPanel.style.height = '578px';
//                 });
//                 informationButton && informationButton.addEventListener('click', () => {
//                     westSideInformationPanel.style.height = '578px';
//                 });
        
//                 centerPanelButton.addEventListener('click', () => {
//                     const toggleWestSide = document.querySelector('.toggle-the-west-region');
//                     toggleWestSide && toggleWestSide.addEventListener('click', () => {
//                         const westSideFolded = document.querySelector('.west-side-block-folded'); 
//                         westSideFolded ? westSideFolded.style.height = '743px' : null;
//                     });
//                 });
            
//                 closeMeClose.addEventListener('click', () => {
//                     const toggleWestSide = document.querySelector('.toggle-the-west-region');
//                     toggleWestSide && toggleWestSide.addEventListener('click', () => {
//                         const westSideFolded = document.querySelector('.west-side-block-folded'); 
//                         westSideFolded ? westSideFolded.style.height = '743px' : null;
//                     });
//                 });
            
//                 toggleWestSide && toggleWestSide.addEventListener('click', () => {
//                     const westSideFolded = document.querySelector('.west-side-block-folded'); 
//                     westSideFolded ? westSideFolded.style.height = '743px' : null;
//                 });
        
//                 westSideFolded ? westSideFolded.style.height = '743px' : null;
//                 westSideTopButton.addEventListener('click' , () => {
//                 const westSideFolded = document.querySelector('.west-side-block-folded'); 
//                 westSideFolded.style.height = '743px';
//                 });
        
//                 westSideDragZoneButton.addEventListener('click' , () => {
//                     const westSideFolded = document.querySelector('.west-side-block-folded'); 
//                     westSideFolded ? westSideFolded.style.height = '743px' : null;
//                 });
        
//                 eastSideFolded ? eastSideFolded.style.height = '743px' : null;
//                 eastSideTopButton.addEventListener('click', () => {
//                 const eastSideFolded = document.querySelector('.east-side-block-folded');
//                 eastSideFolded.style.height = '743px';
//                 });
        
//                 eastSideDragZoneButton.addEventListener('click' , () => {
//                     const eastSideFolded = document.querySelector('.east-side-block-folded'); 
//                     eastSideFolded ? eastSideFolded.style.height = '678px' : null;
//                 });
//                 southSideBlock.remove();
//                 southParent.appendChild(southSideFolded);
//             });
//     };
// });