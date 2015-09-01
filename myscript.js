//initialize player data
var player = {
  tech: 0,
  energy: 0,
  engineer: {
    name: "Engineer",
    owned: 0,
    cost: 15,
    nextC: 15,
    generates: 0.1,
  },
  android: {
    name: "Android",
    owned: 0,
    cost: 100,
    nextC: 100,
    generates: 0.5,
  },
  robot: {
    name: "Robot",
    owned: 0,
    cost: 500,
    nextC: 500,
    generates: 4,
  },
  resLab: {
    name: "Research Lab",
    owned: 0,
    cost: 3000,
    nextC: 3000,
    generates: 10,
  },
  resFac: {
    name: "Research Facility",
    owned: 0,
    cost: 10000,
    nextC: 10000,
    generates: 40,
  },
  roboticsFact: {
    name: "Robotics Factory",
    owned: 0,
    cost: 40000,
    nextC: 40000,
    generates: 100,
  },
  cyberLab: {
    name: "Cybernetics Lab",
    owned: 0,
    cost: 200000,
    nextC: 200000,
    generates: 400,
  },
  //initialize energy building data
  battPack: {
    name: "Battery Pack",
    owned: 0,
    cost: 15,
    nextC: 15,
    generates: 1,
  },
  pwrGen: {
    name: "Power Generator",
    owned: 0,
    cost: 15,
    nextC: 15,
    generates: 1,
  },
  genRoom: {
    name: "Generator Room",
    owned: 0,
    cost: 15,
    nextC: 15,
    generates: 1,
  },
  solPan: {
    name: "Solar Panels",
    owned: 0,
    cost: 15,
    nextC: 15,
    generates: 1,
  },
  solPanFarm: {
    name: "Solar Panel Farm",
    owned: 0,
    cost: 15,
    nextC: 15,
    generates: 1,
  },
  upgrades: {
    //Auto CLicker
    autoClickerTech: 0,
    autoClickerEnergy: 0,
    doubleClickerTech: 0,
    doubleClickerEnergy: 0,
    //Tech
    engi5Perc: 0,
    engi25Perc: 0,
    andro5Perc: 0,
    andro25Perc: 0,
    robot5Perc: 0,
    robot25Perc: 0,
    resLab5Perc: 0,
    resLab25Perc: 0,
    resFact5Perc: 0,
    resFact25Perc: 0,
    roboFact5Perc: 0,
    roboFact25Perc: 0,
    cybLab5Perc: 0,
    cybLab25Perc: 0,
    //Energy
    battPck5Perc: 0,
    battPck25Perc: 0,
    pwrGen5Perc: 0,
    pwrGen25Perc: 0,
    genRoom5Perc: 0,
    genRoom25Perc: 0,
    solPan5Perc: 0,
    solPan25Perc: 0,
    solPanFarm5Perc: 0,
    solPanFarm25Perc: 0,
  },
  achievements: {
    points: 0,
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    sixth: 0,
    seventh: 0,
    eighth: 0,
    nineth: 0,
    tenth: 0,
    eleventh: 0,
    twelfth: 0,
    thirteenth: 0,
    fourteenth: 0,
    fifteenth: 0,
    sixteenth: 0,
    seventeenth: 0,
    eighteenth: 0,
    nineteenth: 0,
    twentieth: 0,
    twenty_first: 0,
    twenty_second: 0,
    twenty_third: 0,
    twenty_fourth: 0,
    twenty_fifth: 0,
    twenty_sixth: 0,
    twenty_seventh: 0,
    twenty_eighth: 0,
    twenty_nineth: 0,
    thirtieth: 0,
    thirty_first: 0,
    thirty_second: 0,
    thirty_third: 0,
    thirty_fourth: 0,
    thirty_fifth: 0,
    thirty_sixth: 0,
    thirty_seventh: 0,
    thirty_eighth: 0,
    thirty_nineth: 0,
    fortieth: 0,
    forty_first: 0,
    forty_second: 0,
    forty_third: 0,
    forty_fourth: 0,
    forty_fifth: 0,
    forty_sixth: 0,
    forty_seventh: 0,
    forty_eighth: 0,
    forty_nineth: 0,
    fiftieth: 0,
    fifty_first: 0,
    fifty_second: 0,
    fifty_third: 0,
    fifty_fourth: 0,
    fifty_fifth: 0,
    fifty_sixth: 0,
    fifty_seventh: 0,
    fifty_eighth: 0,
    fifty_nineth: 0,
    sixtieth: 0,
    sixty_first: 0,
    sixty_second: 0,
    sixty_third: 0,
    sixty_fourth: 0,
    sixty_fifth: 0,
    sixty_sixth: 0,
    sixty_seventh: 0,
    sixty_eighth: 0,
    sixty_nineth: 0,
    seventieth: 0,
    eightieth: 0,
    ninetieth: 0,
    one_hundredth: 0
  }
};
var progBar = document.getElementsByClassName("progress-bar");
nums = ['k', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'UnD', 'DuD', 'TrD', 'QaD', 'QiD', 'SeD', 'SpD', 'OcD', 'NoD'];
// ================ HTML LOCAL STORAGE SAVE =====================//
//game save
function gameSave() {
  localStorage.setItem("player", JSON.stringify(player));
}
//game load
function gameLoad() {
  var savegame = JSON.parse(localStorage.getItem("player"));
  //Resources
  if (typeof savegame.tech !== "undefined") player.tech = savegame.tech;
  if (typeof savegame.energy !== "undefined") player.energy = savegame.energy;
  //Units Tech
  if (typeof savegame.engineer !== "undefined") player.engineer = savegame.engineer;
  if (typeof savegame.android !== "undefined") player.android = savegame.android;
  if (typeof savegame.robot !== "undefined") player.robot = savegame.robot;
  if (typeof savegame.resLab !== "undefined") player.resLab = savegame.resLab;
  if (typeof savegame.resFac !== "undefined") player.resFac = savegame.resFac;
  if (typeof savegame.roboticsFact !== "undefined") player.roboticsFact = savegame.roboticsFact;
  if (typeof savegame.cyberLab !== "undefined") player.cyberLab = savegame.cyberLab;
  //Units Energy
  if (typeof savegame.battPack !== "undefined") player.battPack = savegame.battPack;
  if (typeof savegame.pwrGen !== "undefined") player.pwrGen = savegame.pwrGen;
  if (typeof savegame.genRoom !== "undefined") player.genRoom = savegame.genRoom;
  if (typeof savegame.solPan !== "undefined") player.solPan = savegame.solPan;
  if (typeof savegame.solPanFarm !== "undefined") player.solPanFarm = savegame.solPanFarm;
  //Achievements
  if (typeof savegame.achievements !== "undefined") player.achievements = savegame.achievements;
  //Upgrades
  if (typeof savegame.upgrades !== "undefined") player.upgrades = savegame.upgrades;
}

