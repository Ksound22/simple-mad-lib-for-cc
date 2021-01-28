let name;
let name2;
let thing;
let thing2;
let place;
let place2;

named = window.prompt("Enter a name");
named2 = window.prompt("Enter another name");
thing = window.prompt("Enter a thing");
thing2 = window.prompt("Enter another thing");
place = window.prompt("Enter a place");
place2 = window.prompt("Enter another place");

document.write(named + " went to the " + thing + " at " + place + ".<br>");
document.write(
  named2 +
    " was upset that " +
    named +
    " bought a " +
    thing2 +
    " at the " +
    " thing " +
    " at " +
    place2 +
    "."
);
