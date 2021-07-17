const bodyParentEle = document.querySelector('.body-block');

// west side button controll(클릭 시 왼쪽으로 접힘)
const westSideBlock = bodyParentEle.querySelector('.west-side-block');
const westSideFolded = bodyParentEle.querySelector('.west-side-block-folded');
const westSideDragZone = bodyParentEle.querySelector('.west-side-drag-zone');

const westSideDragZoneButton = bodyParentEle.querySelector('.west-side-drag-zone .drag-zone-button');
const eastSideDragZoneButton = bodyParentEle.querySelector('.east-side-drag-zone .button');

const westParent = bodyParentEle.querySelector('.west'); // 전체 블럭
const westSideTopButton = bodyParentEle.querySelector('.west-side-block .button');
const westSideFoldedTopButton = bodyParentEle.querySelector('.west-side-block-folded .folded-button');

const westSideFoldedDragZone = bodyParentEle.querySelector(".west-side-folded-drag-zone");
const westSideFoldedDragZoneButton = bodyParentEle.querySelector('.west-side-folded-drag-zone .button');

const eastSideBlock = bodyParentEle.querySelector('.east-side-block');
const eastSideFolded = bodyParentEle.querySelector('.east-side-block-folded');
const eastSideDragZone = bodyParentEle.querySelector('.east-side-drag-zone');

const eastParent = bodyParentEle.querySelector('.east');
const eastSideTopButton = bodyParentEle.querySelector('.east-side-block .button');
const eastSideFoldedTopButton = bodyParentEle.querySelector('.east-side-block-folded .folded-button');

const southSideTopButton = document.querySelector('.south-side-block .button');
const southSideFoldedTopButton = document.querySelector('.south-side-block-folded .folded-button');
const southSideDragZone = document.querySelector('.south-side-drag-zone');
const southSideBlock = document.querySelector('.south-side-block');
const southSideFolded = document.querySelector('.south-side-block-folded');
const southParent = document.querySelector('.footer');

class Parent{
    constructor(side, dragZone, wrap, foldedWrap, parent){
        this.side = side;
        this.dragZone = dragZone;
        this.wrap = wrap;
        this.foldedWrap = foldedWrap;
        this.parent = parent;
    }

    folded(){
        this.side === 'west' && this.dragZone.removeEventListener('mousedown', onWestMouseDown);
        this.side === 'east' && this.dragZone.removeEventListener('mousedown', onEastMouseDown);

        this.parent.style.minWidth = 'initial';
        this.parent.style.width = 'initial';

        this.wrap.classList.add(`${this.side}-spread-folder-close`);
        this.wrap.classList.remove(`${this.side}-spread-folder-open`);

        this.foldedWrap.classList.add(`${this.side}-folded-folder-open`);
        this.foldedWrap.classList.remove(`${this.side}-folded-folder-close`);
        this.dragZone.classList.add(`${this.side}-side-folded`);
    };

    spread(){
        if(this.side !=='south'){
            this.side === 'west' && this.dragZone.addEventListener('mousedown', onWestMouseDown);
            this.side === 'east' && this.dragZone.addEventListener('mousedown', onEastMouseDown);
        }
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
        const check = this.dragZone.classList.contains(`${this.side}-side-folded`);

        if(this.side === 'south'){
            check ? this.folded() : this.spread() 
            this.dragZone.classList.toggle(`${this.side}-side-folded`, !check);
            return;
        }

        check ? this.spread() : this.folded();
        this.dragZone.classList.toggle(`${this.side}-side-folded`, !check);
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
    }),
    new WestEastFold({
        side:'south',
        topBtn: southSideTopButton,
        foldedTopBtn: southSideFoldedTopButton,
        dragZone: southSideDragZone,
        wrap: southSideBlock,
        foldedWrap: southSideFolded,
        parent: southParent
    })
];

// west side drag zone 창 크기 조절
const onWestMouseMove = e => {
    westParent.style.width =  e.clientX + 'px';
    rememberWestWidth = e.clientX;
 
    westParent.style.minWidth = '175px';
};

const onWestMouseDown = () => {
    bodyParentEle.addEventListener('mousemove', onWestMouseMove);
};

westSideDragZone.addEventListener('mousedown', onWestMouseDown);

bodyParentEle.addEventListener('mouseup', () => {
    bodyParentEle.removeEventListener('mousemove', onWestMouseMove);
});

// west side category
const navigationAcodiItem = bodyParentEle.querySelector('.navigation');
const navigationButton = bodyParentEle.querySelector('.navigation-button');

const settingsAcodiItem = bodyParentEle.querySelector('.settings');
const settingsButton = bodyParentEle.querySelector('.settings-button');

const informationAcodiItem = bodyParentEle.querySelector('.information');
const informationButton = bodyParentEle.querySelector('.information-button');

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
        const check = this.wrapPnl.classList.contains('open-west-panel');

        this.wrapPnl.classList.toggle('open-west-panel', !check);
        check &&  this.nextWrapPnl.classList.add('open-west-panel');
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
const closeMeDescriptionPlace = bodyParentEle.querySelector('.middle-block .close-me-description');
const centerPanelDescriptionPlace = bodyParentEle.querySelector('.middle-block .center-panel-description');
const closeMeButton = bodyParentEle.querySelector('.close-me-button');
const centerPanelButton = bodyParentEle.querySelector('.center-panel-button');

const closeMeClose = bodyParentEle.querySelector('.close-me-close-icon');
const closeMeBlock = bodyParentEle.querySelector('.close-me-block');

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
const toggleWestRegion = bodyParentEle.querySelector('.toggle-the-west-region');

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
});

