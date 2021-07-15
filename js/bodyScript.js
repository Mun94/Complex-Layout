// west side button controll(클릭 시 왼쪽으로 접힘)
const westSideBlock = document.querySelector('.west-side-block');
const westSideBlockFoled = document.querySelector('.west-side-block-folded');
const westSideDragZone = document.querySelector('.west-side-drag-zone');

const westSideDragZoneButton = document.querySelector('.west-side-drag-zone .button');
const eastSideDragZoneButton = document.querySelector('.east-side-drag-zone .button');

const westParent = document.querySelector('.west'); // 전체 블럭
const westSideTopButton = document.querySelector('.west-side-block .button');
const westSideTopFoldedButton = document.querySelector('.west-side-block-folded .button');

const spreadFold = (fold, button) => {        
    button.addEventListener('click', () => {
        westSideDragZoneButton.style.transform = 'rotate(0deg)' 
      
        westSideBlockFoled.classList.add('hidden');
        westSideBlock.classList.remove('hidden');
        // westSideDragZone.addEventListener('mousedown', onWestMouseDown); // 폴더가 다시 열리면 창 크기 조절 가능
        // westParent.style.width = '30%';

        // fold.remove(); // 접혀있을 때 요소 제거

        // westParent.appendChild(westSideBlock); // outerHTML을 사용하면 [object HTMLDivElement]이 출력됨
        // westParent.appendChild(westSideDragZone);
    });
};

westSideTopButton.addEventListener('click', e => {
    westSideDragZoneButton.style.transform = 'rotate(180deg)';

    // westSideBlock.outerHTML = westSideFoldedHtml; // foldHtml.js 파일에 있음
    // westParent.style.width = 'initial';
    // westParent.style.minWidth = 'initial'; // 창 크기 조절하면서 적용했던 최소 길이를 초기화 함
    westSideBlock.classList.add('hidden');
    westSideBlockFoled.classList.remove('hidden');
    
    // 다시 눌렀을 때 펴짐
    // const westSideFolded = document.querySelector('.west-side-block-folded');  
    // const westSideTopFoldedButton = document.querySelector('.west-side-block-folded .button');

    // westSideDragZone.removeEventListener('mousedown', onWestMouseDown); // 접힌 상태에서는 창 크기 조절 x

    // spreadFold(westSideFolded, westSideTopFoldedButton); // 다시 폴더 열기
});

spreadFold(westSideBlockFoled, westSideTopFoldedButton); // 다시 폴더 열기

// west side drag zone 클릭 시 왼쪽으로 접힘
const onClickDragZoneButton = ( // east side, west side에서 사용 됨
    folded, 
    block, 
    foldedHtml, 
    blockFoldedClassName, 
    parent, 
    dragZone, 
    checkDragZone, 
    side) => {
    let fold = !folded

    const removeEvent = (val) => val === 'west' ? 
        westSideDragZone.removeEventListener('mousedown', onWestMouseDown) 
            : eastSideDragZone.removeEventListener('mousedown', onEastMouseDown);
    
    const addEvent = (val) => val === 'west' ? 
        westSideDragZone.addEventListener('mousedown', onWestMouseDown) 
            : eastSideDragZone.addEventListener('mousedown', onEastMouseDown);

    if(fold){ // 접힌 상태이면
        block.outerHTML = foldedHtml; // 접힌 상태의 요소 적용
        parent.style.width = 'initial';
        parent.style.minWidth = 'initial';
 
        removeEvent(side); // 접힌 상태에서는 창 크기 조절 x

        const topFoldedButton = document.querySelector(`${blockFoldedClassName} .button`); // 상단에 있는 좌/우 접기 버튼

        topFoldedButton.addEventListener('click', () => {
            side === 'west' ? westSideDragZoneButton.style.transform = 'rotate(0deg)' : 
                eastSideDragZoneButton.style.transform = 'rotate(0deg)';

            const folded = document.querySelector(`${blockFoldedClassName}`); 
            parent.style.width = '30%';
            folded.remove(); // 접혀 있을때의 요소 제거
            parent.appendChild(block); // 펴진 상태 적용
        
            checkDragZone && parent.appendChild(dragZone); 
            // appendChild를 하면 마지막에 적용되는데 west side에서는 west side block 다음에 drag zone이 생성 되도록 함

            addEvent(side);
        });
    }else{
        side === 'west' ? westSideDragZoneButton.style.transform = 'rotate(0deg)' : 
            eastSideDragZoneButton.style.transform = 'rotate(0deg)';

        parent.style.width = '30%';
        folded.remove();
        parent.appendChild(block);

        checkDragZone && parent.appendChild(dragZone);

        addEvent(side);
    };
};

