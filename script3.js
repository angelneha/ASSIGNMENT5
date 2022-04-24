let txt = document.createElement("input");
txt.setAttribute("id", "textbox");
txt.setAttribute("type","text");

let txt1 = document.createElement("input");
txt1.setAttribute("id", "textbox1");
txt1.setAttribute("type","text");

let txt2 = document.createElement("input");
txt2.setAttribute("id", "textbox2");
txt2.setAttribute("type","text");

let btn = document.createElement("button");
btn.setAttribute("id", "btnReadValue");
btn.textContent = "Read Value";

let p = document.createElement("p");

btn.addEventListener("click", () => {
    let txt = document.getElementById("textbox");
    let txt1 = document.getElementById("textbox1");
    let txt2 = document.getElementById("textbox2");
    if(!txt.value || !txt1.value || !txt2.value) {
        console.log("Text box should not be empty.");
        p.innerText =( "Text box should not be empty.");
    } else {
        console.log(
        `this is the textbox value ${txt.value}, ${txt1.value}, ${txt2.value} ` 
        );
        p.innerText = ` this is the textbox value ${txt.value}, ${txt1.value}, ${txt2.value} `
    }
});
document.body.appendChild(txt);
document.body.appendChild(txt1);
document.body.appendChild(txt2);
document.body.appendChild(btn);
document.body.appendChild(p);