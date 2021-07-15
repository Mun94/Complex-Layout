const bodyWest = document.querySelector('.body-block .west');

// body west side
const westSideCategory = (categoryName, text, hiddenStatus) =>
   ` <div class= ${categoryName}>
        <div class= "${categoryName}-button-wrapper">
            <div class= "button-name">
                <div class= "category-img"></div>    
                ${categoryName}
            </div>
            <button class= "${categoryName}-button ${hiddenStatus}"></button>
        </div>
        <div class= "${categoryName}-panel ${hiddenStatus}" >
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
            <!--${westSideCategory("navigation", "hi im the west panel", "visible")}-->
            <!--${westSideCategory("settings", "Some settings in here.", "hidden")}-->
            <!--${westSideCategory("information", "Some info in here.", "hidden")}-->
            ${westSideCategory("navigation", "hi im the west panel", "visible")}
            ${westSideCategory("settings", "Some settings in here.", "visible")}
            ${westSideCategory("information", "Some info in here.", "visible")}
        </div>
    </div>
`;

// body middle
const middleAndEastCategory = (firstTab, secondTab) => `
    <div class= "category">
        <div class= "${firstTab}-block">
            <span class= "${firstTab}-close-icon"></span>
            <button class= "${firstTab}-button">
                ${firstTab}
            </button>
        </div>
        <button class= "${secondTab}-button">${secondTab}</button>
    </div>
`;

const bodyMiddle = document.querySelector('.body-block .middle');

bodyMiddle.innerHTML = `
    <div class= "middle-block">
        ${middleAndEastCategory("close-me", "center-panel")}
        <div class= "bottom-background"></div>

        <div class= "description"></div>
    </div>
`;

// body east side
const bodyEast = document.querySelector('.body-block .east');

bodyEast.innerHTML = `
    <div class="east-side-drag-zone">
        <div class="button">
        </div>
    </div>
    <div class= "east-side-block">
        <div class= "top">
            <div class= "title">
                east side
            </div>
            <button class= "button">
            </button>
        </div>

        <div class= "grid-description">
        </div>

        <div class= "bottom-background"></div>
        ${middleAndEastCategory("property-grid", "a-tab")}
    </div>
`;