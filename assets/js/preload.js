(function(names) {
	for(var i=0; i < names.length; i++){
		var imgObj = new Image();
		imgObj.src = imgPath + "/" + names[i];
	}
})(["btn_tw.png", "btn_tw_h.png",
    "btn_gh.png", "btn_gh_h.png"]);
