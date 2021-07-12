// west side button controll(클릭시 왼쪽으로 접힘)
const westSideBlock = useGetElement('.west-side-block'); // toggle the west region에서도 사용됨!! 지역 변수로 사용하자니.. 코드가 너무 많아짐
const westSideDragZone = useGetElement('.west-side-drag-zone');

const westParent = useGetElement('.west'); // 전체 블럭
const westSideTopButton = useGetElement('.west-side-block .button');

const spreadFold = (fold, button) => {
    button && useClickEvent(button, () => {
        westSideDragZone.addEventListener('mousedown', onMouseDown);
        westParent.style.width = '30%';
        fold.remove();
        westParent.appendChild(westSideBlock); // outerHTML을 사용하면 [object HTMLDivElement]이 출력됨
        westParent.appendChild(westSideDragZone);
    });
};

useClickEvent(westSideTopButton, e=> {
    westSideBlock.outerHTML = westSideFoldedHtml; // foldHtml.js 파일에 있음
    westParent.style.width = 'initial';
    westParent.style.minWidth = 'initial';
    
    const westSideFolded = useGetElement('.west-side-block-folded');  
    const westSideTopFoldedButton = useGetElement('.west-side-block-folded .button');

    westSideDragZone.removeEventListener('mousedown', onMouseDown);

    spreadFold(westSideFolded, westSideTopFoldedButton);
});

// west side drag zone 클릭 시 왼쪽으로 접힘
const westSideDragZoneButton = useGetElement('.west-side-drag-zone .button');

const onClickDragZoneButton = (folded, block, foldedHtml, blockFoldedClassName, parent, dragZone, checkDragZone) => {
    if(!folded){
        block.outerHTML = foldedHtml;
        parent.style.width = 'initial';
        parent.style.minWidth = 'initial';

        westSideDragZone.removeEventListener('mousedown', onMouseDown);

        const topFoldedButton = useGetElement(`${blockFoldedClassName} .button`);

        useClickEvent(topFoldedButton, () => {
            const folded = useGetElement(`${blockFoldedClassName}`);
            parent.style.width = '30%';
            folded.remove();
            parent.appendChild(block); // outerHTML을 사용하면 [object HTMLDivElement]이 출력됨
            
            westSideDragZone.addEventListener('mousedown', onMouseDown);

            checkDragZone && parent.appendChild(dragZone);
        });
    }else{
        parent.style.width = '30%';
        folded.remove();
        parent.appendChild(block); // outerHTML을 사용하면 [object HTMLDivElement]이 출력됨
        
        westSideDragZone.addEventListener('mousedown', onMouseDown);

        checkDragZone && parent.appendChild(dragZone);
    };
};

useClickEvent(westSideDragZoneButton, () => {
    const westSideFolded = useGetElement('.west-side-block-folded');

    onClickDragZoneButton(westSideFolded, westSideBlock, westSideFoldedHtml, '.west-side-block-folded', westParent, westSideDragZone, true);
});

// west side drag zone 창 크기 조절
const mouseEventCall = e => {
    westParent.style.width = e.screenX + 'px';
    westParent.style.maxWidth = '400px';
    westParent.style.minWidth = '175px';
};

const onMouseDown = () => {
    document.addEventListener('mousemove', mouseEventCall);
};

westSideDragZone.addEventListener('mousedown', onMouseDown);

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', mouseEventCall);
});


///////
const {style: navigationPanelStyle} = useGetElement('.navigation-panel');
const {style: settingsPanelStyle} = useGetElement('.settings-panel');
const {style: informationPanelStyle} = useGetElement('.information-panel');
const navigationButton = useGetElement('.navigation-button');
const settingsButton = useGetElement('.settings-button');
const informationButton = useGetElement('.information-button');

useClickEvent(navigationButton, e => {
    categoryFold(
        navigationPanelStyle,
        settingsPanelStyle,
        informationPanelStyle,
        e.target,
        settingsButton,
        informationButton
        );
});

useClickEvent(settingsButton, e => {
    categoryFold(
        settingsPanelStyle,
        informationPanelStyle,
        navigationPanelStyle,
        e.target,
        informationButton,
        navigationButton
        );
});

useClickEvent(informationButton, e => {
    categoryFold(
        informationPanelStyle, 
        settingsPanelStyle, 
        navigationPanelStyle,
        e.target,
        settingsButton,
        navigationButton
        );
});

const categoryFold = (
    myPanel, 
    otherPanel,
    other2Panel, 
    myButton, // e.target
    otherButton,
    other2Button 
    ) => {
    if(myPanel.display === 'block'){
        myButton.innerHTML = '+';
        myPanel.display= 'none';

        otherButton.innerHTML = '-';
        otherPanel.display= 'block';
    }else{
        myButton.innerHTML = '-';
        myPanel.display = 'block';

        otherButton.innerHTML = '+';
        otherPanel.display = 'none';

        other2Button.innerHTML = '+';
        other2Panel.display= 'none';
    };
};

// middle button(close me, center panel) controll (+ toggle west side controll)
const middleDescriptionPlace = useGetElement('.middle-block .description');
const closeMeButton = useGetElement('.close-me-button'); // close me close에도 사용
const centerPanelButton = useGetElement('.center-panel-button');

middleDescriptionPlace.innerHTML = closeMe;

useClickEvent(closeMeButton, () => {
   if(middleDescriptionPlace.innerHTML === closeMe) return; // 없으면 클릭때마다 같은 부분이 중첩으로 계속 새로 생김

    middleDescriptionPlace.innerHTML = closeMe; // 본문 내용 교체
});

