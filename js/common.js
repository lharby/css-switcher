$(document).ready(function(){
	
	const changeCSS = function(){
		// global vars
		const triggers = $('.triggers');
		const cssTrigger = triggers.find('.cssTrigger');
		const css1 = $('.css1');
		const css2 = $('.css2');
		const empty = '';
		const css1URL = 'css/main.css';
		const css2URL = 'css/swap.css';
		const triggerCSS1 = 'triggerCSS1';
		const triggerCSS2 = 'triggerCSS2';
		const activeClass = 'active';
		let cssIsSet = localStorage.getItem('chCSS');
		const toggleCSS = function(){
			cssTrigger.on('click',function(){
				cssTrigger.removeClass(activeClass);
				$(this).addClass(activeClass);
				if($(this).hasClass(triggerCSS2)){
					css1.attr('href', empty);
					css2.attr('href', css2URL);
					localStorage.setItem('chCSS', 'css2'); 
				}else{
					css1.attr('href', css1URL);
					css2.attr('href', empty);
					localStorage.setItem('chCSS', 'css1');
				}
				return false;
			});
		}();
		const checkCSSIsSet = function(){
			if(cssIsSet !== null || cssIsSet !== undefined || cssIsSet !== ''){
				if(cssIsSet == 'css2'){
					css1.attr('href',empty);
					css2.attr('href',css2URL);
					cssTrigger.removeClass(activeClass);
					$('.' +triggerCSS2).addClass(activeClass);
				}else{
					css1.attr('href',css1URL);
					css2.attr('href',empty);
					cssTrigger.removeClass(activeClass);
					$('.' +triggerCSS1).addClass(activeClass);
				}
			}
		}();
	}();

});