export default () => {
	function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  let counter = 1;
  setInterval(function () {
    let randNum = randomInteger(27, 47);
    let randNum2 = randomInteger(95, 130);
    if (counter == 1) {
      $(".online-1").removeClass("active");
      $(".online-2").addClass("active");
      counter = 0;
    } else {
      $(".online-1").addClass("active");
      $(".online-2").removeClass("active");
      $(".online-dynamic-1").html(randNum);

      counter = 1;
    }
  }, 10000);
};
