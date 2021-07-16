// west side button controll(클릭 시 왼쪽으로 접힘)
const westSideBlock = document.querySelector('.west-side-block');
const westSideFolded = document.querySelector('.west-side-block-folded');
const westSideDragZone = document.querySelector('.west-side-drag-zone');

const westSideDragZoneButton = document.querySelector('.west-side-drag-zone .drag-zone-button');
const eastSideDragZoneButton = document.querySelector('.east-side-drag-zone .button');

const westParent = document.querySelector('.west'); // 전체 블럭
const westSideTopButton = document.querySelector('.west-side-block .button');
const westSideFoldedTopButton = document.querySelector('.west-side-block-folded .folded-button');

const westSideFoldedDragZone = document.querySelector(".west-side-folded-drag-zone");
const westSideFoldedDragZoneButton = document.querySelector('.west-side-folded-drag-zone .button');

const eastSideBlock = document.querySelector('.east-side-block');
const eastSideFolded = document.querySelector('.east-side-block-folded');
const eastSideDragZone = document.querySelector('.east-side-drag-zone');

const eastParent = document.querySelector('.east');
const eastSideTopButton = document.querySelector('.east-side-block .button');
const eastSideFoldedTopButton = document.querySelector('.east-side-block-folded .folded-button');


class Parent{
    constructor(side, dragZone, wrap, foldedWrap, parent){
        this.side = side;
        this.dragZone = dragZone;
        this.wrap = wrap;
        this.foldedWrap = foldedWrap;
        this.parent = parent;
    }

    folded(){
        this.dragZone.removeEventListener('mousedown', onWestMouseDown);
        this.dragZone.removeEventListener('mousedown', onEastMouseDown);

        this.parent.style.minWidth = 'initial';
        this.parent.style.width = 'initial';

        this.wrap.classList.add(`${this.side}-spread-folder-close`);
        this.wrap.classList.remove(`${this.side}-spread-folder-open`);

        this.foldedWrap.classList.add(`${this.side}-folded-folder-open`);
        this.foldedWrap.classList.remove(`${this.side}-folded-folder-close`);
        this.dragZone.classList.add(`${this.side}-side-folded`);
    };

    spread(){
        this.dragZone.addEventListener('mousedown', onWestMouseDown);
        this.dragZone.addEventListener('mousedown', onEastMouseDown);

        this.wrap.classList.add(`${this.side}-spread-folder-open`);
        this.wrap.classList.remove(`${this.side}-spread-folder-close`);

        this.foldedWrap.classList.add(`${this.side}-folded-folder-close`);
        this.foldedWrap.classList.remove(`${this.side}-folded-folder-open`);
        this.dragZone.classList.remove(`${this.side}-side-folded`);
    };
};
class WestEastFold extends Parent{
    constructor(params= {}){
        const {side, topBtn, foldedTopBtn, dragZone, wrap, foldedWrap, parent} = params;
        super(side, dragZone, wrap, foldedWrap, parent);

        this.topBtn = topBtn;
        this.foldedTopBtn = foldedTopBtn;

        if(this.topBtn){
            this.topBtn.addEventListener('click', () => {
                this.folded();
            });
        };

        if(this.foldedTopBtn){
            this.foldedTopBtn.addEventListener('click', ()=>{
                this.spread();
            });
        };

        if(this.dragZone){
            this.dragZone.addEventListener('click', () => {
                this.onClickDragZone()
            });
        };
    };

    onClickDragZone(){
        if(this.dragZone.classList.contains(`${this.side}-side-folded`)){
            this.dragZone.classList.remove(`${this.side}-side-folded`);
        
            this.spread();
            return;
        }
        this.dragZone.classList.add(`${this.side}-side-folded`);

        this.folded();
    }
};

const foldItemList = [
    new WestEastFold({
        side: 'west',
        topBtn: westSideTopButton,
        foldedTopBtn: westSideFoldedTopButton,
        dragZone: westSideDragZone, //
        wrap: westSideBlock, //
        foldedWrap: westSideFolded, //
        parent: westParent //
    }),
    new WestEastFold({
        side:'east',
        topBtn: eastSideTopButton,
        foldedTopBtn: eastSideFoldedTopButton,
        dragZone: eastSideDragZone,
        wrap: eastSideBlock,
        foldedWrap: eastSideFolded,
        parent: eastParent
    })
];

