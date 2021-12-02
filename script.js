var today = moment();

$("#currentDay").text(today.format("dddd, MMMM Do"));

var hour = $(".hour");

var textArea = $(".textarea");


for (var i = 0; i < hour.length; i++) {
if (hour.eq(i).text() === today.format("hA")) {
    textArea.eq(i).addClass("present");
} else if (hour.eq(i).text() < today.format("hA")) {
    textArea.eq(i).addClass("past");
} else if (hour.eq(0).text() > today.format("hA")) {
    textArea.eq(i).addClass("past");
 } else {
    textArea.eq(i).addClass("future");
}
}

