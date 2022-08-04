/* 
setInterval(
    function(){
        let date = new Date();
        let second = date.getSeconds() * 6;
        let minute = date.getMinutes() * 6;
        hour = date.getHours() * 30 + Math.round(minute / 12);
        document.getElementById('second').style.transform = "rotate(" + second + "deg)";
        document.getElementById('minute').style.transform = "rotate(" + minute + "deg)";
        document.getElementById('hour').style.transform = "rotate(" + hour + "deg)";
    },1000
); */