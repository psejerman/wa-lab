function ajax(param) {
  // Instanz von XMLHttpRequest()
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("index-layout").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", param + '.html', true);
  xhttp.send();
}
