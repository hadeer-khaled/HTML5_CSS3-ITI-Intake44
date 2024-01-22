let mapBtn = document.getElementById("map-btn");
let infoBtn = document.getElementById("info-btn");
let mapInfo = document.getElementById("map-info");
let map;
let mapSuccess = false;
let lat;
let lon;
mapBtn.addEventListener("click", function () {
  if (navigator.geolocation) {
    let g = navigator.geolocation.getCurrentPosition(success, failed);
    console.log(navigator.geolocation);
  } else {
    alert("Please update your browser");
  }
});
infoBtn.addEventListener("click", function () {
  if (mapSuccess) {
    mapInfo.innerHTML = `
        <table>
        <tr>
        <th>latitude</th>
        <th>longitude</th>
        <th>Time</th>
        </tr>
        <tr>
        <td>${lat}</td>
        <td>${lon}</td>
        <td>${new Date()}</td>
        </tr>
        <table>
    
    `;
  } else {
    mapInfo.innerHTML = "There is No Map to get the location information";
  }
});
function success(obj) {
  lat = obj.coords.latitude;
  lon = obj.coords.longitude;
  console.log(lat);
  console.log(lon);
  mapSuccess = true;
  mapInfo.innerHTML = "";
  initMap();
}
function failed(e) {
  console.log(e);
  mapInfo.innerHTML = "You Need to give me permission to get your location";
  mapSuccess = false;
}
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

// initMap();
