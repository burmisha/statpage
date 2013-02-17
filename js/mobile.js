$(function(){
	$("#links").click(function(){
		$("#content").load("links.html");
	});

	$("#bio").click(function(){
		$("#content").load("bio.html");
	});

	$("#photo").click(function(){

		$("#content").empty();
		for (var j = 0; j < allPhotos.length; j++) {
			h = allPhotos[j];
			$("#content").append('<div class="photoset" id='+ h.id + '></div>');
			for (var i = 0; i < h.middles.length; i++) {
				var url = h.path_small + h.prefix + h.middles[i]+h.suffix;
				$("#"+h.id).append('<div class="smallphoto" style="background-image:url('+ url + ')"></div>');
			};
		};

		for (var j = 0; j < allPhotos.length; j++) {
			var h = allPhotos[j];
			var hid = "#"+h.id;
			$('#content').on('click', hid+" .smallphoto", function(){
				$(hid).empty();
				for (var i = 0; i < h.middles.length; i++) {
					var url = h.path + h.prefix + h.middles[i]+h.suffix;
					$(hid).append('<div class="bigphoto" style="background-image:url('+ url + ')"></div>');
				};
				//return false;
			});

			$('#content').on('click', hid + " .bigphoto", function(){
				$(hid).empty();
				for (var i = 0; i < h.middles.length; i++) {
					var url = h.path_small + h.prefix + h.middles[i]+h.suffix;
					$(hid).append('<div class="smallphoto" style="background-image:url('+ url + ')"></div>');
				};
				//return false;
			});
		};
	});
})
