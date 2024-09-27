const http = require("http")
const url = require("url")
const fs = require("fs")
const fsAsync = require('fs').promises

const fileUtama = fs.readFileSync("./txt/index.txt", "utf-8")
console.log(fileUtama)


const server = http.createServer((req, res) => {
    console.log(req)
    const pathUrl = req.url

    if(pathUrl == "/yogi") {
        res.end("INI TUGAS YOGI")
    }else if (pathUrl === "/") {
        res.end("Hello team")
    } else {
        res.end("NOT FOUND!!")
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Aplikasi jalan diport!!")
})

async function reWriteFromZall(filepath, content) {
    try {
        const reWriteContent = await fsAsync.readFile('filepath',content) 
        console.log("nulis ulang file")
    } catch (error) {
        console.log(error)
    }
}

reWriteFromZall("./txt/index.txt","coba coba")
console.log(fileUtama)

async function bacaSuratCinta() {
    try {
        const bacaSuratCinta = await fs.readFile('./index.txt', "utf-8") 
        console.log(`ini surat cinta ${bacaSuratCinta}`)
    } catch (error) {
        console.log(error)
    }
}