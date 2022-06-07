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
					label: "Extent",
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
	document.getElementById("gdpcanvas"),
	["Agriculture and Livestock", "Everything Else"],
	[12, 88],
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

makeBarCanvas(
	document.getElementById("stats_iron"),
	["Very young children", "Pregnant Women"],
	[21, 30],
	["orange", "gold"]
);

makeBarCanvas(
	document.getElementById("genInfo_howbad_chart"),
	[
		"Food source ran very low",
		"Worried about not having enough food",
		"Had to eat less food",
	],
	[72, 47, 34],
	["red", "yellow", "lightgreen"]
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
		triggerHook: "onEnd",
	})
		.setTween(fadein(document.querySelectorAll("#stats > *")[i]))
		.duration(1000)
		.addTo(controller);
}

answers = {
	defprob:
		"In Mongolia, a poor country to the north of China, many people are going hungry. We need to stop this.",
	chooseWhat:
		"I have chosen the second global goal of No Hunger. I choose this goal because you can be poor and alive, but you cannot be deprived of food and stay alive. I have heard of how poor and hungry Mongolians are, which is very saddening as you know that without help, these hungry Mongolians will likely die. ",
	howBad:
		"Most of the people affected are impoverished Mongolian herders living in the countryside. The thing is, 28.4% of Mongolia lives below the poverty line, which is a lot. 22% of Mongolia does not have regular food sources to live a healthy life. The following graph shows the food supplies of families during COVID:",
	dontDoAnything:
		"If this hunger problem is not solved, then many people will starve, which usually leads to death. In addition, many Mongolians are forced to take out loans that they cannot pay back to feed themselves. So if they don’t die, Mongolians will wind up in a financial crisis. ",
	scienceFactors:
		'Yes! A weather phenominom known as a "dzud" is the main reason there is hunger in Mongolia. A dzud is a harsh winter after a dry summer. This causes the pastures that livestock grazes on are frozen solid under deep snow. Livestock (which herding families rely on for food, transportation, and income) do not survive dzuds. Due to climate change, dzuds have become very common. ',
	personalStory:
		"Clip of a video made by the Food and Agriculture Organization of the United Nations (FAO) about their Mongolian Early Warning Program:",
	sol1ex:
		"Dzuds, the main cause of hunger in Mongolia have been increasingly common over the years due to climate change. Thus, dzuds can become less common if climate change is minimized ",
	//sol2ex:
	//	"Unfortunately, not everyone knows about the global goals. Surveys found that only between 28-45% of people have even heard of the global goals. Imagine if the rest of the 55-72% of the world population knew about the global goals. Many more people would be aware, and hence, more people can make a difference. ",
	sol3ex:
		"Donating money is one of the simplest things you can do, but it is one of the most powerful things that can be done. According to the FAO, an organization working in Mongolia, every 1 US Dollar they spent resulted in 7.1 US Dollars in benefits in households ",
	sol4ex:
		'One way to survive a dzud is to move to pastures that are not affected by dzuds. This migration is called "otor." Access to these pastures isn’t the best, so paving a road to distant pastures could help ',
	sol5ex:
		"Livestock starve to death due to a lack of grass when the ground is frozen solid during dzuds. Mongolians depend on these livestock for many things which include food. Hence, by feeding these livestock, you can save them. ",
	sol1pro:
		"Despite how much money or awareness you raise, dzuds will still be a thing due to climate change. You can uproot this problem with this solution.",
	sol1con: "Climate change isn’t exactly the most controllable of things ",
	//sol2pro:
	//"This is easy to do. Just phone your friends and family. That doesn’t really take that much effort. ",
	//sol2con:
	//"More awareness doesn’t necessarily result in more difference. So, this could become effort for nothing ",
	sol3pro:
		"Unlike stopping climate change, donating money can be done very simply. ",
	sol3con:
		"donating money is technically losing hard-earned money, so doing this could make money earned after working hard disappear.  ",
	sol4pro:
		"Roads are permanent, so you can save herders for many years with a road. ",
	sol4con: "Roads take a lot of resources, and could take very long to make.",
	sol5pro:
		"You can kill two birds with one stone here: the hunger of both the livestock and the Mongolian herders ",
	sol5con: "Food is expensive.  ",
	org1: "The FAO has a program called “acting early” where they give out money and food to poorer Mongolians. According to them, every one dollar they spent in Mongolia, benefits of an average 7.1 dollars per household followed. ",
	org2: "This organization has worked in Mongolia since 2001 and has helped communities invest in protection against harsh living conditions and harsh weather, which is one of the main causes of hunger. ",
	//whybestsol:
	//	"This is the most efficient and effective solution since a road is long term, unlike donating money or sending in food. You don’t need to return each year to redo help. This is a lot more efficient than the climate change solution as climate change isn’t the most controllable thing. ",
	economicimpact:
		"The thing is, Agriculture makes up 35% of the labor force, and 12% of Mongolia’s GDP. 95% of agricultural land is pastures for livestock. 70% of these have been severely degraded. We know that the livestock industry is having a bit of a problem lately which would technically kind of downgrade the 12% of the GDP agriculture dominates. Having this part lost would have a nice impact on the GDP. ",
	bib: `
	"Acting Early to Save Livelihoods in Mongolia.” Food and Agriculture Organization of the United Nations, United Nations, 1 Sept. 2019, https://www.fao.org/fao-stories/article/it/c/1174186/.  

	Alexander, Lynsey. “Hunger in Mongolia: What's Being Done.” The Borgen Project, 30 July 2020, https://borgenproject.org/hunger-in-mongolia/.  

	“The Asia Pacific Regional Report on Food Safety and Nutrition Points at Stagnation in Combating Hunger and Malnutrition in the Region in Mongolia.” United Nations Mongolia, United Nations, 27 Nov. 2018, https://mongolia.un.org/en/14399-asia-pacific-regional-report-food-safety-and-nutrition-points-stagnation-combating-hunger-and.  

	Asian Development Bank. “ADB to Help Manage Food Insecurity Risks in Mongolia amid Supply Disruptions Caused by Covid-19.” Asian Development Bank, Asian Development Bank, 29 Oct. 2020, https://www.adb.org/news/adb-help-manage-food-insecurity-risks-mongolia-amid-supply-disruptions-covid-19.  

	Erdenebaatar, B. “Studies on Long-Distance Transhumant Grazing Systems in Uvs and Khuvsgul Aimags of Mongolia.” Edited by J. M. Suttie and S. G. Reynolds, Food and Agriculture Organization of The United Nations, Transhumant Grazing Systems in Temperate Asia, 2003, https://www.fao.org/3/Y4856E/y4856e08.htm.  

	Hahn, Allison Hailey. “Mongolian Dzud: Threats to and Protection of Mongolia's Herding Communities.” Association for Asian Studies, Education About Asia, 29 June 2020, https://www.asianstudies.org/publications/eaa/archives/mongolian-dzud-threats-to-and-protection-of-mongolias-herding-communities/.  

	“Hunger Relief in Mongolia.” Action Against Hunger, Action Against Hunger, 23 July 2018, https://www.actionagainsthunger.org/countries/asia/mongolia.  

	Perry, Jalil. “Why Is There Hunger in Mongolia?” The Borgen Project, 30 Dec. 2019, https://borgenproject.org/why-is-there-hunger-in-mongolia/.  

	United Nations. “Towards Sustainable Food Systems in Mongolia.” FOOD SYSTEMS SUMMIT DIALOGUES GATEWAY, United Nations Mongolia, June 2021, https://summitdialogues.org/wp-content/uploads/2021/09/ENG_sustainablefoodsystems_Mongolia_FSD_Pathway-document.pdf.  

	“What People Know and Think about the Sustainable Development Goals.” Organization for Economic Co-Operation and Development, OECD Development Communication Network, June 2017, https://www.oecd.org/development/pgd/International_Survey_Data_DevCom_June%202017.pdf.  
	
	Batdelger, Tuvshintugs. “Mongolia's Economic Prospects and Challenges.” East Asia Forum, National University of Mongolia, 28 Mar. 2014, https://www.eastasiaforum.org/2014/03/23/mongolias-economic-prospects-and-challenges/.  `.replace(
		/(https:\/\/[a-zA-Z./%0-9\-_]+)\./g,
		"<a href='$1' target='_blank'>$1</a>"
	),
	suppliesneeded:
		"This solution boils down to just building any type of road along otor migration routes. Hence, you just need basic road building materials, such as asphalt or even just gravel.",
	viable:
		"Mongolia has recently begun to tap into its natural resources, which include gold, copper, and coal. This has made Mongolia a bit richer. Hence, this solution can be achievable because of this extra money. Furthermore, as mentioned above, roads last a long time. You don’t need to repave roads yearly. Hence, this solution is quite efficient. ",
	howmuchmoney:
		"Experts estimate that $3.4-3.5 billion a year will be needed in developing countries like Mongolia to meet global goals like Zero Hunger. In response to a dzud that killed millions of livestock, the government launched the National Programme on Livestock Protection from Drought and Dzud Disasters. The money mentioned would probably go here. ",
	effects:
		"The short and long-term effects of this solution are pretty much equivalent. Roads that improve access for otor would cause more people to go on otor, which may save their life and livestock (which are their food source). <b>What I’m trying to say is, more people and animals are going to be saved, both in the short and long run.</b> ",
	science:
		"The science and logic behind this solution are really simple. When one place has a dzud, another place will likely not because of how weather works. Mongolian herders use a tactic called otor to migrate to far away pastures. You can help otor by building roads. ",
	timeline:
		"There isn’t a straightforward answer for this, but the goal is 2030. The timing of this solution relies solely on how fast Mongolia can obtain road materials and build roads. I cannot reliably calculate how long this solution will take even with data, so I will just leave it like this. ",
	obstacle1:
		"You can try and find nearby villages and use them as stopping points and a route to get the construction crew to the road. ",
	obstacle2:
		"The Mongolian government is getting a bit richer from natural resources. I guess they can put off some of their money to this solution. ",
	myaction:
		"This year, I have made this website (which you are reading this on) to raise awareness in hope that people will donate to organizations that will get Mongolians out of poverty and possibly even fund my solution. ",
	mysteps:
		"This website is essentially subtly asking people to donate. One of the next steps I am willing to take is to go door to door to ask for donations more obviously. ",
	mywhere:
		"The two organizations I mentioned helping Mongolian hunger above all have their effective way in trying to stop hunger. I would go through these organizations to donate money. ",
	myimpact:
		"Although this website may only help raise a little bit of money, a little bit of money may help feed one person—change the life of one person. Honestly, I only expect this website to make a few dollars and feed a few people. (A lot more would be fantastic!) However, helping a few people is better than helping none.  ",
};

