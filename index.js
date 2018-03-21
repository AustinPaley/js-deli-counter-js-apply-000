var katzDeliLine = [];

//function takeANumber(katzDeliLine, name){
//katzDeliLine.push(name);
//return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
//}

var counter = 0

function takeANumber(katzDeliLine){
count = counter[i+1]
if (counter === 0){
return `Welcome. Your number is 1.`
counter++;
}
else if (counter >= 1) {
  katzDeliLine.push(count)
  return `Welcome. Your number is ${count}.`;
  counter++;
}

// Prince: takeANumber => "Welcome. You are number 1." [1]
// Prince: nowServing => "Currently serving #1" []
// Ashlee: takeANumber =. "Welcome you are number 2." ["Ashlee"]

function nowServing(katzDeliLine){
var line = (katzDeliLine.length != 0) ? `Currently serving #${counter}.` : "There is nobody waiting to be served!";
return line
}

//function nowServing(katzDeliLine){
//  var i = 0
//  while (i < katzDeliLine.length) {
//    i++;
//  }
//  if (katzDeliLine.length === 0) {
//    return "There is nobody waiting to be served!"
//  }
//  else
//  return (`Currently serving ${katzDeliLine.shift()}.`)
//}

function currentLine(queue){
  var queueNum = [];
  if (queue.length === 0){
    return "The line is currently empty."
  }
  for (var i = 0; i < queue.length; i++) {
    queueNum.push(` ${i+1}. ${queue[i]}`)
  }
  return "The line is currently:" + queueNum.join(", ");
}
