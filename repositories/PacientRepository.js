import Pacient from "../models/Pacient.js"
import { buildPacientData } from "../utils/BuildDataUtils.js"

const getAllPacients = async () => {
    return await Pacient.find();
}

const getPacient = async (id) => {
    try {
        return await Pacient.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const savePacient = async (data) => {
    try {
        const pacient = new Pacient(buildPacientData(data));
        return await pacient.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updatePacient = async (id, data) => {
    try {
        return await Pacient.findByIdAndUpdate(id, buildPacientData(data), {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

const deletePacient = async (id) => {
    try {
        return await Pacient.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);
    }
}

const pacientRepository = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default pacientRepository;