var searchFun = function() {
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	var search = $("#pSearch").attr("value");
	var numOfResults = $("#pNum").attr("value");
	var endDate = $("#pStart").attr("value");
	var startDate = $("#pEnd").attr("value");

	console.log("search = " + search);
	console.log("endDate = " + endDate);
	console.log("startDate = " + startDate);

	if (endDate != "") {
		endDate = endDate + "1231";
	}

	if (startDate != "") {
		startDate = startDate + "0101";
	}

	console.log("endDate = " + endDate);
	console.log("startDate = " + startDate);




	console.log("entered the search function");

	url += '?' + $.param({
	  'api-key': "72c3889e3a9f424f86bde37fae5ce89b",
	  'q': search,
	  'begin_date': startDate,
	  'end_date': enddate
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  for (var i = 0; i < numOfResults; i++) {
	  	$(".article-index").text(i+1);
	  	$(".article-title").text(result.docs[i].headline.main);
	  }






	}).fail(function(err) {
	  throw err;
	});
}
console.log("after the search function");




$(document).on("click", "#bSearch", searchFun);

// $("#bReset")