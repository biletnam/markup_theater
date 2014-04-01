//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {
  
  setSectionHeight();

  $('.form-el.__phone').mask('+7 (999) 999-9999');

  //
  // .. Page preloader
  //
  $('body').queryLoader2({
      barColor: '#aa2f42',
      backgroundColor: '#fffdeb',
      percentage: true,
      barHeight: 1,
      completeAnimation: "grow",
      minimumTime: 100
      // onComplete: function() {
      //   $('.screen__1').find('.screen_cnt').fadeIn();        
      // }
  });  
  
  //
  // .. Send email
  //
  $('#feedback-form-submit').click(function() {
    $.ajax({
      type: 'POST',
      url:  '/mail.php',
      data: $('#feedback-form').serialize(),
      success: function(response) {
        $.arcticmodal({
          type: 'ajax',
          url: '/data/dialogs/send_success.html'
        });
        $('#feedback-form')[0].reset();
      },
      error: function() {
        $.arcticmodal({
          type: 'ajax',
          url: '/data/dialogs/send_error.html'
        });
      }
    });
    return false;
  });  

  
  
  //****************************************************************************************************
  //
  // .. SCROLL
  //
  //****************************************************************************************************
  $(window).scroll(function() {});



  //****************************************************************************************************
  //
  // .. RESIZE
  //
  //****************************************************************************************************
  $(window).smartresize(function() {
    
    setSectionHeight();
    
  });
  
});



//****************************************************************************************************
//
// .. LOAD
//
//****************************************************************************************************
$(window).load(function() {});



//****************************************************************************************************
//
// .. FUNCTION
//
//****************************************************************************************************
function setSectionHeight() {
  var windowH = $(window).outerHeight();
  $('.section.__full').each(function() {
    $(this).height(windowH);
  });  
}