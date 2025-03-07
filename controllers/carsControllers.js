import cars from '../data/cars.js'

export const getAllCars = (req, res) => {
    res.status(200).json(cars)
}

export const getCars = (req, res) => {
    const id = req.params.id
    if(id < 0 || id >= cars.length){
        return res.status(404).json({message: 'Car not found'})
    }
    res.status(200).json(cars)
}

export const createCar = (req, res) => {
    const {brand, model, year} = req.body
    if(!brand || !model || !year){
        return res.status(404).json({message: 'Missing data'})
    }
    const newCar = {brand, model, year}
    cars.push(newCar)
    res.status(201).json(newCar)
}

export const updateCar = (req, res) => {
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
}

export const deleteCar = (req, res) => {
    const id = req.params.id
    if(id < 0 || id >= cars.length){
        return res.status(404).json({message: 'Car not found'})
    }
    cars.splice(id, 1)
    res.status(200).json({message: 'Deleted successful'})
}