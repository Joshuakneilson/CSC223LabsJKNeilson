var list = document.getElementsByClassName("favorite-item");


var myFilter = document.getElementById("filter");
myFilter.onclick = function() {

	list[0].parentNode.removeChild(list[0]);
	console.log("Filter Clicked");
	

	
	
};

var myHighlight = document.getElementById("highlight");
myHighlight.onclick = function(){
	
	list[0].style.backgroundColor = "yellow";
	console.log("Highlight Clicked");

}