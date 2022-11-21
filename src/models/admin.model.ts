import { Schema, model } from 'mongoose';

const AdminSchema = new Schema(
    {
        email: { type: String, required: false},
        firstName: { type: String, required: false },
        lastName: { type: String, required: false },
        password: { type: String, required: false },
        file: { type: String, required: false, default: null },
        fileName: { type: String, required: false, default: '' },
        isBlocked: { type: Boolean, default: false },
        isDeleted: { type: Boolean, default: false },
    }, { timestamps: true, versionKey: false }
)
export default model('admin', AdminSchema)