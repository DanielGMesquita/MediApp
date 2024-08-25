import express from "express";
import bcrypt from 'bcrypt';
import DoctorService from "../services/DoctorService.js";
import { buildDoctorData } from "../utils/BuildDataUtils.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { errorHandler } from "../utils/ErrorHandler.js";

let router = express.Router();

router.get('/doctors', asyncHandler(async (req, res) => {
    const doctors = await DoctorService.getAllDoctors();
    res.json(doctors);
}));

router.get('/doctors/getDoctor/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const doctor = await DoctorService.getDoctor(id);
    if (doctor) {
        res.json(doctor);
    } else {
        res.status(404).json({ error: "Doctor not found" });
    }
}));

router.post('/doctors/createDoctor', asyncHandler(async (req, res) => {
    const data = req.body;

    data.password = await bcrypt.hash(data.password, 10);

    const doctor = await DoctorService.saveDoctor(buildDoctorData(data));
    res.status(201).json(doctor);
}));

router.put('/doctors/updateDoctor/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updatedDoctor = await DoctorService.updateDoctor(id, buildDoctorData(data));
    if (updatedDoctor) {
        res.json(updatedDoctor);
    } else {
        res.status(404).json({ error: "Doctor not found" });
    }
}));

router.delete('/doctors/deleteDoctor/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedDoctor = await DoctorService.deleteDoctor(id);
    if (deletedDoctor) {
        res.json(deletedDoctor);
    } else {
        res.status(404).json({ error: "Doctor not found" });
    }
}));

router.get('/doctors/checkDoctorLogin/:login', asyncHandler(async (req, res) => {
    const { login } = req.params;
    const doctor = await DoctorService.getDoctorByLogin(login);
    if (doctor) {
        res.json(doctor);
    } else {
        res.status(404).json({ error: "Doctor not found" });
    }
}));

router.use(errorHandler);

export default router;