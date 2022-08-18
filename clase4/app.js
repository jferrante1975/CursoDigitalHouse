const fs = require('fs');

fs.readFile('prueba.txt', 'utf8', function(err, data){
    if (err) throw err;  
    // Display the file content
    console.log(data);
});
  
console.log('readFile called');