function preload(imgfilename){
	for(var i=0; i < imgfilename.length; i++){
		var imgObj = new Image();
		imgObj.src = imgdirpath + "/" + imgfilename[i];
	}
}

preload([
		"btn_tw.png", "btn_tw_h.png",
         "btn_gh.png", "btn_gh_h.png"
        ]);
