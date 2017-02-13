var carusel= [
	"./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
]

	var count = 0;
$("#next").on("click", function(){
  count++;
  if (count > carusel.length - 1){
    count = 0;
  }
  $("img").attr("src", carusel[count]);
});

$("#back").on("click", function(){
  count--;
	console.log("working")
  if (count < 0){
    count = carusel.length - 1;
  }
  $("img").attr("src", carusel[count]);
});
