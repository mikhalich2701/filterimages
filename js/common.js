$(document).ready(function (){
	
	$('.button__elem').click(function (){
		filterSite($(this).attr('rel'), );
	});
	function filterSite(mark) {
		var elemYes = $('.box > *').filter('.' + mark);
		var elemNot = $('.box > *').filter(':not(.' + mark + ')');
		if (mark == 'all') {
			$('.box__elem').stop().fadeTo(400, 1);
			$('.box__elem').css({'transform': 'translate(0px, 0px)'});
		} else {
			elemNot.stop().fadeTo(400, 0);
			elemYes.each(function (i, elem){
				var leftElem = $(elem).position().left;
				var topElem = $(elem).position().top;
				if ($('.box').width() > (elemYes.width() * 2)) {
					filterDesctop(4, i.toString(), leftElem, topElem, $(elem));
				} else if ($('.box').width() <= (elemYes.width() * 2) && $('.box').width() > elemYes.width()){
					filterDesctop(2, i.toString(), leftElem, topElem, $(elem));
				} else {
					filterDesctop(1, i.toString(), leftElem, topElem, $(elem));
				}
			});
			function filterDesctop(coif, index, leftElem, topElem, elem){
				$(elem).stop().fadeTo(400, 1, function(){
					var factorX = index % coif;
					var deltaX = elem.width() * factorX;
					var transX = ( - leftElem) + deltaX;
					elemNot.css({'transform': 'translate(0px, 0px)'});
					if (topElem > 0 && elemYes.length > coif && index > coif - 1) {
						if (factorX == 0) {
							var transY = - elem.height() * ((topElem / elem.height()) - (index / coif));
						} else {
							var transY = - elem.height() * ((topElem / elem.height()) - 1);
						}
					} else if (topElem > 0) {
						var transY = - topElem;
					} else {
						var transY = 0;
					}
					elem.css({'transform': 'translate(' +  transX + 'px, ' + transY + 'px)'});
					console.log('Индеск: ' + index + ' ' + 'Расстояние до верха: ' + topElem + 'Высота элемента: ' + elem.height());
				});
			}
		}
	}

	

});