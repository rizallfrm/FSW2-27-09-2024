// const test = "Hello FSW-2"

// console.log(test)

// const http = require ("http")
const fs = require("fs").promises
const fsSync = require("fs")

let text = fsSync.readFileSync('./txt/index.txt', "utf-8")
console.log(`ini baris 9: ${text}`)

// const feedback = "iya bang!"
// // const writeResult = fs.writeFileSync("./txt/balasan.txt", feedback)
// console.log(writeResult)

// menimpa isi konten sebelumnya
fsSync.writeFileSync("./txt/index.txt", "ketimpa gak cinta kita part4?")

// ini async

text = fs.readFileSync("./txt/index.txt", "utf-8", (err, data) => {
    console.log(`ini baris 17 : ${data}`)
})


console.log(`ini baris 20 : ${text}`)