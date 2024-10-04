document.addEventListener("DOMContentLoaded", function () {
  setActiveNavItem("#home");
  window.scrollTo(0, 0); // Scrolls to the top of the page
});

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

// Function to handle setting active class
function setActiveNavItem(targetId) {
  // Remove 'active' class from all kathir-nav-item elements
  $(".kathir-nav-item").removeClass("active");

  // Find the nav-link with the matching href and set its parent kathir-nav-item to active
  $(`.nav-link[href='${targetId}']`)
    .closest(".kathir-nav-item")
    .addClass("active");
}

$(document).ready(function () {
  // Event handler for clicking on nav-link
  $(".nav-link").on("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    const targetId = $(this).attr("href");

    // Call function to update active state
    setActiveNavItem(targetId);

    // Smooth scroll to the target section
    const targetElement = $(targetId);
    if (targetElement.length) {
      $("html, body").animate(
        {
          scrollTop: targetElement.offset().top - 100,
        },
        200,
        "swing"
      );
    }
  });
});
