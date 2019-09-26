function validate()								 
{ 
    console.log("hello")
	var usd = document.forms["Assessment1"]["meme_name"];
	var name = document.forms["Assessment1"]["mem_name"];			 
	var email = document.forms["Assessment1"]["emailid"]; 
	var Sex = document.forms["Assessment1"]["gender"]; 
    var password = document.forms["Assessment1"]["password"];
    var confirm = document.forms["Assessment1"]["cpassword"]; 
	var country = document.forms["Assessment1"]["country"];
    var lang = document.forms["Assessment1"]["lang"];
    var address = document.forms["Assessment1"]["add"];
    var zip = document.forms["Assessment1"]["contact"]

	if(usd.value == "")
	{
		window.alert("Please enter the userid.");
		usd.focus();
		return false;
    }
    var us = usd.value;
	if((us.length<5)||(us.length>12))
	{
		window.alert("Userid must be between 5 to 12");
		usd.focus;
		return false;
	}
	if (name.value == "")								 
	{ 
		window.alert("Please enter your name."); 
		name.focus(); 
		return false; 
	}
	if (country.value == "")
	{
		window.alert("Please Select your country");
		country.focus();
		return false;
	} 
	if (email.value == "")								 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (email.value.indexOf("@", 0) < 0)				 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (email.value.indexOf(".", 0) < 0)				 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

    if (password.value == "")					 
	{ 
		window.alert("Please enter your password"); 
		password.focus(); 
		return false; 
	} 
	 var p= password.value;
	 if((p.length<7)||(p.length>12))
	 {
		 window.alert("Password should be between 7 and 12");
		 password.focus();
		 return false;
	 }
    
    if (confirm.value != password.value)
    {
        window.alert("Your password should match");
        confirm.focus();
        return false;
    }


	return true; 
}