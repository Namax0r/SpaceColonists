function checkAchievements() {
  //RESOURCES ACHIEVEMENTS
  //TECH
  //1
  if (player.tech >= 100 && player.achievements.first !== 1) {
    player.achievements.first = 1;
    player.achievements.points++;
  }
  if (player.achievements.first !== 0) {
    document.getElementById("first").className = "achievement-unlocked";
  }
  //2
  if (player.tech >= 10000 && player.achievements.second !== 1) {
    player.achievements.second = 1;
    player.achievements.points++;
  }
  if (player.achievements.second !== 0) {
    document.getElementById("second").className = "achievement-unlocked";
  }
  //3
  if (player.tech >= 100000 && player.achievements.third !== 1) {
    player.achievements.third = 1;
    player.achievements.points++;
  }
  if (player.achievements.third !== 0) {
    document.getElementById("third").className = "achievement-unlocked";
  }
  //4
  if (player.tech >= 1000000 && player.achievements.fourth !== 1) {
    player.achievements.fourth = 1;
    player.achievements.points++;
  }
  if (player.achievements.fourth !== 0) {
    document.getElementById("fourth").className = "achievement-unlocked";
  }
  //5
  if (player.tech >= 50000000 && player.achievements.fifth !== 1) {
    player.achievements.fifth = 1;
    player.achievements.points++;
  }
  if (player.achievements.fifth !== 0) {
    document.getElementById("fifth").className = "achievement-unlocked";
  }

  //ENERGY
  //6
  if (player.energy >= 100 && player.achievements.sixth !== 1) {
    player.achievements.sixth = 1;
    player.achievements.points++;
  }
  if (player.achievements.sixth !== 0) {
    document.getElementById("sixth").className = "achievement-unlocked";
  }
  //7
  if (player.energy >= 10000 && player.achievements.seventh !== 1) {
    player.achievements.seventh = 1;
    player.achievements.points++;
  }
  if (player.achievements.seventh !== 0) {
    document.getElementById("seventh").className = "achievement-unlocked";
  }
  //8
  if (player.energy >= 100000 && player.achievements.eighth !== 1) {
    player.achievements.eighth = 1;
    player.achievements.points++;
  }
  if (player.achievements.eighth !== 0) {
    document.getElementById("eighth").className = "achievement-unlocked";
  }
  //9
  if (player.energy >= 1000000 && player.achievements.nineth !== 1) {
    player.achievements.nineth = 1;
    player.achievements.points++;
  }
  if (player.achievements.nineth !== 0) {
    document.getElementById("nineth").className = "achievement-unlocked";
  }
  //10
  if (player.energy >= 50000000 && player.achievements.tenth !== 1) {
    player.achievements.tenth = 1;
    player.achievements.points++;
  }
  if (player.achievements.tenth !== 0) {
    document.getElementById("tenth").className = "achievement-unlocked";
  }
  //CREDITS
  //11
  if (player.credits >= 100 && player.achievements.eleventh !== 1) {
    player.achievements.eleventh = 1;
    player.achievements.points++;
  }
  if (player.achievements.eleventh !== 0) {
    document.getElementById("eleventh").className = "achievement-unlocked";
  }
  //12
  if (player.credits >= 10000 && player.achievements.twelfth !== 1) {
    player.achievements.twelfth = 1;
    player.achievements.points++;
  }
  if (player.achievements.twelfth !== 0) {
    document.getElementById("twelfth").className = "achievement-unlocked";
  }
  //13
  if (player.credits >= 100000 && player.achievements.thirteenth !== 1) {
    player.achievements.thirteenth = 1;
    player.achievements.points++;
  }
  if (player.achievements.thirteenth !== 0) {
    document.getElementById("thirteenth").className = "achievement-unlocked";
  }
  //14
  if (player.credits >= 1000000 && player.achievements.fourteenth !== 1) {
    player.achievements.fourteenth = 1;
    player.achievements.points++;
  }
  if (player.achievements.fourteenth !== 0) {
    document.getElementById("fourteenth").className = "achievement-unlocked";
  }
  //15
  if (player.credits >= 50000000 && player.achievements.fifteenth !== 1) {
    player.achievements.fifteenth = 1;
    player.achievements.points++;
  }
  if (player.achievements.fifteenth !== 0) {
    document.getElementById("fifteenth").className = "achievement-unlocked";
  }
  //URANIUM
  //16
  if (player.uranium >= 100 && player.achievements.sixteenth !== 1) {
    player.achievements.sixteenth = 1;
    player.achievements.points++;
  }
  if (player.achievements.sixteenth !== 0) {
    document.getElementById("sixteenth").className = "achievement-unlocked";
  }
  //17
  if (player.uranium >= 10000 && player.achievements.seventeenth !== 1) {
    player.achievements.seventeenth = 1;
    player.achievements.points++;
  }
  if (player.achievements.seventeenth !== 0) {
    document.getElementById("seventeenth").className = "achievement-unlocked";
  }
  //18
  if (player.uranium >= 100000 && player.achievements.eighteenth !== 1) {
    player.achievements.eighteenth = 1;
    player.achievements.points++;
  }
  if (player.achievements.eighteenth !== 0) {
    document.getElementById("eighteenth").className = "achievement-unlocked";
  }
  //19
  if (player.uranium >= 1000000 && player.achievements.nineteenth !== 1) {
    player.achievements.nineteenth = 1;
    player.achievements.points++;
  }
  if (player.achievements.nineteenth !== 0) {
    document.getElementById("nineteenth").className = "achievement-unlocked";
  }
  //20
  if (player.uranium >= 50000000 && player.achievements.twentieth !== 1) {
    player.achievements.twentieth = 1;
    player.achievements.points++;
  }
  if (player.achievements.twentieth !== 0) {
    document.getElementById("twentieth").className = "achievement-unlocked";
  }

  //STAFF
  //COLONISTS
  //21
  if (player.colonist.owned >= 1 && player.achievements.twenty_first !== 1) {
    player.achievements.twenty_first = 1;
    player.achievements.points++;
  }
  if (player.achievements.twenty_first !== 0) {
    document.getElementById("twenty_first").className = "achievement-unlocked";
  }
  //22
  if (player.colonist.owned >= 500 && player.achievements.twenty_second !== 1) {
    player.achievements.twenty_second = 1;
    player.achievements.points++;
  }
  if (player.achievements.twenty_second !== 0) {
    document.getElementById("twenty_second").className = "achievement-unlocked";
  }
  //23
  if (player.colonist.owned >= 1000 && player.achievements.twenty_third !== 1) {
    player.achievements.twenty_third = 1;
    player.achievements.points++;
  }
  if (player.achievements.twenty_third !== 0) {
    document.getElementById("twenty_third").className = "achievement-unlocked";
  }
  //24
  if (player.colonist.owned >= 5000 && player.achievements.twenty_fourth !== 1) {
    player.achievements.twenty_fourth = 1;
    player.achievements.points++;
  }
  if (player.achievements.twenty_fourth !== 0) {
    document.getElementById("twenty_fourth").className = "achievement-unlocked";
  }
  //25
  if (player.colonist.owned >= 10000 && player.achievements.twenty_fifth !== 1) {
    player.achievements.twenty_fifth = 1;
    player.achievements.points++;
  }
  if (player.achievements.twenty_fifth !== 0) {
    document.getElementById("twenty_fifth").className = "achievement-unlocked";
  }

  //ENGINEERS
  //26
  if (player.engineer.owned >= 1 && player.achievements.twenty_sixth !== 1) {
    player.achievements.twenty_sixth = 1;
    player.achievements.points++;
  }
  if (player.achievements.twenty_sixth !== 0) {
    document.getElementById("twenty_sixth").className = "achievement-unlocked";
  }
  //27
  if (player.engineer.owned >= 500 && player.achievements.twenty_seventh !== 1) {
    player.achievements.twenty_seventh = 1;
    player.achievements.points++;
  }
  if (player.achievements.twenty_seventh !== 0) {
    document.getElementById("twenty_seventh").className = "achievement-unlocked";
  }
  //28
  if (player.engineer.owned >= 1000 && player.achievements.twenty_eighth !== 1) {
    player.achievements.twenty_eighth = 1;
    player.achievements.points++;
  }
  if (player.achievements.twenty_eighth !== 0) {
    document.getElementById("twenty_eighth").className = "achievement-unlocked";
  }
  //29
  if (player.engineer.owned >= 5000 && player.achievements.twenty_nineth !== 1) {
    player.achievements.twenty_nineth = 1;
    player.achievements.points++;
  }
  if (player.achievements.twenty_nineth !== 0) {
    document.getElementById("twenty_nineth").className = "achievement-unlocked";
  }
  //30
  if (player.engineer.owned >= 10000 && player.achievements.thirtieth !== 1) {
    player.achievements.thirtieth = 1;
    player.achievements.points++;
  }
  if (player.achievements.thirtieth !== 0) {
    document.getElementById("thirtieth").className = "achievement-unlocked";
  }
  //INVENTORS
  //31
  if (player.inventor.owned >= 1 && player.achievements.thirty_first !== 1) {
    player.achievements.thirty_first = 1;
    player.achievements.points++;
  }
  if (player.achievements.thirty_first !== 0) {
    document.getElementById("thirty_first").className = "achievement-unlocked";
  }
  //32
  if (player.inventor.owned >= 500 && player.achievements.thirty_second !== 1) {
    player.achievements.thirty_second = 1;
    player.achievements.points++;
  }
  if (player.achievements.thirty_second !== 0) {
    document.getElementById("thirty_second").className = "achievement-unlocked";
  }
  //33
  if (player.inventor.owned >= 1000 && player.achievements.thirty_third !== 1) {
    player.achievements.thirty_third = 1;
    player.achievements.points++;
  }
  if (player.achievements.thirty_third !== 0) {
    document.getElementById("thirty_third").className = "achievement-unlocked";
  }
  //34
  if (player.inventor.owned >= 5000 && player.achievements.thirty_fourth !== 1) {
    player.achievements.thirty_fourth = 1;
    player.achievements.points++;
  }
  if (player.achievements.thirty_fourth !== 0) {
    document.getElementById("thirty_fourth").className = "achievement-unlocked";
  }
  //35
  if (player.inventor.owned >= 10000 && player.achievements.thirty_fifth !== 1) {
    player.achievements.thirty_fifth = 1;
    player.achievements.points++;
  }
  if (player.achievements.thirty_fifth !== 0) {
    document.getElementById("thirty_fifth").className = "achievement-unlocked";
  }
  //SCIENTIST
  //36
  if (player.scientist.owned >= 1 && player.achievements.thirty_sixth !== 1) {
    player.achievements.thirty_sixth = 1;
    player.achievements.points++;
  }
  if (player.achievements.thirty_sixth !== 0) {
    document.getElementById("thirty_sixth").className = "achievement-unlocked";
  }
  //37
  if (player.scientist.owned >= 500 && player.achievements.thirty_seventh !== 1) {
    player.achievements.thirty_seventh = 1;
    player.achievements.points++;
  }
  if (player.achievements.thirty_seventh !== 0) {
    document.getElementById("thirty_seventh").className = "achievement-unlocked";
  }
  //38
  if (player.scientist.owned >= 1000 && player.achievements.thirty_eighth !== 1) {
    player.achievements.thirty_eighth = 1;
    player.achievements.points++;
  }
  if (player.achievements.thirty_eighth !== 0) {
    document.getElementById("thirty_eighth").className = "achievement-unlocked";
  }
  //39
  if (player.scientist.owned >= 5000 && player.achievements.thirty_nineth !== 1) {
    player.achievements.thirty_nineth = 1;
    player.achievements.points++;
  }
  if (player.achievements.thirty_nineth !== 0) {
    document.getElementById("thirty_nineth").className = "achievement-unlocked";
  }
  //40
  if (player.scientist.owned >= 10000 && player.achievements.fortieth !== 1) {
    player.achievements.fortieth = 1;
    player.achievements.points++;
  }
  if (player.achievements.fortieth !== 0) {
    document.getElementById("fortieth").className = "achievement-unlocked";
  }
  //ROBOTS
  //41
  if (player.robot.owned >= 1 && player.achievements.forty_first !== 1) {
    player.achievements.forty_first = 1;
    player.achievements.points++;
  }
  if (player.achievements.forty_first !== 0) {
    document.getElementById("forty_first").className = "achievement-unlocked";
  }
  //42
  if (player.robot.owned >= 500 && player.achievements.forty_second !== 1) {
    player.achievements.forty_second = 1;
    player.achievements.points++;
  }
  if (player.achievements.forty_second !== 0) {
    document.getElementById("forty_second").className = "achievement-unlocked";
  }
  //43
  if (player.robot.owned >= 1000 && player.achievements.forty_third !== 1) {
    player.achievements.forty_third = 1;
    player.achievements.points++;
  }
  if (player.achievements.forty_third !== 0) {
    document.getElementById("forty_third").className = "achievement-unlocked";
  }
  //44
  if (player.robot.owned >= 5000 && player.achievements.forty_fourth !== 1) {
    player.achievements.forty_fourth = 1;
    player.achievements.points++;
  }
  if (player.achievements.forty_fourth !== 0) {
    document.getElementById("forty_fourth").className = "achievement-unlocked";
  }
  //45
  if (player.robot.owned >= 10000 && player.achievements.forty_fifth !== 1) {
    player.achievements.forty_fifth = 1;
    player.achievements.points++;
  }
  if (player.achievements.forty_fifth !== 0) {
    document.getElementById("forty_fifth").className = "achievement-unlocked";
  }
  //ANDROIDS
  //46
  if (player.android.owned >= 1 && player.achievements.forty_sixth !== 1) {
    player.achievements.forty_sixth = 1;
    player.achievements.points++;
  }
  if (player.achievements.forty_sixth !== 0) {
    document.getElementById("forty_sixth").className = "achievement-unlocked";
  }
  //47
  if (player.android.owned >= 500 && player.achievements.forty_seventh !== 1) {
    player.achievements.forty_seventh = 1;
    player.achievements.points++;
  }
  if (player.achievements.forty_seventh !== 0) {
    document.getElementById("forty_seventh").className = "achievement-unlocked";
  }
  //48
  if (player.android.owned >= 1000 && player.achievements.forty_eighth !== 1) {
    player.achievements.forty_eighth = 1;
    player.achievements.points++;
  }
  if (player.achievements.forty_eighth !== 0) {
    document.getElementById("forty_eighth").className = "achievement-unlocked";
  }
  //49
  if (player.android.owned >= 5000 && player.achievements.forty_nineth !== 1) {
    player.achievements.forty_nineth = 1;
    player.achievements.points++;
  }
  if (player.achievements.forty_nineth !== 0) {
    document.getElementById("forty_nineth").className = "achievement-unlocked";
  }
  //50
  if (player.android.owned >= 10000 && player.achievements.fiftieth !== 1) {
    player.achievements.fiftieth = 1;
    player.achievements.points++;
  }
  if (player.achievements.fiftieth !== 0) {
    document.getElementById("fiftieth").className = "achievement-unlocked";
  }
  //TECH
  //WORKBENCH
  //51
  if (player.workbench.owned >= 1 && player.achievements.fifty_first !== 1) {
    player.achievements.fifty_first = 1;
    player.achievements.points++;
  }
  if (player.achievements.fifty_first !== 0) {
    document.getElementById("fifty_first").className = "achievement-unlocked";
  }
  //52
  if (player.workbench.owned >= 500 && player.achievements.fifty_second !== 1) {
    player.achievements.fifty_second = 1;
    player.achievements.points++;
  }
  if (player.achievements.fifty_second !== 0) {
    document.getElementById("fifty_second").className = "achievement-unlocked";
  }
  //53
  if (player.workbench.owned >= 1000 && player.achievements.fifty_third !== 1) {
    player.achievements.fifty_third = 1;
    player.achievements.points++;
  }
  if (player.achievements.fifty_third !== 0) {
    document.getElementById("fifty_third").className = "achievement-unlocked";
  }
  //54
  if (player.workbench.owned >= 5000 && player.achievements.fifty_fourth !== 1) {
    player.achievements.fifty_fourth = 1;
    player.achievements.points++;
  }
  if (player.achievements.fifty_fourth !== 0) {
    document.getElementById("fifty_fourth").className = "achievement-unlocked";
  }
  //55
  if (player.workbench.owned >= 10000 && player.achievements.fifty_fifth !== 1) {
    player.achievements.fifty_fifth = 1;
    player.achievements.points++;
  }
  if (player.achievements.fifty_fifth !== 0) {
    document.getElementById("fifty_fifth").className = "achievement-unlocked";
  }

  //WORKSHOP
  //56
  if (player.workshop.owned >= 1 && player.achievements.fifty_sixth !== 1) {
    player.achievements.fifty_sixth = 1;
    player.achievements.points++;
  }
  if (player.achievements.fifty_sixth !== 0) {
    document.getElementById("fifty_sixth").className = "achievement-unlocked";
  }
  //57
  if (player.workshop.owned >= 500 && player.achievements.fifty_seventh !== 1) {
    player.achievements.fifty_seventh = 1;
    player.achievements.points++;
  }
  if (player.achievements.fifty_seventh !== 0) {
    document.getElementById("fifty_seventh").className = "achievement-unlocked";
  }
  //58
  if (player.workshop.owned >= 1000 && player.achievements.fifty_eighth !== 1) {
    player.achievements.fifty_eighth = 1;
    player.achievements.points++;
  }
  if (player.achievements.fifty_eighth !== 0) {
    document.getElementById("fifty_eighth").className = "achievement-unlocked";
  }
  //59
  if (player.workshop.owned >= 5000 && player.achievements.fifty_nineth !== 1) {
    player.achievements.fifty_nineth = 1;
    player.achievements.points++;
  }
  if (player.achievements.fifty_nineth !== 0) {
    document.getElementById("fifty_nineth").className = "achievement-unlocked";
  }
  //60
  if (player.workshop.owned >= 10000 && player.achievements.sixtieth !== 1) {
    player.achievements.sixtieth = 1;
    player.achievements.points++;
  }
  if (player.achievements.sixtieth !== 0) {
    document.getElementById("sixtieth").className = "achievement-unlocked";
  }
  //RESEARCH LAB
  //61
  if (player.resLab.owned >= 1 && player.achievements.sixty_first !== 1) {
    player.achievements.sixty_first = 1;
    player.achievements.points++;
  }
  if (player.achievements.sixty_first !== 0) {
    document.getElementById("sixty_first").className = "achievement-unlocked";
  }
  //62
  if (player.resLab.owned >= 500 && player.achievements.sixty_second !== 1) {
    player.achievements.sixty_second = 1;
    player.achievements.points++;
  }
  if (player.achievements.sixty_second !== 0) {
    document.getElementById("sixty_second").className = "achievement-unlocked";
  }
  //63
  if (player.resLab.owned >= 1000 && player.achievements.sixty_third !== 1) {
    player.achievements.sixty_third = 1;
    player.achievements.points++;
  }
  if (player.achievements.sixty_third !== 0) {
    document.getElementById("sixty_third").className = "achievement-unlocked";
  }
  //64
  if (player.resLab.owned >= 5000 && player.achievements.sixty_fourth !== 1) {
    player.achievements.sixty_fourth = 1;
    player.achievements.points++;
  }
  if (player.achievements.sixty_fourth !== 0) {
    document.getElementById("sixty_fourth").className = "achievement-unlocked";
  }
  //65
  if (player.resLab.owned >= 10000 && player.achievements.sixty_fifth !== 1) {
    player.achievements.sixty_fifth = 1;
    player.achievements.points++;
  }
  if (player.achievements.sixty_fifth !== 0) {
    document.getElementById("sixty_fifth").className = "achievement-unlocked";
  }
  //RESEARCH FACILITY
  //66
  if (player.resFac.owned >= 1 && player.achievements.sixty_sixth !== 1) {
    player.achievements.sixty_sixth = 1;
    player.achievements.points++;
  }
  if (player.achievements.sixty_sixth !== 0) {
    document.getElementById("sixty_sixth").className = "achievement-unlocked";
  }
  //67
  if (player.resFac.owned >= 500 && player.achievements.sixty_seventh !== 1) {
    player.achievements.sixty_seventh = 1;
    player.achievements.points++;
  }
  if (player.achievements.sixty_seventh !== 0) {
    document.getElementById("sixty_seventh").className = "achievement-unlocked";
  }
  //68
  if (player.resFac.owned >= 1000 && player.achievements.sixty_eighth !== 1) {
    player.achievements.sixty_eighth = 1;
    player.achievements.points++;
  }
  if (player.achievements.sixty_eighth !== 0) {
    document.getElementById("sixty_eighth").className = "achievement-unlocked";
  }
  //69
  if (player.resFac.owned >= 5000 && player.achievements.sixty_nineth !== 1) {
    player.achievements.sixty_nineth = 1;
    player.achievements.points++;
  }
  if (player.achievements.sixty_nineth !== 0) {
    document.getElementById("sixty_nineth").className = "achievement-unlocked";
  }
  //70
  if (player.resFac.owned >= 10000 && player.achievements.seventieth !== 1) {
    player.achievements.seventieth = 1;
    player.achievements.points++;
  }
  if (player.achievements.seventieth !== 0) {
    document.getElementById("seventieth").className = "achievement-unlocked";
  }
  //ROBOTICS FACTORY
  //71
  if (player.roboticsFact.owned >= 1 && player.achievements.seventy_first !== 1) {
    player.achievements.seventy_first = 1;
    player.achievements.points++;
  }
  if (player.achievements.seventy_first !== 0) {
    document.getElementById("seventy_first").className = "achievement-unlocked";
  }
  //72
  if (player.roboticsFact.owned >= 500 && player.achievements.seventy_second !== 1) {
    player.achievements.seventy_second = 1;
    player.achievements.points++;
  }
  if (player.achievements.seventy_second !== 0) {
    document.getElementById("seventy_second").className = "achievement-unlocked";
  }
  //73
  if (player.roboticsFact.owned >= 1000 && player.achievements.seventy_third !== 1) {
    player.achievements.seventy_third = 1;
    player.achievements.points++;
  }
  if (player.achievements.seventy_third !== 0) {
    document.getElementById("seventy_third").className = "achievement-unlocked";
  }
  //74
  if (player.roboticsFact.owned >= 5000 && player.achievements.seventy_fourth !== 1) {
    player.achievements.seventy_fourth = 1;
    player.achievements.points++;
  }
  if (player.achievements.seventy_fourth !== 0) {
    document.getElementById("seventy_fourth").className = "achievement-unlocked";
  }
  //75
  if (player.roboticsFact.owned >= 10000 && player.achievements.seventy_fifth !== 1) {
    player.achievements.seventy_fifth = 1;
    player.achievements.points++;
  }
  if (player.achievements.seventy_fifth !== 0) {
    document.getElementById("seventy_fifth").className = "achievement-unlocked";
  }
  //CYBERNETICS LAB
  //76
  if (player.cyberLab.owned >= 1 && player.achievements.seventy_sixth !== 1) {
    player.achievements.seventy_sixth = 1;
    player.achievements.points++;
  }
  if (player.achievements.seventy_sixth !== 0) {
    document.getElementById("seventy_sixth").className = "achievement-unlocked";
  }
  //77
  if (player.cyberLab.owned >= 500 && player.achievements.seventy_seventh !== 1) {
    player.achievements.seventy_seventh = 1;
    player.achievements.points++;
  }
  if (player.achievements.seventy_seventh !== 0) {
    document.getElementById("seventy_seventh").className = "achievement-unlocked";
  }
  //78
  if (player.cyberLab.owned >= 1000 && player.achievements.seventy_eighth !== 1) {
    player.achievements.seventy_eighth = 1;
    player.achievements.points++;
  }
  if (player.achievements.seventy_eighth !== 0) {
    document.getElementById("seventy_eighth").className = "achievement-unlocked";
  }
  //79
  if (player.cyberLab.owned >= 5000 && player.achievements.seventy_nineth !== 1) {
    player.achievements.seventy_nineth = 1;
    player.achievements.points++;
  }
  if (player.achievements.seventy_nineth !== 0) {
    document.getElementById("seventy_nineth").className = "achievement-unlocked";
  }
  //80
  if (player.cyberLab.owned >= 10000 && player.achievements.eightieth !== 1) {
    player.achievements.eightieth = 1;
    player.achievements.points++;
  }
  if (player.achievements.eightieth !== 0) {
    document.getElementById("eightieth").className = "achievement-unlocked";
  }
  //ENERGY
  //BATTERY PACK
  //81
  if (player.battPack.owned >= 1 && player.achievements.eighty_first !== 1) {
    player.achievements.eighty_first = 1;
    player.achievements.points++;
  }
  if (player.achievements.eighty_first !== 0) {
    document.getElementById("eighty_first").className = "achievement-unlocked";
  }
  //82
  if (player.battPack.owned >= 500 && player.achievements.eighty_second !== 1) {
    player.achievements.eighty_second = 1;
    player.achievements.points++;
  }
  if (player.achievements.eighty_second !== 0) {
    document.getElementById("eighty_second").className = "achievement-unlocked";
  }
  //83
  if (player.battPack.owned >= 1000 && player.achievements.eighty_third !== 1) {
    player.achievements.eighty_third = 1;
    player.achievements.points++;
  }
  if (player.achievements.eighty_third !== 0) {
    document.getElementById("eighty_third").className = "achievement-unlocked";
  }
  //84
  if (player.battPack.owned >= 5000 && player.achievements.eighty_forth !== 1) {
    player.achievements.eighty_forth = 1;
    player.achievements.points++;
  }
  if (player.achievements.eighty_forth !== 0) {
    document.getElementById("eighty_forth").className = "achievement-unlocked";
  }
  //85
  if (player.battPack.owned >= 10000 && player.achievements.eighty_fifth !== 1) {
    player.achievements.eighty_fifth = 1;
    player.achievements.points++;
  }
  if (player.achievements.eighty_fifth !== 0) {
    document.getElementById("eighty_fifth").className = "achievement-unlocked";
  }

  //SOLAR PANEL
  //86
  if (player.solPan.owned >= 1 && player.achievements.eighty_sixth !== 1) {
    player.achievements.eighty_sixth = 1;
    player.achievements.points++;
  }
  if (player.achievements.eighty_sixth !== 0) {
    document.getElementById("eighty_sixth").className = "achievement-unlocked";
  }
  //87
  if (player.solPan.owned >= 500 && player.achievements.eighty_seventh !== 1) {
    player.achievements.eighty_seventh = 1;
    player.achievements.points++;
  }
  if (player.achievements.eighty_seventh !== 0) {
    document.getElementById("eighty_seventh").className = "achievement-unlocked";
  }
  //88
  if (player.solPan.owned >= 1000 && player.achievements.eighty_eighth !== 1) {
    player.achievements.eighty_eighth = 1;
    player.achievements.points++;
  }
  if (player.achievements.eighty_eighth !== 0) {
    document.getElementById("eighty_eighth").className = "achievement-unlocked";
  }
  //89
  if (player.solPan.owned >= 5000 && player.achievements.eighty_ninenth !== 1) {
    player.achievements.eighty_ninenth = 1;
    player.achievements.points++;
  }
  if (player.achievements.eighty_ninenth !== 0) {
    document.getElementById("eighty_ninenth").className = "achievement-unlocked";
  }
  //90
  if (player.solPan.owned >= 10000 && player.achievements.ninetieth !== 1) {
    player.achievements.ninetieth = 1;
    player.achievements.points++;
  }
  if (player.achievements.ninetieth !== 0) {
    document.getElementById("ninetieth").className = "achievement-unlocked";
  }

  //SOLAR PANEL FARM
  //91
  if (player.solPanFarm.owned >= 1 && player.achievements.ninety_first !== 1) {
    player.achievements.ninety_first = 1;
    player.achievements.points++;
  }
  if (player.achievements.ninety_first !== 0) {
    document.getElementById("ninety_first").className = "achievement-unlocked";
  }
  //92
  if (player.solPanFarm.owned >= 500 && player.achievements.ninety_second !== 1) {
    player.achievements.ninety_second = 1;
    player.achievements.points++;
  }
  if (player.achievements.ninety_second !== 0) {
    document.getElementById("ninety_second").className = "achievement-unlocked";
  }
  //93
  if (player.solPanFarm.owned >= 1000 && player.achievements.ninety_third !== 1) {
    player.achievements.ninety_third = 1;
    player.achievements.points++;
  }
  if (player.achievements.ninety_third !== 0) {
    document.getElementById("ninety_third").className = "achievement-unlocked";
  }
  //94
  if (player.solPanFarm.owned >= 5000 && player.achievements.ninety_fourth !== 1) {
    player.achievements.ninety_fourth = 1;
    player.achievements.points++;
  }
  if (player.achievements.ninety_fourth !== 0) {
    document.getElementById("ninety_fourth").className = "achievement-unlocked";
  }
  //95
  if (player.solPanFarm.owned >= 10000 && player.achievements.ninety_fifth !== 1) {
    player.achievements.ninety_fifth = 1;
    player.achievements.points++;
  }
  if (player.achievements.ninety_fifth !== 0) {
    document.getElementById("ninety_fifth").className = "achievement-unlocked";
  }
  //THERMAL POWER STATION
  //96
  if (player.termPowStation.owned >= 1 && player.achievements.ninety_sixth !== 1) {
    player.achievements.ninety_sixth = 1;
    player.achievements.points++;
  }
  if (player.achievements.ninety_sixth !== 0) {
    document.getElementById("ninety_sixth").className = "achievement-unlocked";
  }
  //97
  if (player.termPowStation.owned >= 500 && player.achievements.ninety_seventh !== 1) {
    player.achievements.ninety_seventh = 1;
    player.achievements.points++;
  }
  if (player.achievements.ninety_seventh !== 0) {
    document.getElementById("ninety_seventh").className = "achievement-unlocked";
  }
  //98
  if (player.termPowStation.owned >= 1000 && player.achievements.ninety_eighth !== 1) {
    player.achievements.ninety_eighth = 1;
    player.achievements.points++;
  }
  if (player.achievements.ninety_eighth !== 0) {
    document.getElementById("ninety_eighth").className = "achievement-unlocked";
  }
  //99
  if (player.termPowStation.owned >= 5000 && player.achievements.ninety_nineth !== 1) {
    player.achievements.ninety_nineth = 1;
    player.achievements.points++;
  }
  if (player.achievements.ninety_nineth !== 0) {
    document.getElementById("ninety_nineth").className = "achievement-unlocked";
  }
  //100
  if (player.termPowStation.owned >= 10000 && player.achievements.one_hundredth !== 1) {
    player.achievements.one_hundredth = 1;
    player.achievements.points++;
  }
  if (player.achievements.one_hundredth !== 0) {
    document.getElementById("one_hundredth").className = "achievement-unlocked";
  }
  //NUCLEAR POWER STATION
  //101
  if (player.nucPowPlant.owned >= 1 && player.achievements.hundred_one !== 1) {
    player.achievements.hundred_one = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_one !== 0) {
    document.getElementById("hundred_one").className = "achievement-unlocked";
  }
  //102
  if (player.nucPowPlant.owned >= 500 && player.achievements.hundred_two !== 1) {
    player.achievements.hundred_two = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_two !== 0) {
    document.getElementById("hundred_two").className = "achievement-unlocked";
  }
  //103
  if (player.nucPowPlant.owned >= 1000 && player.achievements.hundred_three !== 1) {
    player.achievements.hundred_three = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_three !== 0) {
    document.getElementById("hundred_three").className = "achievement-unlocked";
  }
  //104
  if (player.nucPowPlant.owned >= 5000 && player.achievements.hundred_four !== 1) {
    player.achievements.hundred_four = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_four !== 0) {
    document.getElementById("hundred_four").className = "achievement-unlocked";
  }
  //105
  if (player.nucPowPlant.owned >= 10000 && player.achievements.hundred_five !== 1) {
    player.achievements.hundred_five = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_five !== 0) {
    document.getElementById("hundred_five").className = "achievement-unlocked";
  }
  //FUSION REACTION
  //106
  if (player.fusReactor.owned >= 1 && player.achievements.hundred_six !== 1) {
    player.achievements.hundred_six = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_six !== 0) {
    document.getElementById("hundred_six").className = "achievement-unlocked";
  }
  //107
  if (player.fusReactor.owned >= 500 && player.achievements.hundred_seven !== 1) {
    player.achievements.hundred_seven = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_seven !== 0) {
    document.getElementById("hundred_seven").className = "achievement-unlocked";
  }
  //108
  if (player.fusReactor.owned >= 1000 && player.achievements.hundred_eight !== 1) {
    player.achievements.hundred_eight = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_eight !== 0) {
    document.getElementById("hundred_eight").className = "achievement-unlocked";
  }
  //109
  if (player.fusReactor.owned >= 5000 && player.achievements.hundred_nine !== 1) {
    player.achievements.hundred_nine = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_nine !== 0) {
    document.getElementById("hundred_nine").className = "achievement-unlocked";
  }
  //110
  if (player.fusReactor.owned >= 10000 && player.achievements.hundred_ten !== 1) {
    player.achievements.hundred_ten = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_ten !== 0) {
    document.getElementById("hundred_ten").className = "achievement-unlocked";
  }
  //URANIUNM REACTOR
  //111
  if (player.uraReactor.owned >= 1 && player.achievements.hundred_eleven !== 1) {
    player.achievements.hundred_eleven = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_eleven !== 0) {
    document.getElementById("hundred_eleven").className = "achievement-unlocked";
  }
  //112
  if (player.uraReactor.owned >= 500 && player.achievements.hundred_twelve !== 1) {
    player.achievements.hundred_twelve = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_twelve !== 0) {
    document.getElementById("hundred_twelve").className = "achievement-unlocked";
  }
  //113
  if (player.uraReactor.owned >= 1000 && player.achievements.hundred_thirteen !== 1) {
    player.achievements.hundred_thirteen = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_thirteen !== 0) {
    document.getElementById("hundred_thirteen").className = "achievement-unlocked";
  }
  //114
  if (player.uraReactor.owned >= 5000 && player.achievements.hundred_fourteen !== 1) {
    player.achievements.hundred_fourteen = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_fourteen !== 0) {
    document.getElementById("hundred_fourteen").className = "achievement-unlocked";
  }
  //115
  if (player.uraReactor.owned >= 10000 && player.achievements.hundred_fifteen !== 1) {
    player.achievements.hundred_fifteen = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_fifteen !== 0) {
    document.getElementById("hundred_fifteen").className = "achievement-unlocked";
  }
  //URANIUM
  //MINING BOT
  //116
  if (player.miningBot.owned >= 1 && player.achievements.hundred_sixteen !== 1) {
    player.achievements.hundred_sixteen = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_sixteen !== 0) {
    document.getElementById("hundred_sixteen").className = "achievement-unlocked";
  }
  //117
  if (player.miningBot.owned >= 500 && player.achievements.hundred_seventeen !== 1) {
    player.achievements.hundred_seventeen = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_seventeen !== 0) {
    document.getElementById("hundred_seventeen").className = "achievement-unlocked";
  }
  //118
  if (player.miningBot.owned >= 1000 && player.achievements.hundred_eighteen !== 1) {
    player.achievements.hundred_eighteen = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_eighteen !== 0) {
    document.getElementById("hundred_eighteen").className = "achievement-unlocked";
  }
  //119
  if (player.miningBot.owned >= 5000 && player.achievements.hundred_nineteen !== 1) {
    player.achievements.hundred_nineteen = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_nineteen !== 0) {
    document.getElementById("hundred_nineteen").className = "achievement-unlocked";
  }
  //120
  if (player.miningBot.owned >= 10000 && player.achievements.hundred_twenty !== 1) {
    player.achievements.hundred_twenty = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_twenty !== 0) {
    document.getElementById("hundred_twenty").className = "achievement-unlocked";
  }

  //URANIUM SMELTER
  //121
  if (player.uraSmelter.owned >= 1 && player.achievements.hundred_twenty_one !== 1) {
    player.achievements.hundred_twenty_one = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_twenty_one !== 0) {
    document.getElementById("hundred_twenty_one").className = "achievement-unlocked";
  }
  //122
  if (player.uraSmelter.owned >= 500 && player.achievements.hundred_twenty_two !== 1) {
    player.achievements.hundred_twenty_two = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_twenty_two !== 0) {
    document.getElementById("hundred_twenty_two").className = "achievement-unlocked";
  }
  //123
  if (player.uraSmelter.owned >= 1000 && player.achievements.hundred_twenty_three !== 1) {
    player.achievements.hundred_twenty_three = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_twenty_three !== 0) {
    document.getElementById("hundred_twenty_three").className = "achievement-unlocked";
  }
  //124
  if (player.uraSmelter.owned >= 5000 && player.achievements.hundred_twenty_four !== 1) {
    player.achievements.hundred_twenty_four = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_twenty_four !== 0) {
    document.getElementById("hundred_twenty_four").className = "achievement-unlocked";
  }
  //125
  if (player.uraSmelter.owned >= 10000 && player.achievements.hundred_twenty_five !== 1) {
    player.achievements.hundred_twenty_five = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_twenty_five !== 0) {
    document.getElementById("hundred_twenty_five").className = "achievement-unlocked";
  }
  //URANIUM REFINERY
  //126
  if (player.uraRefinery.owned >= 1 && player.achievements.hundred_twenty_six !== 1) {
    player.achievements.hundred_twenty_six = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_twenty_six !== 0) {
    document.getElementById("hundred_twenty_six").className = "achievement-unlocked";
  }
  //127
  if (player.uraRefinery.owned >= 500 && player.achievements.hundred_twenty_seven !== 1) {
    player.achievements.hundred_twenty_seven = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_twenty_seven !== 0) {
    document.getElementById("hundred_twenty_seven").className = "achievement-unlocked";
  }
  //128
  if (player.uraRefinery.owned >= 1000 && player.achievements.hundred_twenty_eight !== 1) {
    player.achievements.hundred_twenty_eight = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_twenty_eight !== 0) {
    document.getElementById("hundred_twenty_eight").className = "achievement-unlocked";
  }
  //129
  if (player.uraRefinery.owned >= 5000 && player.achievements.hundred_twenty_nine !== 1) {
    player.achievements.hundred_twenty_nine = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_twenty_nine !== 0) {
    document.getElementById("hundred_twenty_nine").className = "achievement-unlocked";
  }
  //130
  if (player.uraRefinery.owned >= 10000 && player.achievements.hundred_thirty !== 1) {
    player.achievements.hundred_thirty = 1;
    player.achievements.points++;
  }
  if (player.achievements.hundred_thirty !== 0) {
    document.getElementById("hundred_thirty").className = "achievement-unlocked";
  }
  document.getElementById('ach-bar').style.width = parseInt(player.achievements.points * 0.769231) + "%";
  document.getElementById('points').innerHTML = parseInt(player.achievements.points) + "/ 130";
}
