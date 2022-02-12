// Defines the onclick function for button
function changepage(){
    // Change the HTML text
    let pTag = document.getElementById("pleasechange");
    pTag.innerHTML = "This page was changed!";

    // Change CSS style
    let hTags = document.getElementsByClassName("heading");
    for(let i = 0; i < hTags.length; ++i) {
        hTags[i].style.color = "blue";
    }
}