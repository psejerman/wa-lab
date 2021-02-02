function showNavigator() {
  document.getElementById("navigator-type").innerHTML =
  "Browser: " + navigator.appName;
}



function loadContent(param) {
  // Instanz von XMLHttpRequest()
  var xhttp = new XMLHttpRequest();
  //Verhalten bei Eingang von Antwort
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("index-layout").innerHTML = this.responseText;
     // Ändern des Seitentitels
     document.getElementById("page_title").innerHTML = param.charAt(0).toUpperCase() + param.slice(1);
    }
  };
  xhttp.open("POST", param + '.html', true);
  xhttp.send();
}

function sendForm() {

  //Anzahl der Formularelemente bestimmen
  var elements = document.getElementById("formular1").elements;
  var formData ={};
  for(var i = 0 ; i < elements.length ; i++){
      var item = elements.item(i);
      formData[item.name] = item.value;
  }
  // Instanzieren
  var xhttp = new XMLHttpRequest();
  //Defaultverhalten bei Antwort
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //Schreiben der serverside Antwort ins demo-div
     document.getElementById("srv-answer").innerHTML = this.responseText;
    }
  };
  //Definieren der Verbindungsparameter zum Serversidescript
  xhttp.open("POST", "cgi-bin/backend.php", true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  //Dekodieren des JSON-Formulardaten in Stirngform und Absenden
  xhttp.send("json_data=" + JSON.stringify(formData));
}
