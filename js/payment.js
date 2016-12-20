var CreditCard = function($, m) {
  var init = function() {
    $('.credit-card.front input, .credit-card.front select').on('focus', front_focus);
    $('.credit-card.back input').on('focus', back_focus);
  };

  var front_focus = function() {
    $('.credit-card.back').addClass('unfocussed');
    $(this).closest('.credit-card').removeClass('unfocussed');
  };

  var back_focus = function() {
    $('.credit-card.front').addClass('unfocussed');
    $(this).closest('.credit-card').removeClass('unfocussed');
  };

  return {
    init: init
  }
}(jQuery, CreditCard || {});
CreditCard.init();