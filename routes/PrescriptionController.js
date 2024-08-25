import express from "express";
import PresctiptionService from "../services/PrescriptionService.js";
import { buildPrescriptionData } from "../utils/BuildDataUtils.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { errorHandler } from "../utils/ErrorHandler.js";

let router = express.Router();

router.get('/presctiptions', asyncHandler(async (req, res) => {
    const presctiptions = await PresctiptionService.getAllPresctiptions();
    res.json(presctiptions);
}));

router.get('/presctiptions/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const presctiption = await PresctiptionService.getPresctiption(id);
    if (presctiption) {
        res.json(presctiption);
    } else {
        res.status(404).json({ error: "Presctiption not found" });
    }
}));

router.post('/presctiptions', asyncHandler(async (req, res) => {
    const data = req.body;
    const presctiption = await PresctiptionService.savePresctiption(buildPrescriptionData(data));
    res.status(201).json(presctiption);
}));

router.put('/presctiptions/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updatedPresctiption = await PresctiptionService.updatePresctiption(id, buildPrescriptionData(data));
    if (updatedPresctiption) {
        res.json(updatedPresctiption);
    } else {
        res.status(404).json({ error: "Presctiption not found" });
    }
}));

router.delete('/presctiptions/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedPresctiption = await PresctiptionService.deletePresctiption(id);
    if (deletedPresctiption) {
        res.json(deletedPresctiption);
    } else {
        res.status(404).json({ error: "Presctiption not found" });
    }
}));

router.use(errorHandler);

export default router;