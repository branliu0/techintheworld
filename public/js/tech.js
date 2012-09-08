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
  });

  function scrollTo(element) {
    $("html, body").animate({
      scrollTop: element.offset().top
    }, 600, "swing");
  }
})(window.jQuery);

