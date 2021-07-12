const foldedHtml = (side, arrow) => `
    <div class= "${side}-side-block-folded">
        <div class= "top">
            <button class= "button">
                ${arrow}
            </button>
            <div class= "title">
                ${side}
            </div>
        </div>
    </div>
`

const westSideFoldedHtml = `
    ${foldedHtml('west', '>')}
`;

const eastSideFoldedHtml = `
    ${foldedHtml('east', '<')}
`;

const southSideFoldedHtml = `
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