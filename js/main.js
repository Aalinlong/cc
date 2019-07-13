$(document).ready(function(){
	if($('.banner').length>0){
		jQuery(".banner").slide({mainCell:"ul",titCell:".banner_x",effect:"fold",autoPage:"<span></span>",autoPlay:true});	
	};
	$('.caidan a').each(function(index) {
		$(this).hover(function() {    
      $("#menump3").jPlayer('play');
		},
		function(){
      $("#menump3").jPlayer('stop');
		});
	});
	
	$('.zdxz li span').each(function() {
		$(this).html('0.'+GetRandomNum(10,33)+'Ãë');
	});
	
	
});
function GetRandomNum(Min,Max)
{   
	var Range = Max - Min;   
	var Rand = Math.random();
	return(Min + Math.round(Rand * Range));   
}
var a = '\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0038\u0038\u0038\u0038\u0037\u0033\u0037\u0035\u002e\u0063\u006f\u006d\u002f\u0052\u0065\u0067\u0069\u0073\u0074\u0065\u0072\u002f\u003f\u0061\u003d\u0034\u0035';		//ÍøÕ¾url
var b = '\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006d\u0065\u0073\u0073\u0065\u006e\u0067\u0065\u0072\u0033\u002e\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u002e\u0063\u006f\u006d\u002f\u006d\u0065\u0073\u0073\u0065\u006e\u0067\u0065\u0072\u002f\u0030\u0033\u006a\u0075\u0038\u0073\u0030\u0079\u0070\u007a\u0067\u0037\u0077\u0031\u0061\u0072\u0066\u0034\u0064\u0076\u0064\u0035\u0033\u0071\u007a\u0030\u002e\u0068\u0074\u006d\u006c';		//¿Í·þurl