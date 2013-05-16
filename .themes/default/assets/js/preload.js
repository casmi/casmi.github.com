(function(names) {
	for(var i=0; i < names.length; i++){
		var imgObj = new Image();
		imgObj.src = imgPath + "/" + names[i];
	}
})([]);
