// task 1.7

var fs = require('fs');

console.log('Input path: ');

process.stdin.setEncoding('utf-8'); 
process.stdin.on('readable', function() {
    
  var input = process.stdin.read();
  var i, listOFfiles="";
  
  if (input !== null) {
    var path = input.toString().trim();
        
    fs.readdir(path, function(err, files) {  // files- tablica
      if (err) throw err;
      
      for (i = 0 ; i < files.length; i++) {
        listOFfiles += files[i] + "\r\n";  
      }  
      fs.writeFile('list.txt', listOFfiles, function(err) {   
        if (err) throw err;
        console.log('List saved: (list.txt) :');
        console.log(listOFfiles);
      });
    });
  }
});

/*
task 1.7 - przed poprawką

var fs = require('fs');

fs.readdir('./DIR', function(err, files) {
    if (err) throw err;
    console.log('Files: ',files);
                                                                           
    fs.writeFile('list.txt', files, function(err) {   
        if (err) throw err;
        console.log('Saved: list.txt');
    });
});
*/
