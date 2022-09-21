const http = require('http')
const mongoClient = require('mongodb').MongoClient()

const URL = "mongodb+srv://zubaer:abujubaer1@cluster0.iionytb.mongodb.net/test"

const server = http.createServer((req,res)=>{
  res.writeHead(200)
  res.end("hello node js")
})



server.listen(5000,()=>console.log('server running in 5000'))