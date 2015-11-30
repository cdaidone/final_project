$(document).ready(function(){
	function hideAll(){
		$('#1').hide();
		$('#2').hide();
		$('#3').hide();
		$('#4').hide();
		$('#5').hide();
		$('#6').hide();
		}
	
	hideAll();
	
	$('#place').click(function(){
		hideAll();
		$('#1').slideToggle();
		});		
	});