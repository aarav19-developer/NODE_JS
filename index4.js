
// 4. Crypto Module:

const crypto = require("crypto");

// const key = "Dear Zindagi"

// const hashData = crypto.createHash("sha256");
// console.log(hashData)

// const data = hashData.update(key);
// console.log(data);

// const ans = data.digest("base64") // we can use hex, octal and many more.
// console.log(ans)

// for(let i=0;i<10;i++){
// const ans1 = crypto.randomInt(1,7)
// console.log(ans1)

// const ans2 = crypto.randomUUID();
// console.log(ans2)}

// 5. fs module:

// Read Operation

const fs = require("fs");
// fs.readFile("./index4.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Something went wrong")
//     }else{
//         console.log(data)
//     }
// });

const data = fs.readFileSync("./index4.txt","utf-8");
console.log(data)

// Write Operation

//  fs.writeFile("./index4.txt", "Hello Dear Zindagi", (err)=>{
//     if(err){
//         console.log("Something went wrong");
//     }else{
//         console.log("File write successfully")
//     }
//  })

//  fs.writeFileSync("./index4.txt", "Love you Zindgi");
//  console.log("File Write Successfully")

// Update Operations:

fs.appendFile("./index4.txt", "How are you? ", (err)=>{
    if(err){
        console.log("Something went wrong")
    }else{
        console.log("File updates successfully")
    }
})

// fs.appendFileSync("./index4.txt", "\n Coming Soon");
// console.log("File updated successfully");

// Rename Operation:

fs.rename("./index4.txt", "./index4_1.txt", (err)=>{
    if(err){
        console.log("Something went wrong")
    }else{
        console.log("File rename successfully")
    }
})

// Delete Operation:

fs.unlink("./index4_1", (err)=>{
    if(err){
        console.log("Something went wrong")
    }else{
        console.log("File deleted Successfully")
    }
})