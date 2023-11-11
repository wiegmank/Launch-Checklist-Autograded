// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    

    document.getElementById("missionTarget").innerHTML = 
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">`
    
 };
 
 function validateInput(testInput) {
    if (testInput === '') {
        return "Empty";
    } else if (!(isNaN(testInput))) {
        return "Is a Number";
    } else if (isNaN(testInput)){
        return "Not a Number";
    }
 }

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (pilot === "" || copilot === "" || 
        fuelLevel === "" || cargoLevel === "") {
        alert("All fields are required!");
    };

    if (validateInput(fuelLevel) == "Not a Number" || validateInput(cargoLevel) == "Not a Number") {
        alert("Fuel AND Cargo must be a numeric value!");
    };

    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch.`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch.`;

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
    }

    if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
    } else if (fuelLevel >= 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
    }

    if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    } else if (cargoLevel <= 10000) {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    }
 };
 /*
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(function(response) {
            console.log(response);
         });
 
     return planetsReturned;
 }
*/

function myFetch() {
    let planetsReturned = fetch("https://handlers.education.launchcode.org/static/planets.json")
       .then(function(response) {
           return response.json();
        });
    return planetsReturned;
}

 
 
 function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * (planets.length));
    return (planets[randomPlanet]);
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;