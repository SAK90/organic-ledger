const URL = "https://api.vimeo.com/users/user177950735/videos";
const ACCESS_TOKEN = "7ec84134abb67cd2fff3d8124bebebb1";

var videosArray = [
	{
		url: "https://organicledgerdotinbucket.s3.ap-south-1.amazonaws.com/Coffee+Output+compressed.m4v",
		title: "Organic Ledger",
		description: "Build long-lasting trust and confidence in your food supply chain through a platform where everyone will be able to access transparent and reliable information on the origin, the journey, and the quality of their food."
	},
	{
		url: "https://organicledgerdotinbucket.s3.ap-south-1.amazonaws.com/Ol+Media+Compressed.m4v",
		title: "Organic Ledger",
		description: "Build long-lasting trust and confidence in your food supply chain through a platform where everyone will be able to access transparent and reliable information on the origin, the journey, and the quality of their food."
	},
	{
		url: "https://organicledgerdotinbucket.s3.ap-south-1.amazonaws.com/OL_main_video_Compressed.mp4",
		title: "Organic Ledger",
		description: "Build long-lasting trust and confidence in your food supply chain through a platform where everyone will be able to access transparent and reliable information on the origin, the journey, and the quality of their food."
	},
	{
		url: "https://organicledgerdotinbucket.s3.ap-south-1.amazonaws.com/Ol_Testimonial_Compressed.m4v",
		title: "Organic Ledger",
		description: "Build long-lasting trust and confidence in your food supply chain through a platform where everyone will be able to access transparent and reliable information on the origin, the journey, and the quality of their food."
	},
	{
		url: "https://organicledgerdotinbucket.s3.ap-south-1.amazonaws.com/Website_Video_2.mp4",
		title: "Organic Ledger",
		description: "Build long-lasting trust and confidence in your food supply chain through a platform where everyone will be able to access transparent and reliable information on the origin, the journey, and the quality of their food."
	},
	{
		url: "https://organicledgerdotinbucket.s3.ap-south-1.amazonaws.com/Bhoomi_output_compressed.m4v",
		title: "Organic Ledger",
		description: "Build long-lasting trust and confidence in your food supply chain through a platform where everyone will be able to access transparent and reliable information on the origin, the journey, and the quality of their food."
	},
]

function playVideo(index) {
	var video = document.getElementById(`video-${index}`);
	var button = document.getElementById(`play-${index}`);
	video.setAttribute("controls", "controls");
	button.setAttribute("hidden", "true")
	var isPlaying = video.currentTime > 0 && !video.paused && !video.ended
		&& video.readyState > video.HAVE_CURRENT_DATA;

	if (!isPlaying) {
		video.play();
	}
}


jQuery(document).ready(function ($) {

	var $content = $('#player-section');
	var output = '';
	$.each(videosArray, function (index, item) {
		output += `<div id="player-wrapper" class="my-4 px-4 mx-auto col-lg-4 col-md-6 col-sm-12">`;
		output += `<div class="video-container">`;
		output += `<video id="video-${index}" width="100%" crossorgin="Anonymous">
		<source src=${item.url} type="video/mp4">
	  </video>`;
		output += `<button type="button" id="play-${index}" class="play-button" onclick="playVideo(${index})"></button>`;
		output += `</div>`;
		output += `<div>`;
		output += `<h3 id="video-title">${item.title}</h3>`;
		output += `<p id="video-description">${item.description}</p>`;
		output += '</div></div>';
		return 0;
	});
	$content.html(output);

	// var vimeoPromise = new Promise(function (resolve) {
	// 	var $content = $('#player-section');
	// 	$.ajax({
	// 		url: URL,
	// 		headers: { 
	// 			"Authorization": "bearer "+ACCESS_TOKEN
	// 		},
	// 		type: "GET",
	// 		contentType: 'application/json; charset=utf-8',
	// 		success: function (result) {
	// 			console.log(result);
	// 			var output = '';
	// 			$.each(result.data, function (k, item) {
	// 				output += `<div id="player-wrapper" class="my-4 mx-auto col-lg-4 col-md-6 col-sm-12">`;
	// 				output += `<iframe id="video-player"
	// 				src=${item.player_embed_url}
	// 				frameborder="0" webkitallowfullscreen
	// 				mozallowfullscreen allowfullscreen></iframe>`
	// 				output += `<div>`;
	// 				output += `<h3 id="video-title">${item.name}</h3>`;
	// 				if (item.description) {
	// 					output += `<p id="video-description">${item.description}</p>`
	// 				} else {
	// 					output += `<p id="video-description">Build long-lasting trust
	// 					and confidence in your food supply chain through
	// 					a platform where everyone will be able to access
	// 					transparent and reliable information on the
	// 					origin, the journey, and the quality of their
	// 					food.</p>`
	// 				}
	// 				output += '</div></div>';
	// 				return k < 10;
	// 			});
	// 			resolve($content.html(output));
	// 		},
	// 		error: function (error) {

	// 		}
	// 	});
	// });

	// vimeoPromise.then(function () {
	// 	//Pagination
	// 	pageSize = 3;

	// 	var pageCount = $(".card").length / pageSize;

	// 	for (var i = 0; i < pageCount; i++) {
	// 		$("#pagin").append(`<li class="page-item"><a class="page-link" href="#">${(i + 1)}</a></li> `);
	// 	}
	// 	$("#pagin li:nth-child(1)").addClass("active");
	// 	showPage = function (page) {
	// 		$(".card").hide();
	// 		$(".card").each(function (n) {
	// 			if (n >= pageSize * (page - 1) && n < pageSize * page)
	// 				$(this).show();
	// 		});
	// 	}

	// 	showPage(1);

	// 	$("#pagin li").click(function () {
	// 		$("#pagin li").removeClass("active");
	// 		$(this).addClass("active");
	// 		showPage(parseInt($(this).text()))
	// 	});
	// });
});
