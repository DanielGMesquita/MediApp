import Doctor from "../models/Doctor.js"
import { buildDoctorData } from "../utils/BuildDataUtils.js"

const getAllDoctors = async () => {
    return await Doctor.find();
}

const getDoctor = async (id) => {
    try {
        return await Doctor.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const saveDoctor = async (data) => {
    try {
        const doctor = new Doctor(buildDoctorData(data));
        return await doctor.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateDoctor = async (id, data) => {
    try{
        return await Doctor.findByIdAndUpdate(id, buildDoctorData(data), { new: true });
    }catch(error){
        throw new Error(error);
    }

}

const deleteDoctor = async (id) => {
    try {
        return await Doctor.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);
    }
}

const getDoctorByLogin = async (login) => {
    try {
        return await Doctor.findOne({"login": login});
    } catch (error) {
        throw new Error(error);
    }
}

const doctorRepository = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorByLogin
}

export default doctorRepository;