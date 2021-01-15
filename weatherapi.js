class Weather{
    constructor(city) {
        this.apikey = 'c6f0c0a7b63d820c72f1ac467581b5c0';
        this.city = city;
    }

    //Get longitute and latitude
    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
          console.log("Geolocation is not supported by this browser.");
        }
        function showPosition(position){
            const latitude =  position.coords.latitude;
            const longitude = position.coords.longitude;
            return latitude,longitude;
        }
    }
    

    //Fetch weather from api
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}`);
        const responseData = await response.json();
        return responseData;
    }

    //Change weather Location
    changeLocation(city){
        this.city = city;
    }

    //Fetch Future weather from api
    /*async getFutureWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={alerts}&appid=${this.apikey}
        `);
        const responseData = await response.json();
        return responseData;
    }*/
}