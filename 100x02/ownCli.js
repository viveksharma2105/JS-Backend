const fs = require("fs");
const {Command} = require('commander');
const program = new Command();


program
.name('File related')
.description('CLI todo filr based task')
.version('0.8.0');

program.Command('count')
.description('count the number of lines in a file')
.argument('<file>',  'file to count')
.action((file)=>{
    fs.readFile(file , 'utf8', (error , data)=>{
        if(error){
            console.log(error);
            
        }else{
            const lines = data.split('/n').length;
            console.log(`There are ${lines} lines in  ${file}`);
            
        }
    })
})


