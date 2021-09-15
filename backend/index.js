import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50, //max # who can connect at one time
        wtimeoutMS: 2500, //request times out after 2500 ms
        useNewUrlParser: true }
    )
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async clint => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        }) //starting web server after db is connected
    })