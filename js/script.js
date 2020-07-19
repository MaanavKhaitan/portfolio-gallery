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

	$('.gallery li').on('mouseenter', function(){
		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');

		if(title == null){
			title = '';
		}

		if(desc == null){
			desc = 'Click to enlarge';
		}

		$(this).append('<div class="overlay"></div')

		var overlay = $(this).children('.overlay')

		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>')

		overlay.fadeIn(800)
	})

	$('.gallery li').on('mouseleave', function(){
		$(this).append('<div class="overlay"></div')

		var overlay = $(this).children('.overlay')

		overlay.fadeOut(400)
	})

})

