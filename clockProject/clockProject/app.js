function clock() {
    var currentTime = new Date();
    
    var currentHours = currentTime.getHours();
    
    var currentMinutes = currentTime.getMinutes();
    
    var currentSeconds = currentTime.getSeconds();
    
    var currentDate = currentTime.getDate();
    
    var currentMonth = currentTime.getMonth() + 1;
    
    var currentYear = currentTime.getFullYear();
    
    var currentDay = currentTime.getDay();
    
    var timeOfDay = "AM";
    
    if (currentDay == 1)  {
        currentDay = "Monday";
    }
    
    else if (currentDay == 2) {
        currentDay = "Tuesday";
    }
    
    else if (currentDay == 3) {
        currentDay = "Wednesday";
    }
    
    else if (currentDay == 4) {
        currentDay = "Thursday";
    }
    
    else if (currentDay == 5) {
        currentDay = "Friday";
    }
    
    else if (currentDay == 6) {
        currentDay = "Saturday";
    }
    
    else if (currentDay == 0) {
        currentDay = "Sunday";
    }
    
    if (currentHours > 12) {
        currentHours = currentHours - 12;
        timeOfDay = "PM";
    }
    
    if (currentHours == 0) {
        currentHours = 12;
    }
    
    if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
    }
    
    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }
    document.getElementById('clock').innerHTML = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    
    document.getElementById('date').innerHTML = currentDay + " " + currentMonth + "-" + currentDate + "-" + currentYear;
    var t = setTimeout(clock, 500);
}
function getDate() {
    var currentDate = new Date();
    
}


function startTimer(duration, display) { // Timer, 1 - 9 select different lengths of time, s starts
    var timer = duration, minutes, seconds;
    $(document).keypress(function(y) {
        if (y.which == 49) {
            timer = 60 * 10;
        }
        if (y.which == 50) {
            timer = 60 * 20;
        }
        if (y.which == 51) {
            timer = 60 * 30;
        }
        if (y.which == 52) {
            timer = 60 * 40;
        }
        if (y.which == 53) {
            timer = 60 * 50;
        }
        if (y.which == 54) {
            timer = 60 * 60;
        }
        if (y.which == 55) {
            timer = 60 * 70;
        }
        if (y.which == 56) {
            timer = 60 * 80;
        }
        if (y.which == 57) {
            timer = 60 * 90;
        }
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);
     })
    
    
   
    $(document).keypress(function(x) {
        
        console.log('hello');
        if (x.which == 115) {
            
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.text(minutes + ":" + seconds);

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }
    });
}

jQuery(function ($) {
    var classTime = 60 * 50;
    display = $('#time');
    startTimer(classTime, display);
    
});


function getWeather() {
	'use strict';
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=38340,us&units=imperial&appid=b9cec375425b5f39b5bc343fd397a216", function (data) {
		var weatherData = data, tempDegrees = "error!", iconID = "error", icon;
		tempDegrees = Math.round(weatherData.main.temp);
		$("#temp").html(tempDegrees + "°F");
        var clearDay = "01d";
        iconID = weatherData.weather[0].icon;
        
        if (iconID === "01n") {
            
            icon = "images/clearNight.png";
            
        }
        else if (iconID === "01d") {
            
            icon = "images/clearDay.png";
            
        }
        
        else if (iconID === "02d") {
            
            icon = "images/partlyCloudDay.png";
            
        }
        
        else if (iconID === "02n") {
            
            icon = "images/partlyCloudNight.png";
            
        }
        
        else if (iconID === "03d" || iconID === "03n") {
            
            icon = "images/cloudy.png";
            
        }
        
        else if (iconID === "04d" || iconID === "04n") {
            
            icon = "images/cloudy2.png";
            
        }
        
        else if (iconID === "09d" || iconID === "09n") {
            
            icon = "images/rain.png";
            
        }
        
        else if (iconID === "10d") {
            
            icon = "images/dayPartlyCloudRain.png";
            
        }
        
        else if (iconID === "10n") {
            
            icon = "images/nightPartlyCloudRain.png";
            
        }
        
        else if (iconID === "11d" || iconID === "11n") {
            
            icon = "images/thunderstorm.png";
            
        }
        
        else if (iconID === "13d" || iconID === "13n") {
            
            icon = "images/snow.png";
            
        }
        
        else if (iconID === "50d" || iconID === "50n") {
            
            icon = "images/mist.png";
            
        }
        document.getElementById("icon").src= icon;
   
    });
}

function startClock() {
    clock();
    getWeather();
}


/*function getLionAlert() {
    
    var rssURL = "http://www.getrave.com/rss/FHU/channel1";
    
    $.ajax({
        type: "GET",
        url: rssURL,
        dataType: "xml",
        error: function() {
            console.log("ERROR: Unable to load RSS feed. Check the URL and your connection status.");
            
        }
        success: function (xml) {
        
            var $items = $(xml).find("item");
        
            $items.each(function () {
                var lionAlertTitle = $(this).find("title").text();
                console.log(lionAlertTitle);
        
                var lionAlertDescription =
                $(this).find("description").text();
                console.log(lionAlertDescription);
        
                $("#lionAlert h1").text(lionAlertTitle);
                $("#lionAlert h2").text(lionAlertDescription);
        
                $("#lionAlert").show();
    })
    }
    }) 
}*/