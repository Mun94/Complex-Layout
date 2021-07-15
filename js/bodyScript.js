// west side button controll(클릭 시 왼쪽으로 접힘)
const westSideBlock = document.querySelector('.west-side-block');
const westSideBlockFolded = document.querySelector('.west-side-block-folded');
const westSideDragZone = document.querySelector('.west-side-drag-zone');

const westSideDragZoneButton = document.querySelector('.west-side-drag-zone .button');
const eastSideDragZoneButton = document.querySelector('.east-side-drag-zone .button');

const westParent = document.querySelector('.west'); // 전체 블럭
const westSideTopButton = document.querySelector('.west-side-block .button');
const westSideTopFoldedButton = document.querySelector('.west-side-block-folded .button');

const westSideFoldedDragZone = document.querySelector(".west-side-folded-drag-zone");
const westSideFoldedDragZoneButton = document.querySelector('.west-side-folded-drag-zone .button');

westSideTopButton.addEventListener('click', e => {
    westSideBlock.classList.add('hidden');
    westSideBlockFolded.classList.remove('hidden');
    
    westSideDragZone.classList.add('hidden');
    westSideFoldedDragZone.classList.remove('hidden');
});

westSideTopFoldedButton.addEventListener('click', e => {
    westSideBlockFolded.classList.add('hidden');
    westSideBlock.classList.remove('hidden');

    westSideDragZone.classList.remove('hidden');
    westSideFoldedDragZone.classList.add('hidden');
})

westSideDragZoneButton.addEventListener('click', () => {
    westSideBlockFolded.classList.remove('hidden');
    westSideBlock.classList.add('hidden');

    westSideDragZone.classList.add('hidden');
    westSideFoldedDragZone.classList.remove('hidden');
});

westSideFoldedDragZoneButton.addEventListener('click', () => {
    westSideBlockFolded.classList.add('hidden');
    westSideBlock.classList.remove('hidden');

    westSideDragZone.classList.remove('hidden');
    westSideFoldedDragZone.classList.add('hidden');
});

