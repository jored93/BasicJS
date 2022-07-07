const fs = require('fs');
const exec = require('child_process').exec; 

var data = 'data to append';

fs.writeFile('newfile.txt', data, (err) => {
    if (err) throw err;
});

exec('ls', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    let res = stdout.split("\n");
    res.pop();
    console.log(res.join().split(',').join(', '));
});