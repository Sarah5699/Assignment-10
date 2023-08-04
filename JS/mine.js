var findBtn = document.getElementById("submit"); 
getWeather("Cairo");
findBtn.addEventListener('click', function(){
    var location = document.getElementById("search").value;
    getWeather(location);
})
async function getWeather(country){
    var apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ae16f3cf625f445fa54105059230408&q=${country}&days=3`);
    var finalRes = await apiResponse.json();
    console.log(finalRes)
    displayData(finalRes,country);
}
function displayData(finalRes,country){
    var forcastArr = finalRes.forecast.forecastday;
    var content = 
    `
    <div id="firstCard" class="col-4 px-0">
        <div class="p-3 d-flex justify-content-between card-header">
            <span>
                ${new Date(forcastArr[0].date).toLocaleDateString('en-US', {weekday: 'long'})}
            </span>
            <span>
                ${new Date(forcastArr[0].date).toLocaleDateString('en-US', {day:"numeric"}) + new Date(forcastArr[0].date).toLocaleDateString('en-US', {month:"long"}) }
            </span>
        </div>
        <div class="p-3 card-body">
            <p>${country}</p>
            <div class="d-flex  justify-content-between">
                <h2>${forcastArr[0].day.avgtemp_c}°C</h2>
                <img src="http:${forcastArr[0].day.condition.icon}">
            </div>
            <span>${forcastArr[0].day.condition.text}</span>
            <div class="d-flex justify-content-between gap-2 pt-1">
                <div class="col-3 d-flex">
                    <div class="col-4 me-3">
                        <img class="img-fluid" src="Images/icon-umberella@2x.png">
                    </div>
                    <p class="col-6">${finalRes.current.humidity}%</p>
                </div>
                <div class="col-3 d-flex">
                    <div class="col-4 me-3">
                        <img class="img-fluid" src="Images/icon-wind@2x.png">
                    </div>
                    <p class="col-6">${finalRes.current.wind_kph}Km/h</p>
                </div>
                <div class="col-3 d-flex">
                    <div class="col-4 me-3">
                        <img class="img-fluid" src="Images/icon-compass@2x.png">
                    </div>
                    <p class="col-6">${finalRes.current.wind_dir}</p>
                </div>
            </div>
        </div>
    </div>
    <div id="secondCard" class="col-4 px-0 text-center">
        <div class="p-3 card-header">
            <span>
                ${new Date(forcastArr[1].date).toLocaleDateString('en-US', {weekday: 'long'})}
            </span>
        </div>
        <div class="p-3 pb-5 card-body">
            <img src="http:${forcastArr[1].day.condition.icon}"> 
            <h2>${forcastArr[1].day.maxtemp_c}°C</h2>
            <p>${forcastArr[1].day.mintemp_c}</p>
            <span>${forcastArr[1].day.condition.text}</span>
        </div>
    </div>
    <div id="thirdCard" class="col-4 px-0 text-center">
        <div class="p-3 card-header">
            <span>
                ${new Date(forcastArr[2].date).toLocaleDateString('en-US', {weekday: 'long'})}
            </span>
        </div>
        <div class="p-3 pb-5 card-body">
            <img src="http:${forcastArr[2].day.condition.icon}"> 
            <h2>${forcastArr[2].day.maxtemp_c}°C</h2>
            <p>${forcastArr[2].day.mintemp_c}</p>
            <span>${forcastArr[2].day.condition.text}</span>
        </div>
    </div>
    `
    document.getElementById("weather-cards").innerHTML = content;
    document.querySelector("#firstCard .card-header").style.background = "#2D303D"
    document.querySelector("#firstCard .card-body").style.background = "#323544"
    document.querySelector("#firstCard .card-body h2").style.fontSize= "5rem"
    document.querySelector("#firstCard .card-body h2").style.color= "white"
    document.querySelector("#secondCard .card-header").style.background = "#222531"
    document.querySelector("#secondCard .card-body").style.background = "#262936"
    document.querySelector("#secondCard .card-body h2").style.color= "white"
    document.querySelector("#thirdCard .card-header").style.background = "#2D303D"
    document.querySelector("#thirdCard .card-body").style.background = "#323544"
    document.querySelector("#thirdCard .card-body h2").style.color= "white"

}