import { Types, Document, Schema, model } from 'mongoose';

export interface IChat extends Document {
  _id: Types.ObjectId;
  user: Types.ObjectId;    
  professional: Types.ObjectId; 
  sessionStartedAt: Date;
  sessionEndsAt?: Date;
  isPaid: boolean;
  status: 'pending' | 'active' | 'expired' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

const ChatSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  professional: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sessionStartedAt: { type: Date, default: Date.now },
  sessionEndsAt: { type: Date },
  isPaid: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ['pending', 'active', 'expired', 'completed'],
    default: 'pending'
  }
}, { timestamps: true });

// Automatically set sessionEndsAt when chat is created and paid
ChatSchema.pre('save', function(next) {
  if (this.isModified('isPaid') && this.isPaid && !this.sessionEndsAt) {
    this.sessionStartedAt = new Date();
    this.sessionEndsAt = new Date(this.sessionStartedAt.getTime() + 35 * 60000);
    this.status = 'active';
  }
  next();
});
const Chat = model<IChat>('Chat', ChatSchema);
export default Chat;
