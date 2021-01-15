
//init the weather object
const weather = new Weather('london');
//init the UI object
const ui = new UI();

//Get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

//change location on enter
document.querySelector('#search').addEventListener('keydown',(e)=>{
    if(13 == e.keyCode){
        const city = document.querySelector('.search_city').value;
        if(city === ''){
            alert("Enter Name Of The City");
        }else{
        // Change location
        weather.changeLocation(city);
     
        //get and display weather
        getWeather();

        e.preventDefault();
        }

    }
});
//change location on click
document.querySelector('#submit').addEventListener('click',(e)=>{
    
        const city = document.querySelector('.search_city').value;
        if(city === ''){
            alert("Enter Name Of The City");
        }else{
        // Change location
        weather.changeLocation(city);
     
        //get and display weather
        getWeather();

        e.preventDefault();
 
        }
});


function getWeather(){
    weather.getWeather()
    .then(results=>{
            ui.output(results);
    })
    .catch(err => alert('OOPSS! Could Not Found..Please Recheck Spelling & City Name'));
}