// east side drag zone 창 크기 조절
const onEastMouseMove = e => {
    eastParent.style.width = (document.body.clientWidth - e.clientX) +'px';
    
    const table = bodyParentEle.querySelector('.property-grid-table');

    eastParent.style.minWidth = table ? table.clientWidth + 10 + 'px' : '120px'; 
};

const onEastMouseDown = e => {
    bodyParentEle.addEventListener('mousemove', onEastMouseMove);
};

eastSideDragZone.addEventListener('mousedown', onEastMouseDown);

bodyParentEle.addEventListener('mouseup', () => {
    bodyParentEle.removeEventListener('mousemove', onEastMouseMove);
});

// east button(a tab, property grid) controll
const propertyGridDescriptionPlace = bodyParentEle.querySelector('.property-grid-description');
const aTabDescriptionPlace = bodyParentEle.querySelector('.a-tab-description');
const aTabButton = bodyParentEle.querySelector('.a-tab-button');
const propertyGridButton = bodyParentEle.querySelector('.property-grid-button');

new Category({
    firBtn: propertyGridButton,
    firDes: propertyGridDescriptionPlace,
    secBtn: aTabButton,
    secDes: aTabDescriptionPlace
});

// east side property grid close (property grid 창 닫기)
const propertyGridClose = bodyParentEle.querySelector('.property-grid-close-icon');
const propertyGridBlock = bodyParentEle.querySelector('.property-grid-block');

new CloseIcon({
    wrap: propertyGridBlock,
    clsIcon: propertyGridClose,
    firDes: propertyGridDescriptionPlace,
    secDes: aTabDescriptionPlace,
    secBtn: aTabButton
});

// east side property grid sort
const eastDescriptionPlace = bodyParentEle.querySelector('.property-grid-description');
const firstColPropertyGrid = eastDescriptionPlace.querySelector('.first-col');

const sortFirstCol = firstCol => { // innerHTML 등으로 요소를 적용했을 때 같은 class 이름이더라도 인식하지 못 하게 됨 
    firstCol.addEventListener('click' , () => {
        const ascending = (a, b) => a > b ? -1 : a < b ? 1 : 0
        const descending = (a, b) => a > b ? 1 : a < b ? -1 : 0;

        const sortByName = (by, opt) => {
            const sortNameObj = Object[opt](rowValue).sort(by).reduce((newObj, cur) => {
                newObj[cur] = rowValue[cur]
                return newObj;
            },{});

            return [Object.keys(sortNameObj), Object.values(sortNameObj)]
        };

        eastDescriptionPlace.innerHTML = makeTable(sortByName(ascending, 'keys'));

        const reloadFirstCol = eastDescriptionPlace.querySelector('.first-col');
        reloadFirstCol.children[0].classList.remove('hidden-col-icon');
        reloadFirstCol.children[0].style.transform = 'rotate(180deg)';
        const reloadSecondCol = document.querySelector('.second-col'); // 가까운 형제 요소 찾아 줌


        sortSecondCol(reloadSecondCol); // 첫 번째 열을 눌렀을 때 두 번째 열을 누르면 두 번째 열 sort

        reloadFirstCol.addEventListener('click', () => {
            eastDescriptionPlace.innerHTML = makeTable(sortByName(descending, 'keys'));

            const secondReloadFirstCol = eastDescriptionPlace.querySelector('.first-col');
            secondReloadFirstCol.children[0].classList.remove('hidden-col-icon');
            const secondReloadSecondCol =  document.querySelector('.second-col');// 가까운 형제 요소 찾아 줌

            sortSecondCol(secondReloadSecondCol);
            sortFirstCol(secondReloadFirstCol); // 클릭 마다 반복 됨
        });
    });
};
sortFirstCol(firstColPropertyGrid);

const secondColPropertyGrid = eastDescriptionPlace.querySelector('.second-col');

const sortSecondCol = secondCol => {
   secondCol.addEventListener('click', () => {
        const sortByValue = (by, opt) => {
          const sortValueObj = Object[opt](rowValue).sort(by).reduce((newObj, [name,value]) =>({
              ...newObj, [name]: value
          }),{})

            return [Object.keys(sortValueObj), Object.values(sortValueObj)];
        };

        const ascending = ([,a], [,b]) => {
            if(typeof a === 'string' && a.includes('/')) {
                a = parseInt(a);
                
                return a > b ? -1 : a < b ? 1 : 0;
            }
            return a > b ? -1 : a < b ? 1 : 0;
        };

        const descending = ([,a], [,b]) => {
            if(typeof b === 'string' && b.includes('/')) {
                b = parseInt(b);
                
                return a > b ? 1 : a < b ? -1 : 0;
            }
            return a > b ? 1 : a < b ? -1 : 0;
        };

        eastDescriptionPlace.innerHTML = makeTable(sortByValue(ascending, 'entries'));

        const reloadFirstCol = eastDescriptionPlace.querySelector('.first-col');
        reloadFirstCol.children[0].classList.add('hidden-col-icon');
        const reloadSecondCol = document.querySelector('.second-col');
        reloadSecondCol.children[0].classList.remove('hidden-col-icon');
        reloadSecondCol.children[0].style.transform = 'rotate(180deg)';

        sortFirstCol(reloadFirstCol);

        reloadSecondCol.addEventListener('click', () => {
            eastDescriptionPlace.innerHTML = makeTable(sortByValue(descending, 'entries'));

            const secondReloadFirstCol = eastDescriptionPlace.querySelector('.first-col');
            secondReloadFirstCol.children[0].classList.add('hidden-col-icon');
            const secondReloadSecondCol = document.querySelector('.second-col');
            secondReloadSecondCol.children[0].classList.remove('hidden-col-icon');

            sortSecondCol(secondReloadSecondCol);
            sortFirstCol(secondReloadFirstCol);
        });
    });
};
sortSecondCol(secondColPropertyGrid);