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
//experts slider
jQuery.fn.scrollableAddClones = function() {
  var scrollable;
  if (!(scrollable = $(this).data('scrollable')) || !scrollable.getConf().circular)
    return;
  var nodes = scrollable.getItems();
  var length = nodes.length;
  var clonedClass = scrollable.getConf().clonedClass;
  var wrap = scrollable.getItemWrap(); 
  for (var i = 1; i <= 6; i++) {
    nodes.eq(i % length).clone().addClass(clonedClass).appendTo(wrap);
  }
}
if ($('.js-sl-scr').length > 0) {
  $('.js-sl-scr').scrollable({
    circular: true,
    size: 1,
    prev: '.js-sl-scr-prev',
    next: '.js-sl-scr-next',
    items: '.js-sl-scr-items'
  });
};
if ($('.js-sl-scr').length > 0) {
  $('.js-sl-scr').scrollableAddClones();
};
//agenda slider
if ($('.js-sl-ag').length > 0) {
  $('.js-sl-ag').scrollable({
    prev: '.js-sl-ag-prev',
    next: '.js-sl-ag-next',
    items: '.js-sl-ag-items'
  });
};
if ($('.js-sl-ag').length>0) {
  var scrollable_list = $('.js-sl-ag').data('scrollable');
  var number_list = 3;
  scrollable_list.onSeek(function(event, index) {
    if (this.getIndex() >= this.getSize() - number_list) {    
      $('.js-sl-ag-next').addClass('disabled');
    }
  });
  scrollable_list.onBeforeSeek(function(event, index) {
    if (this.getIndex() >= this.getSize() - number_list) { 
      if (index > this.getIndex()) {
        return false;
      }
    }
  });
};
//top opinions slider
if ($('.js-sl-to').length > 0) {
  $('.js-sl-to').scrollable({
    prev: '.js-sl-to-prev',
    next: '.js-sl-to-next',
    items: '.js-sl-to-items'
  });
};
if ($('.js-sl-to').length>0) {
  var scrollable_list_1 = $('.js-sl-to').data('scrollable');
  var number_list_1 = 4;
  scrollable_list_1.onSeek(function(event, index) {
    if (this.getIndex() >= this.getSize() - number_list_1) {    
      $('.js-sl-to-next').addClass('disabled');
    }
  });
  scrollable_list_1.onBeforeSeek(function(event, index) {
    if (this.getIndex() >= this.getSize() - number_list_1) { 
      if (index > this.getIndex()) {
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

//comments open block
$('.js-comm').click(function() {  
  var html_form = $('.js-add-comm');
  var html = html_form.html();
  //html_form.remove();
  $(this).parent().parent().parent().append(html_form);
})

});