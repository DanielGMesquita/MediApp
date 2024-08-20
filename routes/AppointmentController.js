import { express } from "express";
import AppointmentService from "../services/AppointmentService.js";

let router = express.Router();

router.get('/appointments', async(req, res) => {
    try {
        const appointments = await AppointmentService.getAllAppointments();
        res.send(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.get('/appointments/getAppointment/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const appointment = await AppointmentService.getAppointment(id);
        res.send(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.post('/appointments/saveAppointment', async(req, res) => {
    const {date, doctorId, pacientId} = req.body;
    try {
        const appointment = await AppointmentService.saveAppointment(date, doctorId, pacientId);
        res.send(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.put('/appointments/:id', async(req, res) => {
    const {id} = req.params;
    const {date, doctorId, pacientId} = req.body;
    try {
        const appointment = await AppointmentService.updateAppointment(id, {date, doctorId, pacientId});
        res.send(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.delete('/appointments/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const appointment = await AppointmentService.deleteAppointment(id);
        res.send(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

export default router;