/*==================== Disable ====================*/

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
}, false);

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
    e.preventDefault();
  }
  if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
    e.preventDefault();
  }
  if (e.ctrlKey && (e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.shiftKey && e.key === 'i') ||
    (e.ctrlKey && e.key === 'J') ||
    (e.ctrlKey && e.key === 'j') ||
    (e.ctrlKey && e.key === 'C') ||
    (e.ctrlKey && e.key === 'c') ||
    (e.ctrlKey && e.key === 'K') ||
    (e.ctrlKey && e.key === 'k') ||
    (e.key === 'F12')) {
    e.preventDefault();
  }
}, false);


/*==================== Disable ====================*/
// Requiring module
const express = require('express');

// Creating express object
const app = express();

// Handling GET request
app.get('/', (req, res) => {
  res.send('A simple Node App is ' +
    'running on this server')
  res.end()
})

// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT, console.log(
  `Server started on port ${PORT}`));


/*==================== Lazy load images ====================*/
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img.lazy").forEach(img => observer.observe(img));
});

function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
}
/*==================== Lazy load images ====================*/


/*==================== Lazy load images ====================*/
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img.lazy");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => observer.observe(img));
});
/*==================== Lazy load images ====================*/


/*==================== Lazy Again ====================*/
(function ($) {
  $.fn.lazyload = function (options) {
    var settings = $.extend({
      threshold: 0,
      event: "scroll",
      effect: "show",
      container: window,
    }, options);

    var elements = this;

    if (settings.event === "scroll") {
      $(settings.container).on("scroll", function () {
        elements.each(function () {
          if ($.belowthefold(this, settings) || $.rightoffold(this, settings)) return;
          $(this).trigger("appear");
        });
        elements = $(elements).filter(function () {
          return !this.loaded;
        });
      });
    }

    this.each(function () {
      var element = this;
      $(element).attr("data-original", $(element).attr("src") || settings.placeholder).attr("src", settings.placeholder);
      element.loaded = false;
      $(element).one("appear", function () {
        if (!this.loaded) {
          $("<img />").on("load", function () {
            $(element).hide().attr("src", $(element).data("original"))[settings.effect](settings.effectspeed);
            element.loaded = true;
          }).attr("src", $(element).data("original"));
        }
      });
      if (settings.event !== "scroll") $(element).on(settings.event, function () {
        if (!element.loaded) $(element).trigger("appear");
      });
    });

    $(settings.container).trigger(settings.event);
    return this;
  };

  $.belowthefold = function (element, settings) {
    return ($(settings.container).height() + $(settings.container).scrollTop()) <= $(element).offset().top - settings.threshold;
  };

  $.rightoffold = function (element, settings) {
    return ($(settings.container).width() + $(settings.container).scrollLeft()) <= $(element).offset().left - settings.threshold;
  };

})(jQuery);

$(function () {
  $("img.lazy").lazyload({
    effect: "fadeIn",
    threshold: -50
  });
});
/*==================== Lazy Again ====================*/