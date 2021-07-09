const bodyWest = useGetElement('.body-block .west');

// body west side
const westSideCategory = (categoryName, text, buttonIcon, display) =>
   ` <div class= ${categoryName}>
        <div class= "${categoryName}-button-wrapper">
            <div class= "button-name">
                ${categoryName}
            </div>
            <button class= "${categoryName}-button">${buttonIcon}</button>
        </div>
        <div class= "${categoryName}-panel" style="display:${display}">
            ${text}
        </div>
    </div>`
;
///// inline 요소에 바로 스타일을 적용해야 getElement속성을 했을 때 스타일을 갸져와서 if문에서 사용할 수 있음

bodyWest.innerHTML = `
    <div class= "west-side-block">
        <div class= "top">
            <div class= "title">
                west
            </div>
            <button class= "button">
                <
            </button>
        </div>

        <div class= "category">
            ${westSideCategory("navigation", "hi im the west panel", "-", "block")}
            ${westSideCategory("settings", "Some settings in here.", "+", "none")}
            ${westSideCategory("information", "Some info in here.", "+", "none")}
        </div>
    </div>
`;

// body middle
const middleEastCategory = (firstTab, secondTab) => `
    <div class= "category">
        <div class= "${firstTab}-block">
            <span class= "${firstTab}-close-icon">x</span>
            <button class= "${firstTab}-button">
                ${firstTab}
            </button>
        </div>
        <button class= "${secondTab}-button">${secondTab}</button>
    </div>
`;

const bodyMiddle = useGetElement('.body-block .middle');

bodyMiddle.innerHTML = `
    <div class= "middle-block">
        ${middleEastCategory("close-me", "center-panel")}

        <div class= "description"></div>
    </div>
`;

// body east side
const bodyEast = useGetElement('.body-block .east');

bodyEast.innerHTML = `
    <div class= "east-side-block">
        <div class= "top">
            <div class= "title">
                east side
            </div>
            <button class= "button">
                >
            </button>
        </div>

        <div class= "grid-description"></div>

        ${middleEastCategory("property-grid", "a-tab")}
    </div>
`;