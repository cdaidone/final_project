$(document).ready(function(){
	
	function hideAll() {
		$('#1').hide();
		$('#2').hide();
		$('#3').hide();
		$('#4').hide();
		$('#5').hide();
		$('#6').hide();
		$('.fresh-table, .full-color-blue').hide();
	}
	
	hideAll();
	
	$("#1st").click(function (){
		$("#1").slideToggle("slow", function (){
		});
	});
	$("#2nd").click(function (){
		$("#2").slideToggle("slow", function (){
		});
	});
	$("#3rd").click(function (){
		$("#3").slideToggle("slow", function (){
		});
	});
	$("#4th").click(function (){
		$("#4").slideToggle("slow", function (){
		});
	});
	$("#5th").click(function (){
		$("#5").slideToggle("slow", function (){
		});
	});
	$("#6th").click(function (){
		$("#6").slideToggle("slow", function (){
		});
	});
		
		$("#showtable").click( function (){
			$(".fresh-table, .full-color-blue").slideToggle(function () {
			});
		});
});