const westSideToggle = (toggleWestSide) => {
    return useClickEvent(toggleWestSide, () =>{
        const reloadWestSideBlock = useGetElement('.west-side-block');
        const westParent = useGetElement('.west'); // 전체 블럭
        
        westParent.style.width = 'initial';
        westParent.style.minWidth = 'initial';

        if(reloadWestSideBlock){
            reloadWestSideBlock.outerHTML = westSideFoldedHtml; // foldHtml.js 파일에 있음
            westSideDragZone.removeEventListener('mousedown', onMouseDown);

            // 아래 로직은 center panel의 toggle 버튼을 통해 west side를 접은 상태에서 west side 상다의 버튼을 클릭했을 때 동작하지 않는 에러 해결
            const westSideTopFoldedButton = useGetElement('.west-side-block-folded .button');
            const westSideFolded = useGetElement('.west-side-block-folded');  

            spreadFold(westSideFolded, westSideTopFoldedButton);
        }else{
            const westSideFolded = useGetElement('.west-side-block-folded');  
            westSideDragZone.addEventListener('mousedown', onMouseDown);

            westParent.style.width = '30%';
            westSideFolded.remove(); // 요소 제거
            westParent.appendChild(westSideBlock); // outerHTML을 사용하면 [object HTMLDivElement]이 출력됨
            westParent.appendChild(westSideDragZone);
        };
    });
}

useClickEvent(centerPanelButton, () => {
    if(middleDescriptionPlace.innerHTML === centerPanel) return;

    middleDescriptionPlace.innerHTML = centerPanel; // 본문 내용 교체

    const toggleWestSide = useGetElement('.toggle-the-west-region');

    westSideToggle(toggleWestSide)
});

// middle close me close (close me 창 닫기)
const closeMeClose = useGetElement('.close-me-close-icon');
const closeMeBlock = useGetElement('.close-me-block');

useClickEvent(closeMeClose, () => {
    closeMeBlock.remove();
    middleDescriptionPlace.innerHTML = centerPanel;

    const toggleWestSide = useGetElement('.toggle-the-west-region');

    westSideToggle(toggleWestSide);
});

// east side button controll(클릭 시 오른쪽으로 접힘)
const eastSideBlock = useGetElement('.east-side-block');
const eastSideTopButton = useGetElement('.east-side-block .button');
const eastParent = useGetElement('.east');

useClickEvent(eastSideTopButton, () => {
    eastSideBlock.outerHTML = eastSideFoldedHtml;

    eastParent.style.width = 'initial';
    
    const eastSideFolded = useGetElement('.east-side-block-folded');
    const eastSideTopFoldedButton = useGetElement('.east-side-block-folded .button');

    eastSideTopFoldedButton && useClickEvent(eastSideTopFoldedButton, ()=>{
        eastSideFolded.remove();
        eastParent.style.width = '30%';
        eastParent.appendChild(eastSideBlock);
    })
});

// east side drag zone button 클릭 시 오른쪽으로 접힘
const eastSideDragZoneButton = useGetElement('.east-side-drag-zone .button');
const eastSideDragZone = useGetElement('.east-side-drag-zone');

useClickEvent(eastSideDragZoneButton, () => {
    const eastSideFolded = useGetElement('.east-side-block-folded');

    onClickDragZoneButton(eastSideFolded, eastSideBlock, eastSideFoldedHtml, '.east-side-block-folded', eastParent, eastSideDragZone, false)
});

// east button(a tab, property grid) controll
const eastDescriptionPlace = useGetElement('.east-side-block .grid-description');
const aTabButton = useGetElement('.a-tab-button');
const propertyGridButton = useGetElement('.property-grid-button');

eastDescriptionPlace.innerHTML = propertyGrid;

useClickEvent(aTabButton, () => {
    if(eastDescriptionPlace.innerHTML === aTab) return;

    eastDescriptionPlace.innerHTML = aTab;
});

useClickEvent(propertyGridButton, ()=>{
    if(eastDescriptionPlace.innerHTML === propertyGrid) return;
    
    eastDescriptionPlace.innerHTML = propertyGrid;
});

// east side property grid close (property grid 창 닫기)
const propertyGridClose = useGetElement('.property-grid-close-icon');
const propertyGridBlock = useGetElement('.property-grid-block');

useClickEvent(propertyGridClose, () => {
    propertyGridBlock.remove();
    eastDescriptionPlace.innerHTML = aTab;
});

// east side property grid sort
const firstColPropertyGrid = useGetElement('.first-col');
const secondColPropertyGrid = useGetElement('.second-col');
const firstColPropertyGridIcon = useGetElement('.first-col .icon');
const secondColPropertyGridIcon = useGetElement('.second-col .icon');

const changeIcon = (myStyle, otherStyle, myIcon) => {
    if(myStyle.display === 'none'){
        myStyle.display = 'inline';
        otherStyle.display = 'none';
        myIcon.innerHTML = '^';
    }else{
        if(myIcon.innerHTML === '^'){
            myIcon.innerHTML = 'V';
        }else{
            myIcon.innerHTML = '^';
        };
    };
};

useClickEvent(firstColPropertyGrid, () => {
    const {style: secondIconStyle} = secondColPropertyGridIcon;
    const {style: firstIconStyle} = firstColPropertyGridIcon;

    changeIcon(firstIconStyle, secondIconStyle, firstColPropertyGridIcon);
});

useClickEvent(secondColPropertyGrid, ()=>{
    const {style: secondIconStyle} = secondColPropertyGridIcon;
    const {style: firstIconStyle} = firstColPropertyGridIcon;
    
    changeIcon(secondIconStyle, firstIconStyle, secondColPropertyGridIcon);       
});