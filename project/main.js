

var prodactName = document.getElementById("prodactName");
var prodactPr = document.getElementById("prodactPr");
var prodactcat = document.getElementById("prodactcat");
var prodactdes = document.getElementById("prodactdes");
var savebtn = document.getElementById("savebtn");
var prodctList;

if (localStorage.getItem("prodctList") == null) {
    prodctList = []
}
else {
    prodctList = JSON.parse(localStorage.getItem("prodctList"))
    displyProdct(prodctList)
}
var can;
function localStorageup() {
    localStorage.setItem("prodctList", JSON.stringify(prodctList))
}

function addPordcet() {
    var prodct = {
        name: prodactName.value,
        price: prodactPr.value,
        catog: prodactcat.value,
        desc: prodactdes.value,
    }
    prodctList.push(prodct)
    localStorageup()
    console.log(prodctList);
    displyProdct()
    clear()
}

function displyProdct(productsToDisplay = prodctList) {
    var cart = ''
    for (var i = 0; i < productsToDisplay.length; i++) {
        cart +=
            `
        <tr>
                    <td>${i + 1}</td>
                    <td>${productsToDisplay[i].name}</td>
                    <td>${productsToDisplay[i].price}</td>
                    <td>${productsToDisplay[i].catog}</td>
                    <td>${productsToDisplay[i].desc}</td>
                    <td><button onclick="update(${i})" class="btn btn-success">up date</button></td>
                    <td><button onclick="Delete(${i})" class="btn btn-danger">Delete</button></td>
                </tr>
        `
    }
    document.getElementById("tbody").innerHTML = cart
}
function clear() {
    prodactName.value = "",
        prodactPr.value = "",
        prodactcat.value = "",
        prodactdes.value = ""
}
function Delete(index) {
    prodctList.splice(index, 1)
    localStorageup()
    displyProdct(prodctList)
}

function update(index) {
    prodactName.value = prodctList[index].name,
        prodactPr.value = prodctList[index].price,
        prodactcat.value = prodctList[index].catog,
        prodactdes.value = prodctList[index].desc
    savebtn.classList.remove("d-none")
    con = index
}
function saveupdate() {
    prodctList[con].name = prodactName.value
    prodctList[con].price = prodactPr.value
    prodctList[con].catog = prodactcat.value
    prodctList[con].desc = prodactdes.value
    localStorageup()
    displyProdct()
    savebtn.classList.add("d-none")
    clear()
}
// function serchProdcet(data) {
//     var newProdectListt = []
//     for (var n = 0; n < prodctList.length; n++) {
//         if (prodctList[n].name.toLowerCase().includes(data.toLowerCase())) {

//             newProdectListt.push(prodctList[n])
//             console.log("kkj", prodctList[n]);
//         }

//     displyProdct(newProdectListt)
//     }
// }
function searchProduct(data) {
    console.log(data);
    var newProductsList = []


    for (var i = 0; i < prodctList.length; i++) {
        if (prodctList[i].name.toLowerCase().includes(data.toLowerCase())) {
            newProductsList.push(prodctList[i])
            console.log("founded", prodctList[i]);


        }
        displyProdct(newProductsList)
    }
}