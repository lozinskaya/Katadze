window.onload = function () {
	let svg =  document.querySelector("#BurgerMenu path");
	let navigation =  document.querySelector(".navigation");
	let navButtons = document.querySelector(".navButtons");
	let main = document.querySelector("#main");
	WidthForm();
	colorMenuIcon();
	if ((window.innerWidth < 1199) && (getBodyScrollTop() > main.clientHeight)) {
		navButtons.style.position = "fixed";
	}
	window.addEventListener('resize', colorMenuIcon);
	window.addEventListener('resize', WidthForm);
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
		} else if ((navButtons.getBoundingClientRect().top <= 0) && (getBodyScrollTop() > main.clientHeight)) {
			navButtons.style.position = "fixed";
		}else {
			navButtons.style.position = "sticky";
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
	} else if ((window.innerWidth < 1199) && ( getBodyScrollTop() < window.innerHeight)) {
		svg.style.fill = "white";
		navigation.style.color = "white";
	} else if (window.innerWidth >= 1199) {
		svg.style.fill = "black";
		navigation.style.color = "black";
	}
}
function WidthForm()
{
	let form =  document.querySelector(".row .form");
	let navigation =  document.querySelector(".closes");
	if ((window.innerWidth <= 767)) { form.style.width = "100%";}
	if ((window.innerWidth > 767)) {
		let x = window.innerWidth - navigation.clientWidth - 15;
		form.style.width = x + "px";
		console.log(navigation.getBoundingClientRect().width );
	}
}