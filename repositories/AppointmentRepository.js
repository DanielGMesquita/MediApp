import { Appointment } from "../models/Appointment.js"
import { buildAppointmentData } from "../utils/BuildDataUtils.js"

const getAllAppointments = async () => {
    return await Appointment.find();
}

const getAppointment = async (id) => {
    try {
        return await Appointment.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const saveAppointment = async (data) => {
    try {
        const prescription = new Appointment(buildAppointmentData(data));
        return await prescription.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateAppointment = async (id, data) => {
    try {
        return await Appointment.findByIdAndUpdate(id, buildAppointmentData(data), {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

const deleteAppointment = async (id) => {
    try {
        return await Appointment.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);
    }
}

const appointmentRepository = {
    getAllAppointments,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment
}

export default appointmentRepository;