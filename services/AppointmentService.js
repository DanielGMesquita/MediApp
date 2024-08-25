import AppointmentRepository from "../repositories/AppointmentRepository.js";
import { buildAppointmentData } from "../utils/BuildDataUtils.js"

const getAllAppointments = async () => {
    return AppointmentRepository.getAllAppointments();
};

const getAppointment = async (id) => {
    return AppointmentRepository.getAppointment(id);
};

const saveAppointment = async (data) => {
    return AppointmentRepository.saveAppointment(buildAppointmentData(data));
};

const updateAppointment = async (id, data) => {
    return AppointmentRepository.updateAppointment(id, buildAppointmentData(data));
};

const deleteAppointment = async (id) => {
    return AppointmentRepository.deleteAppointment(id);
};

const appointmentService = {
    getAllAppointments,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment
}

export default appointmentService;