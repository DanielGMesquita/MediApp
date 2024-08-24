import PacientRepository from "../repositories/PacientRepository";
import { buildPacientData } from "../utils/BuildDataUtils.js"

const getAllPacients = async () => {
    return PacientRepository.getAllPacients();
};

const getPacient = async (id) => {
    return PacientRepository.getPacient(id);
};

const savePacient = async (data) => {
    return PacientRepository.savePacient(buildPacientData(data));
};

const updatePacient = async (id, data) => {
    return PacientRepository.updatePacient(id, buildPacientData(data));
};

const deletePacient = async (id) => {
    return PacientRepository.deletePacient(id);
};

const pacientService = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default pacientService;