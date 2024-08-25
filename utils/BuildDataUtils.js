export const buildAppointmentData = ({ date, doctorId, pacientId }) => ({
    date,
    doctorId,
    pacientId,
});

export const buildPacientData = ({ name, birthDate, email, phone }) => ({
    name,
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

export const buildDoctorData = ({ name, login, password, email, medicalSpecialty, medicalRegistration, phone }) => ({
    name,
    login,
    password,
    email,
    medicalSpecialty,
    medicalRegistration,
    phone,
});