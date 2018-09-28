window.onload = function () {
	var svg =  document.querySelector("#BurgerMenu path");
	var navigation =  document.querySelector(".navigation");
	colorMenuIcon();
	window.addEventListener('resize', colorMenuIcon);
	window.onscroll = function() {
		console.log(window.innerWidth);
	if ((getBodyScrollTop() >= window.innerHeight) && (window.innerWidth < 1199)){
		svg.style.fill = "black";
		navigation.style.color = "black";
		console.log("1");
	} else if (window.innerWidth < 1199) {
		svg.style.fill = "white";
		navigation.style.color = "white";
		console.log("2");
	} else if (window.innerWidth >= 1199) {
		svg.style.fill = "black";
		navigation.style.color = "black";
		console.log("3");
	}
}
}

function getBodyScrollTop()
{
  return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}
function colorMenuIcon()
{
	let svg =  document.querySelector("#BurgerMenu path");
	let navigation =  document.querySelector(".navigation");
  if ((getBodyScrollTop() > window.innerHeight) && (window.innerWidth < 1199)){
		svg.style.fill = "black";
		navigation.style.color = "black";
		console.log("1");
	} else if ((window.innerWidth < 1199) && ( getBodyScrollTop() < window.innerHeight)) {
		svg.style.fill = "white";
		navigation.style.color = "white";
		console.log("2");
	} else if (window.innerWidth >= 1199) {
		svg.style.fill = "black";
		navigation.style.color = "black";
		console.log("3");
	}
}