var NE = ["Management and Marketing", "International Business"];
var ZIF = ["Business Informatics", "Finance", "Business Management"];

var bachelors = [1, 2, 3];
var masters = [1, 2];

function selectProgram(){
    document.getElementById("dropdownProgram").innerHTML = "";
    document.getElementById("dropdownProgram").options[0] = new Option("Choose your program", "0");
    document.getElementById("dropdownProgram").options[0].disabled = "true";
    if(document.querySelector("#dropdownFaculty").value == "Economic Sciences"){
        for (var i = 0; i < NE.length; i++){
            document.querySelector("#dropdownProgram").options[i + 1] = new Option(NE[i]);
        }
    }
    if(document.querySelector("#dropdownFaculty").value == "Management, Computer Science and Finance"){
        for (var i = 0; i < ZIF.length; i++){
            document.querySelector("#dropdownProgram").options[i + 1] = new Option(ZIF[i]);
        }
    }
}

function selectYear(){
    document.getElementById("dropdownYear").innerHTML = "";
    document.getElementById("dropdownYear").options[0] = new Option("Choose your year", "0");
    document.getElementById("dropdownYear").options[0].disabled = "true";
    if(document.querySelector("#dropdown").value == "Bachelor's"){
        for (var i = 0; i < bachelors.length; i++){
            document.querySelector("#dropdownYear").options[i + 1] = new Option(bachelors[i]);
        }
    }
    if(document.querySelector("#dropdown").value == "Master's"){
        for (var i = 0; i < masters.length; i++){
            document.querySelector("#dropdownYear").options[i + 1] = new Option(masters[i]);
        }
    }
}

var sportType;


function selectSport(){

    
    if(document.querySelector("#dropdownSport").value == "Football"){
        sportType = document.getElementsByClassName("football");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.add("footballStyle");
        }
    }
    else{
        sportType = document.getElementsByClassName("football");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.remove("footballStyle");
        }
    }

    if(document.querySelector("#dropdownSport").value == "Basketball"){
        sportType = document.getElementsByClassName("basketball");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.add("basketballStyle");
        }
    }
    else{
        sportType = document.getElementsByClassName("basketball");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.remove("basketballStyle");
        }
    }

    if(document.querySelector("#dropdownSport").value == "Volleyball"){
        sportType = document.getElementsByClassName("volleyball");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.add("volleyballStyle");
        }
    }
    else{
        sportType = document.getElementsByClassName("volleyball");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.remove("volleyballStyle");
        }
    }

    if(document.querySelector("#dropdownSport").value == "Gym"){
        sportType = document.getElementsByClassName("gym");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.add("gymStyle");
        }
    }
    else{
        sportType = document.getElementsByClassName("gym");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.remove("gymStyle");
        }
    }

    if(document.querySelector("#dropdownSport").value == "Fitness"){
        sportType = document.getElementsByClassName("fitness");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.add("fitnessStyle");
        }
    }
    else{
        sportType = document.getElementsByClassName("fitness");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.remove("fitnessStyle");
        }
    }

    if(document.querySelector("#dropdownSport").value == "Crossfit"){
        sportType = document.getElementsByClassName("crossfit");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.add("crossfitStyle");
        }
    }
    else{
        sportType = document.getElementsByClassName("crossfit");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.remove("crossfitStyle");
        }
    }

    if(document.querySelector("#dropdownSport").value == "Tennis"){
        sportType = document.getElementsByClassName("tennis");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.add("tennisStyle");
        }
    }
    else{
        sportType = document.getElementsByClassName("tennis");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.remove("tennisStyle");
        }
    }

    if(document.querySelector("#dropdownSport").value == "Table tennis"){
        sportType = document.getElementsByClassName("tableTennis");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.add("tableTennisStyle");
        }
    }
    else{
        sportType = document.getElementsByClassName("tableTennis");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.remove("tableTennisStyle");
        }
    }

    if(document.querySelector("#dropdownSport").value == "Swimming"){
        sportType = document.getElementsByClassName("swimming");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.add("swimmingStyle");
        }
    }
    else{
        sportType = document.getElementsByClassName("swimming");
        for(var i = 0; i < sportType.length; i++){
            sportType.item(i).classList.remove("swimmingStyle");
        }
    }
}
