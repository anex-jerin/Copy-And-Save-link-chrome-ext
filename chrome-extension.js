const inputBtn = document.getElementById('input-btn')
const Input = document.getElementById('input-el')
const Output = document.getElementById('output')
const deleteBtn = document.getElementById('del-btn')
const saveBtn = document.getElementById("save-btn")
let array = []


const store = JSON.parse(localStorage.getItem("STORE"));



if (store) {
    array = store;
    rendor(array);
}
saveBtn.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        array.push(tabs[0].url)
        localStorage.setItem("STORE", JSON.stringify(array))
        rendor(array)
    })
})

function rendor(value) {
    let list = ""
    for (let i = 0; i < value.length; i++) {
        list += `<li>
        <a target='_blank' href='${value[i]}'>${value[i]}</a>
        </li>`
    }
    Output.innerHTML = list
}

inputBtn.addEventListener("click", function () {
    if (Input.value) {
        array.push(Input.value);
        Input.value = '';
        localStorage.setItem("STORE", JSON.stringify(array))
        rendor(array);

    }
})


deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    array = []
    rendor(array)

})
