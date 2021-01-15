class UI{
    constructor(){
        this.location = document.querySelector('#w-location');
        this.description = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-strings');
        this.icon = document.querySelector('#w-icon');
        this.details = document.querySelector('#w-details');
        this.humidity = document.querySelector('#w-humidity');
        this.visibility = document.querySelector('#w-visibility');
        this.feelsLike = document.querySelector('#w-feels-like');
        this.wind = document.querySelector('#w-wind'); 
        this.minMax = document.querySelector('#w-min-max-temp');
        this.primaryText = document.querySelector('.primary-text');
        this.secondaryText = document.querySelector('.secondary-text');
        this.errorImg = document.querySelector('.image_not_found');
    }
    output(weather){
        const iconURL = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;
        this.location.textContent = `${weather.name},${weather.sys.country}`;
        // this.icon.setAttribute ('src', iconURL);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.string.textContent = `${(weather.main.temp-273.15).toFixed(2)}°C`;
        this.description.textContent = weather.weather[0].description.toUpperCase();
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.visibility.textContent = `Visiblity: ${(weather.visibility/1609).toFixed(2)} Miles`;
        this.feelsLike.textContent = `Feels Like: ${(weather.main.feels_like-273.15).toFixed(2)}°C`;
        this.wind.textContent = `Wind Speed: ${(weather.wind.speed*3.6).toFixed(2)}Km/Hr`;
        this.minMax.textContent = `(Min- ${(weather.main.temp_min-273.15).toFixed(2)}°C Max- ${(weather.main.temp_max-273.15).toFixed(2)}°C)`;
       
        //Coustom icons for weathers
        let iconName = weather.weather[0].icon;
        if(iconName === '01d'){
            this.icon.setAttribute ('src', './icons/day.svg');
        }if(iconName === '01n'){
            this.icon.setAttribute ('src', './icons/night.svg');
        }if(iconName === '02d'){
            this.icon.setAttribute ('src', './icons/cloudy-day-3.svg');
        }if(iconName === '02n'){
            this.icon.setAttribute ('src', './icons/cloudy-night-3.svg');
        }if(iconName === '03d'){
            this.icon.setAttribute ('src', './icons/cloudy-day-1.svg');
        }if(iconName === '03n'){
            this.icon.setAttribute ('src', './icons/cloudy-night-1.svg');
        }if(iconName === '04d'){
            this.icon.setAttribute ('src', './icons/cloudy.svg');
        }if(iconName === '04n'){
            this.icon.setAttribute ('src', './icons/cloudy.svg');
        }if(iconName === '09d'){
            this.icon.setAttribute ('src', './icons/rainy-7.svg');
        }if(iconName === '09n'){
            this.icon.setAttribute ('src', './icons/rainy-7.svg');
        }if(iconName === '10d'){
            this.icon.setAttribute ('src', './icons/rainy-3.svg');
        }if(iconName === '10n'){
            this.icon.setAttribute ('src', './icons/rainy-6.svg');
        }if(iconName === '11d'){
            this.icon.setAttribute ('src', './icons/thunder.svg');
        }if(iconName === '11n'){
            this.icon.setAttribute ('src', './icons/thunder.svg');
        }if(iconName === '13d'){
            this.icon.setAttribute ('src', './icons/snowy-3.svg');
        }if(iconName === '13n'){
            this.icon.setAttribute ('src', './icons/snowy-6.svg');
        }if(iconName === '50d'){
            this.icon.setAttribute ('src', './icons/cloudy-day-2.svg');
        }if(iconName === '50n'){
            this.icon.setAttribute ('src', './icons/cloudy-night-2.svg');
        }

    }
    // errorOutput(){;
    //     this.location.textContent = '';
    //     this.icon.setAttribute ('src', '');
    //     this.humidity.textContent = '';
    //     this.string.textContent = '';
    //     this.description.textContent = '';
    //     this.humidity.textContent = '';
    //     this.visibility.textContent = '';
    //     this.feelsLike.textContent = '';
    //     this.wind.textContent = '';
    //     this.minMax.textContent = '';
    //     this.primaryText.textContent= `OOpps! The City Could Not Found.`;
    //     this.secondaryText.textContent= `Please Check The Name & Spelling.`;
    //     this.errorImg.setAttribute('src', 'https://webstockreview.net/images/clipart-monkey-gif-animation.gif');
    // }
}