// ================ COOKIE SAVE =====================//
/*function set_cookie(cookie_name,value) {
    expiry = new Date();
    expiry.setTime(new Date().getTime() + (10*60*1000));
    var c_value=escape(btoa(JSON.stringify(value))) +
    "; expires="+expiry.toUTCString();
    document.cookie=cookie_name + "=" + c_value;
}

function get_cookie(cookie_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + cookie_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(cookie_name + "=");
    }
    if (c_start == -1) return false;
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end == -1) {
        c_end = c_value.length;
    }
    c_value = atob(unescape(c_value.substring(c_start,c_end)));
    return JSON.parse(c_value);
}

function save_game() {
    set_cookie('clickclick_save', player);
}
function load_game() {
    var save_data = getCookie('clickclick_save');
       if (!save_data) return;
    player = save_data;
}*/

//delete save
function deleteSave() {
  localStorage.removeItem('player');
  location.reload();
}
//Buy One
function buyOne(building, resource, id) {
  building.nextC = ((Math.floor(building.cost * Math.pow(1.15, building.owned))));
  if (building.nextC <= player[resource]) {
    building.owned++;
    player[resource] -= building.nextC;
    document.getElementById(id).innerHTML = suffixy(player[resource], 2);
    building.nextC = ((Math.floor(building.cost * Math.pow(1.15, building.owned))));
  } else {
    console.log("Not enough resources");
  }
}
//Buy Five
function BuyFive(building, resource, amountToPurchase, id) { //Send two values, building and amountToPurchase.
  var exponentialIncrease = 1.15; //Used to change the value for rebalancing later.
  var nextCost = 0;
  nextCost = Math.floor((building.cost * Math.pow(exponentialIncrease, building.owned)) * ((Math.pow(exponentialIncrease, amountToPurchase) - 1) / (exponentialIncrease - 1)));
  //now determines cost of any number of buildings
  if (nextCost <= player[resource]) { //checks if player can afford the purchase
    building.owned += amountToPurchase; //increments the amount of buildings by amount to purchase
    player[resource] -= nextCost; // removes the resource used to purchase the building
    document.getElementById(id).innerHTML = suffixy(player[resource], 2); // updates the amount of resource on the screen.
    building.nextC = ((Math.floor(building.cost * Math.pow(1.15, building.owned)))); //displays cost of next purchase
    console.log(nextCost);
  } else {
    console.log("Not enough resources");
  }
}
//Buy All
/* STILL NEEDS SOME WORK ON THE RESOURCE REMOVAL
function buyAll(building, resource, id) {
  var exponentialIncrease = 1.15;
  var nextCost = 0;
  var toBuy = (log10(((player[resource] / (building.cost * Math.pow(exponentialIncrease, building.owned))) * (exponentialIncrease - 1)) + 1) / log10(exponentialIncrease));
  //var toRemove = Math.floor((building.cost * Math.pow(exponentialIncrease, building.owned)) * ((Math.pow(exponentialIncrease, toBuy) - 1) / (exponentialIncrease - 1)));
  if (toBuy <= player[resource]) {
    //player[resource] -= toRemove;
    building.owned += parseInt(toBuy);
    building.nextC = ((Math.floor(building.cost * Math.pow(1.15, building.owned))));
  }
}
function log10(val) {
  return Math.log(val) / Math.LN10;
}*/

