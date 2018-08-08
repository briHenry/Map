// 1. create variables for our map
// 2. Write a function that initializes our map
// 3. We're going to run that funciton

var ourLoc;
var view;
var map;


function init() {
    ourLoc = ol.proj.fromLonLat([-73.985390, 40.759862]);

    view = new ol.View({
        center: ourLoc,
        zoom: 6
    });

    map = new ol.Map({
        target: 'map',
        //Create layers ("Paints" the map onto your website)
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        loadTilesWhileAnimating: true,
        view:view
    });
}

// // How do we know our web page loads for the first time?
// document.addEventListener("DOMContentLoaded", function (e){
//     console.log("LOADED LSKDMFLKSDMFLKSDMFLKM");
//     init();
// });
// the next line shows an easier way of writing this code 
window.onload = init; 

// Animates the map - zooms in
function panHome(){
    view.animate({
        center: ourLoc, 
        curation: 2000
    }); 
}


//Creat a function that will go to a specific location
//Using another API

function panToLocation() {
    var countryName = document.getElementById("country-name").value;

    //Error check to make sure the country is spelled correctly 
    if(countryName === "") {
        alert("You didn't enter a country name!")
    }

    //we're accessing a REST API to get to the country's 
    //location data 

    var query = "https://restcountries.eu/rest/v2/name/"+countryName;

    var lon = 0.0; 
    var lat = 0.0; 
    var location = ol.proj.fromLonLat([lon, lat])


    view.animate({
        center: location, 
        duration: 2000
    });
}   

