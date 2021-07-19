const body = document.querySelector('.body-block');

const bodyWest = body.querySelector('.west');
const bodyMiddle = body.querySelector('.middle');
const bodyEast = body.querySelector('.east');

// body west side
const westSideCategory = (categoryName, text) =>
   ` <div class= ${categoryName}>
        <div class= "${categoryName}-button-wrapper">
            <div class= "button-name">
                <div class= "category-img"></div>    
                ${categoryName}
            </div>
            <button class= "${categoryName}-button west-category-button"></button>
        </div>
        <div class= "${categoryName}-panel west-category-panel" >
            ${text}
        </div>
    </div>`;

// 바로 스타일 값을 가져와서 if문에 사용하기 위해 스타일을 인라인으로 작성함
bodyWest.innerHTML = `
    <div class= "west-side-block">
        <div class= "top">
            <div class= "title">
                west
            </div>
            <button class= "button">
            </button>
        </div>

        <div class= "category">
            ${westSideCategory('navigation', 'hi im the west panel')}
            ${westSideCategory('settings', 'Some settings in here.')}
            ${westSideCategory('information', 'Some info in here.')}
        </div>
    </div>
`;

// body middle
const middleAndEastCategory = (firstTab, secondTab) => `
    <div class= "category">
        <div class= "${firstTab}-block">
            <span class= "${firstTab}-close-icon"></span>
            <button class= "${firstTab}-button category-click-true">
                ${firstTab}
            </button>
        </div>
        <button class= "${secondTab}-button">${secondTab}</button>
    </div>
`;

bodyMiddle.innerHTML = `
    <div class= "middle-block">
        ${middleAndEastCategory('close-me', 'center-panel')}
        <div class= "bottom-border"></div>

        <div class= "close-me-description">${closeMe}</div>
        <div class= "center-panel-description hidden-description">${centerPanel}</div>
    </div>
`;

// body east side
bodyEast.innerHTML = `
    <div class= "east-side-block">
        <div class= "top">
            <div class= "title">
                east side
            </div>
            <button class= "button">
            </button>
        </div>

        <div class= "property-grid-description">${propertyGrid}</div>
        <div class= "a-tab-description hidden-description">${aTab}</div>

        <div class= "top-border"></div>
        ${middleAndEastCategory('property-grid', 'a-tab')}
    </div>
`;