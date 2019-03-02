/*
Name: Isai Chavarri
Date Created: 3/1/2019
Most Recent Revision: 3/1/2019
*/
function getValue(formName){
	var elements = document.getElementsByName(formName);
	var checkValues=[];
	for(var i=0; i< elements.length; i++){
		if(elements[i].checked){
			checkValues.push(elements[i].value);
		}
	}
	return checkValues;
}

function contactVal(){
	var customerName = document.forms['contactInfo']['fullName'].value;
	if(customerName==''){
		alert("Please enter your full name");
		
		document.forms['contactInfo']['fullName'].focus();
		return false;
	}
	var customerEmail = document.forms['contactInfo']['email'].value;
	var substringTest='@'
	if(customerEmail=='' || customerEmail.indexOf(substringTest)==-1){
		alert('Please enter a valid email address');
		
		document.forms['contactInfo']['email'].focus();
		
		return false;
	}
	
	var customerPhone = document.forms['contactInfo']['phone'].value;
	if(customerPhone=='' || isNaN(customerPhone) || customerPhone.length!==10){
		alert('Please enter a valid phone number');
		document.forms['contactInfo']['phone'].focus();
		
		return false;
	}
	
	var customerInquiry = document.forms['contactInfo']['inquiry'].value;
	
	var customerInfo = document.forms['contactInfo']['info'].value;
	
	var customerChoice = getValue('questionnaire')[0];
	
	var bestDay = getValue('workdays');
	if(bestDay.length === 0){
		alert("Please choose which days we can contact you.")
	}
	document.getElementById('validate').innerText = "Thank you so much for your feedback! We have successfully recieved it."
	return false;
}