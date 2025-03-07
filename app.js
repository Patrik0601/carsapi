import express from "express";
import cars from './data/cars.js'

const app = express()

app.use(express.json())

app.get('/cars', (req, res) => {
    res.status(200).json(cars)
})

app.get('/cars/:id', (req, res) => {
    const id = req.params.id
    if(id < 0 || id >= cars.length){
        return res.status(404).json({message: 'Car not found'})
    }
    res.status(200).json(cars[id])
})

app.post('/cars', (req, res) => {
    const {brand, model, year} = req.body
    if(!brand || !model || !year){
        return res.status(404).json({message: 'Missing data'})
    }
    const newCar = {brand, model, year}
    cars.push(newCar)
    res.status(201).json(newCar)
})

app.put('/cars/:id', (req, res) => {
    const id = req.params.id
    if(id < 0 || id >= cars.length){
        return res.status(404).json({message: 'Car not found'})
    }
    const {brand, model, year} = req.body
    if(!brand || !model || !year){
        return res.status(404).json({message: 'Missing data'})
    }
    cars[id] = {brand, model, year}
    res.status(200).json(cars[id])

})

app.delete('/cars/:id', (req, res) => {
    const id = req.params.id
    if(id < 0 || id >= cars.length){
        return res.status(404).json({message: 'Car not found'})
    }
    cars.splice(id, 1)
    res.status(200).json({message: 'Deleted successful'})
})

app.listen(3000, ()=>{
    console.log('Server runs on port 3000')
})