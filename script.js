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

const makeCanvas = (container, label, dataset, colorset) => {
	cont = container.getContext("2d");
	res = new Chart(cont, {
		type: "doughnut",
		data: {
			labels: label,
			datasets: [
				{
					data: dataset,
					backgroundColor: colorset,
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
	return res;
};

const makeBarCanvas = (container, thelabels, dataset, colorset) => {
	cont = container.getContext("2d");
	res = new Chart(cont, {
		type: "bar",
		data: {
			labels: thelabels,
			datasets: [
				{
					label: "Lack of Vitamin D",
					data: dataset,
					backgroundColor: colorset,
				},
			],
		},
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		},
	});
	return res;
};

makeCanvas(
	document.getElementById("stats__malnourishment"),
	["Malnourished people in Mongolia", "Nourished people in Mongolia"],
	[35, 65],
	["red", "green"]
);

makeCanvas(
	document.getElementById("stats__ulaanbaatar_food"),
	[
		"People with proper access to food in Ulaanbaatar",
		"People without proper access to food in Ulaanbaatar",
	],
	[68, 32],
	["gold", "lightgreen"]
);

makeCanvas(
	document.getElementById("stats_fiveyr_olds"),
	[
		"Healthy Mongolian 0-5 year olds",
		"Anemic Mongolian 0-5 year olds",
		"Undernourished Mongolian 0-5 year olds",
	],
	[13, 20, 80],
	["red", "orange", "lightgreen"]
);

makeBarCanvas(
	document.getElementById("stats_vitad"),
	["Children Under 5", "Pregnant Women", "Men"],
	[90, 95, 85],
	["orange", "red", "gold"]
);

new ScrollMagic.Scene({
	triggerElement: "#stats",
	triggerHook: 0.7,
})
	.setTween(fadein(document.querySelectorAll("#stats > *")[0]))
	.duration(700)
	.addTo(controller);

for (let i = 1; i < document.querySelectorAll("#stats > *").length; i++) {
	new ScrollMagic.Scene({
		triggerElement: document.querySelectorAll("#stats > *")[i - 1],
		triggerHook: "onCenter",
	})
		.setTween(fadein(document.querySelectorAll("#stats > *")[i]))
		.duration(700)
		.addTo(controller);
}