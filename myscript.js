//initialize player data
var player = {
  clicks: 0,
  speed: 5,
  credits: 0,
  tech: 0,
  energy: 0,
  uranium: 0,
  commander: {
    commanderName: "temp",
    colonyName: "temp",
  },
  // Staff data
  colonist: {
    owned: 0,
    generates: 0.1,
    requires: {
      cost: 15,
      nextC: 15
    }
  },
  engineer: {
    owned: 0,
    generates: 0.5,
    requires: {
      cost: 100,
      nextC: 100
    }
  },
  inventor: {
    owned: 0,
    generates: 4,
    requires: {
      cost: 500,
      nextC: 500
    }
  },
  scientist: {
    owned: 0,
    generates: 10,
    requires: {
      cost: 3000,
      nextC: 3000
    }
  },
  robot: {
    owned: 0,
    generates: 40,
    requires: {
      cost: 10000,
      nextC: 10000
    }
  },
  android: {
    owned: 0,
    generates: 100,
    requires: {
      cost: 40000,
      nextC: 40000
    }
  },
  // Tech data
  workbench: {
    owned: 0,
    generates: 1,
    requires: {
      cost: 150,
      nextC: 150,
      staffCost: 1,
      powerCost: 1
    }
  },
  workshop: {
    owned: 0,
    generates: 5,
    requires: {
      cost: 750,
      nextC: 750,
      staffCost: 1,
      powerCost: 5
    }
  },
  resLab: {
    owned: 0,
    generates: 30,
    requires: {
      cost: 3700,
      nextC: 3700,
      staffCost: 1,
      powerCost: 30
    }
  },
  resFac: {
    owned: 0,
    generates: 150,
    requires: {
      cost: 20000,
      nextC: 20000,
      staffCost: 1,
      powerCost: 150
    }
  },
  roboticsFact: {
    owned: 0,
    generates: 750,
    requires: {
      cost: 100000,
      nextC: 100000,
      staffCost: 1,
      powerCost: 600
    }
  },
  cyberLab: {
    owned: 0,
    generates: 3000,
    requires: {
      cost: 500000,
      nextC: 500000,
      staffCost: 1,
      powerCost: 2500
    }
  },
  //Energy data
  battPack: {
    owned: 0,
    generates: 1.5,
    recharge: 1.2,
    requires: {
      cost: 200,
      nextC: 200,
      staffCost: 1,
    }
  },
  solPan: {
    owned: 0,
    generates: 7,
    recharge: 7,
    requires: {
      cost: 1000,
      nextC: 1000,
      staffCost: 1,
    }
  },
  solPanFarm: {
    owned: 0,
    generates: 40,
    recharge: 35,
    requires: {
      cost: 4500,
      nextC: 4500,
      staffCost: 1,
    }
  },
  termPowStation: {
    owned: 0,
    generates: 200,
    recharge: 180,
    requires: {
      cost: 30000,
      nextC: 15000,
      staffCost: 1,
    }
  },
  nucPowPlant: {
    owned: 0,
    generates: 1000,
    recharge: 800,
    requires: {
      cost: 130000,
      nextC: 130000,
      staffCost: 1,
    }
  },
  fusReactor: {
    owned: 0,
    generates: 3800,
    recharge: 2700,
    requires: {
      cost: 630000,
      nextC: 630000,
      staffCost: 1,
    }
  },
  uraReactor: {
    owned: 0,
    generates: 10000,
    recharge: 8000,
    requires: {
      cost: 2000000,
      nextC: 2000000,
      staffCost: 1,
    }
  },
  //Uranium data
  miningBot: {
    owned: 0,
    generates: 500,
    requires: {
      cost: 200000,
      nextC: 200000,
      powerCost: 450
    }
  },
  uraSmelter: {
    owned: 0,
    generates: 3000,
    requires: {
      cost: 1000000,
      nextC: 1000000,
      staffCost: 1,
      powerCost: 3200
    }
  },
  uraRefinery: {
    owned: 0,
    generates: 15000,
    requires: {
      cost: 5000000,
      nextC: 5000000,
      staffCost: 1,
      powerCost: 7700
    }
  },
  upgrades: {
    user: {
      //Auto CLicker
      manager: 0,
      energyAssistant: 0,
      chiefResearcher: 0
    },
    //Staff
    colonist5Perc: 0,
    colonist25Perc: 0,
    engineer5Perc: 0,
    engineer25Perc: 0,
    inventor5Perc: 0,
    inventor25Perc: 0,
    scientist5Perc: 0,
    scientist25Perc: 0,
    android5Perc: 0,
    android25Perc: 0,
    robot5Perc: 0,
    robot25Perc: 0,
    //Tech
    workbench5Perc: 0,
    workbench25Perc: 0,
    workshop5Perc: 0,
    workshop25Perc: 0,
    researchLab5Perc: 0,
    researchLab25Perc: 0,
    researchFacility5Perc: 0,
    researchFacility25Perc: 0,
    roboticsFactory5Perc: 0,
    roboticsFactory25Perc: 0,
    cyberneticsLab5Perc: 0,
    cyberneticsLab25Perc: 0,
    //Energy
    batteryPack5Perc: 0,
    batteryPack25Perc: 0,
    solarPanel5Perc: 0,
    solarPanel25Perc: 0,
    solarPanelFarm5Perc: 0,
    solarPanelFarm25Perc: 0,
    thermalPowerStation5Perc: 0,
    thermalPowerStation25Perc: 0,
    nuclearPowerPlant5Perc: 0,
    nuclearPowerPlant25Perc: 0,
    fusionReactor5Perc: 0,
    fusionReactor25Perc: 0,
    uraniumReactor5Perc: 0,
    uraniumReactor25Perc: 0,
    //Uranium
    miningBot5Perc: 0,
    miningBot25Perc: 0,
    uraniumSmelter5Perc: 0,
    uraniumSmelter25Perc: 0,
    uraniumRefinery5Perc: 0,
    uraniumRefinery25Perc: 0
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
    seventy_first: 0,
    seventy_second: 0,
    seventy_third: 0,
    seventy_fourth: 0,
    seventy_fifth: 0,
    seventy_sixth: 0,
    seventy_seventh: 0,
    seventy_eighth: 0,
    seventy_nineth: 0,
    eightieth: 0,
    eighty_first: 0,
    eighty_second: 0,
    eighty_third: 0,
    eighty_forth: 0,
    eighty_fifth: 0,
    eighty_sixth: 0,
    eighty_seventh: 0,
    eighty_eighth: 0,
    eighty_ninenth: 0,
    ninetieth: 0,
    ninety_first: 0,
    ninety_second: 0,
    ninety_third: 0,
    ninety_fourth: 0,
    ninety_fifth: 0,
    ninety_sixth: 0,
    ninety_seventh: 0,
    ninety_eighth: 0,
    ninety_nineth: 0,
    one_hundredth: 0,
    hundred_one: 0,
    hundred_two: 0,
    hundred_three: 0,
    hundred_four: 0,
    hundred_five: 0,
    hundred_six: 0,
    hundred_seven: 0,
    hundred_eight: 0,
    hundred_nine: 0,
    hundred_ten: 0,
    hundred_eleven: 0,
    hundred_twelve: 0,
    hundred_thirteen: 0,
    hundred_fourteen: 0,
    hundred_fifteen: 0,
    hundred_sixteen: 0,
    hundred_seventeen: 0,
    hundred_eighteen: 0,
    hundred_nineteen: 0,
    hundred_twenty: 0,
    hundred_twenty_one: 0,
    hundred_twenty_two: 0,
    hundred_twenty_three: 0,
    hundred_twenty_four: 0,
    hundred_twenty_five: 0,
    hundred_twenty_six: 0,
    hundred_twenty_seven: 0,
    hundred_twenty_eight: 0,
    hundred_twenty_nine: 0,
    hundred_thirty: 0,
  }
};
var commanderNamee;
var colonyNamee;
var defaultCommander = "Shy";
var defaultColony = "Nothingness";