function buyUpgrade(techcost, energycost, up, amount) {
  if (techcost <= player.tech && energycost <= player.energy) {
    player.tech -= techcost;
    player.energy -= energycost;
    player.upgrades[up] = amount;
    console.log("Done, upgrade purchased");
    document.getElementById('buttontest').className = "upgrade-unlocked";
  }
  console.log("UP" + " " + up);
}

function backgroundChange() {
  if (document.getElementById('buttontestt').className == "buttontest") {
    document.getElementById('buttontestt').className = "upgrade-unlocked";
  } else {
    document.getElementById('buttontestt').className = "buttontest";
  }
  console.log("it worked");
}

function getResource(player, resource, amount) {
  player[resource] += amount;
}

function prettify(input) {
  var output = Math.round(input * 1000000) / 1000000;
  return output;
}

function suffixy(num, dec) {
  dec = dec || 0; //how many decimal places do we want?
  var suffixes = ['', 'k', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'UnD', 'DuD', 'TrD', 'QaD', 'QiD', 'SeD', 'SpD', 'OcD'];
  var ord = floor(Math.log(Math.abs(num)) / Math.log(10) / 3); //the abs to make sure our number is always positive when being put through a log operation. divide by 3 at the end because our suffixes goes up by orders of 3
  var suffix = suffixes[ord];
  var rounded = Math.round(num / (Math.pow(10, ord * 3 - dec))) / Math.pow(10, dec);
  return rounded + " " + suffix;
}

