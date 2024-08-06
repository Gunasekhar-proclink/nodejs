const fs = require("fs"); 

// fs.writeFile("names.txt" , "Gunasekhar" , (err) => {
//     console.log("completed writing") ; 
// })

// fs.writeFile("names.txt" , "Gunasekhar" , () => {
//     console.log("completed writing") ; 
// })

const [ , , num] = process.argv

a = 1 ; 

for (let i = 0 ; i < (+num) ; i++){
    fs.writeFile(`backup/text-${a}.html` , "Live more , worry less" , (err) => {
        console.log("completed writing")
    })
    a +=1 ; 
}