document.querySelectorAll(".fill").forEach((e) => {
	e.innerHTML += answers[e.getAttribute("name")];
});

const fullscreenmode = (elem) => {
	if (document.querySelectorAll(".fullscreen").length) {
		document.querySelectorAll(".fullscreen")[0].classList.remove("fullscreen");
	}
	elem.classList.add("fullscreen");
	document.getElementById("fullscreen").style.background =
		$(elem).css("background");
	document.getElementById("fullscreen").innerHTML = elem.outerHTML;
	document.getElementById("fullscreen").requestFullscreen();
};

let slidenum = 0;
let slides = document.querySelectorAll(".slide");
document.getElementById("nextslide").onclick = function () {
	if (slidenum < slides.length) {
		slidenum += 1;
		slides[slidenum].scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}
	document.getElementById("slidenum").value = slidenum;
	document.getElementById("sliderr").style.display = "none";
};
function ch() {
	v = Number(document.getElementById("slidenum").value);
	if (!v.toString().trim()) {
		return;
	}
	try {
		if (v && v < slides.length && v >= 0) {
			slidenum = v;
			slides[v].scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
			document.getElementById("sliderr").style.display = "none";
		} else {
			document.getElementById("sliderr").style.display = "block";
			document.getElementById("sliderr").innerHTML =
				"Slide must be between 0 - " + (slides.length - 1);
		}
	} catch (err) {
		document.getElementById("sliderr").style.display = "block";
		document.getElementById("sliderr").innerHTML =
			"Slide must be between 0 - " + slides.length;
	}
}
document.getElementById("slidenum").onkeyup = ch;
document.getElementById("slidenum").onchange = ch;

document.getElementById("prevslide").onclick = function () {
	if (slidenum >= 0) {
		slidenum -= 1;
		slides[slidenum].scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}
	document.getElementById("slidenum").value = slidenum;
	document.getElementById("sliderr").style.display = "none";
}; 