function defaultStyle(remove, leftIcon, centerText, rightIcon, borderColor, backgroundColor, textColor, textSize){
	if(remove){
		removeLeftIcon();
	}
	changeLeftIcon(leftIcon);
	changeCenterText(centerText);
	changeRightIcon(rightIcon);
	changeBorderColor(borderColor);
	changeBackgroundColor(backgroundColor);
	changeTextColor(textColor);
	changeTextSize(textSize);
}

function removeLeftIcon(){
	$("#google_translate_element img").eq(0).remove();
}

function changeLeftIcon(url){
	if(url != ''){
		$("#google_translate_element img").eq(0).css("background-image", "");
		$("#google_translate_element img").eq(0).attr("src", url);
		$("#urlLeftIcon").val('');
	}
}

function changeCenterText(text){
	if(text != ''){
		$("#google_translate_element span").eq(1).text(text);
		$("#centerText").val('');
	}
}

function changeRightIcon(text){
	if(text != ''){
		$("#google_translate_element span").eq(3).text(text);
		$("#rightIcon").val('');
	}
}

function changeBorderColor(color){
	if(color != ''){
		$("#google_translate_element span").css("border-color", color);
		$("#google_translate_element div").eq(1).css("border-color", color);
		$("#borderColor").val('');
	}
}

function changeBackgroundColor(color){
	if(color != ''){
		$("#google_translate_element div").eq(1).css("background-color", color);
		$("#backgroundColor").val('');
	}
}

function changeTextColor(color){
	if(color != ''){
		$("#google_translate_element a").css("color", color);
		$("#textColor").val('');
	}
}

function changeTextSize(size){
	if(size != ''){
		$("#google_translate_element a").css("font-size", size);
		$("#textSize").val('');
	}
}