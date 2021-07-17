const eastFoldedFolder = document.querySelector('.east-folded-folder-close');
const westFoldedFolder = document.querySelector('.west-folded-folder-close');

const navigationCategoryPanel = document.querySelector('.navigation-panel');
const settingsCategoryPanel = document.querySelector('.settings-panel');
const informationCategoryPanel = document.querySelector('.information-panel');

southSideFoldedTopButton.addEventListener('click', () => {
    westSideBlock.style.height = 743 - 64 + 'px';
    eastSideBlock.style.height = 743 - 64 + 'px';


    closeMeDescriptionPlace.style.height = 721 - 64 + 'px';
    centerPanelDescriptionPlace.style.height = 721 - 64 + 'px';

    eastFoldedFolder.style.height = 743 - 64 + 'px';
    westFoldedFolder.style.height = 743 - 64 + 'px';

    propertyGridDescriptionPlace.style.height = 645 - 64 + 'px';
    aTabDescriptionPlace.style.height = 645 - 64 + 'px';

    navigationCategoryPanel.classList.add('short');
    settingsCategoryPanel.classList.add('short');
    informationCategoryPanel.classList.add('short');
});

southSideTopButton.addEventListener('click', () => {
    westSideBlock.style.height = 743 + 'px';
    eastSideBlock.style.height = 743 + 'px';

    closeMeDescriptionPlace.style.height = 721  + 'px';
    centerPanelDescriptionPlace.style.height = 721  + 'px';

    eastFoldedFolder.style.height = 743  + 'px';
    westFoldedFolder.style.height = 743  + 'px';

    propertyGridDescriptionPlace.style.height = 645  + 'px';
    aTabDescriptionPlace.style.height = 645  + 'px';

    navigationCategoryPanel.classList.remove('short');
    settingsCategoryPanel.classList.remove('short');
    informationCategoryPanel.classList.remove('short');
});

southSideDragZone.addEventListener('click', () => {
    if(southSideDragZone.classList.contains('south-side-folded')){
        westSideBlock.style.height = 743 - 64 + 'px';
        eastSideBlock.style.height = 743 - 64 + 'px';


        closeMeDescriptionPlace.style.height = 721 - 64 + 'px';
        centerPanelDescriptionPlace.style.height = 721 - 64 + 'px';

        eastFoldedFolder.style.height = 743 - 64 + 'px';
        westFoldedFolder.style.height = 743 - 64 + 'px';

        propertyGridDescriptionPlace.style.height = 645 - 64 + 'px';
        aTabDescriptionPlace.style.height = 645 - 64 + 'px';

        navigationCategoryPanel.classList.add('short');
        settingsCategoryPanel.classList.add('short');
        informationCategoryPanel.classList.add('short');
    
    }else{
        westSideBlock.style.height = 743 + 'px';
        eastSideBlock.style.height = 743 + 'px';

        closeMeDescriptionPlace.style.height = 721  + 'px';
        centerPanelDescriptionPlace.style.height = 721  + 'px';

        eastFoldedFolder.style.height = 743  + 'px';
        westFoldedFolder.style.height = 743  + 'px';

        propertyGridDescriptionPlace.style.height = 645  + 'px';
        aTabDescriptionPlace.style.height = 645  + 'px';

        navigationCategoryPanel.classList.remove('short');
        settingsCategoryPanel.classList.remove('short');
        informationCategoryPanel.classList.remove('short');
        }

})



























