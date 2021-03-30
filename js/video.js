var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate *= 1.1;
	console.log(video.playbackRate)
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to normal");
	video.classList.remove("oldSchool")
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)
	var slider = this.value
	video.volume = slider/100;
	document.querySelector("#volume").innerHTML = video.volume*100+"%"
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted==false){
		console.log("Muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML="Unmute";
	}
	else{
		console.log("Unmuted");
		video.muted = false;
		document.querySelector("#mute").innerHTML="Mute";
	}
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log(video.currentTime)
	var timePlace = video.currentTime
	if (timePlace > (video.duration - 15)){
		video.currentTime=0;
	} else{
		video.currentTime = timePlace +15;
	}
});
