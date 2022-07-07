const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
    let {statusCode} = resp
    let contentType = resp.headers['content-type']
    resp.setEncoding('utf-8')
    let data = '';

    resp.on('data', (d) => {data += [d]})

    resp.on('end', () => {
    let parsedData = data.split(",")
    .filter(data =>!data.indexOf(" age="))
    .map(data => data.replace(" age=",""))
    .map(data => parseInt(data))
    .filter(data => { return (data >= 50)}).length
    console.log(parsedData);
    })
    
    resp.on("error", (e) => {console.log("error", e)})
});