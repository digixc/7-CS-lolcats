
function overlayon(bgcol) {
    var bgcol = bgcol;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.background = bgcol;
    underlayoff();
}

function overlayoff() {
    document.getElementById("overlay").style.display = "none";
}

function underlayon(bgcol) {
    document.getElementById("underlay").style.display = "block";
    document.getElementById("underlay").style.background = bgcol;
    overlayoff();
}

function underlayoff() {
 
        document.getElementById("underlay").style.display = "none";
}
