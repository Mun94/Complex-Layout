const southDescriptionPlace = useGetElement('.south-side-block .description');

southDescriptionPlace.innerHTML = southDescription;

const southSideBlock = useGetElement('.south-side-block');
const southSideTopButton = useGetElement('.south-side-block .button');
const southParent = useGetElement('.footer');

useClickEvent(southSideTopButton, () => {
    southSideBlock.outerHTML = southSideFoldedHtml;

    const southSideFolded = useGetElement('.south-side-block-folded');
    const southSideTopFoldedButton = useGetElement('.south-side-block-folded .button');

    southSideTopFoldedButton && useClickEvent(southSideTopFoldedButton, ()=>{
        southSideFolded.remove();
        southParent.appendChild(southSideBlock);
    })
});