const foldedHtml = (side) => `
    <div class= "${side}-side-block-folded">
        <div class= "top">
            <button class= "button"></button>
            <div class= "title">
                ${side}
            </div>
        </div>
    </div>
`;

const westSideFoldedHtml = `
    ${foldedHtml('west')}
`;

const eastSideFoldedHtml = `
    ${foldedHtml('east')}
`;

// const southSideFoldedHtml = `
//     <div class= "south-side-drag-zone">
//         <div class="button">
//         </div> 
//     </div>
//     ${foldedHtml('south')}
// `;