westSideDragZoneButton.addEventListener('click', () => {
    const westSideFolded = document.querySelector('.west-side-block-folded');

    westSideDragZoneButton.style.transform = 'rotate(180deg)';
    onClickDragZoneButton(
        westSideFolded, 
        westSideBlock, 
        westSideFoldedHtml, 
        '.west-side-block-folded', 
        westParent, 
        westSideDragZone, 
        true , 
        'west');
});

// west side drag zone 창 크기 조절
let rememberWestWidth = 0;
const onWestMouseMove = e => {
    westParent.style.width = rememberWestWidth + e.clientX + 'px';
    rememberWestWidth = e.clientX;
    westParent.style.maxWidth = '400px';
    westParent.style.minWidth = '175px';
};

const onWestMouseDown = () => {
    document.addEventListener('mousemove', onWestMouseMove);
};

westSideDragZone.addEventListener('mousedown', onWestMouseDown);

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onWestMouseMove);
});

// west side category
const {style: navigationPanelStyle} = document.querySelector('.navigation-panel');
const {style: settingsPanelStyle} = document.querySelector('.settings-panel');
const {style: informationPanelStyle} = document.querySelector('.information-panel');
const navigationButton = document.querySelector('.navigation-button');
const settingsButton = document.querySelector('.settings-button');
const informationButton = document.querySelector('.information-button');

const categoryFold = (
    myPanel, 
    otherPanel,
    other2Panel, 
    myButton, // e.target
    otherButton,
    other2Button 
    ) => {
    if(myPanel.display === 'block'){
        myButton.style.backgroundPosition = '1px -255px';
        myPanel.display= 'none';

        otherButton.style.backgroundPosition = '1px -272px';
        otherPanel.display= 'block';
    }else{
        myButton.style.backgroundPosition = '1px -272px';
        myPanel.display = 'block';

        otherButton.style.backgroundPosition = '1px -255px';
        otherPanel.display = 'none';

        other2Button.style.backgroundPosition = '1px -255px';
        other2Panel.display= 'none';
    };
};

navigationButton.addEventListener('click', e => {
    categoryFold(
        navigationPanelStyle,
        settingsPanelStyle,
        informationPanelStyle,
        e.target,
        settingsButton,
        informationButton
        );
    // myPanel, 
    // otherPanel,
    // other2Panel, 
    // myButton, // e.target
    // otherButton,
    // other2Button 
});

settingsButton.addEventListener('click', e => {
    categoryFold(
        settingsPanelStyle,
        informationPanelStyle,
        navigationPanelStyle,
        e.target,
        informationButton,
        navigationButton
        );
});

informationButton.addEventListener('click', e => {
    categoryFold(
        informationPanelStyle, 
        settingsPanelStyle, 
        navigationPanelStyle,
        e.target,
        settingsButton,
        navigationButton
        );
});

// middle 부분 부터 본문 내용은 description.config.js에 있음!
// middle button(close me, center panel) controll (+ toggle west side controll)
const middleDescriptionPlace = document.querySelector('.middle-block .description');
const closeMeButton = document.querySelector('.close-me-button');
const centerPanelButton = document.querySelector('.center-panel-button');

middleDescriptionPlace.innerHTML = closeMe;

closeMeButton.addEventListener('click', () => {
   if(middleDescriptionPlace.innerHTML === closeMe) return; // 없으면 클릭때마다 같은 부분이 중첩으로 계속 새로 생김

  
    closeMeButton.style.background= '#ADD2ED';
    closeMeButton.style.color= '#157fcc';
    centerPanelButton.style.background= '#4B9CD7';
    centerPanelButton.style.color= '#FFFFFF';

    middleDescriptionPlace.innerHTML = closeMe; // 본문 내용 교체
});

