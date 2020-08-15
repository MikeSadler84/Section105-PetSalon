let main = document.getElementsByTagName("main");

let h1 = document.createElement("h1");
let text = document.createTextNode("Hello World");
h1.appendChild(text);
console.log(h1);
main[0].appendChild(h1);
//Challenge

let ul = document.createElement("ul");

for(var i=1; i<=3;i++){
    let li = document.createElement("li");
    textLi=document.createTextNode("Element" +i);
    li.appendChild(textLi);
    ul.appendChild(li);

}
main[0].appendChild(ul);

// create a table with 2 rows and 2 columns
for(var i=1; i<=2;i++){
let tr = document.createElement("tr");
for(var j=1; j<=2;j++){

    let td = document.createElement("td");
    textTd = document.createTextNode("Element");

    td.appendChild(textTd);
    td.setAttribute("class", "bordered");
    tr.appendChild(td);

}
main[0].appendChild(tr);
}

