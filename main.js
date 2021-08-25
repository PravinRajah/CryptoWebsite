url = "https://api.nomics.com/v1/prices?key=0721d6554e01f9edaa2af723fe20b3242663dc97";
async function getData(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    
}
function createData(data){
    data.results.forEach(function(){
        makeElement('h2',undefined,data);
    })
}
function makeElement(type='div',newClass, inner = ''){
    let newElement = document.createElement(type);
    if (newClass){
        newElement.classList.add(newClass);
    }
    newElement.innerHTML = inner;
    return newElement;
}
getData(url);