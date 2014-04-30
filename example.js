$(document).ready(function(){
	$("#year").text(new Date().getFullYear());
	
	//Set a default style from the beginning
	//setTimeout( function(){ defaultStyle(false, "http://git-scm.com/images/logo@2x.png", "Default text", "@", "blue", "red", "yellow", "25px"); }, 1000 );
		
	$("#removeLeftIcon").click(function(){
		removeLeftIcon();
	});
	
	$("#changeLeftIcon").click(function(){
		changeLeftIcon($("#urlLeftIcon").val());
	});	
	
	$("#centerTextButton").click(function(){
		changeCenterText($("#centerText").val());
	});
	
	$("#changeRightIcon").click(function(){
		changeRightIcon($("#rightIcon").val());
	});
	
	$("#changeBorderColor").click(function(){
		changeBorderColor($("#borderColor").val());
	});
	
	$("#changeBackgroundColor").click(function(){
		changeBackgroundColor($("#backgroundColor").val());
	});
	
	$("#changeTextColor").click(function(){
		changeTextColor($("#textColor").val());
	});
	
	$("#changeTextSize").click(function(){
		changeTextSize($("#textSize").val());
	});
});