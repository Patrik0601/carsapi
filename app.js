import express from "express";
import carsRoutes from './routes/carsRoutes.js'

const app = express()

app.use(express.json())
app.use('/', carsRoutes)


app.listen(3000, ()=>{
    console.log('Server runs on port 3000')
})