const westSideToggle = (toggleWestSide) => {
    return toggleWestSide.addEventListener('click', () =>{
        const reloadWestSideBlock = document.querySelector('.west-side-block');
        const westParent = document.querySelector('.west'); // 부모 요소
        
        westSideDragZoneButton.style.transform = 'rotate(180deg)';
        westParent.style.width = 'initial';
        westParent.style.minWidth = 'initial';

        if(reloadWestSideBlock){
            reloadWestSideBlock.outerHTML = westSideFoldedHtml; // foldHtml.js 파일에 있음
            westSideDragZone.removeEventListener('mousedown', onWestMouseDown);

            // 아래 로직은 center panel의 toggle 버튼을 통해 west side를 접은 상태에서 west side 상단의 버튼을 클릭했을 때 동작하지 않는 에러 해결
            const westSideTopFoldedButton = document.querySelector('.west-side-block-folded .button');
            const westSideFolded = document.querySelector('.west-side-block-folded');  

            spreadFold(westSideFolded, westSideTopFoldedButton);
        }else{
            westSideDragZoneButton.style.transform = 'rotate(0deg)';

            const westSideFolded = document.querySelector('.west-side-block-folded');  
            westSideDragZone.addEventListener('mousedown', onWestMouseDown);

            westParent.style.width = '30%';
            westSideFolded.remove(); // 요소 제거
            westParent.appendChild(westSideBlock);
            westParent.appendChild(westSideDragZone);
        };
    });
};

centerPanelButton.addEventListener('click', () => {
    if(middleDescriptionPlace.innerHTML === centerPanel) return;

    centerPanelButton.style.background= '#ADD2ED';
    centerPanelButton.style.color= '#157fcc';
    closeMeButton.style.background= '#4B9CD7';
    closeMeButton.style.color= '#FFFFFF';

    middleDescriptionPlace.innerHTML = centerPanel; // 본문 내용 교체

    const toggleWestSide = document.querySelector('.toggle-the-west-region');

    westSideToggle(toggleWestSide)
});

// middle close me close (close me 창 닫기)
const closeMeClose = document.querySelector('.close-me-close-icon');
const closeMeBlock = document.querySelector('.close-me-block');

closeMeClose.addEventListener('click', () => {
    closeMeBlock.remove();
    middleDescriptionPlace.innerHTML = centerPanel;

    const toggleWestSide = document.querySelector('.toggle-the-west-region');

    westSideToggle(toggleWestSide);
});

// east side button controll(클릭 시 오른쪽으로 접힘)
const eastSideBlock = document.querySelector('.east-side-block');
const eastSideTopButton = document.querySelector('.east-side-block .button');
const eastParent = document.querySelector('.east');
const eastSideDragZone = document.querySelector('.east-side-drag-zone');

eastSideTopButton.addEventListener('click', () => {
    eastSideDragZoneButton.style.transform = 'rotate(180deg)';

    eastSideBlock.outerHTML = eastSideFoldedHtml;

    eastParent.style.width = 'initial';
    eastParent.style.minWidth = 'initial';

    const eastSideFolded = document.querySelector('.east-side-block-folded');
    const eastSideTopFoldedButton = document.querySelector('.east-side-block-folded .button');

    eastSideDragZone.removeEventListener('mousedown', onEastMouseDown);

    eastSideTopFoldedButton && eastSideTopFoldedButton.addEventListener('click', ()=>{
        eastSideDragZoneButton.style.transform = 'rotate(0deg)';
        eastSideFolded.remove();
        eastParent.style.width = '30%';
        eastParent.appendChild(eastSideBlock);

        eastSideDragZone.addEventListener('mousedown', onEastMouseDown);
    });
});

// east side drag zone button 클릭 시 오른쪽으로 접힘
eastSideDragZoneButton.addEventListener('click', () => {
    const eastSideFolded = document.querySelector('.east-side-block-folded');

    eastSideDragZoneButton.style.transform = 'rotate(180deg)';
    onClickDragZoneButton(
        eastSideFolded, 
        eastSideBlock, 
        eastSideFoldedHtml, 
        '.east-side-block-folded', 
        eastParent, 
        eastSideDragZone, 
        false, 
        'east');
});

// east side drag zone 창 크기 조절
let rememberEastWidth = 0;
const onEastMouseMove = e => {
    eastParent.style.width = (rememberEastWidth + document.body.clientWidth - e.clientX) +'px';
    rememberEastWidth = document.body.clientWidth - e.clientX;
    const table = document.querySelector('.property-grid-table');

    eastParent.style.minWidth = table ? table.clientWidth + 10 + 'px' : '120px'; 
};

const onEastMouseDown = e => {
    document.addEventListener('mousemove', onEastMouseMove);
};

eastSideDragZone.addEventListener('mousedown', onEastMouseDown);

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onEastMouseMove);
});

// east button(a tab, property grid) controll
const eastDescriptionPlace = document.querySelector('.east-side-block .grid-description');
const aTabButton = document.querySelector('.a-tab-button');
const propertyGridButton = document.querySelector('.property-grid-button');

