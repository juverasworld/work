import { Schema, model, Types, InferSchemaType } from "mongoose";

const WalletSchema = new Schema({
  userId: { 
    type: Types.ObjectId, 
    ref: "User",
    required: true,
    unique: true,
  },
  balance: { 
    type: Number, 
    default: 0, 
},
transactions: [{
    type: {
        type: String,
        enum: ["DEPOSIT", "WITHDRAWAL", "TRANSFER"],
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    recipient: {
        type: Types.ObjectId,
        ref: "User",
        default: null,
    },
    date: {
        type: Date,
        default: Date.now
    },
    time: {
        type: String,
        default: new Date().toLocaleTimeString(),
    }
}]
},{
    timestamps: true
});

export type IWallet = InferSchemaType<typeof WalletSchema>;
export default model<IWallet>("Wallet", WalletSchema);