/*function createCharacter() {

  //Ask player for commander and colony names
  if (player.commander.commanderName === "temp") {
    commanderNamee = prompt("What is your name, commander ?");
    player.commander.commanderName = commanderNamee;
    document.getElementById('commander-name').innerHTML = "Commander:" + " " + player.commander.commanderName;
    if (!commanderNamee) {
      commanderNamee = defaultCommander;
      player.commander.commanderName = commanderNamee;
      document.getElementById('commander-name').innerHTML = "Commander:" + " " + commanderNamee;
    }
  }
  if (player.commander.colonyName === "temp") {
    colonyNamee = prompt("What is the name of your colony ?");
    player.commander.colonyName = colonyNamee;
    document.getElementById('colony-name').innerHTML = "Colony:" + " " + player.commander.colonyName;
    if (!colonyNamee) {
      colonyNamee = defaultColony;
      player.commander.colonyName = colonyNamee;
      document.getElementById('colony-name').innerHTML = "Colony:" + " " + colonyNamee;
    }
  }
  document.getElementById('commander-name').innerHTML = "Commander:" + " " + player.commander.commanderName;
  document.getElementById('colony-name').innerHTML = "Colony:" + " " + player.commander.colonyName;
}

function renameCharacter() {
  //Ask player for commander and colony names
  var commanderNamee = prompt("What is your name, commander ?");
  player.commander.commanderName = commanderNamee;
  document.getElementById('commander-name').innerHTML = "Commander:" + " " + commanderNamee;
  if (!commanderNamee) {
    commanderNamee = defaultCommander;
    player.commander.commanderName = commanderNamee;
    document.getElementById('commander-name').innerHTML = "Commander:" + " " + commanderNamee;
  }
  var colonyNamee = prompt("What is the name of your colony ?");
  player.commander.colonyName = colonyNamee;
  document.getElementById('colony-name').innerHTML = "Colony:" + " " + colonyNamee;
  if (!colonyNamee) {
    colonyNamee = defaultColony;
    player.commander.colonyName = colonyNamee;
    document.getElementById('colony-name').innerHTML = "Colony:" + " " + colonyNamee;
  }
}*/

function hideNotify() {
  document.getElementById('top-notify').style.display = "none";
  localStorage.setItem('asavepopup', 'false'); //store state in localStorage
}

function checkHidden() {
  var show = localStorage.getItem('asavepopup');
  if (show === 'false') {
    document.getElementById('top-notify').style.display = "none";
  }
}
var progBar = document.getElementsByClassName("progress-bar");
nums = ['k', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'UnD', 'DuD', 'TrD', 'QaD', 'QiD', 'SeD', 'SpD', 'OcD', 'NoD'];
// ================ HTML LOCAL STORAGE SAVE =====================//
//game save
function gameSave() {
  localStorage.setItem("player", JSON.stringify(player));
  $(document).ready(function() {
    $('#Game-Save').delay().fadeIn('slow').delay(2000).fadeOut('slow');
  });
}

function gameSaveString() {
  var string = localStorage.setItem("player", JSON.stringify(player)); //assign sava data to variable
  var compressed = window.btoa(JSON.stringify(player)); //encode save data
  document.getElementById('impo-expo').innerHTML = compressed; //send endcoded save data into text area
  console.log("Saving finished");
}

function gameLoadString() {
  var compressed = document.getElementById('impo-expo').value; // retrieve compressed string
  var decompressed = window.atob(compressed); //  decode compressed string
  player = JSON.parse(decompressed); // parse decoded values into player object
  console.log("Loading finished");
}