function floor(num) {
  //special floor needed to deal with floating point calculations
  if (num - Math.floor(num) >= 0.9999999999999991) {
    return Math.ceil(num);
  } else {
    return Math.floor(num);
  }
}
function hideElements(){
  if (player.tech >= 50){
    document.getElementById('andro').style.display = 'block';
  }
  if (player.tech >= 250){
    document.getElementById('robo').style.display = 'block';
  }
  if (player.tech >= 500){
    document.getElementById('resLabo').style.display = 'block';
  }
  if (player.tech >= 1000){
    document.getElementById('resFact').style.display = 'block';
  }
  if (player.tech >= 2000){
    document.getElementById('robFact').style.display = 'block';
  }
  if (player.tech >= 3000){
    document.getElementById('cyberLabo').style.display = 'block';
  }
//energy
if (player.energy >= 250){
  document.getElementById('pwrgen').style.display = 'block';
}
if (player.energy >= 500){
  document.getElementById('generoom').style.display = 'block';
}
if (player.energy >= 1000){
  document.getElementById('solarpan').style.display = 'block';
}
if (player.energy >= 2000){
  document.getElementById('solarfarm').style.display = 'block';
}
}
function updateTotals() {
  player.tech += ((player.engineer.owned * (player.engineer.generates + player.upgrades.engi5Perc + player.upgrades.engi25Perc)));
  player.tech += ((player.android.owned * (player.android.generates + player.upgrades.andro5Perc + player.upgrades.andro25Perc)));
  player.tech += ((player.robot.owned * (player.robot.generates + player.upgrades.robot5Perc + player.upgrades.robot25Perc)));
  player.tech += ((player.resLab.owned * (player.resLab.generates + player.upgrades.resLab5Perc + player.upgrades.resLab25Perc)));
  player.tech += ((player.resFac.owned * (player.resFac.generates + player.upgrades.resFact5Perc + player.upgrades.resFact25Perc)));
  player.tech += ((player.roboticsFact.owned * (player.roboticsFact.generates + player.upgrades.roboFact5Perc + player.upgrades.roboFact25Perc)));
  player.tech += ((player.cyberLab.owned * (player.cyberLab.generates + player.upgrades.cybLab5Perc + player.upgrades.cybLab25Perc)));
  //Energy
  player.energy += ((player.battPack.owned * (player.battPack.generates + player.upgrades.battPck5Perc + player.upgrades.battPck25Perc)));
  player.energy += ((player.pwrGen.owned * (player.pwrGen.generates + player.upgrades.pwrGen5Perc + player.upgrades.pwrGen25Perc)));
  player.energy += ((player.genRoom.owned * (player.genRoom.generates + player.upgrades.genRoom5Perc + player.upgrades.genRoom25Perc)));
  player.energy += ((player.solPan.owned * (player.solPan.generates + player.upgrades.solPan5Perc + player.upgrades.solPan25Perc)));
  player.energy += ((player.solPanFarm.owned * (player.solPanFarm.generates + player.upgrades.solPanFarm5Perc + player.upgrades.solPanFarm25Perc)));
  //Generating
  document.getElementsByClassName('Generating')[0].innerHTML = prettify((player.engineer.owned * (player.engineer.generates + player.upgrades.engi5Perc + player.upgrades.engi25Perc)));
  document.getElementsByClassName('Generating')[1].innerHTML = prettify((player.android.owned * (player.android.generates + player.upgrades.andro5Perc + player.upgrades.andro25Perc)));
  document.getElementsByClassName('Generating')[2].innerHTML = prettify((player.robot.owned * (player.robot.generates + player.upgrades.robot5Perc + player.upgrades.robot25Perc)));
  document.getElementsByClassName('Generating')[3].innerHTML = prettify((player.resLab.owned * (player.resLab.generates + player.upgrades.resLab5Perc + player.upgrades.resLab25Perc)));
  document.getElementsByClassName('Generating')[4].innerHTML = prettify((player.resFac.owned * (player.resFac.generates + player.upgrades.resFact5Perc + player.upgrades.resFact25Perc)));
  document.getElementsByClassName('Generating')[5].innerHTML = prettify((player.roboticsFact.owned * (player.roboticsFact.generates + player.upgrades.roboFact5Perc + player.upgrades.roboFact25Perc)));
  document.getElementsByClassName('Generating')[6].innerHTML = prettify((player.cyberLab.owned * (player.cyberLab.generates + player.upgrades.cybLab5Perc + player.upgrades.cybLab25Perc)));
  document.getElementsByClassName('Generating')[7].innerHTML = prettify((player.battPack.owned * (player.battPack.generates + player.upgrades.battPck5Perc + player.upgrades.battPck25Perc)));
  document.getElementsByClassName('Generating')[8].innerHTML = prettify((player.pwrGen.owned * (player.pwrGen.generates + player.upgrades.pwrGen5Perc + player.upgrades.pwrGen25Perc)));
  document.getElementsByClassName('Generating')[9].innerHTML = prettify((player.genRoom.owned * (player.genRoom.generates + player.upgrades.genRoom5Perc + player.upgrades.genRoom25Perc)));
  document.getElementsByClassName('Generating')[10].innerHTML = prettify((player.solPan.owned * (player.solPan.generates + player.upgrades.solPan5Perc + player.upgrades.solPan25Perc)));
  document.getElementsByClassName('Generating')[11].innerHTML = prettify((player.solPanFarm.owned * (player.solPanFarm.generates + player.upgrades.solPanFarm5Perc + player.upgrades.solPanFarm25Perc)));
  //Cost
  document.getElementsByClassName('Cost')[0].innerHTML = suffixy(player.engineer.nextC, 2);
  document.getElementsByClassName('Cost')[1].innerHTML = suffixy(player.android.nextC, 2);
  document.getElementsByClassName('Cost')[2].innerHTML = suffixy(player.robot.nextC, 2);
  document.getElementsByClassName('Cost')[3].innerHTML = suffixy(player.resLab.nextC, 2);
  document.getElementsByClassName('Cost')[4].innerHTML = suffixy(player.resFac.nextC, 2);
  document.getElementsByClassName('Cost')[5].innerHTML = suffixy(player.roboticsFact.nextC, 2);
  document.getElementsByClassName('Cost')[6].innerHTML = suffixy(player.cyberLab.nextC, 2);
  //Cost Energy
  document.getElementsByClassName('Cost')[7].innerHTML = suffixy(player.battPack.nextC);
  document.getElementsByClassName('Cost')[8].innerHTML = suffixy(player.pwrGen.nextC);
  document.getElementsByClassName('Cost')[9].innerHTML = suffixy(player.genRoom.nextC);
  document.getElementsByClassName('Cost')[10].innerHTML = suffixy(player.solPan.nextC);
  document.getElementsByClassName('Cost')[11].innerHTML = suffixy(player.solPanFarm.nextC);

}

