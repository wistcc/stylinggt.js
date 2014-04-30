$(document).ready(function(){
	$("#year").text(new Date().getFullYear());
	
	//Set a default style from the beginning
	//setTimeout( function(){ defaultStyle("http://git-scm.com/images/logo@2x.png", "Default text", "@", "blue"); }, 1000 );
		
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

function defaultStyle(leftIcon, centerText, rightIcon, borderColor){
	changeLeftIcon(leftIcon);
	changeCenterText(centerText);
	changeRightIcon(rightIcon);
	changeBorderColor(borderColor);
}

function removeLeftIcon(){
	$("#google_translate_element img").eq(0).remove();
}

function changeLeftIcon(url){
	$("#google_translate_element img").eq(0).css("background-image", "");
	$("#google_translate_element img").eq(0).attr("src", url);
	$("#urlLeftIcon").val('');
}

function changeCenterText(text){
	$("#google_translate_element span").eq(1).text(text);
	$("#centerText").val('');
}

function changeRightIcon(text){
	$("#google_translate_element span").eq(3).text(text);
	$("#rightIcon").val('');
}

function changeBorderColor(color){
	$("#google_translate_element span").css("border-color", color);
	$("#google_translate_element div").eq(1).css("cssText", "border-color: " + color + " !important;");
	$("#borderColor").val('');
}

function changeBackgroundColor(color){
	$("#google_translate_element div").eq(1).css("cssText", "background-color: " + color + " !important;");
	$("#backgroundColor").val('');
}

function changeTextColor(color){
	$("#google_translate_element a").css("color", color);
	$("#textColor").val('');
}

function changeTextSize(size){
	$("#google_translate_element a").css("font-size", size);
	$("#textSize").val('');
}