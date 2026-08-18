const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        req.end("Home Page")
    }
    else if(req.url == "/about"){
        req.end("About Page")
    }
    else if(req.url == "/add" && req.method == "POST"){

        // const data = req.body;
        // console.log(data)

        let str = " ";

        req.on("data",(chunk)=>{
            str+= chunk
        })
        req.on("end",()=>{
            console.log(str)
        })
        req.end("Created Page")
    }
    else if(req.url == "/Who we are"){
        req.end("Us Page")
    }else{
        req.end("Not Found")
    }
})

server.listen(8080, ()=>{
    console.log("Server is working")
})

function greet(){
    console.log("Hello")
}

module.exports = greet;