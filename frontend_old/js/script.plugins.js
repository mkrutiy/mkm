function cstheme_parallax() {
	"use strict";
	
	/* ------------------------------------------------
	    Parallax
		------------------------------------------------ */

	   if($(".blackout[class*='bg'],.blackout2[class*='bg']").length){

	  	  $(".blackout[class*='bg'],.blackout2[class*='bg']").each(function(){

	     $(this).parallax("50%", 0.2);

	    });

	   }
		/* ------------------------------------------------
		    End Parallax
		------------------------------------------------ */
}

;(function($){

	"use strict";

	$(document).ready(function(){

		/* ------------------------------------------------
				magnificPopup
		------------------------------------------------ */

			$('.project_container').magnificPopup({
				delegate: '.project_btn',
				type: 'image',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				}
			});

        /* ------------------------------------------------
				End of magnificPopup
		------------------------------------------------ */

	});

	$(window).load(function(){

		cstheme_parallax();

	});
	
	jQuery(window).resize(function(){
	
		cstheme_parallax();
		
	});

})(jQuery);