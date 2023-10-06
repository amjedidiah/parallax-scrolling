/* Header Styling */
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
    $("#header ul li a").addClass("border-b-blue-100");
    $("#header ul li a").removeClass("border-b-white");
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
    $("#header ul li a").addClass("border-b-white");
    $("#header ul li a").removeClass("border-b-blue-100");
  }
};

/* Smooth Scroll */
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

/* Swiper */
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
    clickable: true,
  },
  scrollbar: {
    // el: ".swiper-scrollbar",
    // draggable: true,
  },
  spaceBetween: 16,
  slidesPerView: "auto",
  breakpoints: {
    10: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
  centeredSlides: true,
  centeredSlidesBounds: true,
  centerInsufficientSlides: true,
});

/* Team Tab */
class Tab {
  constructor() {
    this.activeTab = 0;
    this.tabSection = document.querySelector("#team");
    this.tabLinks = document.querySelectorAll(".tab-link");
    this.tabItems = document.querySelectorAll(".tab-item");
    this.tabContainer1 = document.querySelector("#tab-container-1");
    this.tabContainer2 = document.querySelector("#tab-container-2");

    this.init();
  }

  init() {
    this.tabLinks.forEach((link, index) => {
      link.addEventListener("click", () => this.setActiveTab(index));
    });
    this.setActiveTab(this.activeTab);
  }

  setActiveTab(index) {
    this.activeTab = index;
    this.updateTabClassNames();
  }

  updateTabClassNames() {
    this.updateTabSectionClassNames();
    this.updateTabLinkClassNames();
    this.updateTabItemClassNames();
    this.updateTabContainerClassNames();
  }

  updateTabSectionClassNames() {
    if (this.activeTab === 0) {
      this.tabSection.classList.add("bg-tab-1");
      this.tabSection.classList.remove("bg-tab-2");
    } else {
      this.tabSection.classList.add("bg-tab-2");
      this.tabSection.classList.remove("bg-tab-1");
    }
  }

  updateTabLinkClassNames() {
    this.tabLinks.forEach((link, index) => {
      if (index === this.activeTab || (index === 2 && this.activeTab === 1)) {
        link.classList.add("text-blue-100");
        link.classList.add("bg-slate-100");
        link.classList.add("underline");
        link.classList.remove("text-slate-100");
      } else {
        link.classList.add("text-slate-100");
        link.classList.remove("text-blue-100");
        link.classList.remove("bg-slate-100");
        link.classList.remove("underline");
      }
    });
  }

  updateTabItemClassNames() {
    this.tabItems.forEach((item, index) => {
      if (index === this.activeTab) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  }

  updateTabContainerClassNames() {
    if (this.activeTab === 0) {
      this.tabContainer1.classList.remove("overflow-hidden");
      this.tabContainer1.classList.remove("h-0");
      this.tabContainer1.classList.remove("md:flex-1");
      this.tabContainer1.classList.add("flex-1");

      this.tabContainer2.classList.add("h-0");
      this.tabContainer2.classList.remove("flex-1");
    } else {
      this.tabContainer1.classList.add("overflow-hidden");
      this.tabContainer1.classList.add("h-0");
      this.tabContainer1.classList.add("md:flex-1");
      this.tabContainer1.classList.remove("flex-1");

      this.tabContainer2.classList.remove("h-0");
      this.tabContainer2.classList.add("flex-1");
    }
  }
}

const teamTab = new Tab();

window.addEventListener("scroll", handleHeaderStyling);
handleHeaderStyling();
