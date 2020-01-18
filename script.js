let text = document.getElementById('inputbox')
let add = document.getElementById('add')
let clr = document.getElementById('clr')
let list = document.getElementById('list')

let count = 0


add.onclick = function () {

    localStorage.setItem("li" + count, text.value)
    let newli = document.createElement('li')
    newli = localStorage.getItem("li" + count)
    list.appendChild('newli')










}