eastDescriptionPlace.innerHTML = propertyGrid;

aTabButton.addEventListener('click', () => {
    if(eastDescriptionPlace.innerHTML === aTab) return;

    aTabButton.style.background = '#ADD2ED';
    aTabButton.style.color = '#157FCC';
    propertyGridButton.style.background = '#4B9CD7';
    propertyGridButton.style.color = '#FFFFFF';

    eastDescriptionPlace.innerHTML = aTab;
});

propertyGridButton.addEventListener('click', () => {
    if(eastDescriptionPlace.innerHTML === propertyGrid) return;
    
    propertyGridButton.style.background = '#ADD2ED';
    propertyGridButton.style.color = '#157FCC';
    aTabButton.style.background = '#4B9CD7';
    aTabButton.style.color = '#FFFFFF';

    eastDescriptionPlace.innerHTML = propertyGrid;
    
    const reloadFirstCol = document.querySelector('.first-col');
    const reloadSecondCol = document.querySelector('.second-col');

    sortFirstCol(reloadFirstCol);
    sortSecondCol(reloadSecondCol)
});

// east side property grid close (property grid 창 닫기)
const propertyGridClose = document.querySelector('.property-grid-close-icon');
const propertyGridBlock = document.querySelector('.property-grid-block');

propertyGridClose.addEventListener('click', () => {
    propertyGridBlock.remove();
    eastDescriptionPlace.innerHTML = aTab;
});

// east side property grid sort
const firstColPropertyGrid = document.querySelector('.first-col');

function sortFirstCol(firstCol){ // innerHTML 등으로 요소를 적용했을 때 같은 class 이름이더라도 인식하지 못 하게 됨 
    firstCol.addEventListener('click' , () => {
        eastDescriptionPlace.innerHTML = makeTable([
                    [...rowValue[0].sort((a, b) => a > b ? -1 : a < b ? 1 : 0)], 
                    [...rowValue[1]]
                ]);

        const reloadFirstCol = document.querySelector('.first-col');
        const reloadSecondCol = document.querySelector('.second-col');

        sortSecondCol(reloadSecondCol); // 첫 번째 열을 눌렀을 때 두 번째 열을 누르면 두 번째 열 sort

        reloadFirstCol.addEventListener('click', () => {
            eastDescriptionPlace.innerHTML = makeTable([
                [...rowValue[0].sort((a, b) => a > b ? 1 : a < b ? -1 : 0)], // 오름차순
                [...rowValue[1]]
            ]);
            const secondReloadFirstCol = document.querySelector('.first-col');
            const secondReloadSecondCol = document.querySelector('.second-col');

            sortSecondCol(secondReloadSecondCol);
            sortFirstCol(secondReloadFirstCol); // 클릭 마다 반복 됨
        });
    });
};
sortFirstCol(firstColPropertyGrid);

const secondColPropertyGrid = document.querySelector('.second-col');

function sortSecondCol(secondCol){
   secondCol.addEventListener('click', () => {
        eastDescriptionPlace.innerHTML = makeTable([
                    [...rowValue[0]],
                    [...rowValue[1].sort((a, b) => a > b ? -1 : a < b ? 1 : 0)]
                ]);

        const reloadFirstCol = document.querySelector('.first-col');
        const reloadSecondCol = document.querySelector('.second-col');

        sortFirstCol(reloadFirstCol);

        reloadSecondCol.addEventListener('click', () => {
            eastDescriptionPlace.innerHTML = makeTable([
                [...rowValue[0]],
                [...rowValue[1].sort((a, b) => a > b ? 1 : a < b ? -1 : 0)], 
            ]);

            const secondReloadFirstCol = document.querySelector('.first-col');
            const secondReloadSecondCol = document.querySelector('.second-col');
            
            sortSecondCol(secondReloadSecondCol);
            sortFirstCol(secondReloadFirstCol);
        });
    });
};
sortSecondCol(secondColPropertyGrid);

    // 리턴 값이 -1이면 a가 b보다 낮은 인덱스로 위치 한다. 리턴 값이 1이면 반대
    // [1,3,2,4] 처음 스타트 
    // a = 1, b = 3 <=== 1 < 3 이므로 -1 이 리턴되고 1이 3보다 낮은 인덱스로 위치한다. [1, 3, 2, 4]
    // a = 3, b = 2 <=== 3 > 2 이므로 1 이 리턴되고  3이 2보다 높은 인덱스로 위치한다. [1, 2, 3, 4]