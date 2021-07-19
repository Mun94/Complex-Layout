const bodyParentEle = document.querySelector('.body-block');

// west side button controll(클릭 시 왼쪽으로 접힘)
const westSideBlock = bodyParentEle.querySelector('.west-side-block');
const westSideFolded = bodyParentEle.querySelector('.west-side-block-folded');
const westSideDragZone = bodyParentEle.querySelector('.west-side-drag-zone');

const westParent = bodyParentEle.querySelector('.west'); // 전체 블럭
const westSideTopButton = bodyParentEle.querySelector('.west-side-block .button');
const westSideFoldedTopButton = bodyParentEle.querySelector('.west-side-block-folded .folded-button');

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
const southParent = document.querySelector('.south');
//////////
const navigationAcodiItem = bodyParentEle.querySelector('.navigation');
const navigationButton = bodyParentEle.querySelector('.navigation-button');

const settingsAcodiItem = bodyParentEle.querySelector('.settings');
const settingsButton = bodyParentEle.querySelector('.settings-button');

const informationAcodiItem = bodyParentEle.querySelector('.information');
const informationButton = bodyParentEle.querySelector('.information-button');

/////////
const closeMeDescriptionPlace = bodyParentEle.querySelector('.middle-block .close-me-description');
const centerPanelDescriptionPlace = bodyParentEle.querySelector('.middle-block .center-panel-description');
const closeMeButton = bodyParentEle.querySelector('.close-me-button');
const centerPanelButton = bodyParentEle.querySelector('.center-panel-button');

const closeMeClose = bodyParentEle.querySelector('.close-me-close-icon');
const closeMeBlock = bodyParentEle.querySelector('.close-me-block');
/////////
const toggleWestRegion = bodyParentEle.querySelector('.toggle-the-west-region');
/////////
const propertyGridDescriptionPlace = bodyParentEle.querySelector('.property-grid-description');
const aTabDescriptionPlace = bodyParentEle.querySelector('.a-tab-description');
const aTabButton = bodyParentEle.querySelector('.a-tab-button');
const propertyGridButton = bodyParentEle.querySelector('.property-grid-button');
/////////
const propertyGridClose = bodyParentEle.querySelector('.property-grid-close-icon');
const propertyGridBlock = bodyParentEle.querySelector('.property-grid-block');
///////////
const navigationCategoryPanel = document.querySelector('.navigation-panel');
const settingsCategoryPanel = document.querySelector('.settings-panel');
const informationCategoryPanel = document.querySelector('.information-panel');
///////
const eastDescriptionPlace = bodyParentEle.querySelector('.property-grid-description');
const firstColPropertyGrid = eastDescriptionPlace.querySelector('.first-col');
const secondColPropertyGrid = eastDescriptionPlace.querySelector('.second-col');

// west east south 접고 펴기
class WestEastSouthFold extends AcodFold{
    constructor(params= {}){
        const {
            topBtn, 
            foldedTopBtn, 
            dragZone, 
            wrap, 
            foldedWrap, 
            parent,
            initFolded    
        } = params;
        super(dragZone, wrap, foldedWrap, parent, initFolded);

        this.topBtn = topBtn;
        this.foldedTopBtn = foldedTopBtn;
        this.side = parent.className;
        this.initFolded = initFolded;

            this.topBtn.addEventListener('click', () => {
                this.folded();
            });
      
            this.foldedTopBtn.addEventListener('click', ()=>{
                this.spread();
            });
      
            this.dragZone.addEventListener('click', (e) => {
                this.onClickDragZone()
            });
    };

    onClickDragZone(){
        const check = this.dragZone.classList.contains(`${this.side}-side-folded`);
        const dragZonClassNameToggle = this.dragZone.classList.toggle(`${this.side}-side-folded`, !check);

        if(this.initFolded){
            check ? this.folded() : this.spread() 
            dragZonClassNameToggle;
            return;
        };

        check ? this.spread() : this.folded();
        dragZonClassNameToggle;
    };
};

new WestEastSouthFold({
        topBtn: westSideTopButton,
        foldedTopBtn: westSideFoldedTopButton,
        dragZone: westSideDragZone,
        wrap: westSideBlock,
        foldedWrap: westSideFolded,
        parent: westParent
});
new WestEastSouthFold({
        topBtn: eastSideTopButton,
        foldedTopBtn: eastSideFoldedTopButton,
        dragZone: eastSideDragZone,
        wrap: eastSideBlock,
        foldedWrap: eastSideFolded,
        parent: eastParent
});
new WestEastSouthFold({
        topBtn: southSideTopButton,
        foldedTopBtn: southSideFoldedTopButton,
        dragZone: southSideDragZone,
        wrap: southSideBlock,
        foldedWrap: southSideFolded,
        parent: southParent,
        initFolded: true
});

// west side category
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

navigationButton.itemId = 'navigationButton';
settingsButton.itemId = 'settingsButton';
informationButton.itemId = 'informationButton';

class WestAcodItem {
    constructor(param = {}) {
        const {isOpen, wrapPnl, actionBtn, nextWrapPnl} = param;
        
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
        isOpen: true,
        wrapPnl: navigationAcodiItem,
        actionBtn: navigationButton,
        nextWrapPnl: settingsAcodiItem
    }),
    new WestAcodItem({
        wrapPnl: settingsAcodiItem,
        actionBtn: settingsButton,
        nextWrapPnl: informationAcodiItem
    }),
    new WestAcodItem({
        wrapPnl: informationAcodiItem,
        actionBtn: informationButton,
        nextWrapPnl: settingsAcodiItem
    }),
];

