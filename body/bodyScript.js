const getElementBody = value =>  document.querySelector(value);

// west side button controll
getElementBody('.middle .button').addEventListener('click', (e)=>{
    const {style} = getElementBody('.navigation-panel');

    console.log(style);
    console.log(e);
    if(style.display === 'none'){
        style.display = 'block';
    }else{
        style.display = 'none';
    }
});