function gameLoad() {
  var savegame = JSON.parse(localStorage.getItem("player"));
  //clicks
  if (typeof savegame.clicks !== "undefined") player.clicks = savegame.clicks;
  //FPS
  if (typeof savegame.speed !== "undefined") player.speed = savegame.speed;
  //Resources
  if (typeof savegame.credits !== "undefined") player.credits = savegame.credits;
  if (typeof savegame.tech !== "undefined") player.tech = savegame.tech;
  if (typeof savegame.energy !== "undefined") player.energy = savegame.energy;
  if (typeof savegame.uranium !== "undefined") player.uranium = savegame.uranium;
  //Commander
  if (typeof savegame.commander !== "undefined") player.commander = savegame.commander;
  //Units Staff
  if (typeof savegame.colonist !== "undefined") player.colonist = savegame.colonist;
  if (typeof savegame.engineer !== "undefined") player.engineer = savegame.engineer;
  if (typeof savegame.inventor !== "undefined") player.inventor = savegame.inventor;
  if (typeof savegame.scientist !== "undefined") player.scientist = savegame.scientist;
  if (typeof savegame.robot !== "undefined") player.robot = savegame.robot;
  if (typeof savegame.android !== "undefined") player.android = savegame.android;

  //Units Tech
  if (typeof savegame.workbench !== "undefined") player.workbench = savegame.workbench;
  if (typeof savegame.workshop !== "undefined") player.workshop = savegame.workshop;
  if (typeof savegame.resLab !== "undefined") player.resLab = savegame.resLab;
  if (typeof savegame.resFac !== "undefined") player.resFac = savegame.resFac;
  if (typeof savegame.roboticsFact !== "undefined") player.roboticsFact = savegame.roboticsFact;
  if (typeof savegame.cyberLab !== "undefined") player.cyberLab = savegame.cyberLab;
  //Units Energy
  if (typeof savegame.battPack !== "undefined") player.battPack = savegame.battPack;
  if (typeof savegame.solPan !== "undefined") player.solPan = savegame.solPan;
  if (typeof savegame.solPanFarm !== "undefined") player.solPanFarm = savegame.solPanFarm;
  if (typeof savegame.termPowStation !== "undefined") player.termPowStation = savegame.termPowStation;
  if (typeof savegame.nucPowPlant !== "undefined") player.nucPowPlant = savegame.nucPowPlant;
  if (typeof savegame.fusReactor !== "undefined") player.fusReactor = savegame.fusReactor;
  if (typeof savegame.uraReactor !== "undefined") player.uraReactor = savegame.uraReactor;
  //Units Uranium
  if (typeof savegame.miningBot !== "undefined") player.miningBot = savegame.miningBot;
  if (typeof savegame.uraSmelter !== "undefined") player.uraSmelter = savegame.uraSmelter;
  if (typeof savegame.uraRefinery !== "undefined") player.uraRefinery = savegame.uraRefinery;
  //Achievements
  if (typeof savegame.achievements !== "undefined") player.achievements = savegame.achievements;
  //Upgrades
  if (typeof savegame.upgrades !== "undefined") player.upgrades = savegame.upgrades;
}

//delete save
function deleteSave() {
  localStorage.removeItem('player');
  localStorage.removeItem('asavepopup');
}
//Buy Five
function buyBuilding(building, resource, amountToPurchase, id) { //Send two values, building and amountToPurchase.
  var exponentialIncrease = 1.15; //Used to change the value for rebalancing later.
  var nextCost = 0;
  nextCost = Math.floor((building.requires.cost * Math.pow(exponentialIncrease, building.owned)) * ((Math.pow(exponentialIncrease, amountToPurchase) - 1) / (exponentialIncrease - 1)));
  //now determines cost of any number of buildings
  if (nextCost <= player[resource]) { //checks if player can afford the purchase
    building.owned += amountToPurchase; //increments the amount of buildings by amount to purchase
    player[resource] -= nextCost; // removes the resource used to purchase the building
    document.getElementById(id).innerHTML = suffixy(player[resource], 2); // updates the amount of resource on the screen.
    building.requires.nextC = ((Math.floor(building.requires.cost * Math.pow(1.15, building.owned)))); //displays cost of next purchase
    //console.log(nextCost);
  } else {
    console.log("Not enough resources");
  }
}
//Buy All
function buyAll(building, resource, id) {
  var exponentialIncrease = 1.15;
  var nextCost = 0;
  var toBuy = (log10(((player[resource] / (building.requires.cost * Math.pow(exponentialIncrease, building.owned))) * (exponentialIncrease - 1)) + 1) / log10(exponentialIncrease));
  buyBuilding(building, resource, Math.floor(toBuy), id);

}

function log10(val) {
  return Math.log(val) / Math.LN10;
}

