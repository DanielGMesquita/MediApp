import express from "express";
import AppointmentService from "../services/AppointmentService.js";
import { buildAppointmentData } from "../utils/BuildDataUtils.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { errorHandler } from "../utils/ErrorHandler.js";

let router = express.Router();

const notFoundErrorMessage = 'Appointment not found';

router.get('/appointments', asyncHandler(async (req, res) => {
    const appointments = await AppointmentService.getAllAppointments();
    res.json(appointments);
}));

router.get('/appointments/getAppointment/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const appointment = await AppointmentService.getAppointment(id);
    if (appointment) {
        res.json(appointment);
    } else {
        res.status(404).json({ error: notFoundErrorMessage });
    }
}));

router.post('/appointments/createAppointment', asyncHandler(async (req, res) => {
    const data = req.body;
    const appointment = await AppointmentService.saveAppointment(buildAppointmentData(data));
    res.status(201).json(appointment);
}));

router.put('/appointments/updateAppointment/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updatedAppointment = await AppointmentService.updateAppointment(id, buildAppointmentData(data));
    if (updatedAppointment) {
        res.json(updatedAppointment);
    } else {
        res.status(404).json({ error: notFoundErrorMessage });
    }
}));

router.delete('/appointments/deleteAppointment/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedAppointment = await AppointmentService.deleteAppointment(id);
    if (deletedAppointment) {
        res.json(deletedAppointment);
    } else {
        res.status(404).json({ error: notFoundErrorMessage });
    }
}));

router.put('/appointments/rescheduleAppointment/:id', async(req, res) => {
    const {id} = req.params;
    const {date} = req.body;
    let appointment = await AppointmentService.getAppointment(id);

    if (!appointment) {
        return res.status(404).json({ error: notFoundErrorMessage })
    }

    const rescheduleAppointment = await AppointmentService.updateAppointment(id, {date});

    res.json(rescheduleAppointment);
});

router.use(errorHandler);

export default router;