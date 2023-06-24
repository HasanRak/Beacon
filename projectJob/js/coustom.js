$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

var speed = 20;

function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(1971, endNbr, elt);
}

function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

function incNbr(){
  incEltNbr("nbr");
}

incEltNbr("nbr");


var speed1 = 10;

function incEltNbr1(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec1(0, endNbr, elt);
}

function incNbrRec1(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {
      incNbrRec1(i + 1, endNbr, elt);
    }, speed1);
  }
}

function incNbr1(){
  incEltNbr("nbr1");
}

incEltNbr1("nbr1"); 

var speed2 = 10;

function incEltNbr2(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec2(0, endNbr, elt);
}

function incNbrRec2(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {
      incNbrRec2(i + 1, endNbr, elt);
    }, speed2);
  }
}

function incNbr2(){
  incEltNbr("nbr2");
}

incEltNbr2("nbr2"); 

var speed3 = 1;

function incEltNbr3(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec3(0, endNbr, elt);
}

function incNbrRec3(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {
      incNbrRec3(i + 1, endNbr, elt);
    }, speed3);
  }
}


function incNbr3(){
  incEltNbr("nbr3");
}

incEltNbr2("nbr3");

