let text = document.getElementById('inputbox')
let add = document.getElementById('add')
let clr = document.getElementById('clear')
let list = document.getElementById('list')
let clrall = document.getElementById('clrall')



let count = 0
if (Number(localStorage.count)) {
    count = Number(localStorage.count)
}


refresh()


function refresh() {



    list.innerHTML = ""

    let i = 0
    while (i < count) {

        let newli = document.createElement('li')
        newli.innerHTML = localStorage.getItem("li" + i)
        newli.id = "li" + i

        list.appendChild(newli)
        libtnclick(i)


        i = i + 1


    }


}






let el = document.getElementsByTagName('li')



clr.onclick = function () {



    removeDone()
    refresh()






}


add.onclick = function () {



    localStorage.setItem("li" + count, text.value)
    let newli = document.createElement('li')
    newli.innerHTML = localStorage.getItem("li" + count)
    newli.id = "li" + count

    list.appendChild(newli)
    text.value = ""
    libtnclick(count)

    count = count + 1
    localStorage.count = count













}






text.addEventListener('keypress', function (event) {


    if (event.which == 13) {
        localStorage.setItem("li" + count, text.value)
        let newli = document.createElement('li')
        newli.innerHTML = localStorage.getItem("li" + count)
        newli.id = "li" + count

        list.appendChild(newli)
        text.value = ""
        libtnclick(count)

        count = count + 1
        localStorage.count = count






    }








})





function libtnclick(aa) {




    let elli = document.getElementById("li" + aa)

    elli.onclick = function () {


        if (elli.style.textDecoration == "line-through") {
            elli.style.textDecoration = "none"
            elli.style.color = "black"
            localStorage.setItem("li" + aa, elli.innerHTML)

            elli.id = "li" + aa
        }
        else {
            localStorage.setItem("li" + aa, NaN)
            elli.style.textDecoration = "line-through"
            elli.style.color = "red"
            elli.id = "done" + aa

        }



    }



}




function removeDone() {
    let cc = 0
    let ee = 0
    while (cc < count) {

        if (localStorage.getItem("li" + ee) == "NaN") {



            while (cc < count) {

                localStorage.setItem("li" + cc, localStorage.getItem("li" + (cc + 1)))
                cc = cc + 1


            }
            count = count - 1
            localStorage.setItem("count", count)

        }

        else {
            cc = ee
            cc = cc + 1
            ee = ee + 1
        }

        cc = ee



    }
}


clrall.onclick = function () {

    localStorage.clear()

    localStorage.setItem("count", 0)
    count = 0
    list.innerHTML = ""
    refresh()

}