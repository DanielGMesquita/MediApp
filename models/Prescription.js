import { mongoose } from module;

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema ({
    date: {
        type: Date,
    },
    appointmentId: {
        type: Number,
        required: [true, 'Appointment ID is required'],
    },
    medicine: {
        type: String,
        required: [true, 'Medicine name is required'],
    },
    dosage: {
        type: String,
        required: [true, 'Dosage is required'],
    },
    instructions: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const prescription = mongoose.model('Prescription', prescriptionSchema);

export default prescription;