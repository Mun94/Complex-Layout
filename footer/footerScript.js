const getElement = value =>  document.querySelector(value);

getElement('.test').addEventListener('click', ()=>{
    console.log('test');
});


