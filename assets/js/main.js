$(document).ready(() => {
  consoleText(["UI Designer", "Product Designer", "UX Designer"], "herotext");
});

function consoleText(words, id) {
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 200);
}

$(document).ready(function () {
  $(".nav-link").on("click", function (event) {
    // Prevent default action for anchor click
    event.preventDefault();

    // Get the target element's ID from the href attribute (e.g., "#section1")
    const targetId = $(this).attr("href");
    const targetElement = $(targetId);

    // If the target element exists, scroll to its position
    if (targetElement.length) {
      $("html, body").animate(
        {
          scrollTop: targetElement.offset().top - 100,
        },
        400,
        "swing"
      );
    }
  });
});
