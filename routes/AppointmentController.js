import { express } from "express";
import AppointmentService from "../services/AppointmentService.js";
import { buildAppointmentData } from "../utils/BuildDataUtils.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { errorHandler } from "../utils/errorHandler.js";

let router = express.Router();

router.get('/appointments', asyncHandler(async (req, res) => {
    const appointments = await AppointmentService.getAllAppointments();
    res.json(appointments);
}));

router.get('/appointments/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const appointment = await AppointmentService.getAppointment(id);
    if (appointment) {
        res.json(appointment);
    } else {
        res.status(404).json({ error: "Appointment not found" });
    }
}));

router.post('/appointments', asyncHandler(async (req, res) => {
    const data = req.body;
    const appointment = await AppointmentService.saveAppointment(buildAppointmentData(data));
    res.status(201).json(appointment);
}));

router.put('/appointments/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updatedAppointment = await AppointmentService.updateAppointment(id, buildAppointmentData(data));
    if (updatedAppointment) {
        res.json(updatedAppointment);
    } else {
        res.status(404).json({ error: "Appointment not found" });
    }
}));

router.delete('/appointments/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedAppointment = await AppointmentService.deleteAppointment(id);
    if (deletedAppointment) {
        res.json(deletedAppointment);
    } else {
        res.status(404).json({ error: "Appointment not found" });
    }
}));

router.use(errorHandler);

export default router;