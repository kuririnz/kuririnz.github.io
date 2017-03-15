$(function () {

	var skillData = {
		level: [70, 60, 45, 30, 20, 45],
		lang: ["Android", "iOS", "Node.js", "php", "other lang", "snow board"]
	};

	$('.secondary.menu > a').click(function () {
		var key = '#' + $(this).text()
		$('html,body').animate({scrollTop:$(key).offset().top});
	})

	$('body > div.ui:eq(2) > div').width(window.innerWidth / 2)
		.height(30 * skillData.level.length);
	$('svg#graph').attr('width', window.innerWidth / 2)
		.attr('height', 30 * skillData.level.length);

	var x = d3.scaleLinear()
		.domain([0, d3.max(skillData.level)])
		.range([0, window.innerWidth - 210]);

	var chart = d3.select('svg').selectAll('g')
		.data(skillData.level)
		.enter()
		.append('g')
		.attr("padding-top", "4px")
		.attr("padding-bottom", "4px")
		.attr("transform", function(d, i) { return "translate(0," + i * 30 + ")"; })
		.attr("fill", "#d5d52b");

	chart.append('text')
		.attr("y", 25 / 2 + 5)
		.attr("opacity", 0)
		.text(function (d, i) { return skillData.lang[i]})
		.transition()
		.duration(1000)
		.delay(function (d, i) { return i * 1000 })
		.attr("opacity", function (d, i) { console.log(`data: ${d}`); return d * 0.1 });

	chart.append('rect')
		.attr("x", 80)
		.attr("width", 0)
		.attr("height", 25)
		.transition()
		.duration(1000)
		.delay(function(d, i) { return i * 1000 })
		.attr("width", function(d, i) { return d * 4});
});
