var elements = document.getElementsByClassName("column");

var i;

function big() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "100%";
        elements[i].style.flex = "100%";
    }
}

function medium() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "50%";
        elements[i].style.flex = "50%";
    }
}

function small() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";
        elements[i].style.flex = "25%";
    }
}

function invert() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.filter = "invert(100%)"
    }
}

function gray() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.filter = "grayscale(100%)"
    }
}

function normal() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.filter = "none"
    }
}

if (window.innerWidth > 652) {
    var modal = document.getElementById("myModal");
    var images = document.getElementsByClassName("images");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    for (var i = 0; i < images.length; i++) {
        var img = images[i];
        img.onclick = function(evt) {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    };
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "responsive-header") {
        x.className += " responsive";
    } else {
        x.className = "responsive-header";
    }
}