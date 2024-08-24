const buildAppointmentData = ({date, doctorId, pacientId}) => ({
    date,
    doctorId,
    pacientId
});

const buildPacientData = ({pacientName, birthDate, email, phone}) => ({
    pacientName,
    birthDate,
    email,
    phone
});

const buildPrescriptionData = ({date, appointmentId, medicine, dosage, instructions}) => ({
    date,
    appointmentId,
    medicine,
    dosage,
    instructions
});

const buildDoctorData = ({doctorId, doctorName, login, password, email, medicalSpecialty, medicalRegistration, phone}) => ({
    doctorId,
    doctorName,
    login,
    password,
    email,
    medicalRegistration,
    medicalSpecialty,
    phone
});

const buildDataUtils = {
    buildDoctorData,
    buildAppointmentData,
    buildPacientData,
    buildPrescriptionData
}

export default buildDataUtils;