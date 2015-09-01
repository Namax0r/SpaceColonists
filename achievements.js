function checkAchievements() {
              //Tech Achievements
  //1.
  if (player.tech === 100 && player.achievements.first !== 1) {
    player.achievements.first = 1;
    alert("Achievement Unlocked");
    player.achievements.points++;
  }
  if (player.achievements.first !== 0) {
    document.getElementById("first").className = "achievement-unlocked";

  }
  //2
  if (player.tech === 10000 && player.achievements.second !== 1) {
    player.achievements.second = 1;
    player.achievements.points++;
  }
  if (player.achievements.second !== 0) {
    document.getElementById("second").className = "achievement-unlocked";
  }
  //3
  if (player.tech === 100000 && player.achievements.third !== 1) {
    player.achievements.third = 1;
  }
  if (player.achievements.third !== 0) {
    document.getElementById("third").className = "achievement-unlocked";
  }
  //4
  if (player.tech === 1000000 && player.achievements.fourth !== 1) {
    player.achievements.fourth = 1;
  }
  if (player.achievements.fourth !== 0) {
    document.getElementById("fourth").className = "achievement-unlocked";
  }
  //5
  if (player.tech === 50000000 && player.achievements.fifth !== 1) {
    player.achievements.fifth = 1;
  }
  if (player.achievements.fifth !== 0) {
    document.getElementById("fifth").className = "achievement-unlocked";
  }
              //Energy Achievements
  //6
  if (player.energy === 1000 && player.achievements.sixth !== 1) {
    player.achievements.sixth = 1;
  }
  if (player.achievements.sixth !== 0) {
    document.getElementById("sixth").className = "achievement-unlocked";
  }
  //7
  if (player.energy === 10000 && player.achievements.seventh !== 1) {
    player.achievements.seventh = 1;
  }
  if (player.achievements.seventh !== 0) {
    document.getElementById("seventh").className = "achievement-unlocked";
  }
  //8
  if (player.energy === 100000 && player.achievements.eighth !== 1) {
    player.achievements.eighth = 1;
  }
  if (player.achievements.eighth !== 0) {
    document.getElementById("eighth").className = "achievement-unlocked";
  }
  //9
  if (player.energy === 1000000 && player.achievements.nineth !== 1) {
    player.achievements.nineth = 1;
  }
  if (player.achievements.nineth !== 0) {
    document.getElementById("nineth").className = "achievement-unlocked";
  }
  //10
  if (player.energy === 50000000 && player.achievements.tenth !== 1) {
    player.achievements.tenth = 1;
  }
  if (player.achievements.tenth !== 0) {
    document.getElementById("tenth").className = "achievement-unlocked";
  }
  //11
                //Engineer Achievements
  if (player.engineer.owned === 1 && player.achievements.eleventh !== 1) {
    player.achievements.eleventh = 1;
    player.achievements.points++;
  }
  if (player.achievements.eleventh !== 0) {
    document.getElementById("eleventh").className = "achievement-unlocked";
  }
  //12
  if (player.engineer.owned === 500 && player.achievements.twelfth !== 1) {
    player.achievements.twelfth = 1;
    player.achievements.points++;
  }
  if (player.achievements.twelfth !== 0) {
    document.getElementById("twelfth").className = "achievement-unlocked";
  }
  //13
  if (player.engineer.owned === 1000 && player.achievements.thirteenth !== 1) {
    player.achievements.thirteenth = 1;
    player.achievements.points++;
  }
  if (player.achievements.thirteenth !== 0) {
    document.getElementById("thirteenth").className = "achievement-unlocked";
  }
  //14
  if (player.engineer.owned === 5000 && player.achievements.fourteenth !== 1) {
    player.achievements.fourteenth = 1;
    player.achievements.points++;
  }
  if (player.achievements.fourteenth !== 0) {
    document.getElementById("fourteenth").className = "achievement-unlocked";
  }
  //15
  if (player.engineer.owned === 5 && player.achievements.fifteenth !== 1) {
    player.achievements.fifteenth = 1;
    player.achievements.points++;
  }
  if (player.achievements.fifteenth !== 0) {
    document.getElementById("fifteenth").className = "achievement-unlocked";
  }
              //Android Achievements
  //16
  if (player.android.owned === 5 && player.achievements.sixteenth !== 1) {
    player.achievements.sixteenth = 1;
  }
  if (player.achievements.sixteenth !== 0) {
    document.getElementById("sixteenth").className = "achievement-unlocked";
  }
  //17
  if (player.android.owned === 400 && player.achievements.seventeenth !== 1) {
    player.achievements.seventeenth = 1;
  }
  if (player.achievements.seventeenth !== 0) {
    document.getElementById("seventeenth").className = "achievement-unlocked";
  }
  //18
  if (player.android.owned === 900 && player.achievements.eighteenth !== 1) {
    player.achievements.eighteenth = 1;
  }
  if (player.achievements.eighteenth !== 0) {
    document.getElementById("eighteenth").className = "achievement-unlocked";
  }
  //19
  if (player.android.owned === 4000 && player.achievements.nineteenth !== 1) {
    player.achievements.nineteenth = 1;
  }
  if (player.achievements.nineteenth !== 0) {
    document.getElementById("nineteenth").className = "achievement-unlocked";
  }
  //20
  if (player.android.owned === 9000 && player.achievements.twentieth !== 1) {
    player.achievements.twentieth = 1;
  }
  if (player.achievements.twentieth !== 0) {
    document.getElementById("twentieth").className = "achievement-unlocked";
  }
              //Robots Achievements
  //21
  if (player.android.owned === 10 && player.achievements.twenty_first !== 1) {
    player.achievements.twenty_first = 1;
  }
  if (player.achievements.twenty_first !== 0) {
    document.getElementById("twenty_first").className = "achievement-unlocked";
  }
  //22
  if (player.robot.owned === 450 && player.achievements.twenty_second !== 1) {
    player.achievements.twenty_second = 1;
  }
  if (player.achievements.twenty_second !== 0) {
    document.getElementById("twenty_second").className = "achievement-unlocked";
  }
  //23
  if (player.robot.owned === 950 && player.achievements.twenty_third !== 1) {
    player.achievements.twenty_third = 1;
  }
  if (player.achievements.twenty_third !== 0) {
    document.getElementById("twenty_third").className = "achievement-unlocked";
  }
  //24
  if (player.robot.owned === 4500 && player.achievements.twenty_fourth !== 1) {
    player.achievements.twenty_fourth = 1;
  }
  if (player.achievements.twenty_fourth !== 0) {
    document.getElementById("twenty_fourth").className = "achievement-unlocked";
  }
  //25
  if (player.robot.owned === 9500 && player.achievements.twenty_fifth !== 1) {
    player.achievements.twenty_fifth = 1;
  }
  if (player.achievements.twenty_fifth !== 0) {
    document.getElementById("twenty_fifth").className = "achievement-unlocked";
  }
              //Research Lab Achievements
  //26
  if (player.resLab.owned === 50 && player.achievements.twenty_sixth !== 1) {
    player.achievements.twenty_sixth = 1;
  }
  if (player.achievements.twenty_sixth !== 0) {
    document.getElementById("twenty_sixth").className = "achievement-unlocked";
  }
  //27
  if (player.resLab.owned === 700 && player.achievements.twenty_seventh !== 1) {
    player.achievements.twenty_seventh = 1;
  }
  if (player.achievements.twenty_seventh !== 0) {
    document.getElementById("twenty_seventh").className = "achievement-unlocked";
  }
  //28
  if (player.resLab.owned === 1300 && player.achievements.twenty_eighth !== 1) {
    player.achievements.twenty_eighth = 1;
  }
  if (player.achievements.twenty_eighth !== 0) {
    document.getElementById("twenty_eighth").className = "achievement-unlocked";
  }
  //29
  if (player.resLab.owned === 6000 && player.achievements.twenty_nineth !== 1) {
    player.achievements.twenty_nineth = 1;
  }
  if (player.achievements.twenty_nineth !== 0) {
    document.getElementById("twenty_nineth").className = "achievement-unlocked";
  }
  //30
  if (player.resLab.owned === 10000 && player.achievements.thirtieth !== 1) {
    player.achievements.thirtieth = 1;
  }
  if (player.achievements.thirtieth !== 0) {
    document.getElementById("thirtieth").className = "achievement-unlocked";
  }
              //Research Facility Achievements
  //31
  if (player.resFac.owned === 40 && player.achievements.thirty_first !== 1) {
    player.achievements.thirty_first = 1;
  }
  if (player.achievements.thirty_first !== 0) {
    document.getElementById("thirty_first").className = "achievement-unlocked";
  }
  //32
  if (player.resFac.owned === 600 && player.achievements.thirty_second !== 1) {
    player.achievements.thirty_second = 1;
  }
  if (player.achievements.thirty_second !== 0) {
    document.getElementById("thirty_second").className = "achievement-unlocked";
  }
  //33
  if (player.resFac.owned === 1000 && player.achievements.thirty_third !== 1) {
    player.achievements.thirty_third = 1;
  }
  if (player.achievements.thirty_third !== 0) {
    document.getElementById("thirty_third").className = "achievement-unlocked";
  }
  //34
  if (player.resFac.owned === 5000 && player.achievements.thirty_fourth !== 1) {
    player.achievements.thirty_fourth = 1;
  }
  if (player.achievements.thirty_fourth !== 0) {
    document.getElementById("thirty_fourth").className = "achievement-unlocked";
  }
  //35
  if (player.resFac.owned === 10000 && player.achievements.thirty_fifth !== 1) {
    player.achievements.thirty_fifth = 1;
  }
  if (player.achievements.thirty_fifth !== 0) {
    document.getElementById("thirty_fifth").className = "achievement-unlocked";
  }
              //Robotics Factory Achievements
  //36
  if (player.roboticsFact.owned === 60 && player.achievements.thirty_sixth !== 1) {
    player.achievements.thirty_sixth = 1;
  }
  if (player.achievements.thirty_sixth !== 0) {
    document.getElementById("thirty_sixth").className = "achievement-unlocked";
  }
  //37
  if (player.roboticsFact.owned === 600 && player.achievements.thirty_seventh !== 1) {
    player.achievements.thirty_seventh = 1;
  }
  if (player.achievements.thirty_seventh !== 0) {
    document.getElementById("thirty_seventh").className = "achievement-unlocked";
  }
  //38
  if (player.roboticsFact.owned === 1200 && player.achievements.thirty_eighth !== 1) {
    player.achievements.thirty_eighth = 1;
  }
  if (player.achievements.thirty_eighth !== 0) {
    document.getElementById("thirty_eighth").className = "achievement-unlocked";
  }
  //39
  if (player.roboticsFact.owned === 5500 && player.achievements.thirty_nineth !== 1) {
    player.achievements.thirty_nineth = 1;
  }
  if (player.achievements.twenty_nineth !== 0) {
    document.getElementById("thirty_nineth").className = "achievement-unlocked";
  }
  //40
  if (player.roboticsFact.owned === 10000 && player.achievements.fortieth !== 1) {
    player.achievements.fortieth = 1;
  }
  if (player.achievements.fortieth !== 0) {
    document.getElementById("fortieth").className = "achievement-unlocked";
  }
              //Cybernetics Lab Achievements
  //41
  if (player.cyberLab.owned === 80 && player.achievements.forty_first !== 1) {
    player.achievements.forty_first = 1;
  }
  if (player.achievements.forty_first !== 0) {
    document.getElementById("forty_first").className = "achievement-unlocked";
  }
  //42
  if (player.cyberLab.owned === 800 && player.achievements.forty_second !== 1) {
    player.achievements.forty_second = 1;
  }
  if (player.achievements.forty_second !== 0) {
    document.getElementById("forty_second").className = "achievement-unlocked";
  }
  //43
  if (player.cyberLab.owned === 1600 && player.achievements.forty_third !== 1) {
    player.achievements.forty_third = 1;
  }
  if (player.achievements.forty_third !== 0) {
    document.getElementById("forty_third").className = "achievement-unlocked";
  }
  //44
  if (player.cyberLab.owned === 6000 && player.achievements.forty_fourth !== 1) {
    player.achievements.forty_fourth = 1;
  }
  if (player.achievements.forty_fourth !== 0) {
    document.getElementById("forty_fourth").className = "achievement-unlocked";
  }
  //45
  if (player.cyberLab.owned === 10000 && player.achievements.forty_fifth !== 1) {
    player.achievements.forty_fifth = 1;
  }
  if (player.achievements.forty_fifth !== 0) {
    document.getElementById("forty_fifth").className = "achievement-unlocked";
  }
                //Battery Pack Achievements
  //46
  if (player.battPack.owned === 1 && player.achievements.forty_sixth !== 1) {
    player.achievements.forty_sixth = 1;
  }
  if (player.achievements.forty_sixth !== 0) {
    document.getElementById("forty_sixth").className = "achievement-unlocked";
  }
  //47
  if (player.battPack.owned === 500 && player.achievements.forty_seventh !== 1) {
    player.achievements.forty_seventh = 1;
  }
  if (player.achievements.forty_seventh !== 0) {
    document.getElementById("forty_seventh").className = "achievement-unlocked";
  }
  //48
  if (player.battPack.owned === 1000 && player.achievements.forty_eighth !== 1) {
    player.achievements.forty_eighth = 1;
  }
  if (player.achievements.forty_eighth !== 0) {
    document.getElementById("forty_eighth").className = "achievement-unlocked";
  }
  //49
  if (player.battPack.owned === 5000 && player.achievements.forty_nineth !== 1) {
    player.achievements.forty_nineth = 1;
  }
  if (player.achievements.forty_nineth !== 0) {
    document.getElementById("forty_nineth").className = "achievement-unlocked";
  }
  //50
  if (player.battPack.owned === 10000 && player.achievements.fiftieth !== 1) {
    player.achievements.fiftieth = 1;
  }
  if (player.achievements.fiftieth !== 0) {
    document.getElementById("fiftieth").className = "achievement-unlocked";
  }
                //Power Generator Achievements
  //51
  if (player.pwrGen.owned === 5 && player.achievements.fifty_first - first !== 1) {
    player.achievements.fifty_first = 1;
  }
  if (player.achievements.fifty_first !== 0) {
    document.getElementById("fifty_first").className = "achievement-unlocked";
  }
  //52
  if (player.pwrGen.owned === 400 && player.achievements.fifty_second !== 1) {
    player.achievements.fifty_second = 1;
  }
  if (player.achievements.fifty_second !== 0) {
    document.getElementById("fifty_second").className = "achievement-unlocked";
  }
  //53
  if (player.pwrGen.owned === 900 && player.achievements.fifty_third !== 1) {
    player.achievements.fifty_third = 1;
  }
  if (player.achievements.fifty_third !== 0) {
    document.getElementById("fifty_third").className = "achievement-unlocked";
  }
  //54
  if (player.pwrGen.owned === 4000 && player.achievements.fifty_fourth !== 1) {
    player.achievements.fifty_fourth = 1;
  }
  if (player.achievements.fifty_fourth !== 0) {
    document.getElementById("fifty_fourth").className = "achievement-unlocked";
  }
  //55
  if (player.pwrGen.owned === 9000 && player.achievements.fifty_fifth !== 1) {
    player.achievements.fifty_fifth = 1;
  }
  if (player.achievements.fifty_fifth !== 0) {
    document.getElementById("fifty_fifth").className = "achievement-unlocked";
  }
                //Generator Room Achievements
  //56
  if (player.genRoom.owned === 15 && player.achievements.fifty_sixth !== 1) {
    player.achievements.fifty_sixth = 1;
  }
  if (player.achievements.fifty_sixth !== 0) {
    document.getElementById("fifty_sixth").className = "achievement-unlocked";
  }
  //57
  if (player.genRoom.owned === 450 && player.achievements.fifty_seventh !== 1) {
    player.achievements.fifty_seventh = 1;
  }
  if (player.achievements.fifty_seventh !== 0) {
    document.getElementById("fifty_seventh").className = "achievement-unlocked";
  }
  //58
  if (player.genRoom.owned === 970 && player.achievements.fifty_eighth !== 1) {
    player.achievements.fifty_eighth = 1;
  }
  if (player.achievements.fifty_eighth !== 0) {
    document.getElementById("fifty_eighth").className = "achievement-unlocked";
  }
  //59
  if (player.genRoom.owned === 4600 && player.achievements.fifty_nineth !== 1) {
    player.achievements.fifty_nineth = 1;
  }
  if (player.achievements.fifty_nineth !== 0) {
    document.getElementById("fifty_nineth").className = "achievement-unlocked";
  }
  //60
  if (player.genRoom.owned === 9900 && player.achievements.sixtieth !== 1) {
    player.achievements.sixtieth = 1;
  }
  if (player.achievements.sixtieth !== 0) {
    document.getElementById("sixtieth").className = "achievement-unlocked";
  }
                //Solar Panel Achievements
  //61
  if (player.solPan.owned === 20 && player.achievements.sixty_first !== 1) {
    player.achievements.sixty_first = 1;
  }
  if (player.achievements.sixty_first !== 0) {
    document.getElementById("sixty_first").className = "achievement-unlocked";
  }
  //62
  if (player.solPan.owned === 200 && player.achievements.sixty_second !== 1) {
    player.achievements.sixty_second = 1;
  }
  if (player.achievements.sixty_second !== 0) {
    document.getElementById("sixty_second").className = "achievement-unlocked";
  }
  //63
  if (player.solPan.owned === 1200 && player.achievements.sixty_third !== 1) {
    player.achievements.sixty_third = 1;
  }
  if (player.achievements.sixty_third !== 0) {
    document.getElementById("sixty_third").className = "achievement-unlocked";
  }
  //64
  if (player.solPan.owned === 6000 && player.achievements.sixty_fourth !== 1) {
    player.achievements.sixty_fourth = 1;
  }
  if (player.achievements.sixty_fourth !== 0) {
    document.getElementById("sixty_fourth").className = "achievement-unlocked";
  }
  //65
  if (player.solPan.owned === 10000 && player.achievements.sixty_fifth !== 1) {
    player.achievements.sixty_fifth = 1;
  }
  if (player.achievements.sixty_fifth !== 0) {
    document.getElementById("sixty_fifth").className = "achievement-unlocked";
  }
                //Solar Panel Farm Achievements
  //66
  if (player.solPanFarm.owned === 80 && player.achievements.sixty_sixth !== 1) {
    player.achievements.sixty_sixth = 1;
  }
  if (player.achievements.sixty_sixth !== 0) {
    document.getElementById("sixty_sixth").className = "achievement-unlocked";
  }
  //67
  if (player.solPanFarm.owned === 800 && player.achievements.sixty_seventh !== 1) {
    player.achievements.sixty_seventh = 1;
  }
  if (player.achievements.sixty_seventh !== 0) {
    document.getElementById("sixty_seventh").className = "achievement-unlocked";
  }
  //68
  if (player.solPanFarm.owned === 1600 && player.achievements.sixty_eighth !== 1) {
    player.achievements.sixty_eighth = 1;
  }
  if (player.achievements.sixty_eighth !== 0) {
    document.getElementById("sixty_eighth").className = "achievement-unlocked";
  }
  //69
  if (player.solPanFarm.owned === 6000 && player.achievements.sixty_nineth !== 1) {
    player.achievements.sixty_nineth = 1;
  }
  if (player.achievements.sixty_nineth !== 0) {
    document.getElementById("sixty_nineth").className = "achievement-unlocked";
  }
  //70
  if (player.solPanFarm.owned === 10000 && player.achievements.seventieth !== 1) {
    player.achievements.seventieth = 1;
  }
  if (player.achievements.seventieth !== 0) {
    document.getElementById("seventieth").className = "achievement-unlocked";
  }
  document.getElementById('ach-bar').style.width = parseInt(player.achievements.points) + "%";
  document.getElementById('points').innerHTML = parseInt(player.achievements.points) + "/ 100";
  document.getElementById('ach-counter').innerHTML = parseInt(player.achievements.points) + "%";
}
