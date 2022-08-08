function timeConversion(s) {
  let time = "";
  let h = s.substring(0, 2) + "";
  let m = s.substring(3, 5);
  let sec = s.substring(6, 8);
  let tm = s.substring(8, 10);
  if (tm == "AM" && h == 12) {
    h = "00";
    time = time + h + ":" + m + ":" + sec;
    console.log(time);
  } else if (tm == "AM") {
    time = time + h + ":" + m + ":" + sec;
    console.log(time);
  } else if (tm == "PM" && h < 12) {
    h = parseInt(h) + 12;
    time = time + h + ":" + m + ":" + sec;
    console.log(time);
  } else {
    time = time + h + ":" + m + ":" + sec;
    console.log(time);
  }
}
timeConversion("04:59:59AM");
// timeConversion("07:05:45PM");
