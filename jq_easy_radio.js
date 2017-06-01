/*Easy Radio Button
jQuery plugin (http://jquery.com/)
jq_easy_radio
Copyright Lilian Genaro Motti
IRIT - Toulouse - France
Last update 11/02/2014
*/

(function($){
	$.fn.easy_radio=function(){
		$(this).click(function(e){
			e.preventDefault();
			$(this).children().prop("checked", true);
		});
		return $(this);
	}
}(jQuery));
