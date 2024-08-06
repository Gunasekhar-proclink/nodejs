// const fs = require("fs")

// data = "Guna sekhar Guna Sekhar"

// fs.readFile("./names.txt" , "utf-8" , (err , data) => {
//     if (err) {
//         console.log("oops:" , err) ; 

//     //logic for retry with another file 
//     }else{
//     console.log(data); 
//     }
// })

// fs.appendFile("names.txt" , "\n" + data  , (err) => {
//     if (err){
//         console.log("oops" , err) ; 
//     }
//     else{
//         console.log(data) ; 
//     }
// })

const fs = require("fs");

const data = "Good Morning";


// fs.readFile("names.txt" , "utf-8" , (err, beforedata) =>{
//     if (err){
//         console.log("oops:", err)
//     }else{
//         const updatedData = data + "\n" + beforedata; 
//         fs.writeFile("names.txt" , updatedData, (err)=>
//         {
//             if (err){
//                 console.log("oops:" , err); 
//             } 
//             else{
//                 console.log("successful")
//             }
//         })
//     }
// })

// 
// fs.readdir("./backup" , (err , files)=> {
//     if(err){
//         console.log(err); 
//     }
//     console.log(files); 

// })