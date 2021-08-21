let image = prompt('Введите URL картинки')
let displayImage = `<img src="${image}" width="200px"></img>`
console.log(displayimage);
const center = document.querySelector('.center')
center.insertAdjacentElement("afterbegin", displayImage)