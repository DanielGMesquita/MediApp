import { Prescription } from "../models/Prescription.js"
import { buildPrescriptionData } from "../utils/BuildDataUtils.js"

const getAllPrescriptions = async () => {
    return await Prescription.find();
}

const getPrescription = async (id) => {
    try {
        return await Prescription.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const savePrescription = async (data) => {
    try {
        const prescription = new Prescription(buildPrescriptionData(data));
        return await prescription.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updatePrescription = async (id, data) => {
    try {
        return await Prescription.findByIdAndUpdate(id, buildPrescriptionData(data), {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

const deletePrescription = async (id) => {
    try {
        return await Prescription.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);
    }
}

const prescriptionRepository = {
    getAllPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription
}

export default prescriptionRepository;