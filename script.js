let controller = new ScrollMagic.Controller();

const fadein = (selector) => {
	var fadeInTimeline = new TimelineMax();
	var fadeInFrom = TweenMax.from(selector, 1, {
		autoAlpha: 0,
	});
	var fadeInTo = TweenMax.to(selector, 1, {
		autoAlpha: 1,
	});
	fadeInTimeline.add(fadeInFrom).add(fadeInTo);
	return fadeInTimeline;
};

const malnorish_cont = document
	.getElementById("stats__malnourishment")
	.getContext("2d");
malnorish = new Chart(malnorish_cont, {
	type: "doughnut",
	data: {
		labels: ["Malnourished people in Mongolia", "Nourished people in Mongolia"],
		datasets: [
			{
				data: [35, 65],
				backgroundColor: ["red", "green"],
			},
		],
	},
	height: 100,
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Chart.js Doughnut Chart",
			},
		},
	},
});

new ScrollMagic.Scene({
	triggerElement: "#stats",
	//triggerHook: "onEnter",
	offset: 10,
})
	.setTween(fadein(document.querySelectorAll("#stats > *")[0]))
	.duration(1000)
	.addTo(controller);
