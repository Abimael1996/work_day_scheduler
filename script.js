var today = moment();

$("#currentDay").text(today.format("dddd, MMMM Do"));

var hour = $(".hour");

var textArea = $(".textarea");


for (var i = 0; i < hour.length; i++) {
if (+hour.eq(i).attr("data-index") === +today.format("k")) {
    textArea.eq(i).addClass("present");
} else if (+hour.eq(i).attr("data-index") < +today.format("k")) {
    textArea.eq(i).addClass("past");
}  else {
    textArea.eq(i).addClass("future");
}
}


var storedInitialEvents = JSON.parse(localStorage.getItem("initialEvents"));

console.log(storedInitialEvents);

if (storedInitialEvents !=null) {

for (var i = 0; i < textArea.length; i ++) {
        
    textArea.eq(i).text(storedInitialEvents[i]);
    
    }

}


var eventsArray = [];
var indexArray = [];

console.log(eventsArray);
console.log(indexArray);

var currentEvent = JSON.parse(localStorage.getItem("currentEvent"));
var currentIndex = JSON.parse(localStorage.getItem("indexArray"));

console.log(currentEvent);
console.log(currentIndex);



if (currentIndex !=null) {

    for (var i = 0; i < currentIndex.length; i++) {
    
    textArea.eq(currentIndex[i] - 1).text(currentEvent[i])

    }
    }

    

    var initialEvents = [];

    console.log(initialEvents);
    
    for (var i = 0; i < textArea.length; i++) {
        
        initialEvents.push(textArea.eq(i).text());
    
    }
    
    console.log(initialEvents);


    localStorage.setItem("initialEvents", JSON.stringify(initialEvents));





var button = $(".saveBtn")

button.on("click", saveEvent);

function saveEvent(event) {

    var currentBtn = event.target;

    var parent = currentBtn.closest("div");

    var currentText = parent.children[1];

    eventsArray.push(currentText.value);
    indexArray.push(currentText.getAttribute("data-index"));


    localStorage.setItem("currentEvent", JSON.stringify(eventsArray));
    localStorage.setItem("indexArray", JSON.stringify(indexArray));

}

