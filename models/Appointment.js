import mongoose from "mongoose";
import Doctor from "./Doctor.js";
import Pacient from "./Pacient.js";
import { validateId, idValidationMessage } from './utils/validators.js';

const Schema = mongoose.Schema;

const appointmentSchema = new Schema ({
    date: {
        type: Date,
        required: [true, 'Appointment date is required'],
    },
    doctorId: {
        type: String,
        required: [true, 'Doctor ID is required'],
        validate: {
            validator: function (v) {
                return validateId(v, mongoose, Doctor);
            },
            message: idValidationMessage,
        }
    },
    pacientId: {
        type: String,
        required: [true, 'Pacient ID is required'],
        validate: {
            validator: function (v) {
                return validateId(v, mongoose, Pacient);
            },
            message: idValidationMessage,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const appointment = mongoose.model('Appointment', appointmentSchema);

export default appointment;