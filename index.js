import express from "express"
import cors from "cors"
import router from "./routes/router.js"
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`Server is running in port ${process.env.PORT}`)
})