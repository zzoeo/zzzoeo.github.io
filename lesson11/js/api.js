const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=076335a1acca22c50b6499c465e365c8" ;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;

        const f = KtoF(jsObject.main.temp);
        //const f = (((jsObject.main.temp - 273.15) * 9) / 5) + 32;
        var temp = f.toFixed(0);

        //  Formula to convert Kelvin to Fahrenheit (K − 273.15) × 9/5 + 32 = °F
        document.getElementById('current-temp').textContent = temp;

        let currentCondition = jsObject.weather[0].description;
        document.getElementById('currentCondition').textContent = currentCondition;

        let humidity = jsObject.main.humidity;
        document.getElementById('humidity').textContent = humidity;

        let WindSpeed = Math.round(jsObject.wind.speed);
        document.getElementById('windspeed').textContent = WindSpeed;

       // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
       // const desc = jsObject.weather[0].description;  // note how we reference the weather array

       // document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
       // document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        //document.getElementById('icon').setAttribute('alt', desc);

    });


    const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=076335a1acca22c50b6499c465e365c8";

fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        var day_count = 1;
        for (var day of jsObject.list) {
            if (day.dt_txt.includes("18:00:00")) {
                var date = new Date(day.dt_txt);
                var dayName = dayNames[date.getDay()];
                document.getElementById("day" + day_count).textContent = dayName;

                const f = KtoF(day.main.temp);
                var fahrenheit = f.toFixed(0);
                document.getElementById("temp" + day_count).textContent = fahrenheit;
                const imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';  // note the concatenation
                const desc = day.weather[0].description;
                document.getElementById('image' + day_count).setAttribute('src', imagesrc); 
                document.getElementById('image' + day_count).setAttribute('alt', desc);
                day_count = day_count + 1;
            }
        }










    });

    function KtoF(kelvin){
        return (((kelvin - 273.15) * 9) / 5) + 32;
    }