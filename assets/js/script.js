import $ from 'jquery';
import "../css/bootstrap.min.css";
import "../css/normalize.css";
import "../css/style.css";


$(document).ready(function () {
	// when a hanburger menu is clicked
	let $ul = $(".nav__list"),
		 $menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	}); // end click event handler
});