// middle 부분 부터 본문 내용은 description.config.js에 있음!
// middle button(close me, center panel) controll (+ toggle west side controll)
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
toggleWestRegion.addEventListener('click', () => {
    const westSide = new AcodFold(
                            westSideDragZone,
                            westSideBlock,
                            westSideFolded,
                            westParent
                        );
    const check = westSideBlock.classList.contains('west-spread-folder-close');

    if(check){
        westSide.spread(); 
        return;
    };

    westSide.folded();
});

// east button(a tab, property grid) controll
new Category({
    firBtn: propertyGridButton,
    firDes: propertyGridDescriptionPlace,
    secBtn: aTabButton,
    secDes: aTabDescriptionPlace
});

// east side property grid close (property grid 창 닫기)
new CloseIcon({
    wrap: propertyGridBlock,
    clsIcon: propertyGridClose,
    firDes: propertyGridDescriptionPlace,
    secDes: aTabDescriptionPlace,
    secBtn: aTabButton
});

// south 접고 펼칠 때 west, east, middle 높이 조절
southSideFoldedTopButton.addEventListener('click', () => {
    shortClassName('add');
});

southSideTopButton.addEventListener('click', () => {
    shortClassName('remove');
});

southSideDragZone.addEventListener('click', () => {
    const check = southSideDragZone.classList.contains('south-side-folded')
    
    if(check){
        shortClassName('add');
    }else{
        shortClassName('remove');
    };
});

// east side property grid sort
const sortFirstCol = firstCol => { // innerHTML 등으로 요소를 적용했을 때 같은 class 이름이더라도 인식하지 못 하게 됨 
    firstCol.addEventListener('click' , () => {
        const sortByName = (by, opt) => {
            const sortNameObj = Object[opt](rowValue).sort(by).reduce((newObj, cur) => {
                newObj[cur] = rowValue[cur]
                return newObj;
            },{});

            return [Object.keys(sortNameObj), Object.values(sortNameObj)]
        };

        const ascending = (a, b) => a > b ? -1 : a < b ? 1 : 0;
        const descending = (a, b) => a > b ? 1 : a < b ? -1 : 0;

        eastDescriptionPlace.innerHTML = makeTable(sortByName(ascending, 'keys'));

        const reloadFirstCol = eastDescriptionPlace.querySelector('.first-col');
        const reloadSecondCol = eastDescriptionPlace.querySelector('.second-col'); // 가까운 형제 요소 찾아 줌

        sortIcon(reloadSecondCol, reloadFirstCol, 'rotate');
        sortFirstCol(reloadFirstCol);
        sortSecondCol(reloadSecondCol); // 첫 번째 열을 눌렀을 때 두 번째 열을 누르면 두 번째 열 sort

        reloadFirstCol.addEventListener('click', () => {
            eastDescriptionPlace.innerHTML = makeTable(sortByName(descending, 'keys'));

            const secondReloadFirstCol = eastDescriptionPlace.querySelector('.first-col');
            const secondReloadSecondCol =  eastDescriptionPlace.querySelector('.second-col');// 가까운 형제 요소 찾아 줌

            sortIcon(reloadSecondCol, reloadFirstCol);
            sortFirstCol(secondReloadFirstCol); // 클릭 마다 반복 됨
            sortSecondCol(secondReloadSecondCol);
        });
    });
};
sortFirstCol(firstColPropertyGrid);

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
        const reloadSecondCol = eastDescriptionPlace.querySelector('.second-col');
    
        sortIcon(reloadFirstCol, reloadSecondCol, 'rotate');
        sortFirstCol(reloadFirstCol);

        reloadSecondCol.addEventListener('click', () => {
            eastDescriptionPlace.innerHTML = makeTable(sortByValue(descending, 'entries'));

            const secondReloadFirstCol = eastDescriptionPlace.querySelector('.first-col');
            const secondReloadSecondCol = eastDescriptionPlace.querySelector('.second-col');
           
            sortIcon(secondReloadFirstCol, secondReloadSecondCol)
            sortSecondCol(secondReloadSecondCol);
            sortFirstCol(secondReloadFirstCol);
        });
    });
};
sortSecondCol(secondColPropertyGrid);

// west side drag zone 창 크기 조절
const onWestMouseMove = e => {
    westParent.style.width =  e.clientX + 'px';
    westParent.style.minWidth = '175px';
};

const onWestMouseDown = () => {
    bodyParentEle.addEventListener('mousemove', onWestMouseMove);
};

controllWidth(bodyParentEle, westSideDragZone, onWestMouseDown, onWestMouseMove);

// east side drag zone 창 크기 조절
const onEastMouseMove = e => {
    eastParent.style.width = (document.body.clientWidth - e.clientX) +'px';
    eastParent.style.minWidth = '240px'; 
};

const onEastMouseDown = () => {
    bodyParentEle.addEventListener('mousemove', onEastMouseMove);
};

controllWidth(bodyParentEle, eastSideDragZone, onEastMouseDown, onEastMouseMove);