// west side drag zone 창 크기 조절
const onWestMouseMove = e => {
    westParent.style.width =  e.clientX + 'px';
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
const navigationPanel = document.querySelector('.navigation-panel');
const settingsPanel = document.querySelector('.settings-panel');
const informationPanel = document.querySelector('.information-panel');
const navigationButton = document.querySelector('.navigation-button');
const settingsButton = document.querySelector('.settings-button');
const informationButton = document.querySelector('.information-button');

// navigationButton.addEventListener('click', () => {
//     const checkHidden = navigationPanel.classList.contains('hidden');

//     navigationPanel.classList.toggle('hidden', !checkHidden);
//     navigationButton.classList.toggle('hidden', !checkHidden);
//     navigationButton.classList.toggle('visible', checkHidden);

//     settingsPanel.classList.toggle('hidden', checkHidden);
//     settingsButton.classList.toggle('hidden', checkHidden);
//     settingsButton.classList.toggle('visible', !checkHidden);

//     if (checkHidden) {
//         informationPanel.classList.add('hidden'); // information panel이 열린 상태에서 navigation button을 클릭했을 때
//         informationButton.classList.toggle('hidden', checkHidden);
//         informationButton.classList.toggle('visible', !checkHidden);
//     }
// });

// settingsButton.addEventListener('click', () => {
//     const checkHidden = settingsPanel.classList.contains('hidden');

//     checkHidden && navigationPanel.classList.toggle('hidden', checkHidden);
//     checkHidden && navigationButton.classList.toggle('hidden', checkHidden);
//     checkHidden && navigationButton.classList.toggle('visible', !checkHidden);

//     settingsPanel.classList.toggle('hidden', !checkHidden);
//     settingsButton.classList.toggle('hidden', !checkHidden);
//     settingsButton.classList.toggle('visible', checkHidden);

//     informationPanel.classList.toggle('hidden', checkHidden);
//     informationButton.classList.toggle('hidden', checkHidden);
//     informationButton.classList.toggle('visible', !checkHidden);
// });

// informationButton.addEventListener('click', () => {
//     const checkHidden = informationPanel.classList.contains('hidden');

//     navigationPanel.classList.toggle('hidden', checkHidden);
//     navigationButton.classList.toggle('hidden', checkHidden);
//     navigationButton.classList.toggle('visible', !checkHidden);

//     checkHidden && settingsPanel.classList.toggle('hidden', checkHidden);
//     checkHidden && settingsButton.classList.toggle('hidden', checkHidden);
//     checkHidden && settingsButton.classList.toggle('visible', !checkHidden);

//     informationPanel.classList.toggle('hidden', !checkHidden);
//     informationButton.classList.toggle('hidden', !checkHidden);
//     informationButton.classList.toggle('visible', checkHidden);
// });

const navigationAcodiItem = document.querySelector('.navigation');
const settingsAcodiItem = document.querySelector('.settings');
const informationAcodiItem = document.querySelector('.information');

navigationButton.itemId = 'navigationButton';
settingsButton.itemId = 'settingsButton';
informationButton.itemId = 'informationButton';

const onClick = (e) => {
    const btnItemId = e.target.itemId;
    const beforeOpenedItem = acodItemList.find(item => item.isOpen);
    let foundItem;

    acodItemList.forEach((acodItem) => {
        if (acodItem.actionBtn.itemId === btnItemId) {
            foundItem = acodItem;
        } else {
            // acodItem.colleasceFn();
        }
    });

    if (foundItem) {
        foundItem.expandFn(beforeOpenedItem);
    }
};

class AcodItem {
    constructor(param = {}) {
        this.title = param.title || '';
        this.itemId = param.itemId || null;
        this.isOpen = !!param.isOpen;
        this.imgSrc = param.imgSrc || null;
        this.wrapPnl = param.wrapPnl;
        this.bodyPnl = param.bodyPnl;
        this.actionBtn = param.actionBtn;

        if (this.wrapPnl) {
            this.wrapPnl.classList.add('acodi-item');
        }

        if (this.bodyPnl) {
            this.bodyPnl.classList.add('acodi-item-body');
        }

        if (this.actionBtn) {
            this.actionBtn.addEventListener('click', onClick);
        }

        if (this.isOpen) {
            this.expandFn();
        } else {
            this.colleasceFn();
        }
    }
    expandFn(beforeOpenedItem) {
        this.bodyPnl.classList.remove('disp-none');
        this.bodyPnl.classList.add('disp-block');

        setTimeout(() => {
            // this.bodyPnl.classList.remove('height-zero');
            this.bodyPnl.classList.add('height-full');

            if (beforeOpenedItem) {
                beforeOpenedItem.bodyPnl.classList.remove('height-full');     
                // beforeOpenedItem.bodyPnl.classList.add('height-zero');
            }

            setTimeout(() => {
                if (beforeOpenedItem) {
                    beforeOpenedItem.bodyPnl.classList.add('disp-none');
                }
            }, 0);
        }, 0);
    }
    colleasceFn() {
        this.bodyPnl.classList.remove('disp-block');
        this.bodyPnl.classList.add('disp-none');
    }
}

const acodItemList = [
    new AcodItem({
        title: 'navi',
        itemId: 'navigationBtn',
        isOpen: true,
        wrapPnl: navigationAcodiItem,
        bodyPnl: navigationPanel,
        actionBtn: navigationButton,
    }),
    new AcodItem({
        title: 'settings',
        itemId: 'settingsBtn',
        wrapPnl: settingsAcodiItem,
        bodyPnl: settingsPanel,
        actionBtn: settingsButton,
    }),
    new AcodItem({
        title: 'information',
        itemId: 'informationBtn',
        wrapPnl: informationAcodiItem,
        bodyPnl: informationPanel,
        actionBtn: informationButton,
    }),
];




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