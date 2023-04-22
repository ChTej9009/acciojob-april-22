// const getLocationBtn = document.getElementById("location");
// const removeLocationBtn = document.getElementById("remove");
// const mapDiv = document.getElementById("map");
// const getLatitude = document.getElementById("latitude");
// const getLongitude = document.getElementById("longitude");
// const getCountry = document.getElementById("country");
// const getRegion = document.getElementById("region");
// const getCity = document.getElementById("city");

// function getLocation() {
//   if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     mapDiv.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   getLatitude.value = position.coords.latitude;
//   getLongitude.value = position.coords.longitude;
//   getCountry.value = position.coords.country;
//   getRegion.value = position.coords.region;
//   getCity.value = position.coords.city;
  
//   localStorage.setItem("lat", getLatitude);
//   localStorage.setItem("long", getLongitude);
//   localStorage.setItem("count", getCountry);
//   localStorage.setItem("reg", getRegion);
//   localStorage.setItem("city", getCity);
//   displayMap(getLatitude, getLongitude,getCountry,getRegion,getCity);
//   getLocationBtn.style.display = "none";
//   removeLocationBtn.style.display = "block";
// //   getLocationBtn.disabled = true;
// }

// // `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&size=500x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=AIzaSyDPK7mEk3j6E2ESdkA0oehDTePq2Ufhlhc`;



// function displayMap(getLatitude, getLongitude,getCountry,getRegion,getCity) {
//   const mapUrl = `https://maps.google.com/maps?q=${getLatitude},${getLongitude}&z=15&output=embed`;


  
// //   mapDiv.innerHTML = `<img src="${mapUrl}" alt="Map">`;
//   mapDiv.innerHTML = `<iframe src="${mapUrl}" frameborder="0" style="border:0" alt="map"></iframe>
//   `;
//   getLatitude.innerHTML = `Your Current Latitude : ${getLatitude.value}`;
//   getLongitude.innerHTML = `Your Current Longitude : ${getLongitude.value}`;
//   getCountry.innerHTML = `Your Current Country: ${getCountry.value}`;
//   getRegion.innerHTML = `Your Current Region: ${getRegion.value}`;
//   getCity.innerHTML= `Your Current City: ${getCity.value}`;
  

// }

// function removeLocation() {
//   localStorage.removeItem("lat");
//   localStorage.removeItem("long");
//   localStorage.removeItem("count");
//   localStorage.removeItem("reg");
//   localStorage.removeItem("city");
// //   getLocationBtn.disabled = false;
// getLocationBtn.style.display = "block";
// removeLocationBtn.style.display = "none";
// mapDiv.innerHTML = "";
// }

// // Check if lat and long already exist in local storage
// const lat = localStorage.getItem("lat");
const getLocationBtn = document.getElementById("location");
const removeLocationBtn = document.getElementById("remove");
const mapDiv = document.getElementById("map");
const getLatitude = document.getElementById("latitude");
const getLongitude = document.getElementById("longitude");
const getCountry = document.getElementById("country");
const getRegion = document.getElementById("region");
const getCity = document.getElementById("city");

function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    mapDiv.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  getLatitude.textContent = position.coords.latitude;
  getLongitude.textContent = position.coords.longitude;
  // getCountry.textContent = position.coords.country;
  // getRegion.textContent = position.coords.region;
  // getCity.textContent = position.coords.city;
  
  localStorage.setItem("lat", getLatitude.textContent);
  localStorage.setItem("long", getLongitude.textContent);
  // localStorage.setItem("count", getCountry.textContent);
  // localStorage.setItem("reg", getRegion.textContent);
  // localStorage.setItem("city", getCity.textContent);
  console.log(lat);
  console.log(long);
  // console.log( getCountry.textContent);
  // console.log( getRegion.textContent);
  // console.log( getCity.textContent);
  // displayMap(getLatitude.textContent, getLongitude.textContent, getCountry.textContent, getRegion.textContent, getCity.textContent);
  displayMap(getLatitude.textContent, getLongitude.textContent);
  getLocationBtn.style.display = "none";
  removeLocationBtn.style.display = "block";
}

function displayMap(lat, long) {
  const mapUrl = `https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed`;

  mapDiv.innerHTML = `<iframe src="${mapUrl}" frameborder="0" style="border:0" alt="map"></iframe>`;
  getLatitude.textContent = `Your Current Latitude: ${lat}`;
  getLongitude.textContent = `Your Current Longitude: ${long}`;
  // getCountry.textContent = `Your Current Country: ${country}`;
  // getRegion.textContent = `Your Current Region: ${region}`;
  // getCity.textContent = `Your Current City: ${city}`;
}

function removeLocation() {
  localStorage.removeItem("lat");
  localStorage.removeItem("long");
  // localStorage.removeItem("count");
  // localStorage.removeItem("reg");
  // localStorage.removeItem("city");
  getLocationBtn.style.display = "block";
  removeLocationBtn.style.display = "none";
  mapDiv.innerHTML = "";
}

// Check if lat and long already exist in local storage
const lat = localStorage.getItem("lat");

const long = localStorage.getItem("long");
if (lat && long) {
  displayMap(lat, long);
  // getLocationBtn.disabled = true;
  getLocationBtn.style.display = "none";
  removeLocationBtn.style.display = "block";

}




// To get the current country, state and city

function getAddressFromLatLng(getLatitude, getLongitude) {
  const apiKey = 'AIzaSyDPK7mEk3j6E2ESdkA0oehDTePq2Ufhlhc';
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${getLatitude},${getLongitude}&key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'OK') {
        const addressComponents = data.results[0].address_components;
        let country = '';
        let state = '';
        let city = '';

        addressComponents.forEach(component => {
          if (component.types.includes('country')) {
            country = component.long_name;
          }
          if (component.types.includes('administrative_area_level_1')) {
            state = component.long_name;
          }
          if (component.types.includes('locality')) {
            city = component.long_name;
          }
        });

        getCountry.innerHTML = `Your Current Country: ${country}`;
        getState.innerHTML = `Your Current State: ${state}`;
        getCity.innerHTML = `Your Current City: ${city}`;
      } else {
        console.error('Unable to retrieve address from latitude and longitude');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

