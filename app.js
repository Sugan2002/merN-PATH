const path = require('path');

const filename = path.basename('/path/to/demofile.txt');
console.log(filename)

const filedirectory = path.dirname( 'users/path/to/demofile.txt' )
console.log(filedirectory)

const fileJoin = path.join( 'users/admin/files", "index.html' )
console.log(fileJoin)

const fileresolve = path.resolve('users/admin/files", "index.html')
console.log(fileresolve)

const filesep = path.sep
console.log(filesep)  