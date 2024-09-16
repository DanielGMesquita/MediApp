import mongoose from 'mongoose';
import { validatePhone, phoneValidationMessage } from '../utils/Validators.js';

const Schema = mongoose.Schema;

const pacientSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'Pacient name is required'],
    },
    birthDate: {
        type: Date,
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

const pacient = mongoose.model('Pacient', pacientSchema);

export default pacient;