function buyUpgrade(creditcost, techcost, energycost, uraniumcost, up, amount) {
  if (creditcost <= player.credits && techcost <= player.tech &&
    energycost <= player.energy && uraniumcost <= player.uranium &&
    player.upgrades[up] === 0) {
    player.credits -= creditcost;
    player.tech -= techcost;
    player.energy -= energycost;
    player.uranium -= uraniumcost;
    player.upgrades[up] = amount;
    console.log("Done, upgrade purchased");
    document.getElementById(up).className = "btn btn-success";
  }
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
  player[resource] += amount / player.speed;
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

function hideElements() {
  //Staff
  if (player.colonist.owned >= 1) {
    document.getElementById('hide-engineer').style.display = 'block';
    document.getElementById('hide-engineer2').style.display = 'block';
  }
  if (player.engineer.owned >= 1) {
    document.getElementById('hide-inventor').style.display = 'block';
    document.getElementById('hide-inventor2').style.display = 'block';
  }
  if (player.inventor.owned >= 1) {
    document.getElementById('hide-scientist').style.display = 'block';
    document.getElementById('hide-scientist2').style.display = 'block';
  }
  if (player.scientist.owned >= 1) {
    document.getElementById('hide-robot').style.display = 'block';
    document.getElementById('hide-robot2').style.display = 'block';
  }
  if (player.robot.owned >= 1) {
    document.getElementById('hide-android').style.display = 'block';
    document.getElementById('hide-android2').style.display = 'block';
  }

  //Tech
  if (player.workbench.owned >= 1) {
    document.getElementById('hide-workshop').style.display = 'block';
    document.getElementById('hide-workshop2').style.display = 'block';
  }
  if (player.workshop.owned >= 1) {
    document.getElementById('hide-research-lab').style.display = 'block';
    document.getElementById('hide-research-lab2').style.display = 'block';
  }
  if (player.resLab.owned >= 1) {
    document.getElementById('hide-research-facillity').style.display = 'block';
    document.getElementById('hide-research-facillity2').style.display = 'block';
  }
  if (player.resFac.owned >= 1) {
    document.getElementById('hide-robotics-factory').style.display = 'block';
    document.getElementById('hide-robotics-factory2').style.display = 'block';
  }
  if (player.roboticsFact.owned >= 1) {
    document.getElementById('hide-cybernetics-lab').style.display = 'block';
    document.getElementById('hide-cybernetics-lab2').style.display = 'block';
  }

  //Energy
  if (player.battPack.owned >= 1) {
    document.getElementById('hide-solar-panel').style.display = 'block';
    document.getElementById('hide-solar-panel2').style.display = 'block';
  }
  if (player.solPan.owned >= 1) {
    document.getElementById('hide-solar-panel-farm').style.display = 'block';
    document.getElementById('hide-solar-panel-farm2').style.display = 'block';
  }
  if (player.solPanFarm.owned >= 1) {
    document.getElementById('hide-thermal-power-station').style.display = 'block';
    document.getElementById('hide-thermal-power-station2').style.display = 'block';
  }
  if (player.termPowStation.owned >= 1) {
    document.getElementById('hide-nuclear-power-plant').style.display = 'block';
    document.getElementById('hide-nuclear-power-plant2').style.display = 'block';
  }
  if (player.nucPowPlant.owned >= 1) {
    document.getElementById('hide-fusion-reactor').style.display = 'block';
    document.getElementById('hide-fusion-reactor2').style.display = 'block';
  }
  if (player.fusReactor.owned >= 1) {
    document.getElementById('hide-uranium-reactor').style.display = 'block';
    document.getElementById('hide-uranium-reactor2').style.display = 'block';
  }

  //Uranium
  if (player.miningBot.owned >= 1) {
    document.getElementById('hide-uranium-smelter').style.display = 'block';
    document.getElementById('hide-uranium-smelter2').style.display = 'block';
  }
  if (player.uraSmelter.owned >= 1) {
    document.getElementById('hide-uranium-refinery').style.display = 'block';
    document.getElementById('hide-uranium-refinery2').style.display = 'block';
  }
}

function updateTotals() {
  document.getElementById('mouse-clicks').innerHTML = player.clicks;
  var energyOutcome = prettify(((player.workbench.owned * player.workbench.requires.powerCost) + (player.workshop.owned * player.workshop.requires.powerCost) +
    (player.resLab.owned * player.resLab.requires.powerCost) + (player.resFac.owned * player.resFac.requires.powerCost) +
    (player.roboticsFact.owned * player.roboticsFact.requires.powerCost) + (player.cyberLab.owned * player.cyberLab.requires.powerCost) +
    (player.miningBot.owned * player.miningBot.requires.powerCost) + (player.uraSmelter.owned * player.uraSmelter.requires.powerCost) + (player.uraRefinery.owned * player.uraRefinery.requires.powerCost)));

  var energyIncome = prettify(((player.battPack.owned * player.battPack.recharge) + (player.solPan.owned * player.solPan.recharge) +
    (player.solPanFarm.owned * player.solPanFarm.recharge) + (player.termPowStation.owned * player.termPowStation.recharge) +
    (player.nucPowPlant.owned * player.nucPowPlant.recharge) + (player.fusReactor.owned * player.fusReactor.recharge) +
    (player.uraReactor.owned * player.uraReactor.recharge)));
  //Credits
  player.credits += ((player.colonist.owned * player.colonist.generates) / player.speed);
  player.credits += ((player.engineer.owned * player.engineer.generates) / player.speed);
  player.credits += ((player.inventor.owned * player.inventor.generates) / player.speed);
  player.credits += ((player.scientist.owned * player.scientist.generates) / player.speed);
  player.credits += ((player.robot.owned * player.robot.generates) / player.speed);
  player.credits += ((player.android.owned * player.android.generates) / player.speed);
  getResource(player, 'credits', 0.5);

  if (energyOutcome < energyIncome || energyOutcome == energyIncome) {
    //Tech
    player.tech += ((player.workbench.owned * player.workbench.generates) / player.speed);
    player.tech += ((player.workshop.owned * player.workshop.generates) / player.speed);
    player.tech += ((player.resLab.owned * player.resLab.generates) / player.speed);
    player.tech += ((player.resFac.owned * player.resFac.generates) / player.speed);
    player.tech += ((player.roboticsFact.owned * player.roboticsFact.generates) / player.speed);
    player.tech += ((player.cyberLab.owned * player.cyberLab.generates) / player.speed);
    //Uranium
    player.uranium += ((player.miningBot.owned * player.miningBot.generates) / player.speed);
    player.uranium += ((player.uraSmelter.owned * player.uraSmelter.generates) / player.speed);
    player.uranium += ((player.uraRefinery.owned * player.uraRefinery.generates) / player.speed);
    //Energy remove
    player.energy -= ((player.workbench.owned * player.workbench.requires.powerCost) / player.speed);
    player.energy -= ((player.workshop.owned * player.workshop.requires.powerCost) / player.speed);
    player.energy -= ((player.resLab.owned * player.resLab.requires.powerCost) / player.speed);
    player.energy -= ((player.resFac.owned * player.resFac.requires.powerCost) / player.speed);
    player.energy -= ((player.roboticsFact.owned * player.roboticsFact.requires.powerCost) / player.speed);
    player.energy -= ((player.cyberLab.owned * player.cyberLab.requires.powerCost) / player.speed);
    if (player.miningBot >= 1) {
      getResource(player, 'uranium', 0.1);
    }
    if (player.workbench >= 1) {
      getResource(player, 'tech', 0.1);
    }
  }
  //Energy add
  player.energy += ((player.battPack.owned * player.battPack.generates) / player.speed);
  player.energy += ((player.solPan.owned * player.solPan.generates) / player.speed);
  player.energy += ((player.solPanFarm.owned * player.solPanFarm.generates) / player.speed);
  player.energy += ((player.termPowStation.owned * player.termPowStation.generates) / player.speed);
  player.energy += ((player.nucPowPlant.owned * player.nucPowPlant.generates) / player.speed);
  player.energy += ((player.fusReactor.owned * player.fusReactor.generates) / player.speed);
  player.energy += ((player.uraReactor.owned * player.uraReactor.generates) / player.speed);



  if (player.battPack >= 1) {
    getResource(player, 'energy', 0.1);
  }

  if (player.credits <= 1000) {
    document.getElementById('Credits').innerHTML = prettify(player.credits, 1);
  } else {
    document.getElementById('Credits').innerHTML = suffixy(player.credits, 2);
  }
  if (player.tech <= 1000) {
    document.getElementById('Tech').innerHTML = prettify(player.tech, 1);
  } else {
    document.getElementById('Tech').innerHTML = suffixy(player.tech, 2);
  }
  if (player.energy <= 1000) {
    document.getElementById('Energy').innerHTML = prettify(player.energy, 1);
  } else {
    document.getElementById('Energy').innerHTML = suffixy(player.energy, 2);
  }
  if (player.uranium <= 1000) {
    document.getElementById('Uranium').innerHTML = prettify(player.uranium, 1);
  } else {
    document.getElementById('Uranium').innerHTML = suffixy(player.uranium, 2);
  }

  if (energyOutcome > energyIncome) {
    document.getElementById('power-balance').innerHTML = "-" + prettify(energyOutcome - energyIncome) + "/sec";
  } else if (energyOutcome == energyIncome) {
    document.getElementById('power-balance').innerHTML = "balanced";
  } else {
    document.getElementById('power-balance').innerHTML = "+" + prettify(energyIncome - energyOutcome) + "/sec";
  }
  // Staff
  document.getElementById('colonist').innerHTML = player.colonist.owned;
  document.getElementById('engineer').innerHTML = player.engineer.owned;
  document.getElementById('inventor').innerHTML = player.inventor.owned;
  document.getElementById('scientist').innerHTML = player.scientist.owned;
  document.getElementById('robot').innerHTML = player.robot.owned;
  document.getElementById('android').innerHTML = player.android.owned;
  // Tech
  document.getElementById('workbench').innerHTML = player.workbench.owned;
  document.getElementById('workshop').innerHTML = player.workshop.owned;
  document.getElementById('research-lab').innerHTML = player.resLab.owned;
  document.getElementById('research-facility').innerHTML = player.resFac.owned;
  document.getElementById('robotics-factory').innerHTML = player.roboticsFact.owned;
  document.getElementById('cybernetics-lab').innerHTML = player.cyberLab.owned;
  // Energy
  document.getElementById('battery-pack').innerHTML = player.battPack.owned;
  document.getElementById('solar-panel').innerHTML = player.solPan.owned;
  document.getElementById('solar-panel-farm').innerHTML = player.solPanFarm.owned;
  document.getElementById('thermal-power-station').innerHTML = player.termPowStation.owned;
  document.getElementById('nuclear-power-plant').innerHTML = player.nucPowPlant.owned;
  document.getElementById('fusion-reactor').innerHTML = player.fusReactor.owned;
  document.getElementById('uranium-reactor').innerHTML = player.uraReactor.owned;
  // Uranium
  document.getElementById('miningBot').innerHTML = player.miningBot.owned;
  document.getElementById('uranium-smelter').innerHTML = player.uraSmelter.owned;
  document.getElementById('uranium-refinery').innerHTML = player.uraRefinery.owned;
  //Generating
  //Credits
  document.getElementsByClassName('Generating')[0].innerHTML = prettify((player.colonist.owned * (player.colonist.generates + player.upgrades.colonist5Perc + player.upgrades.colonist25Perc)));
  document.getElementsByClassName('Generating')[1].innerHTML = prettify((player.engineer.owned * (player.engineer.generates + player.upgrades.engineer5Perc + player.upgrades.engineer25Perc)));
  document.getElementsByClassName('Generating')[2].innerHTML = prettify((player.inventor.owned * (player.inventor.generates + player.upgrades.inventor5Perc + player.upgrades.inventor25Perc)));
  document.getElementsByClassName('Generating')[3].innerHTML = prettify((player.scientist.owned * (player.scientist.generates + player.upgrades.scientist5Perc + player.upgrades.scientist25Perc)));
  document.getElementsByClassName('Generating')[4].innerHTML = prettify((player.robot.owned * (player.robot.generates + player.upgrades.android5Perc + player.upgrades.android25Perc)));
  document.getElementsByClassName('Generating')[5].innerHTML = prettify((player.android.owned * (player.android.generates + player.upgrades.robot5Perc + player.upgrades.robot25Perc)));
  //Tech
  document.getElementsByClassName('Generating')[6].innerHTML = prettify((player.workbench.owned * (player.workbench.generates + player.upgrades.workbench5Perc + player.upgrades.workbench25Perc)));
  document.getElementsByClassName('Generating')[7].innerHTML = prettify((player.workshop.owned * (player.workshop.generates + player.upgrades.workshop5Perc + player.upgrades.workshop25Perc)));
  document.getElementsByClassName('Generating')[8].innerHTML = prettify((player.resLab.owned * (player.resLab.generates + player.upgrades.researchLab5Perc + player.upgrades.researchLab25Perc)));
  document.getElementsByClassName('Generating')[9].innerHTML = prettify((player.resFac.owned * (player.resFac.generates + player.upgrades.researchFacility5Perc + player.upgrades.researchFacility25Perc)));
  document.getElementsByClassName('Generating')[10].innerHTML = prettify((player.roboticsFact.owned * (player.roboticsFact.generates + player.upgrades.roboticsFactory5Perc + player.upgrades.roboticsFactory25Perc)));
  document.getElementsByClassName('Generating')[11].innerHTML = prettify((player.cyberLab.owned * (player.cyberLab.generates + player.upgrades.cyberneticsLab5Perc + player.upgrades.cyberneticsLab25Perc)));
  //Energy
  document.getElementsByClassName('Generating')[12].innerHTML = prettify((player.battPack.owned * (player.battPack.generates + player.upgrades.batteryPack5Perc + player.upgrades.batteryPack25Perc)));
  document.getElementsByClassName('Generating')[13].innerHTML = prettify((player.solPan.owned * (player.solPan.generates + player.upgrades.solarPanel5Perc + player.upgrades.solarPanel25Perc)));
  document.getElementsByClassName('Generating')[14].innerHTML = prettify((player.solPanFarm.owned * (player.solPanFarm.generates + player.upgrades.solarPanelFarm5Perc + player.upgrades.solarPanelFarm25Perc)));
  document.getElementsByClassName('Generating')[15].innerHTML = prettify((player.termPowStation.owned * (player.termPowStation.generates + player.upgrades.thermalPowerStation5Perc + player.upgrades.thermalPowerStation25Perc)));
  document.getElementsByClassName('Generating')[16].innerHTML = prettify((player.nucPowPlant.owned * (player.nucPowPlant.generates + player.upgrades.nuclearPowerPlant5Perc + player.upgrades.nuclearPowerPlant25Perc)));
  document.getElementsByClassName('Generating')[17].innerHTML = prettify((player.fusReactor.owned * (player.fusReactor.generates + player.upgrades.fusionReactor5Perc + player.upgrades.fusionReactor25Perc)));
  document.getElementsByClassName('Generating')[18].innerHTML = prettify((player.uraReactor.owned * (player.uraReactor.generates + player.upgrades.uraniumReactor5Perc + player.upgrades.uraniumReactor25Perc)));
  //Uranium
  document.getElementsByClassName('Generating')[19].innerHTML = prettify((player.miningBot.owned * (player.miningBot.generates + player.upgrades.miningBot5Perc + player.upgrades.miningBot25Perc)));
  document.getElementsByClassName('Generating')[20].innerHTML = prettify((player.uraSmelter.owned * (player.uraSmelter.generates + player.upgrades.uraniumSmelter5Perc + player.upgrades.uraniumSmelter25Perc)));
  document.getElementsByClassName('Generating')[21].innerHTML = prettify((player.uraRefinery.owned * (player.uraRefinery.generates + player.upgrades.uraniumRefinery5Perc + player.upgrades.uraniumRefinery25Perc)));
  //Cost --------------------------------------------------------------------------------------------
  //Credits
  document.getElementsByClassName('Cost')[0].innerHTML = suffixy(player.colonist.requires.nextC, 2);
  document.getElementsByClassName('Cost')[1].innerHTML = suffixy(player.engineer.requires.nextC, 2);
  document.getElementsByClassName('Cost')[2].innerHTML = suffixy(player.inventor.requires.nextC, 2);
  document.getElementsByClassName('Cost')[3].innerHTML = suffixy(player.scientist.requires.nextC, 2);
  document.getElementsByClassName('Cost')[4].innerHTML = suffixy(player.robot.requires.nextC, 2);
  document.getElementsByClassName('Cost')[5].innerHTML = suffixy(player.android.requires.nextC, 2);
  //Tech
  document.getElementsByClassName('Cost')[6].innerHTML = suffixy(player.workbench.requires.nextC, 2);
  document.getElementsByClassName('Cost')[7].innerHTML = suffixy(player.workshop.requires.nextC, 2);
  document.getElementsByClassName('Cost')[8].innerHTML = suffixy(player.resLab.requires.nextC, 2);
  document.getElementsByClassName('Cost')[9].innerHTML = suffixy(player.resFac.requires.nextC, 2);
  document.getElementsByClassName('Cost')[10].innerHTML = suffixy(player.roboticsFact.requires.nextC, 2);
  document.getElementsByClassName('Cost')[11].innerHTML = suffixy(player.cyberLab.requires.nextC, 2);
  document.getElementsByClassName('Cost')[12].innerHTML = suffixy(player.battPack.requires.nextC, 2);
  //Energy
  document.getElementsByClassName('Cost')[13].innerHTML = suffixy(player.solPan.requires.nextC, 2);
  document.getElementsByClassName('Cost')[14].innerHTML = suffixy(player.solPanFarm.requires.nextC, 2);
  document.getElementsByClassName('Cost')[15].innerHTML = suffixy(player.termPowStation.requires.nextC, 2);
  document.getElementsByClassName('Cost')[16].innerHTML = suffixy(player.nucPowPlant.requires.nextC, 2);
  document.getElementsByClassName('Cost')[17].innerHTML = suffixy(player.fusReactor.requires.nextC, 2);
  document.getElementsByClassName('Cost')[18].innerHTML = suffixy(player.uraReactor.requires.nextC, 2);
  //Uranium
  document.getElementsByClassName('Cost')[19].innerHTML = suffixy(player.miningBot.requires.nextC, 2);
  document.getElementsByClassName('Cost')[20].innerHTML = suffixy(player.uraSmelter.requires.nextC, 2);
  document.getElementsByClassName('Cost')[21].innerHTML = suffixy(player.uraRefinery.requires.nextC, 2);
  //Power balance ---------------------------------------------------------------------------------
  //Required
  if (player.workbench.owned >= 1) {
    document.getElementsByClassName('Power')[0].innerHTML = suffixy(player.workbench.owned * player.workbench.requires.powerCost, 2) + " " + "/s";
  }
  if (player.workshop.owned >= 1) {
    document.getElementsByClassName('Power')[1].innerHTML = suffixy(player.workshop.owned * player.workshop.requires.powerCost, 2) + " " + "/s";
  }
  if (player.resLab.owned >= 1) {
    document.getElementsByClassName('Power')[2].innerHTML = suffixy(player.resLab.owned * player.resLab.requires.powerCost, 2) + " " + "/s";
  }
  if (player.resFac.owned >= 1) {
    document.getElementsByClassName('Power')[3].innerHTML = suffixy(player.resFac.owned * player.resFac.requires.powerCost, 2) + " " + "/s";
  }
  if (player.roboticsFact.owned >= 1) {
    document.getElementsByClassName('Power')[4].innerHTML = suffixy(player.roboticsFact.owned * player.roboticsFact.requires.powerCost, 2) + " " + "/s";
  }
  if (player.cyberLab.owned >= 1) {
    document.getElementsByClassName('Power')[5].innerHTML = suffixy(player.cyberLab.owned * player.cyberLab.requires.powerCost, 2) + " " + "/s";
  }
  if (player.miningBot.owned >= 1) {
    document.getElementsByClassName('Power')[6].innerHTML = suffixy(player.miningBot.owned * player.miningBot.requires.powerCost, 2) + " " + "/s";
  }
  if (player.uraSmelter.owned >= 1) {
    document.getElementsByClassName('Power')[7].innerHTML = suffixy(player.uraSmelter.owned * player.uraSmelter.requires.powerCost, 2) + " " + "/s";
  }
  if (player.uraRefinery.owned >= 1) {
    document.getElementsByClassName('Power')[8].innerHTML = suffixy(player.uraRefinery.owned * player.uraRefinery.requires.powerCost, 2) + " " + "/s";
  }
  //Generated
  if (player.battPack.owned >= 1) {
    document.getElementsByClassName('Power-prod')[0].innerHTML = suffixy(player.battPack.owned * player.battPack.recharge, 2) + " " + "/s";
  }
  if (player.solPan.owned >= 1) {
    document.getElementsByClassName('Power-prod')[1].innerHTML = suffixy(player.solPan.owned * player.solPan.recharge, 2) + " " + "/s";
  }
  if (player.solPanFarm.owned >= 1) {
    document.getElementsByClassName('Power-prod')[2].innerHTML = suffixy(player.solPanFarm.owned * player.solPanFarm.recharge, 2) + " " + "/s";
  }
  if (player.termPowStation.owned >= 1) {
    document.getElementsByClassName('Power-prod')[3].innerHTML = suffixy(player.termPowStation.owned * player.termPowStation.recharge, 2) + " " + "/s";
  }
  if (player.nucPowPlant.owned >= 1) {
    document.getElementsByClassName('Power-prod')[4].innerHTML = suffixy(player.nucPowPlant.owned * player.nucPowPlant.recharge, 2) + " " + "/s";
  }
  if (player.fusReactor.owned >= 1) {
    document.getElementsByClassName('Power-prod')[5].innerHTML = suffixy(player.fusReactor.owned * player.fusReactor.recharge, 2) + " " + "/s";
  }
  if (player.uraReactor.owned >= 1) {
    document.getElementsByClassName('Power-prod')[6].innerHTML = suffixy(player.uraReactor.owned * player.uraReactor.recharge, 2) + " " + "/s";
  }
}

function checkUpgrades() {
  //================ Staff ===========================================
  //Colonist Upgrades
  if (player.upgrades.colonist5Perc !== 0) {
    document.getElementById('colonist5Perc').className = "btn btn-success";
  }
  if (player.upgrades.colonist25Perc !== 0) {
    document.getElementById('colonist25Perc').className = "btn btn-success";
  }
  //Engineer Upgrades
  if (player.upgrades.engineer5Perc !== 0) {
    document.getElementById('engineer5Perc').className = "btn btn-success";
  }
  if (player.upgrades.engineer25Perc !== 0) {
    document.getElementById('engineer25Perc').className = "btn btn-success";
  }
  //Inventor Upgrades
  if (player.upgrades.inventor5Perc !== 0) {
    document.getElementById('inventor5Perc').className = "btn btn-success";
  }
  if (player.upgrades.inventor25Perc !== 0) {
    document.getElementById('inventor25Perc').className = "btn btn-success";
  }
  //Scientist Upgrades
  if (player.upgrades.scientist5Perc !== 0) {
    document.getElementById('scientist5Perc').className = "btn btn-success";
  }
  if (player.upgrades.scientist25Perc !== 0) {
    document.getElementById('scientist25Perc').className = "btn btn-success";
  }
  //Android Upgrades
  if (player.upgrades.android5Perc !== 0) {
    document.getElementById('android5Perc').className = "btn btn-success";
  }
  if (player.upgrades.android25Perc !== 0) {
    document.getElementById('android25Perc').className = "btn btn-success";
  }
  //Robot Upgrades
  if (player.upgrades.robot5Perc !== 0) {
    document.getElementById('robot5Perc').className = "btn btn-success";
  }
  if (player.upgrades.robot25Perc !== 0) {
    document.getElementById('robot25Perc').className = "btn btn-success";
  }
  //================ Tech ===========================================
  //Workbench Upgrades
  if (player.upgrades.workbench5Perc !== 0) {
    document.getElementById('workbench5Perc').className = "btn btn-success";
  }
  if (player.upgrades.workbench25Perc !== 0) {
    document.getElementById('workbench25Perc').className = "btn btn-success";
  }
  //Workshop Upgrades
  if (player.upgrades.workshop5Perc !== 0) {
    document.getElementById('workshop5Perc').className = "btn btn-success";
  }
  if (player.upgrades.workshop25Perc !== 0) {
    document.getElementById('workshop25Perc').className = "btn btn-success";
  }
  //Research Lab Upgrades
  if (player.upgrades.researchLab5Perc !== 0) {
    document.getElementById('researchLab5Perc').className = "btn btn-success";
  }
  if (player.upgrades.researchLab25Perc !== 0) {
    document.getElementById('researchLab25Perc').className = "btn btn-success";
  }
  //Research Facillity Upgrades
  if (player.upgrades.researchFacility5Perc !== 0) {
    document.getElementById('researchFacility5Perc').className = "btn btn-success";
  }
  if (player.upgrades.researchFacility25Perc !== 0) {
    document.getElementById('researchFacility25Perc').className = "btn btn-success";
  }
  //Robotics Factory Upgrades
  if (player.upgrades.roboticsFactory5Perc !== 0) {
    document.getElementById('roboticsFactory5Perc').className = "btn btn-success";
  }
  if (player.upgrades.roboticsFactory25Perc !== 0) {
    document.getElementById('roboticsFactory25Perc').className = "btn btn-success";
  }
  //Cybernetics Lab Upgrades
  if (player.upgrades.cyberneticsLab5Perc !== 0) {
    document.getElementById('cyberneticsLab5Perc').className = "btn btn-success";
  }
  if (player.upgrades.cyberneticsLab25Perc !== 0) {
    document.getElementById('cyberneticsLab25Perc').className = "btn btn-success";
  }
  //================ Energy ===========================================
  //Battery Pack Upgrades
  if (player.upgrades.batteryPack5Perc !== 0) {
    document.getElementById('batteryPack5Perc').className = "btn btn-success";
  }
  if (player.upgrades.batteryPack25Perc !== 0) {
    document.getElementById('batteryPack25Perc').className = "btn btn-success";
  }
  //Solar Panel Upgrades
  if (player.upgrades.solarPanel5Perc !== 0) {
    document.getElementById('solarPanel5Perc').className = "btn btn-success";
  }
  if (player.upgrades.solarPanel25Perc !== 0) {
    document.getElementById('solarPanel25Perc').className = "btn btn-success";
  }
  //Solar Panel Upgrades
  if (player.upgrades.solarPanelFarm5Perc !== 0) {
    document.getElementById('solarPanelFarm5Perc').className = "btn btn-success";
  }
  if (player.upgrades.solarPanelFarm25Perc !== 0) {
    document.getElementById('solarPanelFarm25Perc').className = "btn btn-success";
  }
  //Thermal Power Station Upgrades
  if (player.upgrades.thermalPowerStation5Perc !== 0) {
    document.getElementById('thermalPowerStation5Perc').className = "btn btn-success";
  }
  if (player.upgrades.thermalPowerStation25Perc !== 0) {
    document.getElementById('thermalPowerStation25Perc').className = "btn btn-success";
  }
  //Nuclear Power Plant Upgrades
  if (player.upgrades.nuclearPowerPlant5Perc !== 0) {
    document.getElementById('nuclearPowerPlant5Perc').className = "btn btn-success";
  }
  if (player.upgrades.nuclearPowerPlant25Perc !== 0) {
    document.getElementById('nuclearPowerPlant25Perc').className = "btn btn-success";
  }
  //Fusion Reactor Upgrades
  if (player.upgrades.fusionReactor5Perc !== 0) {
    document.getElementById('fusionReactor5Perc').className = "btn btn-success";
  }
  if (player.upgrades.fusionReactor25Perc !== 0) {
    document.getElementById('fusionReactor25Perc').className = "btn btn-success";
  }
  //Uranium Reactor Upgrades
  if (player.upgrades.uraniumReactor5Perc !== 0) {
    document.getElementById('uraniumReactor5Perc').className = "btn btn-success";
  }
  if (player.upgrades.uraniumReactor25Perc !== 0) {
    document.getElementById('uraniumReactor25Perc').className = "btn btn-success";
  }
  //================ Uranium ============================================
  //Miner Upgrades
  if (player.upgrades.miningBot5Perc !== 0) {
    document.getElementById('miningBot5Perc').className = "btn btn-success";
  }
  if (player.upgrades.miningBot25Perc !== 0) {
    document.getElementById('miningBot25Perc').className = "btn btn-success";
  }
  //Uranium SmelterUpgrades
  if (player.upgrades.uraniumSmelter5Perc !== 0) {
    document.getElementById('uraniumSmelter5Perc').className = "btn btn-success";
  }
  if (player.upgrades.uraniumSmelter25Perc !== 0) {
    document.getElementById('uraniumSmelter25Perc').className = "btn btn-success";
  }
  //Uranium Refinery Upgrades
  if (player.upgrades.uraniumRefinery5Perc !== 0) {
    document.getElementById('uraniumRefinery5Perc').className = "btn btn-success";
  }
  if (player.upgrades.uraniumRefinery25Perc !== 0) {
    document.getElementById('uraniumRefinery25Perc').className = "btn btn-success";
  }
}
window.setInterval(function() {
  gameSave();
  //save_game(); //cookies
}, 60000);

window.setInterval(function() {
  updateTotals();
}, 1000 / player.speed);

window.setInterval(function() {
  checkAchievements();
  hideElements();
  checkUpgrades();
  //createCharacter();
}, 3000);



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
