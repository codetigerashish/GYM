






function validation1()
{
	var t1=document.frm.t1.value;
	var t2=document.frm.t2.value;
    var t3=document.frm.t3.value;
	var t4=document.frm.t4.value;
	document.getElementById("error1").innerHTML="";
	document.getElementById("error2").innerHTML="";
    document.getElementById("error3").innerHTML="";
    document.getElementById("error4").innerHTML="";
	if(t1=="")
	{
		document.getElementById("error1").innerHTML="<font color='red'>You Must Have enter name</font>";
		return false;
	}
	else
	{
		document.getElementById("error1").innerHTML="";
	}
	// document.getElementById("error2").innerHTML="";
	if(t2=="")
	{
		document.getElementById("error2").innerHTML="<font color='red'>You Must Have Enter Age</font>";
		return false;
	}
	else
	{
		document.getElementById("error2").innerHTML="";
	}
    if(t3=="")
	{
		document.getElementById("error3").innerHTML="<font color='red'>You Must Have enter Gender</font>";
		return false;
	}
	else
	{
		document.getElementById("error3").innerHTML="";
	}
    if(t4=="")
	{
		document.getElementById("error4").innerHTML="<font color='red'>You Must Have enter mobile no</font>";
		return false;
	}
	else
	{
		document.getElementById("error4").innerHTML="";
	}
   

	if(t1=="")
	{
		alert("You must have enter name");
		document.frm.t1.focus();
		return false;
	}
	if(t2=="")
	{
		alert("You must have enter age");
		document.frm.t2.focus();
		return false;
	}
    if(t3=="")
	{
		alert("You must have enter Gender");
		document.frm.t3.focus();
		return false;
	}
	if(t4=="")
	{
		alert("You must have enter mobile");
		document.frm.t4.focus();
		return false;
	}
	if(isNaN(t1)!=true)
	 {
	 	alert("Name Should be in Alphabets");
	 	document.frm.t1.value="";
	 	document.frm.t1.focus();
		 return false;
	}
	if(isNaN(t2)==true)
	{
		alert("Age Should be in Digit And Number");
		document.frm.t2.value="";
		document.frm.t2.focus();
		return false;
	}
    if(isNaN(t3)!=true)
	 {
	 	alert("Gender Should be in Alphabets");
	 	document.frm.t3.value="";
	 	document.frm.t3.focus();
		 return false;
	}
    if(isNaN(t4)==true)
	 {
	 	alert("mobile no Should be in Digit");
	 	document.frm.t4.value="";
	 	document.frm.t4.focus();
		 return true;
	}
	return true;
}
function check1()
{
	// var Name=document.frm.t1.value;
	var age=document.frm.t2.value;
	if(validation1()==true)
	{
		if(eval(age)>=13)
		{
			document.frm.t5.value=" Eligible for Gym "+age; 
		}
		else
		{
			document.frm.t5.value="Not Eligible";
		}
	}
}
