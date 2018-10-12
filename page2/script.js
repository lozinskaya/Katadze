window.onload = function () {
	var svg =  document.querySelector("#BurgerMenu path");
	var navigation =  document.querySelector(".navigation");
	var navButtons = document.querySelector(".navButtons");
	var main = document.querySelector("#main");
	colorMenuIcon();
	window.addEventListener('resize', colorMenuIcon);
	window.onscroll = function() {
	if ((getBodyScrollTop() >= window.innerHeight) && (window.innerWidth < 1199)){
		svg.style.fill = "black";
		navigation.style.color = "black";
	} else if (window.innerWidth < 1199) {
		svg.style.fill = "white";
		navigation.style.color = "white";
	} else if (window.innerWidth >= 1199) {
		svg.style.fill = "black";
		navigation.style.color = "black";
	}
	if ((window.innerWidth < 1199) && (getBodyScrollTop() > main.clientHeight)) {
		navButtons.style.position = "fixed";
	}
	if ((navButtons.getBoundingClientRect().top <= 0) && (getBodyScrollTop() > main.clientHeight)) {
		navButtons.style.position = "fixed";
	}
	if (getBodyScrollTop() <= main.clientHeight) {
		navButtons.style.position = "sticky";
		console.log("yes");
	}
	console.log(getBodyScrollTop());
	console.log(main.clientHeight);
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
	} else if ((window.innerWidth < 1199) && ( getBodyScrollTop() < window.innerHeight)) {
		svg.style.fill = "white";
		navigation.style.color = "white";
	} else if (window.innerWidth >= 1199) {
		svg.style.fill = "black";
		navigation.style.color = "black";
	}
}