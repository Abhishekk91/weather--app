const apiKey = "f0c486e8e4cd4b79b7f182759261007";

async function getWeather() {

    const city = document.getElementById("city").value;
    //const city = document.getElementById("city").value + ", India";(when u want to check only indian states weather)//

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
    try{

        const response = await fetch(url);

        const data = await response.json();

        if(data.error){
            alert("City not found");
            return;
        }

        document.getElementById("weatherCard").style.display = "block";

        document.getElementById("location").innerHTML =
            data.location.name + ", " + data.location.country;

        document.getElementById("temp").innerHTML =
            data.current.temp_c + "°C";

        document.getElementById("condition").innerHTML =
            data.current.condition.text;

        document.getElementById("humidity").innerHTML =
            data.current.humidity;

        document.getElementById("wind").innerHTML =
            data.current.wind_kph;

        document.getElementById("icon").src =
            "https:" + data.current.condition.icon;

    }

    catch(error){
        alert("Something went wrong!");
        console.log(error);
    }

}