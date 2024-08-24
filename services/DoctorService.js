import DoctorRepository from "../repositories/DoctorRepository";
import { buildDoctorData } from "../utils/BuildDataUtils.js"

const getAllDoctors = async () => {
    return DoctorRepository.getAllDoctors();
};

const getDoctor = async (id) => {
    return DoctorRepository.getDoctor(id);
};

const saveDoctor = async (data) => {
    return DoctorRepository.saveDoctor(buildDoctorData(data));
};

const updateDoctor = async (id, data) => {
    return DoctorRepository.updateDoctor(id, buildDoctorData(data));
};

const deleteDoctor = async (id) => {
    return DoctorRepository.deleteDoctor(id);
};

const getDoctorByLogin = async (login) => {
    return DoctorRepository.getDoctorByLogin(login);
};

const doctorService = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorByLogin
}

export default doctorService;