const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp_realdata = document.getElementById('temp_realdata');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middleLayer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal == ""){
        datahide.classList.add('data-hide');
        city_name.innerText = `please write city name`;
    }else {
        try {  
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c309d456e163d32469505d29e6692c78`;

            datahide.classList.remove('data-hide');

            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            temp_realdata.innerText = arrData[0].main.temp;
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            
            const tempStatus = arrData[0].weather[0].main;
            
            if(tempStatus == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }else if(tempStatus == "Clouds"){
                temp_status.innerHTML  = "<i class='fas fa-cloud' style='color: #dfe4ea;'></i>"
            }else if(tempStatus == "Rainy"){
                temp_status.innerHTML  = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            }else {
                temp_status.innerHTML  = "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }

        } catch {
            datahide.classList.add('data-hide');
            city_name.innerText = `please enter a city name properly`;
        }
    }
}

submitBtn.addEventListener('click',getInfo);