function checkUpgrades() {
  if (player.upgrades.engi5Perc !== 0) {
    document.getElementById('buttontest').className = "btn btn-success";
  }
}

window.setInterval(function() {
  console.log(player.engineer.nextC);
  updateTotals();
  gameSave();
  getResource(player, 'tech' , 1);
  getResource(player, 'energy', 1);
  hideElements();
  checkAchievements ();
  //save_game();
}, 1000);

window.setInterval(function() {
  //console.log("I'm working Too");
  // Tech
  document.getElementById('Engineers').innerHTML = player.engineer.owned;
  document.getElementById('Androids').innerHTML = player.android.owned;
  document.getElementById('Robot').innerHTML = player.robot.owned;
  document.getElementById('resLab').innerHTML = player.resLab.owned;
  document.getElementById('resFac').innerHTML = player.resFac.owned;
  document.getElementById('roboticsFact').innerHTML = player.roboticsFact.owned;
  document.getElementById('cyberLab').innerHTML = player.cyberLab.owned;
  // Energy
  document.getElementById('battPack').innerHTML = player.battPack.owned;
  document.getElementById('pwrGen').innerHTML = player.pwrGen.owned;
  document.getElementById('genRoom').innerHTML = player.genRoom.owned;
  document.getElementById('solPan').innerHTML = player.solPan.owned;
  document.getElementById('solPanFarm').innerHTML = player.solPanFarm.owned;
  //Cash
  if (player.tech <= 1000) {
    document.getElementById('Tech').innerHTML = prettify(player.tech);
  } else {
    document.getElementById('Tech').innerHTML = suffixy(player.tech, 1);
  }
  if (player.energy <= 1000) {
    document.getElementById('Energy').innerHTML = player.energy;
  } else {
    document.getElementById('Energy').innerHTML = suffixy(player.energy, 1);
  }
  checkUpgrades();
}, 100);

//Elements hide function
