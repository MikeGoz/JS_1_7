// task 1.7

var fs = require('fs');

fs.readdir('./DIR', function(err, files) {
    if (err) throw err;
    console.log('Files: ',files);
                                                               //spacja dla przejrzystości, jakby co ;)             
    fs.writeFile('list.txt', files, function(err) {   
        if (err) throw err;
        console.log('Saved: list.txt');
    });
});