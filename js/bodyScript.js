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
    };
};

const foldItemList = [
    new WestEastFold({
        side: 'west',
        topBtn: westSideTopButton,
        foldedTopBtn: westSideFoldedTopButton,
        dragZone: westSideDragZone,
        wrap: westSideBlock,
        foldedWrap: westSideFolded,
        parent: westParent
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
const closeMeDescriptionPlace = document.querySelector('.middle-block .close-me-description');
const centerPanelDescriptionPlace = document.querySelector('.middle-block .center-panel-description');
const closeMeButton = document.querySelector('.close-me-button');
const centerPanelButton = document.querySelector('.center-panel-button');

const closeMeClose = document.querySelector('.close-me-close-icon');
const closeMeBlock = document.querySelector('.close-me-block');

class Category{
    constructor(params={}){
        const {firBtn, firDes, secBtn, secDes} = params;

        this.firBtn = firBtn;
        this.firDes = firDes;
        this.secBtn = secBtn;
        this.secDes = secDes;
    
        if(this.firBtn){
            this.firBtn.addEventListener('click', e => {
                const check = e.target.classList.contains('category-click-true');

                if(check){ return; };

                this.onClickCategory();
                this.appearDes();
            });
        };

        if(this.secBtn){
            this.secBtn.addEventListener('click', e => {
                const check = e.target.classList.contains('category-click-true');

                if(check){ return; };

                this.onClickCategory();
                this.appearDes();
            });
        };
    };

    onClickCategory(){
        this.firBtn.classList.toggle('category-click-true' );
        this.secBtn.classList.toggle('category-click-true');
    };

    appearDes(){
        this.firDes.classList.toggle('hidden-description');
        this.secDes.classList.toggle('hidden-description');
    };
};

class CloseIcon extends Category{
    constructor(params={}){
        const {wrap, clsIcon, secBtn} = params;
        super(params);

        this.wrap = wrap;
        this.clsIcon = clsIcon;
        this.secBtn = secBtn;

        this.clsIcon.addEventListener('click', (e) => {
            this.onClickCloseIcon(e);
        });
    };

    onClickCloseIcon(){
        this.wrap.remove();
        const check = this.secBtn.classList.contains('category-click-true');

        if(!check){
            this.secBtn.classList.toggle('category-click-true', !check);
            this.appearDes();
        }
    };
};

new Category({
    firBtn: closeMeButton,
    firDes: closeMeDescriptionPlace,
    secBtn: centerPanelButton,
    secDes: centerPanelDescriptionPlace
});

new CloseIcon({
    wrap: closeMeBlock,
    clsIcon: closeMeClose,
    firDes: closeMeDescriptionPlace,
    secDes: centerPanelDescriptionPlace,
    secBtn: centerPanelButton
});

// toggle west side
const toggleWestRegion = document.querySelector('.toggle-the-west-region');

toggleWestRegion.addEventListener('click', () => {
    const westSide = new Parent('west',
                            westSideDragZone,
                            westSideBlock,
                            westSideFolded,
                            westParent);

    if(westSideBlock.classList.contains('west-spread-folder-close')){
        westSide.spread(); 
        return;
    };

    westSide.folded();
})

// east side drag zone 창 크기 조절
const onEastMouseMove = e => {
    eastParent.style.width = (document.body.clientWidth - e.clientX) +'px';
    
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
const propertyGridDescriptionPlace = document.querySelector('.property-grid-description');
const aTabDescriptionPlace = document.querySelector('.a-tab-description');
const aTabButton = document.querySelector('.a-tab-button');
const propertyGridButton = document.querySelector('.property-grid-button');

new Category({
    firBtn: propertyGridButton,
    firDes: propertyGridDescriptionPlace,
    secBtn: aTabButton,
    secDes: aTabDescriptionPlace
});

// east side property grid close (property grid 창 닫기)
const propertyGridClose = document.querySelector('.property-grid-close-icon');
const propertyGridBlock = document.querySelector('.property-grid-block');

new CloseIcon({
    wrap: propertyGridBlock,
    clsIcon: propertyGridClose,
    firDes: propertyGridDescriptionPlace,
    secDes: aTabDescriptionPlace,
    secBtn: aTabButton
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