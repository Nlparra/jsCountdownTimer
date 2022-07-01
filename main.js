window.onload = function countdown(){
    var today = new Date();
    var daynumber = today.getDay()
    var daysaway = (7 + 2 - daynumber) % 7
    var nextTuesday = new Date();
    nextTuesday.setHours(23, 59, 00)
    nextTuesday.getTimezoneOffset(-240)
    console.log(nextTuesday)
    nextTuesday.setDate(nextTuesday.getDate() + daysaway);
    var timer;

    timer = setInterval(function() {
      timeBetweenDates(nextTuesday);
    }, 1000);

  function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

      // Timer done
      clearInterval(timer);

    } else {

      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);

      hours %= 24;
      minutes %= 60;
      seconds %= 60;

      document.getElementById("days").innerHTML = days + " " + "days"
      document.getElementById("hours").innerHTML = hours + " " + "hours"
      document.getElementById("minutes").innerHTML = minutes + " " + "minutes"
      // $("#seconds").text(seconds);

      if(days < 1){
        document.getElementById("timer").style.color = "red"
      } else {
        document.getElementById("timer").style.color = "green"
      }
    }
  }
  document.getElementById("next-tuesday").innerHTML = nextTuesday;
}
