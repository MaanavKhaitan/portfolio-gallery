$(document).ready(function(){
	$('#navbar a').on('click', function(){
		
		$('#navbar li.current').removeClass('current');
		$(this).parent().addClass('current');

		$('h3#tagline').text($(this).text());

		var category = $(this).text().toLowerCase().replace(' ','-');

		if(category == 'all-projects'){
			$('.gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('.gallery li').each(function(){
				if (!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			})
		}

		return false;
	})

})

