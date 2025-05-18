import { Schema, model, Types, Document } from "mongoose";

export type MessageType = "text" | "image" | "audio";
export type MessageStatus = "sent" | "received" | "read";

export interface IMessage extends Document {
  _id: Types.ObjectId;
  chat: Types.ObjectId;
  sender: Types.ObjectId;
  receiver: Types.ObjectId;
  content?: string;
  type: MessageType;
  status: MessageStatus;
  sentAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema(
  {
    chat: { type: Schema.Types.ObjectId, ref: "Chat", required: true },
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String },
    type: { type: String, enum: ["text", "image", "audio"], default: "text" },
    status: {
      type: String,
      enum: ["sent", "received", "read"],
      default: "sent",
    },
    sentAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
const Message = model<IMessage>("Message", MessageSchema);
export default Message;
