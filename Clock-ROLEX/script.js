const hourE1 = document.querySelector(".hour")
const minuteE1 = document.querySelector(".minute")
const secondE1 = document.querySelector(".second")

// console.log(hourE1);

function updateClock() {
    const currenrDate = new Date();
    // setTimeout(updateClock, 1000)
    // console.log(currenrDate);
    const hour = currenrDate.getHours();
    const minute = currenrDate.getMinutes();
    const second = currenrDate.getSeconds();

    // console.log(hour, minute, second);
    const hourDeg = (hour / 12) * 360;
    hourE1.style.transform = `rotate(${hourDeg}deg)`;
    // console.log(hourDeg)

    const minuteDeg = (minute / 60) * 360;
    minuteE1.style.transform = `rotate(${minuteDeg}deg)`;
    // console.log(minuteDeg)

    const secondDeg = (second / 60) * 360;
    secondE1.style.transform = `rotate(${secondDeg}deg)`;
    console.log(secondDeg)

}

// updateClock();

setInterval(updateClock, 1000);