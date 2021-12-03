var today = moment();

$("#currentDay").text(today.format("dddd, MMMM Do"));

var hour = $(".hour");

var textArea = $(".textarea");

if (hour.eq(0).text() === today.format("hA")) {
    textArea.eq(0).addClass("present");
} else if (hour.eq(0).text() < today.format("hA")) {
    textArea.eq(0).addClass("past");
}  else {
    textArea.eq(0).addClass("past");
}


for (var i = 1; i < hour.length; i++) {
if (hour.eq(i).text() === today.format("hA")) {
    textArea.eq(i).addClass("present");
} else if (hour.eq(i).text() < today.format("hA")) {
    textArea.eq(i).addClass("past");
}  else {
    textArea.eq(i).addClass("future");
}
}

