import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//we will get data from various servers in different format that's why we put some middleware as a security practice .

// express.json({}) , .json() means that it is accepting json data as well .
app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({extended: true, limit: "16kb"}))
// extended means we can give objects inside object which is nested object.

app.use(express.static("public"))

app.use(cookieParser())

export { app }