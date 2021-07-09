const useGetElement = value =>  document.querySelector(value);

const useClickEvent = (value, callback) => value.addEventListener('click', callback);