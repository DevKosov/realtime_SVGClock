function time(){
    //svg clock hands
    const secondHand = document.querySelector(".second");
    const minuteHand = document.querySelector(".minute");
    const hourHand = document.querySelector(".hour");

    //audio
    const audio = document.querySelector(".audio");
	
	let currSrc = audio.getAttribute('src');
    
    // toggle audio source for clock ticking
	const toggle = document.querySelector(".toggle");
	toggle.onclick = function(){
		if(currSrc==="sounds/clockTicking.mp3"){
            audio.setAttribute('src',"sounds/clockTicking2.mp3");
            currSrc = audio.getAttribute('src');
		}
		else{
            audio.setAttribute('src',"sounds/clockTicking.mp3");
            currSrc = audio.getAttribute('src');
		}
	}

    //get the actual second on the hour
    const now = new Date();
    const seconds = now.getSeconds();

    //converting seconds to angle
    let secondDegree = ((seconds / 60) * 360) + 90;

    function setTime() {
        //get the minute and hour
        const now2 = new Date();
        const minute = now2.getMinutes();
        const hour = now2.getHours();

        //convert minutes and hours to angle
        let minuteDegree = ((minute / 60) * 360) + 90;
        let hourDegree = ((hour / 12) * 360) + 90;

        //add 6deg(1s) to hand each second (did this so i could prevent it to reset to 0 this way it goes up to infinite degrees)
        secondDegree = secondDegree + 6;
        //play audio pretty obvious
        audio.play();
        //add the transform rotate style
        secondHand.style.transform = 'rotate(' + secondDegree + 'deg)';
        minuteHand.style.transform = 'rotate(' + minuteDegree + 'deg)';
        hourHand.style.transform = 'rotate(' + hourDegree + 'deg)';

    };
    setInterval(setTime, 1000);
}
window.onload = time;

// Function to change background music and pause clock ticking sound
const audio = document.querySelector(".audio");
let currSrc = audio.getAttribute('src');

const bgMusicForm = document.querySelector("#bgmusic");
bgMusicForm.onsubmit = function(event){
    event.preventDefault();
    const inputURL = document.querySelector("#musicURL").value;
    audio.setAttribute('src', inputURL);
    audio.play()
    currSrc = audio.getAttribute('src');
    inputURL.value = "";
    bgMusicForm.reset();
}

// Function to change background image
const body = document.querySelector("body");
let currBg = body.style.backgroundImage;

const bgImage = document.querySelector("#bgimage");
bgImage.onsubmit = function(event){
    event.preventDefault();
    const bgURL = document.querySelector("#imageURL").value;
    body.style.backgroundImage = "url(" + bgURL + ")";
    currBg = body.style.backgroundImage;
    bgImage.reset();
}