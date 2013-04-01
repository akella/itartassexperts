$(document).ready(function() {

//slider general
if ($('.js-sl').length > 0) {
  $('.js-sl').each(function() {
    var slider_prev = $(this).prev().children().children('.js-sl-prev');
    var slider_next = $(this).prev().children().children('.js-sl-next');
    $(this).cycle({ 
      fx: 'scrollHorz',
      timeout: 0,
      speed: 300,
      prev: slider_prev,
      next: slider_next, 
      nowrap: 1,
      after: function(curr, next, opts, fwd) {
        var height_wrap = $(this).height();        
        $(this).parent().animate({height: height_wrap}, 300); 
        var height_wrap = $(this).height();
        var index = opts.currSlide;
        var counter = opts.slideCount;
        if (index == 0) {
          slider_prev.addClass('disabled');
        }
        else {
          slider_prev.removeClass('disabled');
        };
        if (counter - 1 == index) {
          slider_next.addClass('disabled');
        }
        else {
          slider_next.removeClass('disabled');
        };
      }
    });
  });
};
$('.js-sl-count .js-sl-prev').click(function() {
  if (!$(this).hasClass('disabled')) {
    var count = $(this).next().children('span').html();
    count = parseInt(count);
    count--;
    $(this).next().children('span').html(count);
  };
});
$('.js-sl-count .js-sl-next').click(function() {
  if (!$(this).hasClass('disabled')) {
    var count = $(this).prev().children('span').html();
    count = parseInt(count);
    count++;
    $(this).prev().children('span').html(count);
  };
});
if ($('.js-sl-scr').length > 0) {
  $('.js-sl-scr').scrollable({
    prev: '.js-sl-scr-prev',
    next: '.js-sl-scr-next',
    items: '.js-sl-scr-items'
  });
};
if ($('.js-sl-scr').length > 0) {
  // Get the Scrollable control
  var scrollable_list_1 = $('.js-sl-scr').data('scrollable');
  // Set to the number of visible items
  var number_list = 6;
  // Handle the Scrollable control's onBeforeSeek event
  scrollable_list_1.onBeforeSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list) { 
      // Check to see if we're trying to move forward
      if (index > this.getIndex()) {
        // Cancel navigation
        return false;
      }
    }
  });
};



//enter
$('.js-enter-open').click(function() {
  $('.popup_enter, .popup-bg').fadeIn();
  return false;
});
$('.js-enter-close, .popup-bg').click(function() {
  $('.popup_enter, .popup-bg').fadeOut();
  return false;
});

});