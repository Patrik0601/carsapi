import express from 'express'
import * as carsControls from '../controllers/carsControllers.js'

const router = express.Router()

router.get('/cars', carsControls.getAllCars)

router.get('/cars/:id', carsControls.getCars)

router.post('/cars', carsControls.createCar)

router.put('/cars/:id', carsControls.updateCar)

router.delete('/cars/:id', carsControls.deleteCar)

export default router