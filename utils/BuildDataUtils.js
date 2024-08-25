export const buildAppointmentData = ({ date, doctorId, pacientId }) => ({
    date,
    doctorId,
    pacientId,
});

export const buildPacientData = ({ pacientName, birthDate, email, phone }) => ({
    pacientName,
    birthDate,
    email,
    phone,
});

export const buildPrescriptionData = ({ date, appointmentId, medicine, dosage, instructions }) => ({
    date,
    appointmentId,
    medicine,
    dosage,
    instructions,
});

export const buildDoctorData = ({ doctorId, doctorName, login, password, email, medicalSpecialty, medicalRegistration, phone }) => ({
    doctorId,
    doctorName,
    login,
    password,
    email,
    medicalSpecialty,
    medicalRegistration,
    phone,
});