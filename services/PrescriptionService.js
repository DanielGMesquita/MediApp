import PrescriptionRepository from "../repositories/PrescriptionRepository.js";
import { buildPrescriptionData } from "../utils/BuildDataUtils.js"

const getAllPrescriptions = async () => {
    return PrescriptionRepository.getAllPrescriptions();
};

const getPrescription = async (id) => {
    return PrescriptionRepository.getPrescription(id);
};

const savePrescription = async (data) => {
    return PrescriptionRepository.savePrescription(buildPrescriptionData(data));
};

const updatePrescription = async (id, data) => {
    return PrescriptionRepository.updatePrescription(id, buildPrescriptionData(data));
};

const deletePrescription = async (id) => {
    return PrescriptionRepository.deletePrescription(id);
};

const prescriptionService = {
    getAllPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription
}

export default prescriptionService;