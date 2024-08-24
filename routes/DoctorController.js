import { express } from "express";
import DoctorService from "../services/DoctorService.js";
import { buildDoctorData } from "../utils/BuildDataUtils.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { errorHandler } from "../utils/errorHandler.js";

let router = express.Router();

router.get('/doctors', asyncHandler(async (req, res) => {
    const doctors = await DoctorService.getAllDoctors();
    res.json(doctors);
}));

router.get('/doctors/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const doctor = await DoctorService.getDoctor(id);
    if (doctor) {
        res.json(doctor);
    } else {
        res.status(404).json({ error: "Doctor not found" });
    }
}));

router.post('/doctors', asyncHandler(async (req, res) => {
    const data = req.body;
    const doctor = await DoctorService.saveDoctor(buildDoctorData(data));
    res.status(201).json(doctor);
}));

router.put('/doctors/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updatedDoctor = await DoctorService.updateDoctor(id, buildDoctorData(data));
    if (updatedDoctor) {
        res.json(updatedDoctor);
    } else {
        res.status(404).json({ error: "Doctor not found" });
    }
}));

router.delete('/doctors/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedDoctor = await DoctorService.deleteDoctor(id);
    if (deletedDoctor) {
        res.json(deletedDoctor);
    } else {
        res.status(404).json({ error: "Doctor not found" });
    }
}));

router.get('/doctors/login/:login', asyncHandler(async (req, res) => {
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