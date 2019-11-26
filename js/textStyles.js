
/* side controls buttons slide in */
function openNav() {
    document.getElementById("sideStyles").style.width = "125px";
}

function closeNav() {
    document.getElementById("sideStyles").style.width = "0px";
}

/* styles */
$(document).ready(function(){
    $(".style1").click(function(){
$(".editable").toggleClass("ivoryglow");
    });
});

$(document).ready(function(){
    $(".style2").click(function(){
$(".editable").toggleClass("invisible");
    });
});

$(document).ready(function(){
    $(".style3").click(function(){
$(".editable").toggleClass("threeD");
    });
});

$(document).ready(function(){
    $(".style4").click(function(){
$(".editable").toggleClass("h6");
    });
});

$(document).ready(function(){
    $(".style5").click(function(){
$(".editable").toggleClass("bigOne");
    });
});

$(document).ready(function(){
    $(".style6").click(function(){
$(".editable").toggleClass("shadow");
    });
});

$(document).ready(function(){
    $(".style7").click(function(){
$(".editable").toggleClass("glow");
    });
});

$(document).ready(function(){
    $(".style8").click(function(){
$(".editable").toggleClass("mask");
    });
});

$(document).ready(function(){
    $(".style9").click(function(){
$(".editable").toggleClass("mixed");
    });
});

/*another style */
$(function() {
  $(".title em").lettering();
  $(".close").fitText(5);
});

/* swap button text */
$("#eye").on("click", function() {
  var el = $(this);
  el.text() == el.data("text-swap") 
    ? el.text(el.data("text-original")) 
    : el.text(el.data("text-swap"));
});

/* When the user clicks anywhere outside of the slideout, close it
window.onclick = function(event) {
    if (event.target == .sidenav) {
        .sidenav.style.display = "none";
    }
}
*/

/* random words */

var adj = [
 'bitter',
'delicious',
'fresh',
'greasy',
'juicy',
'hot',
'icy',
'loose',
'melted',
'nutritious',
'prickly',
'rainy',
'rotten',
'salty',
'sticky',
'strong',
'sweet',
'tart',
'tasteless',
'uneven',
'weak',
'wet',
'wooden',
'yummy',
'broad',
'chubby',
'crooked',
'curved',
'deep',
'flat',
'high',
'hollow',
'low',
'narrow',
'round',
'shallow',
'skinny',
'square',
'steep',
'straight',
'wide'
];

var noun = [
'alarm',
'animal',
'aunt',
'bait',
'balloon',
'bath',
'bead',
'beam',
'bean',
'bedroom',
'boot',
'bread',
'brick',
'brother',
'camp',
'chicken',
'children',
'crook',
'deer',
'dock',
'doctor',
'downtown',
'drum',
'dust',
'eye',
'family',
'father',
'fight',
'flesh',
'food',
'frog',
'goose',
'grade',
'grandfather',
'grandmother',
'grape',
'grass',
'hook',
'horse',
'jail',
'jam',
'kiss',
'kitten',
'light',
'loaf',
'lock',
'lunch',
'lunchroom',
'meal',
'mother',
'notebook',
'owl',
'pail',
'parent',
'park',
'plot',
'rabbit',
'rake',
'robin',
'sack',
'sail',
'scale',
'sea',
'sister',
'soap',
'song',
'spark',
'space',
'spoon',
'spot',
'spy',
'summer',
'tiger',
'toad',
'town',
'trail',
'tramp',
'tray',
'trick',
'trip',
'uncle',
'vase',
'winter',
'water',
'week',
'wheel',
'wish',
'wool',
'yard',
'zebra'
]

var getAdjective = function() {
  return adj[Math.floor(Math.random() * adj.length)];
};
var getNoun = function() {
  return noun[Math.floor(Math.random() * noun.length)];
};

$('#theButton').click(function() {
  $('.adj').html(getAdjective());
  $('.noun').html(getNoun());
});

