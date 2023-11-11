// Write your JavaScript code here!

window.addEventListener("load", function() {

    //let form = document.querySelector("form");

/*
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
*/

    document.addEventListener("submit", function(event) {
    event.preventDefault(); 

        const pilotNameInput = document.querySelector("input[name=pilotName]").value;
        const copilotNameInput = document.querySelector("input[name=copilotName]").value;
        const fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
        const cargoMassInput = document.querySelector("input[name=cargoMass]").value;
        const list = document.getElementById("faultyItems");

        formSubmission(document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput)
    });

});

