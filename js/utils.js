const foldedStatus = (wrap, foldedWrap, side, folded) => {
    wrap.classList.toggle(`${side}-spread-folder-close`, !folded);
    wrap.classList.toggle(`${side}-spread-folder-open`, folded);

    foldedWrap.classList.toggle(`${side}-folded-folder-open`, !folded);
    foldedWrap.classList.toggle(`${side}-folded-folder-close`, folded);
};

const toggleEvent = (initFolded, dragZone, side, toggleEvt, folded) => {
   if(initFolded){
        dragZone.classList.toggle(`${side}-side-folded`, folded);
   }else{
        dragZone.classList.toggle(`${side}-side-folded`, !folded);
        side === 'east' && dragZone[toggleEvt]('mousedown', onEastMouseDown);
        side === 'west' && dragZone[toggleEvt]('mousedown', onWestMouseDown);
   };
};

class AcodFold{
    constructor(dragZone, wrap, foldedWrap, parent, initFolded){
        this.dragZone = dragZone;
        this.wrap = wrap;
        this.foldedWrap = foldedWrap;
        this.parent = parent;
        this.side = parent.className;
        this.initFolded = initFolded

        this.fold = false;
    };
    // 접기
    folded(){ 
        this.parent.style.minWidth = 'initial';
        this.parent.style.width = 'initial';

        foldedStatus(this.wrap, this.foldedWrap, this.side, this.fold);

        toggleEvent(this.initFolded, this.dragZone, this.side, 'removeEventListener', this.fold);
    };
    // 펴기
    spread(){
        foldedStatus(this.wrap, this.foldedWrap, this.side, !this.fold);

        toggleEvent(this.initFolded, this.dragZone, this.side, 'addEventListener', !this.fold);
    };
};

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

const shortClassName = (toggle) => {
    westSideBlock.classList[toggle]('short-wrap');
    eastSideBlock.classList[toggle]('short-wrap');
    
    eastSideFolded.classList[toggle]('short-wrap');
    westSideFolded.classList[toggle]('short-wrap');

    closeMeDescriptionPlace.classList[toggle]('short');
    centerPanelDescriptionPlace.classList[toggle]('short');

    propertyGridDescriptionPlace.classList[toggle]('short');
    aTabDescriptionPlace.classList[toggle]('short');

    navigationCategoryPanel.classList[toggle]('short');
    settingsCategoryPanel.classList[toggle]('short');
    informationCategoryPanel.classList[toggle]('short');
};

const sortIcon = (Icon, appearIcon, rotate) => {
    Icon.children[0].classList.add('hidden-col-icon');
    appearIcon.children[0].classList.remove('hidden-col-icon');

    if(rotate){
        return appearIcon.children[0].classList.add('property-grid-icon-rotate');
    };
};

const controllWidth = (bodyWrap, dragZone, mouseDown, mouseMove) => {
    dragZone.addEventListener('mousedown', mouseDown);

    bodyWrap.addEventListener('mouseup', () => {
        bodyWrap.removeEventListener('mousemove', mouseMove);
    });
};