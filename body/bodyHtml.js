const body = document.querySelector('.body');

const westSideCategory = (categoryName, text, buttonIcon) => {
    return (
   ` <div class= ${categoryName}>
        <div class= "${categoryName}-button-wrapper">
            <div class= "button-name">
                ${categoryName}
            </div>
            <button class= "${categoryName}-button">${buttonIcon}</button>
        </div>
        <div class= "${categoryName}-panel">
            ${text}
        </div>
    </div>`
)};

body.innerHTML = `
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
            ${westSideCategory("navigation", "hi im the west panel", "-")}
            ${westSideCategory("settings", "Some settings in here.", "+")}
            ${westSideCategory("information", "Some info in here.", "+")}
        </div>
    </div>
`;