$(document).ready(() => {

    navigator.geolocation.getCurrentPosition(success, error);

    const success = (pos) => {
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;
        weather(lat, long);
    }

    const error = () => {
        console.log("There was an error");
    }

    const weather = (lat, long) => {
        let URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
        $.getJSON(URL, function(data) {
            display(data);
        });
    }

    const display = (data) => {
        let city = data.name.toUpperCase();
        let temp =
            Math.round(data.main.temp_max) +
            "&deg; C | " +
            Math.round(Math.round(data.main.temp_max) * 1.8 + 32) +
            "&deg; F";
        let desc = data.weather[0].description;
        let date = new Date();

        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        let font_color;
        let bg_color;
        if (Math.round(data.main.temp_max) > 25) {
            font_color = "#d36326";
            bg_color = "#f3f5d2";
        } else {
            font_color = "#44c3de";
            bg_color = "#eff3f9";
        }

        if (data.weather[0].main == "Sunny" || data.weather[0].main == "sunny") {
            $(".weathercon").html(
                "<i class='fas fa-sun' style='color: #d36326;'></i>"
            );
        } else {
            $(".weathercon").html(
                "<i class='fas fa-cloud' style='color: #44c3de;'></i>"
            );
        }

        let minutes =
            date.getMinutes() < 11 ? "0" + date.getMinutes() : date.getMinutes();
        let date =
            weekday[date.getDay()].toUpperCase() +
            " | " +
            months[date.getMonth()].toUpperCase().substring(0, 3) +
            " " +
            date.getDate() +
            " | " +
            date.getHours() +
            ":" +
            minutes;
        $(".location").html(city);
        $(".temp").html(temp);
        $(".date").html(date);
        $(".box").css("background", bg_color);
        $(".location").css("color", font_color);
        $(".temp").css("color", font_color);
    }
});