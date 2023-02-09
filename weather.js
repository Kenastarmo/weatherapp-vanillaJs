let input = document.querySelector(".form-control");
let forma = document.querySelector("#forma");
let main_container = document.querySelector(".main");
let wrapper = document.querySelector(".wrapper");



const key = "fea19a9b9128fa7b5c84cfc25bbd721f"
const urlapi = (city) => `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;

async function getVrijeme(city){
    const response = await fetch(urlapi(city));
    const data = await response.json();
    console.log(data);
    //console.log(Promise.value.location.name);

    dodajPodatke(data);
    input.value = "";
}



function dodajPodatke(podaci){

  wrapper.innerHTML = `<div class="weather">
                <div class="info-1"> 
                    <h1 class="city-name">${podaci.location.name}</h1>
                    
                    <h1 class="celsius">${podaci.current.temp_c}°C</h1>
                </div>
                <div class="info-2">
                    <img src="https:${podaci.current.condition.icon}" alt="" style="width:80px;"></img>
                    <div class="wrap">
                        <h2 class="naslov">${podaci.current.condition.text}</h2>
                    </div>
                </div>
            </div>`
}


forma.addEventListener("submit", function(e){
    e.preventDefault();

    const city = input.value;

    getVrijeme(city);

    input.value="";
})

function convertKtoC(temp){
    return temp - 272.15;
}



















/*forma.addEventListener("submit", (e) => {
    e.preventDefault();
    var city_name = input.value;
    getVrijeme(city_name);
})
const dodajPodatke = (data) => {
    let newDiv = document.createElement("div");
    const temp = ConvertKtoC(data.main.temp);*/
    /*main_container.innerHTML += `<div class="informations">
    <div class="wrapper">
        <h2 class="city-name">${data.name}</h2>
        <h2 class="temp">${temp}°C</h2>
    </div>
    <p class="main_temp">${data.weather[0].main}</p>
    <p class="description_temp">${data.weather[0].description}</p>
</div>`*/

  /*  newDiv.innerHTML = `<div class="wrapper">
    <h2 class="city-name">${data.name}</h2>
    <h2 class="temp">${temp}°C</h2>
    </div>
    <p class="main_temp">${data.weather[0].main}</p>
    <p class="description_temp">${data.weather[0].description}</p>
    </div>`;
    wrapper.innerHTML="";
    wrapper.appendChild(newDiv);
    input.value= "";
} 
ConvertKtoC = (K) => {
return Math.floor(K -273.15);
}
*/