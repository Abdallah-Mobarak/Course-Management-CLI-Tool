import {Command}  from 'commander';
import fs from 'fs';
import inquirer from 'inquirer';
import { json } from 'stream/consumers';

const program = new Command();
const fliePath = './courses.json';
const question =  [ {
    type: 'input',
    name: 'title',
    message:"enter course title",
    },
    {
    type: 'number',
    name: 'price',
    message:"enter course price", 
    }
]



program
  .command('add')
  .alias('a')
  .name('courses')
  .description('add a course')
  .action(()=>{
    inquirer
    .prompt(question)
    .then((answers) => {
      console.log(answers)
        if(fs.existsSync(fliePath)){
            fs.readFile(fliePath,'utf-8',(err,fileContent)=>{
                if(err){
                    console.log("error"+ err);
                    process.exit();
                }
                console.log('fileContent ==>',fileContent);
                const fileContentAsJson = JSON.parse(fileContent);
                fileContentAsJson.push(answers);
                fs.writeFile(fliePath,JSON.stringify(fileContentAsJson),'utf-8',()=>{
                    console.log('add corse done');
                })

            })
        }else{
            fs.writeFile(fliePath,JSON.stringify([answers]),'utf-8',()=>{
                console.log('add corse done');
       })
        }

    
    })
  })
 
  program
  .command('list')
  .alias('l')
  .description('list all course')
  .action(()=>{
    fs.readFile(fliePath,'utf-8',(err,content)=>{
        if(err){
            console.log("error"+err);
            process.exit;
        }
        console.table(JSON.parse(content));

    })
  })

program.parse(process.argv);
