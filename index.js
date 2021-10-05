function scuberGreetingForFeet(dist) {
  // Write your code here!

  // if (dist <= 400) {
  //   return "This one is on me!";
  // }

  // if (dist > 2000 && dist < 2500) {
  //   return "I will gladly take your thirty bucks.";
  // }

  // if (dist > 2500) {
  //   return "No can do.";
  // }

  if (dist <= 400) {
    return "This one is on me!";
  } else if (dist > 2000 && dist < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (dist > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(dest) {
  // Write your code here!
  return dest === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  // if (tip == "generous") {
  //   return "Thank you so much.";
  // } else if (tip == "not as generous") {
  //   return "Thank you.";
  // } else {
  //   return "Bye.";
  // }

  let greet;

  switch (tip) {
    case "generous":
      greet = "Thank you so much.";
      break;
    case "not as generous":
      greet = "Thank you.";
      break;
    default:
      greet = "Bye.";
      break;
  }

  return greet;
}
