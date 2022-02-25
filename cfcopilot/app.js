function procesar(){
    let x = document.getElementById("index").value;

    document.getElementById("l1").innerHTML = x;
    document.getElementById("l2").innerHTML = x;
    document.getElementById("l3").innerHTML = x;
    document.getElementById("l4").innerHTML = x;
}

function procesar_mb(){
    let x = document.getElementById("index").value;
    let y = document.getElementById("mb_input").value;
    document.getElementById("l1v").innerHTML = x;
    
    let mb_client = y * 1024
    document.getElementById("l2v").innerHTML = y;
    document.getElementById("l3v").innerHTML = mb_client;
}

function procesar_pon(){
    let z = document.getElementById("pon_input").value;

    document.getElementById("l1p").innerHTML = z;
    document.getElementById("l2p").innerHTML = z;
    document.getElementById("l3p").innerHTML = z;
    document.getElementById("l4p").innerHTML = z;
}

function cpConfigWifi(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerText);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  function cpConfigWan(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerText);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  function cpBasicInfo(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerText);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  function cpRunConfig(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerText);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  function cpConfigMb(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerText);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }


  function cpFwInfo(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerText);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  function cpRtInfo(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerText);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  function cPonInfo(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerText);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  function cPonDesc(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerText);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }