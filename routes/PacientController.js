import { express } from "express";
import PacientService from "../services/PacientService.js";
import { buildPacientData } from "../utils/BuildDataUtils.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { errorHandler } from "../utils/errorHandler.js";

let router = express.Router();

router.get('/pacients', asyncHandler(async (req, res) => {
    const pacients = await PacientService.getAllPacients();
    res.json(pacients);
}));

router.get('/pacients/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const pacient = await PacientService.getPacient(id);
    if (pacient) {
        res.json(pacient);
    } else {
        res.status(404).json({ error: "Pacient not found" });
    }
}));

router.post('/pacients', asyncHandler(async (req, res) => {
    const data = req.body;
    const pacient = await PacientService.savePacient(buildPacientData(data));
    res.status(201).json(pacient);
}));

router.put('/pacients/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updatedPacient = await PacientService.updatePacient(id, buildPacientData(data));
    if (updatedPacient) {
        res.json(updatedPacient);
    } else {
        res.status(404).json({ error: "Pacient not found" });
    }
}));

router.delete('/pacients/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedPacient = await PacientService.deletePacient(id);
    if (deletedPacient) {
        res.json(deletedPacient);
    } else {
        res.status(404).json({ error: "Pacient not found" });
    }
}));

router.use(errorHandler);

export default router;