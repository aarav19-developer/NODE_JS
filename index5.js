// // 6. Process Module:

// const Process = require("process")
// // console.log(process, typeof process)

// const userIp = process.argv;
// console.log(userIp)

// const ops = userIp[2];
// const a = +userIp[3]
// const b = +userIp[4];

// function add(x,y){
//     console.log(x+y)
// }

// function sub(x,y){
//     console.log(x-y)
// }

// if(ops == 'add'){
//     add(a,b);

// }else{
//     sub(a-b)
// }



// SERVER CREATION:

// STEP 1: Import

const http = require("http");

// STEP 2: Create Server

const server = http.createServer((request, response)=>{
    response.end("Welcome  to my Server")
});

// STEP 3: Listen

server.listen(418); // terminal m blink show hoga.


// STEP 1: Import

// const http = require("http");

// STEP 2: Create Server

const server = http.createServer((request, response)=>{
    response.end("Welcome  to my Server")
});

// STEP 3: Listen

server.listen(418,()=>{
    console.log("Start ho gya h server")
});


// WITH ROUTING: 

// STEP 1: Import

// const http = require("http");

// STEP 2: Create Server

const server = http.createServer((request, response)=>{
    if(request.url == "/"){
        request.end("Home Page")
    }else if(request.url == "/data"){
        request.end("Data Page")
    }else if(request.url == "/about"){
        request.end("About Page")
    }else if(request.url == "/contact"){
        request.end("Contact")
    }else{
        request.end("Bhagg jaa Idher see")
    }
});

// STEP 3: Listen

server.listen(418,()=>{
    console.log("Server Start ho gya h")
});



// Data fetching from Json placeholder: 

// STEP 1: Import

// const http = require("http");
const fs = require("fs")

// STEP 2: Create Server

const server = http.createServer((request, response)=>{
    if(request.url == "/"){
        request.end("Home Page")
    }else if(request.url == "/data"){
        const data = fs.readFileSync("./index5_1.txt","utf-8")
        request.end(data)
    }else if(request.url == "/about"){
        request.end("About Page")
    }else if(request.url == "/contact"){
        request.end("Contact")
    }else{
        request.end("Bhagg jaa Idher see")
    }
});

// STEP 3: Listen

server.listen(418,()=>{
    console.log("Server Start ho gya h")
});


// NOTE:  Web bowser by default get request send krta h




