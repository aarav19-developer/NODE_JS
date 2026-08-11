console.log("Start");

setTimeout(() => {
    console.log(one())
}, 3000);

console.log("Mid")

function one() {
    console.log(name);

    var name = "AARAVS"
    console.log(name);

    three()
}

setTimeout(() => {
    two()
}, 1000);

function two(){
    console.log("error")

    let id = 22
    console.log(id);

    console.log(three())

    return 2
}

function three() {
    return "Hello from S"
}

setTimeout(() => {
    console.log(three())
}, 10000);

console.log("End")