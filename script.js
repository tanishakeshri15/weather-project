let weatherBtn = document.getElementById("weatherBtn");
let result = document.getElementById("result");

//to get the weather of the city on clicking the button
weatherBtn.addEventListener("click", function() {

    let city = document.getElementById("city").value;
    let apiKey = "713ffb17bfb756ebed18ad44e2f3b94e";
    let url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url) //sends request of the desired city to the weather website

    //after recieving the request, the data is sent back to javaScript as JSON data
    .then(response => response.json())// response.json() converts json data into javaScript object 

    //after conversion the reulting data is stored in data
    .then(data => {
        //data.main.temp to access temp inside main inside data
        //data.main.humidity to access humidity inside main inside data
        //weather is a array which contains the information of the weather sent by the API
        result.innerHTML =
    "Temperature: " + data.main.temp + "°C" +
    "<br>Humidity: " + data.main.humidity + "%" +
    "<br>Weather: " + data.weather[0].description;

    })
        //in order to catch if something is wrong or any wrong input is given
        .catch(error => {
    result.innerText = "City not found";
    });

});