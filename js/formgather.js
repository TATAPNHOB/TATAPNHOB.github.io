function form_gather()
{
	var fio = document.forms.application.fio.value;
	var town = document.forms.application.town.value;
	var part = document.forms.application.part;
	var hobbies = document.forms.application.hobbies.value;
	var disname = document.forms.application.disname.value;
	var date = document.forms.application.birthdate.value;
	var radiotrue = false;
	var allset = false;
	for(var i = 0;i<part.length; i++)
	{
		if(part[i].checked == true)
		{
			radiotrue = true;
			break;
		}
	}
	if((fio != "") && (town !="") && (disname != "") && (date != "") && (radiotrue))
	{
		allset = true;
	}
	else 
	{
		allset = false;
		alert("Не все обязательные поля имеют значения.");
	}
	return allset;
}