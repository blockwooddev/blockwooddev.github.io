$('[data-toggle=collapse]').click(function(){
	
  	// toggle icon
  	$(this).find("i").toggleClass("icon-angle-right icon-angle-down");
  
});

$('.collapse').on('show', function (e) {
  
  	// hide open menus
  	$('.collapse').each(function(){
      if ($(this).hasClass('in')) {
          $(this).collapse('toggle');
      }
    });
  
})