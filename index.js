// time
let timeNow = new Date();
let timeShow = () => {
    document.querySelector(".hours").textContent = timeNow.getHours();
    document.querySelector(".minutes").textContent = timeNow.getMinutes();
    document.querySelector(".seconds").textContent = timeNow.getSeconds();
}

timeShow()

setInterval(function () {
    timeShow()
}, 1000);




// get used elements
let emptyBtn = document.getElementById("red"),
    clearBtn = document.getElementById("blue"),
    addBtn = document.getElementById("add"),
    undoBtn = document.getElementById("green"),
    ol = document.getElementById("oList"),
    li = document.getElementsByTagName("li");
input = document.getElementById("inp");

// dblclick on "li"
for (let item of li) {
    item.addEventListener("dblclick", () => {
        item.style.textDecoration = "line-through";
    })
}



// ADD button
addBtn.addEventListener("click", () => {
    if (input.value != "") {
        let newLi = document.createElement("li");
        newLi.innerHTML = input.value + `     added at ` + new Date().getHours().toString() + " : " + new Date().getMinutes().toString();
        ol.appendChild(newLi);
        input.value = "";

        newLi.addEventListener("dblclick", () => {
            newLi.style.textDecoration = "line-through";
        });
        clearBtn.addEventListener("click", () => {

            if (newLi.style.textDecoration === "line-through") {
                newLi.style.display = "none";
                purple.style.display = "inline";
            }

        })

    }
});


// CLEAR button
clearBtn.addEventListener("click", () => {
    for (let item of li) {
        if (item.style.textDecoration === "line-through") {
            item.style.display = "none";
            purple.style.display = "inline";
        }
    }
})


// EMPTY button
emptyBtn.addEventListener("click", () => {
    ol.style.display = "none";
    undoBtn.style.display = "inline";
});


// UNDO button
undoBtn.addEventListener("click", () => {
    ol.style.display = "inline";
    undoBtn.style.display = "none"
});