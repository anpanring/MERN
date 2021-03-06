import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express() //Server

//Middleware
app.use(cors())
app.use(express.json())

app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

//connects to database and starts server
export default app