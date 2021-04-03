// console.log("js is loading")
import Home from "./views/Home.js"
import About from "./views/About.js"
import Contact from "./views/Contact.js"
import Intelligence from "./views/Business_intel.js"
import Forecast from "./views/Time_series_forecast.js"
import MarketResearch from "./views/Market_research.js"
import BreakEven from "./views/Break_even.js"



const navigateTo = url => {
	history.pushState(null, null, url);
	router();
};

const router = async () => {
	const routes = [
	{path: "/", view: Home},
	{path: "/contact", view: Contact},
	{path: "/about", view: About},
	{path: "/Business-intelligence", view: Intelligence},
	{path: "/Forecasting-time-series", view: Forecast},
	{path: "/Market-research", view: MarketResearch},
	{path: "/Break-even-analysis", view: BreakEven},
	];

	const potentialMatches = routes.map(route => {
		return {
			route: route,
			isMatch: location.pathname === route.path
		};

	});
	let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
	if(!match){
		match = {
			route: routes[0],
			isMatch: true

		};
	}

	const view = new match.route.view();
	document.querySelector("#app").innerHTML = await view.getHtml();
	// document.querySelector("#about").innerHTML = await view.getHtml();
	// document.querySelector("#mypost").innerHTML = await view.getHtml();




	// console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", e =>{
		if(e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	})
	router();

});