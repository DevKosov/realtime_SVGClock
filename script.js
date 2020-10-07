function time(){
    //svg clock hands
    const secondHand = document.querySelector(".second");
    const minuteHand = document.querySelector(".minute");
    const hourHand = document.querySelector(".hour");

    //audio
    const audio = document.querySelector(".audio");

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