// west side drag zone 창 크기 조절
const onWestMouseMove = e => {
    westParent.style.width =  e.clientX + 'px';
    rememberWestWidth = e.clientX;
 
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
const navigationAcodiItem = document.querySelector('.navigation');
const navigationButton = document.querySelector('.navigation-button');

const settingsAcodiItem = document.querySelector('.settings');
const settingsButton = document.querySelector('.settings-button');

const informationAcodiItem = document.querySelector('.information');
const informationButton = document.querySelector('.information-button');

navigationButton.itemId = 'navigationButton';
settingsButton.itemId = 'settingsButton';
informationButton.itemId = 'informationButton';

const onClickWestCategory = (e) => {
    const btnItemId = e.target.itemId;
    let foundItem;

    acodItemList.forEach((acodItem) => {
        if (acodItem.actionBtn.itemId === btnItemId) {
            foundItem = acodItem;
        } else {
            acodItem.colleasce();
        };
    });

    if (foundItem) {
        foundItem.expand();
    };
};

class WestAcodItem {
    constructor(param = {}) {
        const {itemId, isOpen, wrapPnl, actionBtn, nextWrapPnl} = param;
        
        this.itemId = itemId || null;
        this.isOpen = !!isOpen;
        this.wrapPnl = wrapPnl;
        this.actionBtn = actionBtn;
        this.nextWrapPnl = nextWrapPnl;

        if (this.actionBtn) {
            this.actionBtn.addEventListener('click', onClickWestCategory);
        };

        if (this.isOpen) {
            this.expand();
        } else {
            this.colleasce();
        };
    };
    expand() {
        if(this.wrapPnl.classList.contains('open-west-panel')){
            this.nextWrapPnl.classList.add('open-west-panel');
            this.wrapPnl.classList.remove('open-west-panel');
            return;
        }
        this.wrapPnl.classList.add('open-west-panel');
    };
    colleasce() {
        this.wrapPnl.classList.remove('open-west-panel');
    };
};

const acodItemList = [
    new WestAcodItem({
        itemId: 'navigationBtn',
        isOpen: true,
        wrapPnl: navigationAcodiItem,
        actionBtn: navigationButton,
        nextWrapPnl: settingsAcodiItem
    }),
    new WestAcodItem({
        itemId: 'settingsBtn',
        wrapPnl: settingsAcodiItem,
        actionBtn: settingsButton,
        nextWrapPnl: informationAcodiItem
    }),
    new WestAcodItem({
        itemId: 'informationBtn',
        wrapPnl: informationAcodiItem,
        actionBtn: informationButton,
        nextWrapPnl: settingsAcodiItem
    }),
];




// middle 부분 부터 본문 내용은 description.config.js에 있음!
// middle button(close me, center panel) controll (+ toggle west side controll)
const closeMeDescriptions = document.querySelector('.middle-block .close-me-description');
const centerPanelDescriptions = document.querySelector('.middle-block .center-panel-description');
const closeMeButton = document.querySelector('.close-me-button');
const centerPanelButton = document.querySelector('.center-panel-button');

const closeMeClose = document.querySelector('.close-me-close-icon');
const closeMeBlock = document.querySelector('.close-me-block');


centerPanelButton.addEventListener('click', () => {
    closeMeButton.classList.add('category-click-false');
    closeMeButton.classList.remove('category-click-true');
    closeMeDescriptions.classList.add('close-middle-description');
    closeMeDescriptions.classList.remove('open-middle-description');

    centerPanelButton.classList.add('category-click-true');
    centerPanelButton.classList.remove('category-click-false');
    centerPanelDescriptions.classList.add('open-middle-description');
    centerPanelDescriptions.classList.remove('close-middle-description');
});

closeMeButton.addEventListener('click', () => {
    closeMeButton.classList.add('category-click-true');
    closeMeButton.classList.remove('category-click-false');
    closeMeDescriptions.classList.add('open-middle-description');
    closeMeDescriptions.classList.remove('close-middle-description');

    centerPanelButton.classList.add('category-click-false');
    centerPanelButton.classList.remove('category-click-true');
    centerPanelDescriptions.classList.add('close-middle-description');
    centerPanelDescriptions.classList.remove('open-middle-description');
});

// middle close me close (close me 창 닫기)
closeMeClose.addEventListener('click', () => {
    closeMeBlock.remove();

    closeMeDescriptions.classList.add('close-middle-description');
    closeMeDescriptions.classList.remove('open-middle-description');

    centerPanelButton.classList.add('category-click-true');
    centerPanelButton.classList.remove('category-click-false');
    centerPanelDescriptions.classList.add('open-middle-description');
    centerPanelDescriptions.classList.remove('close-middle-description');
});

// toggle west side
const toggleWestRegion = document.querySelector('.toggle-the-west-region');
const westSide = new Parent('west',westSideDragZone,westSideBlock,westSideFolded,westParent);

toggleWestRegion.addEventListener('click', () => {
    if(westSideBlock.classList.contains('west-spread-folder-close')){
        westSide.spread(); 
        return;
    };

    westSide.folded();
})

// class ChangeCategory {
//     constructor(params={}){
//         const { incBtn, incDes, secBtn, secDes, clsIcon, clsBlock } = params;
        
//         this.incBtn = incBtn; 
//         this.incDes = incDes;
//         this.secBtn = secBtn;
//         this.secDes = secDes;
//         this.clsIcon = clsIcon;
//         this.clsBlock = clsBlock;

//         this.clsIcon.addEventListener('click', () => {

//         });
//     };

//     clickClose(){
//         this.clsBlock.remove();

//         this.incDes.classList
//     };

//     appearDes(){

//     };
// };  

// const categoryItemList = [
//     new ChangeCategory({
//         incBtn: closeMeButton,
//         incDes: closeMeDescriptions,
//         secBtn: centerPanelButton,
//         secDes: centerPanelDescriptions,
//         clsIcon: closeMeClose,
//         clsBlock: closeMeBlock
//     })
// ];

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