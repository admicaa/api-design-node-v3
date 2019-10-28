import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true,

    },
    status: {
        type: String,
        required: true,
        enum: ["active", "complete", "pastdue"],
        default: "active"
    },
    notes: String,
    due: Date,
    createdBy: {
        required: true,
        ref: "user",
        type: mongoose.SchemaTypes.ObjectId
    },
    list: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "list",
        required: true,
    },

}, { timestamps: true })
itemSchema.index({ list: 1, name: 1 }, { unique: true });
export const Item = mongoose.model('item', itemSchema)
