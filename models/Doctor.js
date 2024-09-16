import mongoose from 'mongoose';
import { validatePhone, phoneValidationMessage } from '../utils/Validators.js';

const Schema = mongoose.Schema;

const doctorSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'Doctor name is required.']
    },
    login: {
        type: String,
        required: [true, 'Login is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    medicalSpecialty: {
        type: String,
        required: [true, 'Medical specialty is required'],
    },
    medicalRegistration: {
        type: String,
        required: [true, 'Medical registration is required'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        validate: {
            validator: validatePhone,
            message: phoneValidationMessage,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const doctor = mongoose.model('Doctor', doctorSchema);

export default doctor;