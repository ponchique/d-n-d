var place = document.querySelector("#place");

place.addEventListener("mousedown", startD);
place.addEventListener("mouseup", endD)
place.addEventListener("dragstart", function (e) { 
    e.preventDefault();
})

// place.ondragstart = function () {
//     return false;
// }

function startD (e) {
    debugger;
    place.classList.add("absolute");
    movingElem(e);
    document.body.appendChild(place);
    addEventListener("mousemove", movingElem);
}

function endD (e) {
    removeEventListener("mousemove", movingElem);
    place.removeEventListener("mouseup", endD);
}

function movingElem (e) {
    var elemCoords = place.style
    elemCoords.left = e.pageX - place.offsetWidth / 2 + 'px';
    elemCoords.top = e.pageY - place.offsetHeight / 2 + 'px';
}

