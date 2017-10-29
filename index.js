var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  console.log("Welcome, " + name + ". You are number " + line.length + " in line.");
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  if(line.length) {
  console.log("There is nobody waiting to be served!");
  return "There is nobody waiting to be served!";
} else {
  console.log("Currently serving " + line.shift());
  return "Currently serving " + line.shift();
}

function currentLine(line) {
  var lineNamesandNumbers = [];
  if(line.length) {
    return "The line is currently empty.";
  }
  for (var i = 0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + line[i]);
  }
  console.log("This line is currently: " + lineNamesandNumbers);
  return "This line is currently: " + lineNamesandNumbers;
}


//Provided Example Code//
var katzDeliLine = [];

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine);
takeANumber(katzDeliLine, "Matz");
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine);
