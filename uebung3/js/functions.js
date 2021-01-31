function load(param) {
  // Instanz von XMLHttpRequest()
  var xhttp = new XMLHttpRequest();
  //Verhalten bei Eingang von Antwort
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("index-layout").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", param + '.html', true);
  xhttp.send();
}

function loadContent() {
  if (this.readyState == 4 && this.status == 200) {
   document.getElementById("index-layout").innerHTML = this.responseText;
  }
};
