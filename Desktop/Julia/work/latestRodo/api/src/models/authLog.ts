import { model, Schema } from "mongoose";

const AuthLogSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    ipAddress:{
        type: String,
        required: true
    },
    userAgent: {
        type: String,
        required: true
    },
    success: {
        type: Boolean,
        required: true
    },
    failureReason: {
        type: String,
        default: null
    },
}, { timestamps: true });

export default model("AuthLog", AuthLogSchema);
