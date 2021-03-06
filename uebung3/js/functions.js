function initialize() {
  //Debugnachricht
  console.log(getFunctionname(arguments.callee.toString()));
  document.getElementById("navigator-type").innerHTML =
  'Browser: <span class="badge bg-info">'
  + navigator.appName
  + '</span>';

  loadContent('home');
  setCookie();
  getCookie();
}

function setCookie() {
  //Debugnachricht
  console.log(getFunctionname(arguments.callee.toString()));
  document.cookie = 'username=Lassma Ballernsson';
}

function getCookie() {
  //Debugnachricht
  console.log(getFunctionname(arguments.callee.toString()));
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  document.getElementById('visitor-name').innerHTML =
    '<span>Cookie:</br> '+ cookieArray + '</span>';
}

function loadContent(param) {
  //Debugnachricht
  console.log(getFunctionname(arguments.callee.toString()));
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
  //Debugnachricht
  console.log(getFunctionname(arguments.callee.toString()));
  //Anzahl der Formularelemente bestimmen
  var elements = document.getElementById('formular1').elements;
  //formData-Objektdeklaration;
  var formData = {};
  // Kontruieren des Formularobjekts inklusive Eingabewerte
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
     document.getElementById('srv-answer').innerHTML =
     '<div class="alert alert-success" role="alert"><pre> Serverantwort:'
      + JSON.stringify(JSON.parse(this.responseText), undefined, 3)
      + '</pre></div>';
    }
  };
  //Definieren der Verbindungsparameter zum Serversidescript
  xhttp.open("POST", "cgi-bin/backend.php", true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  //Dekodieren des JSON-Formulardaten in Stirngform und Absenden
  xhttp.send("json_data=" + JSON.stringify(formData));
}

function resetForm() {
  //Debugnachricht
  console.log(getFunctionname(arguments.callee.toString()));
  var form = document.forms['formular1'];
  form['email'].value = 'lasse.bluten@gmx.de';
  form['name'].value = 'Lasse Bluten';
  form['password'].value = 'Test1234!';
  form['date'].value = '2021-02-02';
  form['gender'].value = 'other';
}

function canvasAnimation() {
  //Debugnachricht
  console.log(getFunctionname(arguments.callee.toString()));
  var canvas = document.getElementById("animation");
  var context = canvas.getContext("2d");
  var coords = [
    [150, 0],
    [150, 100],
    [0, 100],
    [0, 0]
  ];
  // Cursor reset
  context.moveTo(0, 0);

  var i = 0;
  setInterval(function(){
    if(i == coords.length) {
      return 0;
    }
    console.log("Durchlauf " + i);
    context.lineTo(coords[i][0], coords[i][1]);
    context.moveTo(coords[i][0], coords[i][1]);
    context.stroke();
    i++;

  }, 2000);
}

function deleteCanvas() {
  //Debugnachricht
  console.log(getFunctionname(arguments.callee.toString()));
  var canvas = document.getElementById("animation");
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
}

function testDebugger() {
  //Debugnachricht
  console.log(getFunctionname(arguments.callee.toString()));
  var wert = "Hallo";
  console.log(wert);
  debugger;
  wert += 1;
  console.log(wert);
  debugger;
}
function getFunctionname(funcName) {
  funcName = funcName.substr('function '.length);
  funcName = funcName.substr(0, funcName.indexOf('('));
  return 'Aufruf von:' + funcName;
}
