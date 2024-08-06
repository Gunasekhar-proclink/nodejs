
const variable = 'hello world '
const double = (num) => num * 2 

const variable1 = "Guna Sekhar"

// named Export 
export {double , variable }

//Default Export - only one at a time 
export default variable1 ; 









// console.log(double(2))

// console.log(process.argv)

// REading values from console 
// const [ ,  , num] = process.argv ; 
// console.log(double(num))

// const sum =( a , b) => (+a) + (+b)
// const [ , , a , b ] = process.argv 
// console.log(sum(a,b))

// const os = require("os") ; 



// console.log(os.freemem()) ; 
// console.log(Math.round(os.freemem() /1024 / 1024 / 1024) + "GB") ; 
// console.log(Math.round(os.totalmem() /1024 / 1024 / 1024) + "GB") ; 
// console.log((Math.round(os.freemem() /1024 / 1024 / 1024) / Math.round(os.totalmem() /1024 / 1024 / 1024) ) * 100 + "%")
// console.log(os.version()) ; 

// const os = require('os');


// const freeMemGB = os.freemem() / 1024 ** 3;
// const totalMemGB = os.totalmem() / 1024 ** 3 ;



// const roundedFreeMem = Math.round(freeMemGB * 100) / 100;
// const roundedTotalMem = Math.round(totalMemGB * 100) / 100;

// const filledPercentage = ((roundedTotalMem - roundedFreeMem) / roundedTotalMem) * 100;

// console.log(`Free Memory: ${roundedFreeMem} GB`);
// console.log(`Total Memory: ${roundedTotalMem} GB`);
// console.log(`Percentage of RAM Filled: ${Math.round(filledPercentage * 100) / 100}%`);
// console.log(`OS Version: ${os.version()}`);
// console.log(os.cpus())


// console.log(os.)




// console.log(document) // only in browser
// console.log(window)   //

//settimeout , setInterval 

// console.log(globalThis.setTimeout) // only in nodejs . 


