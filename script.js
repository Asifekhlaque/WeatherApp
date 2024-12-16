// 
let button = document.getElementById("searchBtn")
button.addEventListener("click", function () {

    let city = document.getElementById("default-search").value
    
    let api = `http://api.weatherapi.com/v1/current.json?key=c5b978a1b9bb4eb9afb151022241612&q=${city}&aqi=no`

    fetch(api)
        .then(response => response.json())
        .then(data => {
            let image = document.getElementById("image")
            image.src = data.current.condition.icon
            let WeatherName = document.getElementById("WeatherName")
            WeatherName.innerHTML = data.current.condition.text
            let temp = document.getElementById("tempValueC")
            temp.innerHTML = data.current.temp_c
            let tempF = document.getElementById("tempValueF")
            tempF.innerHTML = data.current.temp_f
            let humidity = document.getElementById("humidityValue")
            humidity.innerHTML = data.current.humidity
            let wind = document.getElementById("windValue")
            wind.innerHTML = data.current.wind_kph
            let windDirection = document.getElementById("windDirection")
            windDirection.innerHTML = data.current.wind_dir
            let pressure = document.getElementById("pressureValue")
            pressure.innerHTML = data.current.pressure_mb
            let location = document.getElementById("location")
            location.innerHTML = data.location.name
            let cityName = document.getElementById("cityName")
            cityName.innerHTML = data.location.name

            let sucees = document.getElementById("Success")
            sucees.classList.remove("hidden")
            setTimeout(function () {
                sucees.classList.add("hidden")
            }, 3000)
        })
        .catch(err => {
            let Fail = document.getElementById("Fail")
            Fail.classList.remove("hidden")
            setTimeout(function () {
                Fail.classList.add("hidden")
            }, 3000)
        })
})