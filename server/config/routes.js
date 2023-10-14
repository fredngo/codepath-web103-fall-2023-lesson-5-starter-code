import express from 'express'

// import SalonController from '../controllers/salon.js'
import AppointmentsController from '../controllers/appointments.js'
import HairStylesController from '../controllers/hairstyles.js'
import HairStylistsController from '../controllers/hairstylists.js'
import UsersController from '../controllers/users.js'

const router = express.Router()

// salon - add route to get salon info

// appointments
router.get('/appointments', AppointmentsController.getAppointments)
router.get('/appointments/:id', AppointmentsController.getAppointmentsById)

// hair styles
router.get('/hairstyles', HairStylesController.getHairStyles)
router.get('/hairstyles/:id', HairStylesController.getHairStylesById)

// hair stylists
router.get('/hairstylists', HairStylistsController.getHairStylists)
router.get('/hairstylists/:id', HairStylistsController.getHairStylistById)

// users
router.get('/users', UsersController.getUsers)
router.get('/users/:id', UsersController.getUserById)

// users - add route to get user appointments


export default router