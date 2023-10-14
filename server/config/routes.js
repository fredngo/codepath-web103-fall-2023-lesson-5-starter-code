import express from 'express'

import AppointmentsController from '../controllers/appointments.js'
import HairStylesController from '../controllers/hairstyles.js'
import HairStylistsController from '../controllers/hairstylists.js'
import UsersController from '../controllers/users.js'
import PeopleController from '../controllers/people.js'

const router = express.Router()

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
router.get('/users/:id/appointments', UsersController.getUserAppointments)

// people - add route to get people info
router.get('/people', PeopleController.getPeople)

export default router
