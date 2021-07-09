const bodyWest = useGetElement('.body-block .west');

// body west side
const westSideCategory = (categoryName, text, buttonIcon, display) => {
    return (
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
)};
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
const bodyMiddle = useGetElement('.body-block .middle');

bodyMiddle.innerHTML = `
    <div class= "middle-block">
        <div class= "category">
            <button class= "close-me-button">Close Me</button>
            <button class= "center-panel-button">Center Panel</button>
        </div>

        <div class= "description"></div>
    </div>
`;