// west side button controll(클릭시 왼쪽으로 접힘)
const westSideBlock = useGetElement('.west-side-block'); // toggle the west region에서도 사용됨!! 지역 변수로 사용하자니.. 코드가 너무 많아짐

const westParent = useGetElement('.west'); // 전체 블럭
const westSideTopButton = useGetElement('.west-side-block .button');

const spreadFold = (fold, button) => {
    button && useClickEvent(button, () => {
        fold.remove();
        westParent.appendChild(westSideBlock)// outerHTML을 사용하면 [object HTMLDivElement]이 출력됨
    })
}

useClickEvent(westSideTopButton, e=> {
    westSideBlock.outerHTML = westSideFoldedHtml; // foldHtml.js 파일에 있음

    const westSideFolded = useGetElement('.west-side-block-folded');  
    const westSideTopFoldedButton = useGetElement('.west-side-block-folded .button');

    spreadFold(westSideFolded, westSideTopFoldedButton)
});


// west side category button controll
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

// middle button controll
const closeMeButton = useGetElement('.close-me-button');
const centerPanelButton = useGetElement('.center-panel-button');
const descriptionPlace = useGetElement('.middle-block .description');

descriptionPlace.innerHTML = closeMe;

useClickEvent(closeMeButton, () => {
   if(descriptionPlace.innerHTML === closeMe) return; // 없으면 클릭때마다 같은 부분이 중첩으로 계속 새로 생김

    descriptionPlace.innerHTML = closeMe; // 본문 내용 교체
});

useClickEvent(centerPanelButton, () => {
    if(descriptionPlace.innerHTML === centerPanel) return;

    descriptionPlace.innerHTML = centerPanel; // 본문 내용 교체

    const toggleWestSide = useGetElement('.toggle-the-west-region');

    toggleWestSide && useClickEvent(toggleWestSide, () =>{
        const copyWestSideBlock = useGetElement('.west-side-block');
        const westParent = useGetElement('.west'); // 전체 블럭

        if(copyWestSideBlock){
            copyWestSideBlock.outerHTML = westSideFoldedHtml; // foldHtml.js 파일에 있음

            // 아래 로직은 center panel의 toggle 버튼을 통해 west side를 접은 상태에서 west side 상다의 버튼을 클릭했을 때 동작하지 않는 에러 해결
            const westSideTopFoldedButton = useGetElement('.west-side-block-folded .button');
            const westSideFolded = useGetElement('.west-side-block-folded');  

            spreadFold(westSideFolded, westSideTopFoldedButton);
        }else{
            const westSideFolded = useGetElement('.west-side-block-folded');  

            westSideFolded.remove();
            westParent.appendChild(westSideBlock)// outerHTML을 사용하면 [object HTMLDivElement]이 출력됨
        };
    });
});

// middle toggle west side controll