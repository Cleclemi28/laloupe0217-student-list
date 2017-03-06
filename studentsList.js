var request = new XMLHttpRequest();

request.open('GET', 'student.json', true);

request.onreadystatechange = function(aEvt) {
    if (request.readyState == 4) {
        if (request.status == 200){
					var students = JSON.parse(request,responseText);
					console.log(students)
				}else{
					  dump("Erreur pendant le chargement de la page.\n");
				}

    }
};
request.send();
