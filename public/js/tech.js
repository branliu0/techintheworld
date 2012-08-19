(function($) {
  $(document).ready(function() {

    var SLIDESHOW_INTERVAL = 10000;

    // Images
    var image_ids = ["landing_img1", "landing_img2"];
    var image_idx = 0;
    setInterval(function() {
      var cur_id = image_ids[image_idx];
      image_idx = (image_idx + 1) % image_ids.length;
      var next_id = image_ids[image_idx];
      // Append next slide
      $("#landing").append($("#landing_preparation #" + next_id).clone());
      $("#landing #" + cur_id).slideUp(2000, function() { $(this).remove(); });
    }, SLIDESHOW_INTERVAL);

    /*

    // Fixed TOC after scrolling to it
    $.waypoints.settings.scrollThrottle = 10;
    $("#toc").waypoint({
      handler: function(event, direction) {
        $(this).closest(".sidebar-fixed").toggleClass("fixed", direction === "down");
      },
      offset: 100
    });

    // Scroll to element on click
    $("#toc li").click(function(e) {
      $(this).siblings("li").removeClass("selected");
      $(this).addClass("selected");
      scrollTo($("#" + $(this).data("target")));
    });

    // Update TOC based on scroll waypoints
    // Immediately update on scrolling down
    $(".scroll-target").waypoint({
      handler: function(event, direction) {
        if (direction === "down") {
          $("#toc li").removeClass("selected");
          $("#toc li[data-target='" + this.id + "']").addClass("selected");
        }
      },
      offset: 0
    });
    // Scroll a bit above the header before updating for scrolling up
    $(".scroll-target").waypoint({
      handler: function(event, direction) {
        if (direction === "up") {
          $("#toc li").removeClass("selected");
          $("#toc li[data-target='" + this.id + "']").prev().addClass("selected");
        }
      },
      offset: 0
    });
    */
  });

  function scrollTo(element) {
    $("html, body").animate({
      scrollTop: element.offset().top
    }, 600, "swing");
  }
})(window.jQuery);

