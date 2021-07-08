const HookGetElement = value =>  document.querySelector(value);

const HookClickEvent = (value, callback) => value.addEventListener('click', callback);