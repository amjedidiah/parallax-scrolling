const handleHeaderStyling = () => {
  const history = document.getElementById("history");
  const header = document.getElementById("header");

  if (!history || !header) return;
  const logoText = header.querySelector("#logo-text");
  const navList = header.querySelector("ul");

  const historyPosition = history.getBoundingClientRect().top;
  const isTransparent = historyPosition > 10;

  // If history is at the top of the screen, make header not transparent
  if (!isTransparent) {
    // Header background is white
    header.classList.add("bg-white");
    // header.classList.remove("bg-transparent");

    //   Logo text is visible
    logoText.classList.add("sm:block");

    //   Nav list text is blue
    navList.classList.add("text-blue-100");
    navList.classList.remove("text-white");

    //   Nav list nav-link border is blue
    $("#header ul li a").classList.add("border-b-blue-100");
    $("#header ul li a").classList.remove("border-b-white");
  } else {
    //   Header background is transparent
    // header.classList.add("bg-transparent");
    header.classList.remove("bg-white");

    //   Logo text is hidden
    logoText.classList.remove("sm:block");

    //   Nav list text is white
    navList.classList.add("text-white");
    navList.classList.remove("text-blue-100");

    //   Nav list nav-link border is white
    $("#header ul li a").classList.add("border-b-white");
    $("#header ul li a").classList.remove("border-b-blue-100");
  }
};

window.addEventListener("scroll", handleHeaderStyling);
handleHeaderStyling();

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
