var myHeaders = new fetch.Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic VUVFU0FQSTpVRUVTMjAyMg==");
myHeaders.append("Cookie", "PHPSESSID=09nlm51v08smn3ilq0raf5o341");

var raw = JSON.stringify({
    "accion": 2,
    "token": "588d1888c2f6920233743f25c56898a3",
    "parametros": {
    "id_prueba": 956
    }
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://webservices.psigmaonline.com/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));