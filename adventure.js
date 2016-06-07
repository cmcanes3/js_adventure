var name = prompt("Hello! Welcome to SportFind, the newest interactive game which helps you find the right sport for you! First, what's your name?")
console.log("Hello" + " " + name + "!")
console.log("Let's find the right sport for you!")
var teamIndividual = prompt("Do you prefer team or individual sports? Type T for team or I for individual.")

if (teamIndividual ==="T"){
  console.log("Hey there, team player!");
} else if (teamIndividual === "I") {
  console.log("You trust in your own skills, that's great!");
}

if (teamIndividual==="T") {
  var indoorOutdoor = prompt("Do you prefer indoor, outdoor, or neither type of sport? Type I for indoor, O for outdoor and N for neither.");
} else if (teamIndividual==="I") {
  var coldScale = prompt("On a scale from 1-100, with 100 being most-likely, how likely are you to enjoy a sport in the cold?");
}

if (coldScale > 50){
  console.log("Wow you are a tough one! Too bad your road ends here. Here at SportFind we encourage users to try out team sports. Try the game again and this time select T for team sports!");
} else if (coldScale <= 50){
  console.log("The cold isn't for everyone! Too bad your road ends here. Here at SportFind we encourage users to try out team sports. Try the game again and this time select T for team sports!")
}


if (indoorOutdoor === "I") {
  console.log("Missing out on the Vitamin C!");
} else if (indoorOutdoor === "O") {
  console.log("Nice! You'll get plenty of fresh air and Vitamin C.")
} else if (indoorOutdoor === "N") {
  console.log("Sorry pal, you're in the wrong place.")
}


if (indoorOutdoor === "I") {
  var likeWater = prompt("Do you like being in the water? Type Y for yes or N for no.");
} else if (indoorOutdoor==="O") {
  var physicalSports = prompt("Do you prefer physical or non-physical sports? Type P for physical or N for non-physical.");
}


if (physicalSports==="P") {
  console.log("Physcial sports are great, but be careful!");
} else if (physicalSports==="N") {
  console.log("Nice, less of a chance of getting injured!");
}

if (physicalSports==="P") {
  var stickSport = prompt("Do you prefer a sport with a stick, ball, or pom-pom? Type S for stick, B for ball or P for pom-pom.");
} else if (physicalSports==="N") {
  var animals = prompt("How do you feel about animals? Type L for like them or N for not-really a fan.");
}

if (animals==="L"){
  console.log("YOUR RESULT IS IN! You should try Polo, Good Luck!");
} else if (animals==="N") {
  console.log("YOUR RESULT IS IN! You should try Track & Field, Good Luck!");
}

if (stickSport==="S"){
  console.log("YOUR RESULT IS IN! You should try Lacrosse, Good Luck!");
} else if (stickSport==="B") {
  console.log("YOUR RESULT IS IN! You should try Football, Good Luck!");
} else if (stickSport==="p") {
  console.log("YOUR RESULT IS IN! You should try Cheerleading, Good Luck!");
}

if (likeWater==="Y"){
  console.log("Great, because 96.5% of the world is water!");
} else if (likeWater==="N") {
  console.log("That's cool, water sports aren't for everyone.");
}

if (likeWater==="Y"){
  var ballSport = prompt("Do you prefer a sport with a ball, or not? Type B for ball or N for no ball.");
} else if (likeWater==="N") {
  var fastPaced = prompt("Do your prefer a fast paced, slow paced or mediocre paced game? Type F for fast paced, S for slow paced and M for mediocre.");
}

if (ballSport==="B") {
  console.log("YOUR RESULT IS IN! You should try Waterpolo, Good Luck!");
} else if (ballSport==="N"){
  console.log("YOUR RESULT IS IN! You should try the Swim Team, Good Luck!");
}

if(fastPaced==="F"){
  console.log("YOUR RESULT IS IN! You should try the Basketball, Good Luck!");
} else if (fastPaced==="S"){
  console.log("YOUR RESULT IS IN! You should try the Volleyball, Good Luck!");
} else if (fastPaced==="M"){
  console.log("YOUR RESULT IS IN! You should try watching from the bleachers because mediocre doesn't exist.");
}
