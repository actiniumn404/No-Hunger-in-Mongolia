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

/*makeCanvas(
	document.getElementById("stats__ulaanbaatar_food"),
	[
		"People with proper access to food in Ulaanbaatar",
		"People without proper access to food in Ulaanbaatar",
	],
	[68, 32],
	["gold", "lightgreen"]
);
*/
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

/*makeBarCanvas(
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
);*/

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


const makeList = (...elements) => {
	res = "<ul>";
	elements.forEach((el) => {
		res += `<li>${el}</li>`;
	});
	res += "</ul>";
	return res;
};

const makeNumberList = (...elements) => {
	res = "<ol>";
	elements.forEach((el) => {
		res += `<li>${el}</li>`;
	});
	res += "</ol>";
	return res;
};

answers = {
	defprob:
		"In Mongolia, a poor country to the north of China, many people are going hungry. We need to stop this.",
	chooseWhat: makeList(
		"I have chosen the second global goal of No Hunger. This goal aims for having no people hungry.",
		"Motivation: If you aren't fed and are hunger, you will likely die.",
		"Many Mongolians are really hungry.",
		"Without help, they will die",
		"This is saddening, so I choose this goal"
	),
	howBad: makeList(
		"Most of the people affected are impoverished Mongolian herders living in the countryside.",
		"28.4% of Mongolia lives below the poverty line",
		"22% of Mongolia does not have regular food sources to live a healthy life.",
		"(Shown in graph below) During COVID-19, 72% of food sources in families ran low (red column)"
	),
	dontDoAnything: makeList(
		"As stated above, if we don't do anything, Mongolians will die!",
		"Some Mongolians take out loans to buy food to feed themselves",
		"So, if they don't die, they will end up in a financial crisis!!! (This is bad)"
	),
	scienceFactors: makeList(
		'A weather pattern known as a "dzud" is the main reason there is hunger in Mongolia',
		"Basically, a harsh winter after a dry summer. ",
		"During dzuds, the pastures livestock graze on are inaccessible and useless.",
		"Then Livestock (which herding families rely on for food) die. Hence, hunger in Mongolia.",
		"Due to climate change, dzuds have become very common. "
	),
	personalStory:
		"Clip of a video made by the Food and Agriculture Organization of the United Nations (FAO) about their Mongolian Early Warning Program:",
	sol1ex: makeList(
		"Dzuds are becoming more common due to climate change",
		"A lot of Mongolia is at risk of dzuds (shown in map below)",
		"You can lower dzud count by minimizing climate change "
	),
	//sol2ex:
	//	"Unfortunately, not everyone knows about the global goals. Surveys found that only between 28-45% of people have even heard of the global goals. Imagine if the rest of the 55-72% of the world population knew about the global goals. Many more people would be aware, and hence, more people can make a difference. ",
	//sol3ex:
	//"Donating money is one of the simplest things you can do, but it is one of the most powerful things that can be done. According to the FAO, an organization working in Mongolia, every 1 US Dollar they spent resulted in 7.1 US Dollars in benefits in households ",
	sol4ex: makeList(
		"Ancient (but kind of dangerous) Mongolian tactic to survive dzuds: otor",
		"Isolate yourself and your herd in distant pastures that are unaffected by dzuds",
		"Access to distant pastures isn't that great",
		"If you pave more roads to distant pastures, more people will go on otor."
	),
	//sol5ex:
	//"Livestock starve to death due to a lack of grass when the ground is frozen solid during dzuds. Mongolians depend on these livestock for many things which include food. Hence, by feeding these livestock, you can save them. ",
	sol1pro:
		"With this, dzuds will only rarely happen, and not kill as many livestock.",
	sol1con: "Climate change isn’t exactly the most controllable of things ",
	//sol2pro:
	//"This is easy to do. Just phone your friends and family. That doesn’t really take that much effort. ",
	//sol2con:
	//"More awareness doesn’t necessarily result in more difference. So, this could become effort for nothing ",
	//sol3pro:
	//"Unlike stopping climate change, donating money can be done very simply. ",
	//sol3con:
	//	"donating money is technically losing hard-earned money, so doing this could make money earned after working hard disappear.  ",
	sol4pro:
		"Roads are permanent, so you can save herders for many years with a road. ",
	sol4con: "Roads take a lot of resources, and could take very long to make.",
	//sol5pro:
	//"You can kill two birds with one stone here: the hunger of both the livestock and the Mongolian herders ",
	//sol5con: "Food is expensive.  ",
	org1: makeList(
		"The FAO has a program called “acting early” where they give out money and food to poorer Mongolians.",
		"This program has helped feed and save many Mongolians",
		"They report that every 1 US dollar they spent in Mongolia, an average of 7.1 US dollars were seen in benefits"
	),
	org2: makeList(
		"This organization has worked in Mongolia since 2001",
		"They have helped communities invest in protection against harsh living conditions and harsh weather",
		"Examples include protection against dzuds, which is one of the biggest causes of hunger"
	),
	//whybestsol:
	//	"This is the most efficient and effective solution since a road is long term, unlike donating money or sending in food. You don’t need to return each year to redo help. This is a lot more efficient than the climate change solution as climate change isn’t the most controllable thing. ",
	economicimpact: makeList(
		"Agriculture and Livestock makes up 35% of the labor force, and 12% of Mongolia’s GDP. (see graph below)",
		"95% of agricultural land is pastures for livestock, 70% of which are severely degraded.",
		"If we prevent less livestock from dying with this solution, this 12% could technically go up "
	),
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
	
	Batdelger, Tuvshintugs. “Mongolia's Economic Prospects and Challenges.” East Asia Forum, National University of Mongolia, 28 Mar. 2014, https://www.eastasiaforum.org/2014/03/23/mongolias-economic-prospects-and-challenges/.  
	
	Grebmer, Klaus von, et al. “2020 Global Hunger Index.” Global Hunger Index, Concern Worldwide, Oct. 2022, https://www.globalhungerindex.org/pdf/en/2020.pdf. 

	“Inclusive Recovery from Pandemic Requires Greater Push to End Poverty, Hunger, Delegates in Social Development Commission Stress, as 2022 Session Continues - World.” ReliefWeb, UN Economic and Social Council, 9 Feb. 2022, https://reliefweb.int/report/world/inclusive-recovery-pandemic-requires-greater-push-end-poverty-hunger-delegates-social. 

	Kwong, Emily. “The Deadly Winters That Have Transformed Life for Herders in Mongolia.” NPR, NPR, 29 July 2019, https://www.npr.org/2019/07/29/737990796/the-deadly-winters-that-have-transformed-life-for-herders-in-mongolia. `.replace(
		/(https:\/\/[a-zA-Z./%0-9\-_]+)\./g,
		"<a href='$1' target='_blank'>$1</a>"
	),
	suppliesneeded: makeList(
		"This solution boils down to just building any type of road",
		"Hence, you just need basic road building materials.",
		"Road building materials: asphalt, gravel, or even just dirt."
	),
	viable: makeList(
		"Mongolia is rich in natural resources. (See map below)",
		"Government has been tapping into these. So you could fund this solution with this extra money",
		"BUT, we could also get some money with donations",
		"This is efficient because roads last a long time:",
		"You don't have to repave a road every year"
	),
	howmuchmoney: makeList(
		"Experts estimate that $3.4-3.5 billion a year will be needed in Mongolia to meet Zero Hunger.",
		"Mongolia's government recently launched the <span class='timesfont'>National Programme on Livestock Protection from Drought and Dzud Disasters.</span>",
		"This money would probably go here. "
	),
	effects: makeList(
		"A road can be effective no matter in the present (short-term) or future (long-term)",
		"Hence, short-term and long-term effects should be very similar",
		"A road could save the lives of many people and livestock, both short-term and long-term"
	),
	science: makeList(
		"When one place has a dzud, another place will likely not because of how weather works.",
		"Mongolian herders take advantage of this and go to distant pastures in hope of surviving a dzud. ",
		"You can encourage this by building roads"
	),
	timeline: makeList(
		"1-2: Collect funds from government and donations",
		"2-3: Plan out route and start building roads",
		"3-4: Inform people about the roads",
		"4: Enjoy the effects of Zero Hunger (hopefully)"
	),
	obstacle1: makeList(
		"This technically isn't the middle of nowhere.",
		"There're villages here and there",
		"You can use these villages as stopping points and form a route traversing through the villages"
	),
	obstacle2: makeList(
		"We can put off a bit of time before building to raise money. ",
		"People can donate",
		"The government could also chip in a bit of its budget",
		"Then the materials can be bought"
	),
	myaction: makeList(
		"This year, I have made this website (which you are viewing right now) to raise awareness.",
		"I hope that this website has inspired people to donate to feed Mongolians and maybe fund my solution",
		"I have sent this website to many people to get the word out as well"
	),
	mysteps: makeList(
		"This website basically just presents facts",
		"It doesn't directly ask people for money, just subtly encourages people",
		"The next steps I am willing to take is to go door to door and ask for donations more obviously"
	),
	mywhere: makeList(
		"Throughout my presentation, I have talked about the FAO multiple times.",
		"Personally, I have go through this organization and donate to them",
		"Of course, there is another organization which I'll talk about below"
	),
	myimpact: makeList(
		"I honestly expect only to have a little impact--a few dollars or so donated to my organizations",
		"However, a little bit of money can feed--change the life of a person",
		"Although we may not feed a lot of Mongolia with one project, we can get there, person by person",
		"Changing the life of a person is priceless."
	),
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
		if (v < slides.length && v >= 0) {
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